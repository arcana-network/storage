[Storage SDK Reference Guide](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / StorageProvider

# Class: StorageProvider

[index](../modules/index.md).StorageProvider

## Table of contents

### Constructors

- [constructor](index.StorageProvider.md#constructor)

### Methods

- [downloadDID](index.StorageProvider.md#downloaddid)
- [getAccess](index.StorageProvider.md#getaccess)
- [getDownloader](index.StorageProvider.md#getdownloader)
- [getUploader](index.StorageProvider.md#getuploader)
- [linkNft](index.StorageProvider.md#linknft)
- [login](index.StorageProvider.md#login)
- [makeMetadataURL](index.StorageProvider.md#makemetadataurl)
- [myFiles](index.StorageProvider.md#myfiles)
- [onAccountChange](index.StorageProvider.md#onaccountchange)
- [onNetworkChange](index.StorageProvider.md#onnetworkchange)
- [sharedFiles](index.StorageProvider.md#sharedfiles)

## Constructors

### constructor

• **new StorageProvider**(`cfg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cfg` | `Config` |

#### Defined in

[index.ts:23](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L23)

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

[index.ts:84](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L84)

___

### getAccess

▸ **getAccess**(): `Promise`<[`Access`](Access.Access-1.md)\>

#### Returns

`Promise`<[`Access`](Access.Access-1.md)\>

#### Defined in

[index.ts:97](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L97)

___

### getDownloader

▸ **getDownloader**(): `Promise`<[`Downloader`](Downloader.Downloader-1.md)\>

#### Returns

`Promise`<[`Downloader`](Downloader.Downloader-1.md)\>

#### Defined in

[index.ts:102](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L102)

___

### getUploader

▸ **getUploader**(): `Promise`<[`Uploader`](Uploader.Uploader-1.md)\>

#### Returns

`Promise`<[`Uploader`](Uploader.Uploader-1.md)\>

#### Defined in

[index.ts:92](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L92)

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

[index.ts:205](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L205)

___

### login

▸ **login**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[index.ts:138](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L138)

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

[index.ts:107](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L107)

___

### myFiles

▸ **myFiles**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[index.ts:189](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L189)

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

[index.ts:80](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L80)

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

[index.ts:75](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L75)

___

### sharedFiles

▸ **sharedFiles**(): `Promise`<`any`[]\>

#### Returns

`Promise`<`any`[]\>

#### Defined in

[index.ts:197](https://github.com/arcana-network/storage/blob/75e1c9e/src/index.ts#L197)
