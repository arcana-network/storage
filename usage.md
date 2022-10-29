# Arcana Storage Usage Guide

**Contents**

1. [Prerequisites](#prerequisites)
2. [Usage Flow](#usage-flow)
3. [Initialize Storage](#initialize-storage)
4. [Upload File](#upload-file)
5. [Download File](#download-file)
6. [Access Control](#access-control)
7. [Storage Usage Metrics](#storage-usage-metrics)
8. [Download File by DID](#download-file-by-did)
9. [Private NFT](#private-nft)
10. [Error Handling](#error-handling)
11. [Managing Network and Wallet Account Changes](#managing-network-and-wallet-account-changes)

## Prerequisites

Arcana Storage SDK provides data privacy and access control through blockchain transactions powered by the Arcana Network. To use the Storage SDK, you need to ensure that you have access to a Web3 wallet provider. A provider is required for signing blockchain transactions.

You can obtain a Web3 wallet provider by integrating with the Arcana Auth SDK and accessing the `window.arcana.provider`.  

Alternatively, you can choose to use MetaMask instead of the Arcana Auth SDK or one of the [supported third-party wallets](https://docs.beta.arcana.network/docs/config3pwallet). For third-party wallets, use the `window.ethereum` variable to access the provider.

Refer to the [Arcana Storage SDK Quick Start Guide](https://docs.beta.arcana.network/docs/stgsdk_qs) to understand how to integrate with the Storage SDK.

## Usage Flow

1. Install Storage SDK
2. Import `StorageProvider` from the Storage SDK package in the dApp. Call the `init` method of `StorageProvider` and specify the Web3 wallet `provider` and the `appId` as input parameters. **Note:** Get the provider via the Auth SDK or third-party supported wallet. You can copy the appId from the [Arcana Developer Dashboard](https://docs.beta.arcana.network/docs/config_dapp) after registering your dApp
3. Use `StorageProvider` to:
   - `upload` and push file data into the Arcana Store. **Note:** Save file DID that is returned after the successful file upload.
   - `download` a file from the Arcana Store using DID as input.
4. Use `StorageProvider.files` to:
   - `delete` a file by specifying its DID.
   - `share` a file by specifying its DID and recipient's wallet address.
   - `revoke` access to a file by specifying its DID and recipient's wallet address.
   - `changeFileOwner` of a file by specifying its DID and recipient's wallet address.
   - `getUploadLimit` set by the dApp per user.
   - `getDownloadLimit` set by the dApp per user.
   - `getSharedUsers` to obtain a list of users with whom a file DID is shared.
   - `myFiles` method to obtain a list of file DIDs for the files uploaded by the user (file owner).
   - `sharedFiles` method to obtain a list of files shared with the user.

## Initialize Storage

```ts
import { StorageProvider } from '@arcana/storage'; // required only once per .ts or .js file

dAppStorageProvider = await StorageProvider.init({
  appAddress: ARCANA_APP_ADDRESS, // Get appAddress via Dashboard after registering and configuring dApp
  email: user_email_string, //optional
  chainId: 100, //optional
  provider: window.arcana.provider //optional
  // use 'window.arcana.provider', if using the Auth SDK
  // or use 'window.ethereum' if using a third-party wallet
});
```

**Note:**
It suffices to invoke `init` method of StorageProvider just once and use it across your dApp.
This *Singleton* usage is recommended as a best practice.

## Upload File

The Storage SDK accepts `Blob`s as files. The `file` object passed must be an instance of a `Blob` or a descendant (`File`, etc.). You cannot upload a file by providing its URL.

As of now, it supports uploading _private_ and _public_ files. They are identifiable by looking at the first byte of the DID. In hexadecimal format, 01 indicates a public file, and 02 indicates a private file.

### Private Files

```ts
await dAppStorageProvider.upload(file, {
  onProgress: (bytesUploaded, bytesTotal) => {
     console.log('Progress:', ((bytesUploaded / bytesTotal) * 100).toFixed(2), '%')
  }
}).then((did) => console.log('File successfully uploaded. DID:', did)).catch(e => console.error(e));
```

### Public Files

#### Upload Public File

By default, any file that is uploaded to the Arcana Store using the Storage SDK is access controlled as a private file. Only the owner of the file can access it or share it.

To upload a file that is accessible by anyone, specify the `publicFile` input parameter as `true`.

```ts
await dAppStorageProvider.upload(file, {
  publicFile: true, // false by default
  onProgress: (bytesUploaded, bytesTotal) => {
     console.log('Progress:', ((bytesUploaded / bytesTotal) * 100).toFixed(2), '%')
  }
}).then((did) => console.log('File successfully uploaded. DID:', did)).catch(e => console.error(e));
```

#### Get Public file URL

After a file is successfully uploaded to the Arcana Store, it is assigned a unique DID and the owner or uploader can access the file using the DID. In the case of public files, you can use this file DID to get a sharable URL for a public file by calling the `getPublicFileURL` method. Anyone who has this URL can access and download the public file. You can use any application to download it using this URL, for example, any browser.

```ts
let shareURL = await dAppStorageProvider.files.getPublicFileURL(did);
```

## Download File

```ts
await dAppStorageProvider.download(
  did, (bytesDownloaded, bytesTotal) => {
    console.log('Progress:', ((bytesUploaded / bytesTotal) * 100).toFixed(2), '%')
  }
);
```

## Access Control

### Share a File

```ts
// did: DID of the file to be shared
// address: recipient user's address
// validity (optional): For how long will the user be able to download the file, e.g. [400] would mean 400 seconds
await dAppStorageProvider.files.share([did], [address]);
```

### Revoke File Sharing

```ts
// did: DID of file from which access is removed
// address: The address of the user for whom the access must be revoked
await dAppStorageProvider.files.revoke(did, address);
```

### Change File Ownership

```ts
// address: new owner's address
await dAppStorageProvider.files.changeOwner(did, address);
```

### Delete a File

```ts
await dAppStorageProvider.files.delete(did);
```

## Storage Usage Metrics

### Get Upload Limit

```ts
//Get consumed and total storage of the current user
let [consumed, total] = await dAppStorageProvider.files.getUploadLimit();
```

### Get Download Limit

```ts
//Get consumed and the total bandwidth of the current user
let [consumed, total] = await dAppStorageProvider.files.getDownloadLimit();
```

### Files Shared

This method lists the files shared with the current user.

```ts
import { AccessTypeEnum } from '@arcana/storage'; // required only once per .ts or .js file
let files = await dAppStorageProvider.files.list(AccessTypeEnum.SHARED_FILES);
```

### Files Uploaded

This method lists the files uploaded by the current user.

```ts
import { AccessTypeEnum } from '@arcana/storage'; // required only once per .ts or .js file
let files = await dAppStorageProvider.files.list(AccessTypeEnum.MY_FILES);
```
---
## Download File by DID

```ts
//The file DID is returned at the time of file upload and uniquely identifies the file in Arcana Store.

//Note: No appID is required during the initialization of the Storage SDK to
//download a file using the file DID.

// Pass the provider during initialization of the Storage SDK, if required.
// Otherwise by default, the Storage SDK will choose window.ethereum

dAppStorageProvider = await StorageProvider.init({
  appAddress: ARCANA_APP_ADDRESS, // Get appAddress via Dashboard after registering and configuring dApp
  email: user_email_string, //optional
  chainId: 100, //optional
  provider: window.arcana.provider //optional
  // use 'window.arcana.provider', if using the Auth SDK
  // or use 'window.ethereum' if using a third-party wallet
});
await dAppStorageProvider.downloadDID('<did of the file>');
```

## Private NFT

Use the following Storage SDK functionality for minting private NFTs.

### Create Metadata URL

Use `makeMetadataURL` to obtain a URL that can be used to mint a preview image of the actual private NFT. This preview image can be publicly listed in NFT marketplaces and can be transacted upon. Only the owner of the private NFT can download it from the Arcana Store and access it. Others can only view the publicly listed preview image. Arcana Network platform bridge entity tracks ownership changes corresponding to NFT transactions carried out in public marketplaces and updates the Arcana Store accordingly. For details, refer to the guide - [How to create private NFT](https://docs.beta.arcana.network/docs/mintpvtnft).

```ts
let metadata = await dAppStorageProvider.makeMetadataURL(
  title,
  description,
  did, // The DID of the private NFT file hosted in the Arcana Store
  file, // The 'preview image file corresponding to the private NFT, not the actual private NFT data file
);
console.log(metadata);
// https://test-storage.arcana.network:9000/api/v1/metadata/0x129d1438ff3bf014e9b9094b3a5d410f691c208ed5305b0844307b761c0e295e
```

### Link Minted NFT with DID

Once you have minted the NFT, you need to link it with the DID to make it private, control access, and manage ownership.

```ts
let chainId = 80001,tokenId  = 3, nftContract = "0xE80FCAD702b72777f5036eF1a76086FD3f882E29"
  await dAppStorageProvider.linkNft(did, tokenId, nftContract, chainId);
```

## Error Handling

During file upload operations, if there are any errors, dApp developers should address those by catching the exceptions raised by the Storage SDK:

```ts
import { StorageProvider } from '@arcana/storage'; // required only once per .ts or .js file
dAppStorageProvider = await StorageProvider.init({
  appAddress: ARCANA_APP_ADDRESS, // Get appAddress via Dashboard after registering and configuring dApp
  email: user_email_string, //optional
  chainId: 100, //optional
  provider: window.arcana.provider //optional
  // use 'window.arcana.provider', if using the Auth SDK
  // or use 'window.ethereum' if using a third-party wallet
});

await dAppStorageProvider.upload(
  file, (bytesUploaded, bytesTotal) => {
    console.log('Progress:', ((bytesUploaded / bytesTotal) * 100).toFixed(2), '%')
  }
).then(
  (did) => console.log('File successfully uploaded. DID:', did)
).catch(e => console.error(e));
```

## Managing Network and Wallet Account Changes

### Network Change
```ts
// dApp devs can modify this default function
dAppStorageProvider.onNetworkChange = (oldNetwork, newNetwork) => {
  window.location.reload()
  }
```
### Account Change
```ts
// dApp devs can modify this default function
dAppStorageProvider.onAccountChange = (accounts) => {
  window.location.reload()
}
```

## Delegate Data Access Permissions

A delegate may perform data access operations as per the access rights granted to them by the data owner. For example, a moderator reviewing a stream of tweets for a decentralized dApp may be granted permissions to delete objectionable tweets, or simply flag them.

The following APIs support data access permission delegation. 

**Note**
In the current release, a dApp user can delegate data access permissions to a dApp developer, if they choose to. In the future, we may support third-party services that take on the delegation role.

### Grant Delegator Permission to dApp

This API can be used by a dApp to seek the user's permission to get the role of a delegate with data access control on behalf of the data owner.

```js
await storage.grantAppPermission()
```

### Check if dAPP requires Delegator Permission 

The dApp can use this API to check if it needs to seek delegator permissions from the dApp user. It returns `true` if dApp requires permission. 

```js
const isPermissionRequired = await storage.checkPermission() -> boolean
```

## Inject/Eject Data

The inject/eject APIs empower the dApp users to own their data. A dApp user can choose to upload data to the Arcana Store via a dApp that is integrated with the Arcana Storage SDK. Later, they can use another dApp integrated with the Storage SDK and access the same data uploaded using the previous dApp into the Arcana Store.  This is done by injecting or adding the data file into the new dApp context. Similarly, dApp users can eject or remove a data file that was uploaded using a dApp. If a data file is removed from the context of a dApp, the same user cannot access the file from that dApp.  The removal from a dApp context does not delete the file from the Arcana Store.

### Add File to dApp

A dApp user can upload files to the Arcana Store. To access the same file from a different dApp, the file must be injected in the new dApp context. Use this API to add an already uploaded file to a new dApp context.

```js
await storage.files.addFile(<did>)
```

### Remove File from dApp 

Whenever a dApp user uploads a file using a dApp or uses the `addFile` API for an already uploaded file, the data file gets added to the dApp context. This enables a user to access a file uploaded using any dApp from more than one dApp context. To stop file access, the file must be ejected from the dApp's context. Use `removeFile` API to remove it from a dApp's context. The removal of the file(s) does **NOT** delete the file(s) from the Arcana storage. To delete the file, use the `delete`  API.

```js
await storage.files.removeFileFromApp(<did>)
```
