Storage SDK Reference Guide / [Modules](modules.md)

# Arcana Storage

## Installation

### Using npm/yarn

```shell
npm i @arcana/storage
yarn add @arcana/storage
```

You can use the standalone module which includes the polyfills.

```html
<script src="./dist/standalone/storage.umd.js"></script>
```

```js
import { StorageProvider } from '@arcana/storage/dist/standalone/storage.umd';
```

## Storage SDK Usage

### Initialize

```js
// address: Smart contract address of app
// provider: Web3provider (Eg: If you have installed metamask then window.ethereum will work)
//           Default value of provider is window.ethereum
// appId: This field is optional. If you want to download a file with just did then you won't require this field
const arcanaInstance = new arcana.storage.StorageProvider({ appId, provider, email });
```

### Get Uploader

```js
const Uploader = arcanaInstance.getUploader();
// file: Blob format
Uploader.upload(file);
```

### Get Downloader

```js
const Downloader = arcanaInstance.getDownloader();
// did: DID of file which you want to download
Downloader.download(did);
```

### Get Access

```js
const Access = arcanaInstance.getAccess();
```

#### Share a File

```js
// did: DID of file to be shared, can be a hexadecimal string or an array of such strings
// address: recipients address, similar type as "did"
// validity (optional): For how long will be the user able to download the file, e.g. [400] would mean 400 seconds.
Access.share(did, address);
```

#### Revoke File Sharing

```js
// did: DID of file from which access is removed
// address: Address of the user who's access is getting revoked
Access.revoke(did, address);
```

#### Transfer File Ownership

```js
// address: new owner's address
Access.changeFileOwner(did, address);
```

#### Delete a File

```js
Access.deleteFile(did);
```

### Storage Usage Metrics

#### Get Upload Limit

```js
//Get consumed and total storage of the current user
let [consumed, total] = await Access.getUploadLimit();
```
#### Get Download Limit

```js
//Get consumed and total bandwidth of the current user
let [consumed, total] = await Access.getDownloadLimit();
```

#### List Shared Files
List files that are shared with the current user.

```js
let files = await arcanaInstance.sharedFiles();
```

#### List Uploaded files
List files that are uploaded by the current user.

```js
let files = await arcanaInstance.myFiles();
```

### Download File by DID

**Note:** No appID is required to download a file using the file DID. The file DID is returned at the time of file upload and uniquely identifies the file.

```js
// Pass the provider if required otherwise it will choose window.ethereum by default
let arcanaInstance = new arcana.storage.StorageProvider();
await arcanaInstance.downloadDID('<did of the file>');
```

## NFT

#### Create Metdata URL

**Note:** This is typically used for NFT use case.

```js
let metadata = await arcanaInstance.makeMetadataURL(
  title,
  description,
  did,
  file,
);
console.log(metadata)
// https://test-storage.arcana.network:9000/api/v1/metadata/0x129d1438ff3bf014e9b9094b3a5d410f691c208ed5305b0844307b761c0e295e
```
You can use this URL to mint your NFT

#### Link NFT with did
**Note:** After minting NFT inorder to use this NFT as a private NFT you need to link it with did
```js
let chainId = 80001,tokenId  = 3, nftContract = "0xE80FCAD702b72777f5036eF1a76086FD3f882E29"
    await arcanaInstance.linkNft(did, tokenId, nftContract, chainId); 
```

### CallBack Functions

#### 1. Upload

##### 1.1 On Success

```js
Uploader.onSuccess = () => {
  console.log('Completed file upload');
};
```

##### 1.2 On Progress

```js
Uploader.onProgress = (bytesUploaded, bytesTotal) => {
  console.log("Percentage completed", (100*bytesUploaded)/bytesTotal)
};
```

#### 2. Download

##### 2.1 On Success

```js
Downloader.onSuccess = () => {
  console.log('Completed file download');
};
```

##### 2.2 On Progress

```js
Downloader.onProgress = (bytesDownloaded, bytesTotal) => {
  console.log("Percentage completed", (100*bytesDownloaded)/bytesTotal)
};
```

#### Basic Error Handling

During file upload or file download operations, if there are any errors, dApp developers can address those by catching the exception raised by the Storage SDK:

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

#### Advanced Error Handling

This advanced error handling section is only meant for file upload to address special dApp use cases. It is **recommended** that dApp developers using *Exception handling - catch* mechanism, for handling file upload errors.

Every user action to upload a file internally results in the Storage SDK splitting the file into multiple parts according to the [tus](https://tus.io/) protocol. These parts are uploaded to the Arcana Store. If any of the file segment fails to transmit, it is automatically retried until all file segments are transferred. The automatic retry counter is hard coded to '5' in the beta release and the dApp developer cannot change this configuration.

If the dApp developer is required to handle file upload error in case the retries fail, use `onError()` mechanism. After retrying for four times, in case of any segment upload fails for the fifth time, the Storage SDK invokes `onError()` callback to enable dApp developer to take appropriate action or delay file transfer to deal with intermittent network failures.

```js
Uploader.onError = (err) => {
  console.log('Error', err);
};
```

### Changing Network and Wallet Account

##### Change Network
```js
// Below is default function, which can be modified by the developers
arcanaInstance.onNetworkChange = (oldNetwork, newNetwork) => {
  window.location.reload()
}
```
##### Change Account
```js
// Below is default function, which can be modified by the developers
arcanaInstance.onAccountChange = (accounts) => {
  window.location.reload()
}
```

## Storage SDK Error Messages

| Code         | Message                                                  | Reason                                                                                                     |
| ------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| UNAUTHORIZED | You can't download this file                             | Trying to download a file which is neither owned by you nor shared with you                                |
| TRANSACTION  | This function can only be called by file owner           | Only owner of the file have access to the function i.e, either to delete, revoke or transfer file          |
| TRANSACTION  | User is not active                                       | Your account is either disabled or deleted                                                                 |
| TRANSACTION  | User not registered for the app                          | Your account is not registered for the app                                                                 |
| TRANSACTION  | Only factory contract can call this function             | Only factory contract can set the app level limit i.e, storage and bandwidth                               |
| TRANSACTION  | No space left for app                                    | Your current app's storage or bandwidth limit has been consumed                                            |
| TRANSACTION  | No space left for user                                   | You have already consumed your storage or bandwidth limit                                                  |
| TRANSACTION  | Not a trusted forwarder nor factory contract             | For meta transaction, transaction should happen from valid factory or forwarder contract                   |
| TRANSACTION  | Owner already exist for this file                        | You cannot upload a file that is already uploaded by different user address                                |
| TRANSACTION  | Should not be 0                                          | Your file size must not be null while uploading                                                            |
| TRANSACTION  | Function can only be called by the assigned storage node | Only assigned storage node has access to the function                                                      |
| TRANSACTION  | Not file owner                                           | You are not the file owner thus action cannot be done. Kindly verify your account address                  |
| TRANSACTION  | Validity must be non zero                                | Validity is the access specifier and cannot be zero while sharing a file                                   |
| TRANSACTION  | User was not deleted to reactivate                       | Your account was not deleted to reactivate                                                                 |
| TRANSACTION  | An app already created with this Id                      | Use a valid app ID. Try configuring the app at https://dashboard.arcana.network/ to get app ID             |
| TRANSACTION  | App calling the function is not registered               | configure the app at https://dashboard.arcana.network/                                                     |
| TRANSACTION  | Please add some nodes to authenticate user               |
| TRANSACTION  | Function can only called by nodes                        |
| TRANSACTION  | Already voted                                            |
| TRANSACTION  | Only gateway node can call this function                 | Only gateway node has access to the function                                                               |
| TRANSACTION  | File must be uploaded before downloading it              | File not found                                                                                             |
| TRANSACTION  | MinimalForwarder: signature does not match request       | Meta transaction failed. The function you are trying to call does not exists. check the function signature |
| WRONG_NETWORK  | Wrong Network       | You need to change the network/RPC URL in your wallet |
