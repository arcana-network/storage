Storage SDK Reference Guide - v0.1.6 / [Exports](modules.md)

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

#### Get Listed of users who are having access to the file
```js
Access.getSharedUsers(did)
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

| Error	| Description |
| ----  | ------ |
| unauthorized_user	| Trying to download a file which is neither owned by you nor shared with you. |
| only_file_owner	|	Only the owner of the file have access to the function i.e, either to delete, revoke or transfer file etc. |
| non_registered_user	|	Your account is not registered for the app. |
| only_factory_contract	|	Only factory contract has access. The access can be to add new app or setup app level limit i.e, storage and bandwidth |
| no_app_space	|	Your current app's storage or bandwidth limit has been consumed. |
| no_user_space	|	You have already consumed your storage or bandwidth limit. |
| non_trusted_forwarder_or_factory	|	For meta-transaction, transaction should happen from valid factory or forwarder contract. |
| file_already_uploaded	|	You cannot upload a file that is already uploaded by a different user address. |
| zero_file_size	|	Your file size must not be null while uploading. |
| zero_validity	|	Validity must be a non-zero value as it is the access specifier of the duration for which file sharing is enabled. |
| avoid_sharing_file_themselves | Avoid sharing file to themselves. |
| already_shared | file is already shared with the user. |
| file_not_found	|	File with the specified DID does not exist in the Arcana Store. |
| no_file_access | Access not granted by current user. |
| invalid_address | address provided is not valid or zero address. |
| file_ownership_transfer_to_same_address | New owner cannot be same as old owner while changing file owner. |
| only_gateway_node	|	Only gateway node has access to the function. |
| invalid_function_signature	|	Meta-transaction failed. The function you are trying to call does not exist. Check the function signature. |
| DID_NFT_linked | DID is linked with NFT.Hence, ownership transfer of file cannot be done. |
| DID_NFT_linked_and_cannot_be_deleted | DID is linked with NFT. Hence, file cannot be deleted. |
| DID_NFT_are_already_linked | DID and NFT are already linked. No need to link again. |
| NFT_owner_DID_owner_mismatch | NFT owner and DID owner are not matching. |
| already_in_UI_mode | Already in UI mode. No need to set again. |
| wrong_network  | You need to change the network/RPC URL in your wallet |

## Storage SDK Reference Docs

You can auto-generate markdown and html documentation containing Storage SDK Reference Guide. Follow teh steps listed below:

### Markdown Documentation

```
npm run docs
```

### HTML Documentation

```
npm run htmldocs
```
