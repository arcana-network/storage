[Storage SDK Reference Guide - v0.1.4](../README.md) / [Modules](../modules.md) / [Uploader](../modules/Uploader.md) / Uploader

# Class: Uploader

[Uploader](../modules/Uploader.md).Uploader

## Table of contents

### Constructors

- [constructor](Uploader.Uploader-1.md#constructor)

### Methods

- [onError](Uploader.Uploader-1.md#onerror)
- [onProgress](Uploader.Uploader-1.md#onprogress)
- [onSuccess](Uploader.Uploader-1.md#onsuccess)
- [onUpload](Uploader.Uploader-1.md#onupload)
- [upload](Uploader.Uploader-1.md#upload)

## Constructors

### constructor

• **new Uploader**(`appAddress`, `provider`, `api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appAddress` | `string` |
| `provider` | `any` |
| `api` | `AxiosInstance` |

#### Defined in

[Uploader.ts:26](https://github.com/arcana-network/storage/blob/9d9da6f/src/Uploader.ts#L26)

## Methods

### onError

▸ **onError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

`void`

#### Defined in

[Uploader.ts:36](https://github.com/arcana-network/storage/blob/9d9da6f/src/Uploader.ts#L36)

___

### onProgress

▸ **onProgress**(`bytesUploaded`, `bytesTotal`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesUploaded` | `number` |
| `bytesTotal` | `number` |

#### Returns

`void`

#### Defined in

[Uploader.ts:34](https://github.com/arcana-network/storage/blob/9d9da6f/src/Uploader.ts#L34)

___

### onSuccess

▸ **onSuccess**(): `void`

#### Returns

`void`

#### Defined in

[Uploader.ts:32](https://github.com/arcana-network/storage/blob/9d9da6f/src/Uploader.ts#L32)

___

### onUpload

▸ **onUpload**(`host`, `token`, `did`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `token` | `string` |
| `did` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Uploader.ts:40](https://github.com/arcana-network/storage/blob/9d9da6f/src/Uploader.ts#L40)

___

### upload

▸ **upload**(`fileRaw`, `chunkSize?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileRaw` | `any` |
| `chunkSize` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

[Uploader.ts:72](https://github.com/arcana-network/storage/blob/9d9da6f/src/Uploader.ts#L72)
