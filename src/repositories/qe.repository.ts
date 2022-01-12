import { Repository } from '../core/repository';

export class QeRepository extends Repository {
  public syncExperiments() {
    return this.sync(this.client.state.experiments);
  }
  public async syncLoginExperiments() {
    return this.sync(this.client.state.loginExperiments);
  }
  public async sync(experiments) {
    let data = {
      id: this.client.state.uuid,
      server_config_retrieval: 1,
    };
    data = Object.assign(data, { experiments });
    const { body } = await this.client.request.send({
      method: 'POST',
      url: '/api/v1/launcher/sync/',
      headers: {
        'X-DEVICE-ID': this.client.state.uuid,
      },
      form: this.client.request.sign(data),
    });
    return body;
  }
}
