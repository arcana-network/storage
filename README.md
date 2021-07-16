# arcana-js-sdk

## Inlude arcana.js in your <head> of html
```html
<script src="../path/to/sdk/arcana.js"></script>
```
## Create a arcana intance
```js
  // wallet: instance of ethersjs Wallet
  // convergence: seceret for a specific user
  const arcanaInstance = new arcana.Arcana(wallet, convergence);
```

## Uploader  
```js
  const Uploader = arcanaInstance.getUploader();
  // file: Blob format
  Uploader.upload(file);
```


## Downloader
```js
  const Downloader = arcanaInstance.getDownloader();
  // did: DID of file which you want to download
  Downloader.download(did)
```

## Access
```js
  const Access = new arcanaInstance.getAccess();
```
#### Share a file
```js
  // did: DID of file to be shared
  // publicKey: recipients public key
  // validity: For how long will be the user able to download the file
  Access.share([did], [publicKey], [validity])
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
