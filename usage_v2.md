# Arcana Storage Usage Guide

**Contents**

1. [Usage Flow](#usage-flow)
2. [Initialize SDK](#initialize-sdk)
3. [Upload File](#upload-file)
4. [Download File](#download-file)
5. [Access Control](#access-control)
6. [Storage Usage Metrics](#storage-usage-metrics)
7. [Download File by DID](#download-file-by-did)
8. [Private NFT](#private-nft)
9. [Callback Functions](#callback-functions)
10. [Changing Network and Wallet Accounts](#changing-network-and-wallet-accounts)

## Prerequisites

To use the Storage SDK, you need to ensure that you have access to a blockchain `provider`.  A provider is required for signing blockchain transactions that power storage operations pertaining to data privacy and access control in the Arcana Network protocol.

You can obtain the blockchain provider by integrating with the Arcana Auth SDK and accessing the `window.arcana.provider`.  

Alternately, if you choose to use MetaMask instead of the Arcana Auth SDK or one of the [supported third-party wallets](https://docs.beta.arcana.network/docs/config3pwallet), use the `window.ethereum` variable to access the provider.

Refer to the [Arcana Storage SDK Quick Start Guide](https://docs.beta.arcana.network/docs/stgsdk_qs) to understand how to integrate with the Storage SDK.

## Usage Flow

1. Install Storage SDK
2. Import and initialize Storage SDK by creating a new `StorageProvider` for your dApp. Specify the blockchain `provider` and the `appId` as inputs to the new method. Note: Get the provider via the Auth SDK or third-party supported wallet. You can copy the appId from the [Arcana Developer Dashboard](https://docs.beta.arcana.network/docs/config_dapp) after registering your dApp
3. Use `StorageProvider` to:
   - Call `myFiles` method to obtain a list of file DIDs for the files uploaded by the user (file owner)
   - Call `sharedFiles` method to obtain a list of files shared with the user
4. Use `StorageProvider` and obtain the uploader using `getUploader` method first, and then:
   - Call `upload` method of the uploader with file data as input
   - Save file DID returned by the uploader
5. Use `StorageProvider` and obtain the downloader using `getDownloader` method
   - Call `download` method of the downloader using file DID as input
6. Use `StorageProvider` and obtain the `access` object via `getAccess` call before invoking any of the file methods that govern access control:
   - `delete` a file by specifying its DID
   - `share` a file by specifying its DID and recipient's wallet address
   - `revoke` access to a file by specifying its DID and recipient's wallet address
   - `changeFileOwner` of a file by specifying its DID and recipient's wallet address
7. Use `access` object to also call any of the storage getter methods:
   - `getUploadLimit` set by the dApp
   - `getDownloadLimit` set by the dApp
   - `getSharedUsers` for a file with the specified DID


## Initialize SDK

```typescript
// appId:
// You can obtain appId from Arcana Developer Dashboard after registering and configuring your
// dApp.
//
// provider:
// Choose `window.arcana.provider` if using Arcana Auth SDK or `window.ethereum`
// for any other supported web3provider or wallet.
//
// Arcana Auth SDK:
// If you initialize the Auth SDK, by default the `window.arcana.provider` variable is
// configured. During initialization, if you set `inpageProvider` boolean as true,
// then `window.ethereum` variable is also configured to point to the provider.
//
// Web3provider:
// Alternately, if you are not using Auth SDK but working with MetaMask wallet or any
// other supported wallet, then the `window.ethereum` variable will point to the provider.
import { StorageProvider } from '@arcana/storage';

const storage = new StorageProvider({ appId, provider, email });
```

**Note:**
It suffices to invoke `new` method to instantiate StorageProvider just once and use it across your dApp.
This *Singleton* usage is recommended as a best practice.

## Upload File

The `file` object must be an instance of a `Blob` or a descendant (`File`, etc.).

```javascript
const Uploader = storage.getUploader();
Uploader.onProgress = (bytesUploaded, bytesTotal) => { console.log('Progress:', ((bytesUploaded / bytesTotal) * 100).toFixed(2), '%')}
Uploader.upload(file);
```

## Download File

```javascript
const Downloader = storage.getDownloader();
Downloader.onProgress = (bytesDownloaded, bytesTotal) => { console.log('Progress:', ((bytesUploaded / bytesTotal) * 100).toFixed(2), '%')}
Downloader.download(did);
```

## Access Control

### Get Access

```javascript
const Access = await storage.getAccess();
```

### Share File

```javascript
// did: DID of file to be shared
// address: recipients address
// validity (optional): For how long will be the user able to download the file, e.g. [400] would mean 400 seconds
await Access.share([did], [address]);
```

### Revoke File Sharing

```javascript
// did: DID of file from which access is removed
// address: Address of the user who's access is getting revoked
await Access.revoke(did, address);
```

### Change File Ownership

```javascript
// address: new owner's address
await Access.changeOwner(did, address);
```

### Delete a File

```javascript
await Access.delete(did);
```

## Storage Usage Metrics

### Get Upload Limit

```javascript
//Get consumed and total storage of the current user
let [consumed, total] = await Access.getUploadLimit();
```

### Get Download Limit

```javascript
//Get consumed and total bandwidth of the current user
let [consumed, total] = await Access.getDownloadLimit();
```

### List of Files Shared

List files shared with the current user.

```javascript
let files = await Access.list(AccessTypeEnum.SHARED_FILES);
```

### List of Files Uploaded

List files uploaded by the current user.

```javascript
let files = await Access.list(AccessTypeEnum.MY_FILES);
```

## Download File by DID

```javascript

//The file DID is returned at the time of file upload and uniquely identifies the file in Arcana Store.

//Note: No appID is required during initialization of the Storage SDK in order to
//download a file using the file DID.

// Pass the provider during initialization of the Storage SDK, if required.
// Otherwise by default, the Storage SDK will choose window.ethereum

let storage = new arcana.storage.StorageProvider();
await storage.downloadDID('<did of the file>');
```

## Private NFT

Use the following Storage SDK functionality for minting private NFTs.

### Create Metdata URL

Use `makeMetadataURL` to obtain a URL that can be used to mint private NFT.

```javascript
let metadata = await storage.makeMetadataURL(
 title,
 description,
 did,
 file,
);
console.log(metadata)
// https://test-storage.arcana.network:9000/api/v1/metadata/0x129d1438ff3bf014e9b9094b3a5d410f691c208ed5305b0844307b761c0e295e
```

### Link Minted NFT with DID

Once you have minted the NFT, to make it private and control access to it and manage ownership, you need to link it with the DID.  

```javascript
let chainId = 80001,tokenId  = 3, nftContract = "0xE80FCAD702b72777f5036eF1a76086FD3f882E29"
   await storage.linkNft(did, tokenId, nftContract, chainId);
```

## CallBack Functions

### Upload

#### On Upload Success

```typescript
Uploader.onSuccess = () => {
 console.log('Completed file upload');
};
````

#### On Upload Progress

```typescript
Uploader.onProgress = (bytesUploaded, bytesTotal) => {
 console.log("Percentage completed", (100*bytesUploaded)/bytesTotal)
};
```

### Download

#### On Download Success

```typescript
Downloader.onSuccess = () => {
 console.log('Completed file download');
};
```

#### On Download Progress

```typescript
Downloader.onProgress = (bytesDownloaded, bytesTotal) => {
 console.log("Percentage completed", (100*bytesDownloaded)/bytesTotal)
};
```

### Basic Error Handling

During file upload operations, if there are any errors, dApp developers can address those by catching the exception raised by the Storage SDK:

```javascript
import { StorageProvider } from '@arcana/storage/dist/standalone/storage.umd';

dAppStorageProvider = new StorageProvider({
       appId: ARCANA_APP_ID,
       provider: window.ethereum,
       email: user_email_string,
     });

const uploader = await dAppStorageProvider.getUploader();

uploader.upload(fileToUpload)
 .catch((error) => {
   if (error.message === NO_SPACE) {
     ...
   } else if (error.code === UNAUTHORIZED) {
     ...
   } else {
     ...
   }
 });
```

### Advanced Error Handling

This advanced error handling section is only meant for file upload to address special dApp use cases. It is **recommended** that dApp developers using *Exception handling - catch* mechanism, for handling file upload errors.

Every user action to upload a file internally results in the Storage SDK splitting the file into multiple parts according to the [tus](https://tus.io/) protocol. These parts are uploaded to the Arcana Store. If any of the file segment fails to transmit, it is automatically retried until all file segments are transferred. The automatic retry counter is hard coded to '5' in the beta release and the dApp developer cannot change this configuration.

If the dApp developer is required to handle file upload error in case the retries fail, use `onError()` mechanism. After retrying for four times, in case of any segment upload fails for the fifth time, the Storage SDK invokes `onError()` callback to enable dApp developer to take appropriate action or delay file transfer to deal with intermittent network failures.

```js
Uploader.onError = (err) => {
 console.log('Error', err);
};
```
---

## Changing Network and Wallet Account

### Change Network
```js
// Below is default function, which can be modified by the developers
storage.onNetworkChange = (oldNetwork, newNetwork) => {
 window.location.reload()
}
```
### Change Account
```js
// Below is default function, which can be modified by the developers
storage.onAccountChange = (accounts) => {
 window.location.reload()
}
```
