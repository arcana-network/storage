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
// private key: Secp256K private key
const arcanaInstance = new arcana.storage.StorageProvider({ appId, privateKey, email });
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
const Access = new arcanaInstance.getAccess();
```

#### Share a file

```js
// did: DID of file to be shared
// publicKey: recipients public key
// validity: For how long will be the user able to download the file
Access.share([did], [publicKey], [validity]);
```

#### Revoke access

```js
// did: DID of file from which access is removed
// address: Address of the user who's access is getting revoked
Access.revoke(did, address);
```

<!-- #### Change File owner -->

<!-- ```js -->
<!-- // address: new owner's address
Access.changeFileOwner(did, address);
``` -->

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

### FallBack Functions

#### 1. Upload

##### 1.1 On Success

```
uploader.onSuccess = () => {
  console.log('Completed file upload');
};
```

##### 1.2 On Error

```
uploader.onError = (err) => {
  console.log('Error', err);
};
```

##### 1.3 On Progress

```
uploader.onProgress = (bytesUploaded: number, bytesTotal: number) => {
  console.log("Completed", bytesUploaded, "out of", bytesTotal)
};
```

#### 2. Download

##### 2.1 On Success

```
downloader.onSuccess = () => {
  console.log('Completed file download');
};
```

##### 2.2 On Progress

```
downloader.onProgress = (bytesDownloaded: number, bytesTotal: number) => {
  console.log("Completed", bytesDownloaded, "out of", bytesTotal)
};
```

## Error List

| Code         | Message                                                  | Reason                                                                      |
| ------------ | -------------------------------------------------------- | --------------------------------------------------------------------------- |
| UNAUTHORIZED | You can't download this file                             | Trying to download a file which is neither owned by you nor shared with you 
| TRANSACTION  | This function can only be called by file owner           | Only owner of the file have access to the function i.e, either to delete, revoke or transfer file 
| TRANSACTION  | User is not active                                       | Your account is either disabled or deleted 
| TRANSACTION  | User not registered for the app                          | Your account is not registered for the app 
| TRANSACTION  | Only factory contract can call this function             | Only factory contract can set the app level limit i.e, storage and bandwidth 
| TRANSACTION  | No space left for app                                    | Your current app's storage or bandwidth limit has been consumed 
| TRANSACTION  | No space left for user                                   | You have already consumed your storage or bandwidth limit 
| TRANSACTION  | Not a trusted forwarder nor factory contract             | For meta transaction, transaction should happen from valid factory or farwarder contract
| TRANSACTION  | Owner already exist for this file                        | You cannot upload a file that is already uploaded by different user address 
| TRANSACTION  | Should not be 0                                          | Your file size must not be null while uploading 
| TRANSACTION  | Function can only be called by the assigned storage node | Only assigned storage node has access to the function  
| TRANSACTION  | Not file owner                                           | You are not the file owner thus action cannot be done. Kindly verify your account address 
| TRANSACTION  | Validity must be non zero                                | Validity is the access specifier and cannot be zero while sharing a file 
| TRANSACTION  | User was not deleted to reactivate                       | Your account was not deleted to reactivate 
| TRANSACTION  | An app already created with this Id                      | Use a valid app ID. Try configuring the app at https://dashboard.arcana.network/ to get app ID 
| TRANSACTION  | App calling the function is not registered               | configure the app at https://dashboard.arcana.network/ 
| TRANSACTION  | Please add some nodes to authenticate user               | 
| TRANSACTION  | Function can only called by nodes                        | 
| TRANSACTION  | Already voted                                            | 
| TRANSACTION  | Only gateway node can call this function                 | Only gateway node has access to the function 
| TRANSACTION  | File must be uploaded before downloading it              | File not found 
| TRANSACTION  | MinimalForwarder: signature does not match request       | Meta transaction failed. The function you are trying to call does not exists. check the function signature 