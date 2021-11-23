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
import { Arcana } from '@arcana/storage/dist/standalone/storage.umd';
```

## Usage

### Create an Arcana instance

```js
// address: Smart contract address of app
// private key: Secp256K private key
const arcanaInstance = new arcana.storage.Arcana({ appId, privateKey, email });
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

| Code         | Message                      | Reason                                                                      |
| ------------ | ---------------------------- | --------------------------------------------------------------------------- |
| UNAUTHORIZED | You can't download this file | Trying to download a file which is neither owned by you nor shared with you |
| TRANSACTION  | \*                           | Smart contract Errors                                                       |
| TRANSACTION  | No space left for user       | You have already consumed your storage or bandwidht limit                   |
