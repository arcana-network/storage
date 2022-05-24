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

## Usage

### Create an Arcana instance

```js
// address: Smart contract address of app
// provider: Web3provider (Eg: If you have installed metamask then window.ethereum will work)
//           Default value of provider is window.ethereum
// appId: This field is optional. If you want to download a file with just did then you won't require this field
const arcanaInstance = new arcana.storage.StorageProvider({ appId, provider, email });
```

### Uploader

```js
const Uploader = arcanaInstance.getUploader();
// file: Blob format
Uploader.upload(file);
```

### Downloader

```js
const Downloader = arcanaInstance.getDownloader();
// did: DID of file which you want to download
Downloader.download(did);
```

### Access

```js
const Access = arcanaInstance.getAccess();
```

#### Share a file

```js
// did: DID of file to be shared, can be a hexadecimal string or an array of such strings
// address: recipients address, similar type as "did"
// validity (optional): For how long will be the user able to download the file, e.g. [400] would mean 400 seconds.
Access.share(did, address);
```

#### Revoke access

```js
// did: DID of file from which access is removed
// address: Address of the user who's access is getting revoked
Access.revoke(did, address);
```

#### Change File owner

```js
// address: new owner's address
Access.changeFileOwner(did, address);
```

#### Delete File

```js
Access.deleteFile(did);
```

#### Usage

```js
//Get consumed and total storage of the current user
let [consumed, total] = await Access.getUploadLimit();
```

```js
//Get consumed and total bandwidth of the current user
let [consumed, total] = await Access.getDownloadLimit();
```

#### File shared with current user

```js
let files = await arcanaInstance.sharedFiles();
```

#### List of files uploaded by the user

```js
let files = await arcanaInstance.myFiles();
```

### Download DID without any app id

```js
// Pass the provider if required otherwise it will choose window.ethereum by default
let arcanaInstance = new arcana.storage.StorageProvider();
await arcanaInstance.downloadDID('<did of the file>');
```

### Add Metdata URL for NFT use case

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

### CallBack Functions

#### 1. Upload

##### Basic

###### 1.1 On Success

```js
Uploader.onSuccess = () => {
  console.log('Completed file upload');
};
```

###### 1.2 On Progress

```js
Uploader.onProgress = (bytesUploaded, bytesTotal) => {
  console.log("Percentage completed", (100*bytesUploaded)/bytesTotal)
};
```

##### Advanced: Error Handling

For every user action to upload a file, the Storage SDK splits the file into multiple parts and uploads them to the Arcana Store. If any of the file segment fails to transmit, it is automatically retried until all file segments are transferred. The automatic retry counter is hard coded to '5' in the beta release and the dApp developer cannot change this configuration.

During file upload operation, if there are any uploading errors, dApp developers can address those by the following error handling options provided by the Storage SDK:

* Exception handling: Catch
* onError()

It is **recommended** that dApp developers using *Exception handling - catch* for handling file upload errors.

###### Exception Handling: Catch

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

###### onError()

The onError option is available only for advanced usage by dApp developers. The Storage SDK typically handles file upload errors internally for 4 retries, automatically, in case of segment upload failure. If it fails for the fifth time, then it invokes `onError()` callback to enable dApp developer to take appropriate action or delay file transfer to deal with intermittent network failures.


```js
Uploader.onError = (err) => {
  console.log('Error', err);
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

### On Change methods

##### Network change
```js
// Below is default function, which can be modified by the developers
arcanaInstance.onNetworkChange = (oldNetwork, newNetwork) => {
  window.location.reload()
}
```
##### Account change
```js
// Below is default function, which can be modified by the developers
arcanaInstance.onAccountChange = (accounts) => {
  window.location.reload()
}
```

## Error List

| Code         | Message                                                  | Reason                                                                                                     |
| ------------ | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| UNAUTHORIZED | You can't download this file                             | Trying to download a file which is neither owned by you nor shared with you                                |
| TRANSACTION  | This function can only be called by file owner           | Only owner of the file have access to the function i.e, either to delete, revoke or transfer file          |
| TRANSACTION  | User is not active                                       | Your account is either disabled or deleted                                                                 |
| TRANSACTION  | User not registered for the app                          | Your account is not registered for the app                                                                 |
| TRANSACTION  | Only factory contract can call this function             | Only factory contract can set the app level limit i.e, storage and bandwidth                               |
| TRANSACTION  | No space left for app                                    | Your current app's storage or bandwidth limit has been consumed                                            |
| TRANSACTION  | No space left for user                                   | You have already consumed your storage or bandwidth limit                                                  |
| TRANSACTION  | Not a trusted forwarder nor factory contract             | For meta transaction, transaction should happen from valid factory or farwarder contract                   |
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
| WRONG_NETWORK  | Wrong Network       | You need to change the network/RPC url in your wallet |
