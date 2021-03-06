# Arcana Storage Usage guide

## Initialize SDK

```typescript
// address: Smart contract address of app
// provider: Web3provider (Eg: If you have installed metamask then window.ethereum will work)
// Default value of provider is window.ethereum
const arcanaInstance = new arcana.storage.StorageProvider({ appId, provider, email });
```

## Get Uploader

```typescript
const Uploader = arcanaInstance.getUploader();
// file: Blob format
Uploader.upload(file);
```

## Get Downloader

```typescript
const Downloader = arcanaInstance.getDownloader();
// did: DID of file which you want to download
Downloader.download(did);
```

## Get Access

```typescript
const Access = new arcanaInstance.getAccess();

### Share a File
// did: DID of file to be shared
// address: recipients address
// validity (optional): For how long will be the user able to download the file, e.g. [400] would mean 400 seconds
Access.share([did], [address]);
```

### Revoke File Sharing

```typescript
// did: DID of file from which access is removed
// address: Address of the user who's access is getting revoked
Access.revoke(did, address);
```

### Change File Ownership

```typescript
// address: new owner's address
Access.changeFileOwner(did, address);
```

### Delete a File

```typescript
Access.deleteFile(did);
```

## Storage Usage Metrics

### Get Upload Limit

```typescript
//Get consumed and total storage of the current user
let [consumed, total] = await Access.getUploadLimit();
```

### Get Download Limit

```typescript
//Get consumed and total bandwidth of the current user
let [consumed, total] = await Access.getDownloadLimit();
```

### List of Files Shared

List files shared with the current user.

```javascript
//Get files shared with the current user
let files = await arcanaInstance.sharedFiles();
```

### List of Files Uploaded

List files uploaded by the current user.

```javascript
//List of files uploaded by the current user
let files = await arcanaInstance.myFiles();
```
---

## Download File by DID

```javascript

//The file DID is returned at the time of file upload and uniquely identifies the file in Arcana Store.

//Note: No appID is required during initialization of the Storage SDK in order to
//download a file using the file DID.

// Pass the provider during initialization of the Storage SDK, if required.
// Otherwise by default, the Storage SDK will choose window.ethereum

let arcanaInstance = new arcana.storage.StorageProvider();
await arcanaInstance.downloadDID('<did of the file>');
```

---

## Private NFT Creation

Use the following Storage SDK functionality for minting private NFTs.

### Create Metdata URL

Use `makeMetadataURL` to obtain a URL that can be used to mint private NFT.

```javascript
let metadata = await arcanaInstance.makeMetadataURL(
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
    await arcanaInstance.linkNft(did, tokenId, nftContract, chainId);
```

---

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
arcanaInstance.onNetworkChange = (oldNetwork, newNetwork) => {
  window.location.reload()
}
```
### Change Account
```js
// Below is default function, which can be modified by the developers
arcanaInstance.onAccountChange = (accounts) => {
  window.location.reload()
}
```
