[instagram-private-api](../../README.md) / [index](../../modules/index.md) / TagFeed

# Class: TagFeed

[index](../../modules/index.md).TagFeed

## Hierarchy

- [`Feed`](Feed.md)<[`TagFeedResponse`](../../interfaces/index/TagFeedResponse.md), [`TagFeedResponseItemsItem`](../../interfaces/index/TagFeedResponseItemsItem.md)\>

  ↳ **`TagFeed`**

## Table of contents

### Constructors

- [constructor](TagFeed.md#constructor)

### Properties

- [attemptOptions](TagFeed.md#attemptoptions)
- [tag](TagFeed.md#tag)

### Accessors

- [items$](TagFeed.md#items$)
- [state](TagFeed.md#state)

### Methods

- [deserialize](TagFeed.md#deserialize)
- [isMoreAvailable](TagFeed.md#ismoreavailable)
- [items](TagFeed.md#items)
- [observable](TagFeed.md#observable)
- [request](TagFeed.md#request)
- [serialize](TagFeed.md#serialize)
- [toPlain](TagFeed.md#toplain)

## Constructors

### constructor

• **new TagFeed**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`IgApiClient`](IgApiClient.md) |

#### Inherited from

[Feed](Feed.md).[constructor](Feed.md#constructor)

#### Defined in

[src/core/repository.ts:7](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/repository.ts#L7)

## Properties

### attemptOptions

• **attemptOptions**: `Partial`<`AttemptOptions`<`any`\>\>

#### Inherited from

[Feed](Feed.md).[attemptOptions](Feed.md#attemptoptions)

#### Defined in

[src/core/feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L10)

___

### tag

• **tag**: `string`

#### Defined in

[src/feeds/tag.feed.ts:6](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/tag.feed.ts#L6)

## Accessors

### items$

• `get` **items$**(): `Observable`<`Item`[]\>

#### Returns

`Observable`<`Item`[]\>

#### Defined in

[src/core/feed.ts:18](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L18)

___

### state

• `set` **state**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`TagFeedResponse`](../../interfaces/index/TagFeedResponse.md) |

#### Returns

`void`

#### Defined in

[src/feeds/tag.feed.ts:10](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/tag.feed.ts#L10)

## Methods

### deserialize

▸ **deserialize**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

[Feed](Feed.md).[deserialize](Feed.md#deserialize)

#### Defined in

[src/core/feed.ts:79](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L79)

___

### isMoreAvailable

▸ **isMoreAvailable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Feed](Feed.md).[isMoreAvailable](Feed.md#ismoreavailable)

#### Defined in

[src/core/feed.ts:87](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L87)

___

### items

▸ **items**(): `Promise`<[`TagFeedResponseItemsItem`](../../interfaces/index/TagFeedResponseItemsItem.md)[]\>

#### Returns

`Promise`<[`TagFeedResponseItemsItem`](../../interfaces/index/TagFeedResponseItemsItem.md)[]\>

#### Overrides

[Feed](Feed.md).[items](Feed.md#items)

#### Defined in

[src/feeds/tag.feed.ts:27](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/tag.feed.ts#L27)

___

### observable

▸ **observable**(`semaphore?`, `attemptOptions?`): `Observable`<[`TagFeedResponseItemsItem`](../../interfaces/index/TagFeedResponseItemsItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semaphore?` | () => `Promise`<`any`\> |
| `attemptOptions?` | `Partial`<`AttemptOptions`<`any`\>\> |

#### Returns

`Observable`<[`TagFeedResponseItemsItem`](../../interfaces/index/TagFeedResponseItemsItem.md)[]\>

#### Inherited from

[Feed](Feed.md).[observable](Feed.md#observable)

#### Defined in

[src/core/feed.ts:21](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L21)

___

### request

▸ **request**(): `Promise`<[`TagFeedResponse`](../../interfaces/index/TagFeedResponse.md)\>

#### Returns

`Promise`<[`TagFeedResponse`](../../interfaces/index/TagFeedResponse.md)\>

#### Overrides

[Feed](Feed.md).[request](Feed.md#request)

#### Defined in

[src/feeds/tag.feed.ts:15](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/feeds/tag.feed.ts#L15)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[Feed](Feed.md).[serialize](Feed.md#serialize)

#### Defined in

[src/core/feed.ts:75](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L75)

___

### toPlain

▸ **toPlain**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[Feed](Feed.md).[toPlain](Feed.md#toplain)

#### Defined in

[src/core/feed.ts:83](https://github.com/Nerixyz/instagram-private-api/blob/0e0721c/src/core/feed.ts#L83)
