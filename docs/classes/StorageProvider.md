[Storage SDK Reference Guide - v0.1.6](../README.md) / [Exports](../modules.md) / StorageProvider

# Class: StorageProvider

## Table of contents

### Constructors

- [constructor](StorageProvider.md#constructor)

### Methods

- [downloadDID](StorageProvider.md#downloaddid)
- [getAccess](StorageProvider.md#getaccess)
- [getDownloader](StorageProvider.md#getdownloader)
- [getUploader](StorageProvider.md#getuploader)
- [linkNft](StorageProvider.md#linknft)
- [login](StorageProvider.md#login)
- [makeMetadataURL](StorageProvider.md#makemetadataurl)
- [myFiles](StorageProvider.md#myfiles)
- [onAccountChange](StorageProvider.md#onaccountchange)
- [onNetworkChange](StorageProvider.md#onnetworkchange)
- [sharedFiles](StorageProvider.md#sharedfiles)

## Constructors

### constructor

• **new StorageProvider**(`cfg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cfg` | `Config` |

#### Defined in

[index.ts:22](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L22)

## Methods

### downloadDID

▸ **downloadDID**(`did`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:88](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L88)

___

### getAccess

▸ **getAccess**(): `Promise`<`Access`\>

#### Returns

`Promise`<`Access`\>

#### Defined in

[index.ts:101](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L101)

___

### getDownloader

▸ **getDownloader**(): `Promise`<`Downloader`\>

#### Returns

`Promise`<`Downloader`\>

#### Defined in

[index.ts:106](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L106)

___

### getUploader

▸ **getUploader**(): `Promise`<`Uploader`\>

#### Returns

`Promise`<`Uploader`\>

#### Defined in

[index.ts:96](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L96)

___

### linkNft

▸ **linkNft**(`fileId`, `tokenId`, `nftContract`, `chainId`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `tokenId` | `Number` |
| `nftContract` | `string` |
| `chainId` | `Number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[index.ts:209](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L209)

___

### login

▸ **login**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:142](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L142)

___

### makeMetadataURL

▸ **makeMetadataURL**(`title`, `description`, `did`, `file`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `description` | `string` |
| `did` | `string` |
| `file` | `File` |

#### Returns

`Promise`<`string`\>

#### Defined in

[index.ts:111](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L111)

___

### myFiles

▸ **myFiles**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[index.ts:193](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L193)

___

### onAccountChange

▸ **onAccountChange**(`accounts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:84](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L84)

___

### onNetworkChange

▸ **onNetworkChange**(`newNetwork`, `oldNetwork`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newNetwork` | `any` |
| `oldNetwork` | `any` |

#### Returns

`void`

#### Defined in

[index.ts:79](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L79)

___

### sharedFiles

▸ **sharedFiles**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[index.ts:201](https://github.com/arcana-network/storage/blob/859f4ea/src/index.ts#L201)
