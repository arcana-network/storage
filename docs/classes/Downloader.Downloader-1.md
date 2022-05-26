[Storage SDK Reference Guide - v0.1.4](../README.md) / [Modules](../modules.md) / [Downloader](../modules/Downloader.md) / Downloader

# Class: Downloader

[Downloader](../modules/Downloader.md).Downloader

## Table of contents

### Constructors

- [constructor](Downloader.Downloader-1.md#constructor)

### Methods

- [download](Downloader.Downloader-1.md#download)
- [onProgress](Downloader.Downloader-1.md#onprogress)
- [onSuccess](Downloader.Downloader-1.md#onsuccess)

## Constructors

### constructor

• **new Downloader**(`appAddress`, `provider`, `api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appAddress` | `string` |
| `provider` | `any` |
| `api` | `AxiosInstance` |

#### Defined in

[Downloader.ts:45](https://github.com/arcana-network/storage/blob/47fb00e/src/Downloader.ts#L45)

## Methods

### download

▸ **download**(`did`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Downloader.ts:55](https://github.com/arcana-network/storage/blob/47fb00e/src/Downloader.ts#L55)

___

### onProgress

▸ **onProgress**(`bytesDownloaded`, `bytesTotal`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesDownloaded` | `number` |
| `bytesTotal` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Downloader.ts:53](https://github.com/arcana-network/storage/blob/47fb00e/src/Downloader.ts#L53)

___

### onSuccess

▸ **onSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[Downloader.ts:52](https://github.com/arcana-network/storage/blob/47fb00e/src/Downloader.ts#L52)
