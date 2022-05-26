[Storage SDK Reference Guide - v0.1.4](../README.md) / [Modules](../modules.md) / [Access](../modules/Access.md) / Access

# Class: Access

[Access](../modules/Access.md).Access

## Table of contents

### Constructors

- [constructor](Access.Access-1.md#constructor)

### Methods

- [changeFileOwner](Access.Access-1.md#changefileowner)
- [deleteAccount](Access.Access-1.md#deleteaccount)
- [deleteFile](Access.Access-1.md#deletefile)
- [getAccountStatus](Access.Access-1.md#getaccountstatus)
- [getDownloadLimit](Access.Access-1.md#getdownloadlimit)
- [getSharedUsers](Access.Access-1.md#getsharedusers)
- [getUploadLimit](Access.Access-1.md#getuploadlimit)
- [revoke](Access.Access-1.md#revoke)
- [share](Access.Access-1.md#share)

## Constructors

### constructor

• **new Access**(`appAddress`, `provider`, `api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appAddress` | `string` |
| `provider` | `any` |
| `api` | `AxiosInstance` |

#### Defined in

[Access.ts:11](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L11)

## Methods

### changeFileOwner

▸ **changeFileOwner**(`fileId`, `newOwnerAddress`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `newOwnerAddress` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[Access.ts:55](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L55)

___

### deleteAccount

▸ **deleteAccount**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[Access.ts:66](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L66)

___

### deleteFile

▸ **deleteFile**(`fileId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[Access.ts:61](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L61)

___

### getAccountStatus

▸ **getAccountStatus**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[Access.ts:70](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L70)

___

### getDownloadLimit

▸ **getDownloadLimit**(): `Promise`<[`number`, `number`]\>

#### Returns

`Promise`<[`number`, `number`]\>

#### Defined in

[Access.ts:81](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L81)

___

### getSharedUsers

▸ **getSharedUsers**(`fileId`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[Access.ts:87](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L87)

___

### getUploadLimit

▸ **getUploadLimit**(): `Promise`<[`number`, `number`]\>

#### Returns

`Promise`<[`number`, `number`]\>

#### Defined in

[Access.ts:75](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L75)

___

### revoke

▸ **revoke**(`fileId`, `address`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `address` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[Access.ts:49](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L49)

___

### share

▸ **share**(`fileId`, `_address`, `validity`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` \| `string`[] |
| `_address` | `string` \| `string`[] |
| `validity` | `number` \| `number`[] |

#### Returns

`Promise`<`string`\>

#### Defined in

[Access.ts:17](https://github.com/arcana-network/storage/blob/663885f/src/Access.ts#L17)
