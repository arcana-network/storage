// const { expect } = require("chai");
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const gateway = 'https://gateway-testnet.arcana.network/';
const gateway = 'http://localhost:9010/';
// const gateway = 'https://gateway01-testnet.arcana.network/';
// const gateway = 'https://gateway-dev.arcana.network/';
const chainId = 40404;
const appId = 516;
// const appId = 28;
const delay = ms => new Promise(res => setTimeout(res, ms));


const debug = false;
const generateString = (length) => {
  let result = '';
  const charactersLength = characters.length;
  while (result.length < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const MockFile = (name, size, mimeType) => {
  name = name || 'mock.txt';
  size = size || 1024;
  mimeType = mimeType || 'plain/txt';
  var blob = new Blob([generateString(size)], { type: mimeType });
  blob.lastModifiedDate = new Date();
  blob.name = name;
  return blob;
};

const bytesToHexString = (bytes) => {
  if (!bytes) return null;
  bytes = new Uint8Array(bytes);
  var hexBytes = [];
  for (var i = 0; i < bytes.length; ++i) {
    var byteString = bytes[i].toString(16);
    if (byteString.length < 2) byteString = '0' + byteString;
    hexBytes.push(byteString);
  }
  return hexBytes.join('');
};

const makeEmail = () => {
  var strValues = 'abcdefg12345';
  var strEmail = '';
  var strTmp;
  for (var i = 0; i < 10; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = '';
  strEmail = strEmail + '@example.com';
  return strEmail;
};

describe('Upload File', () => {
  let file,
    did,
    arcanaInstance,
    access,
    receiverWallet,
    sharedInstance,
    file_count = 0;


  before(async () => {
    file = MockFile('aaaaaaaaaaaaa.txt', 2 ** 10, 'text/plain');
    file = new File([file], file.name, { type: file.type });
    arcanaInstance = await arcana.storage.StorageProvider.init({
      appId,
      provider: window.ethereum,
      email: makeEmail(),
      chainId,
      gateway,
      debug,
    });
  });

  it('Upload and share', async () => {
    // let file = MockFile('aaaaaaaaaaaaa.txt', 10, 'text/plain');
    // did = await arcanaInstance.upload(file);
    // console.log('did', did);
    let did = "0257b566bc3fea825635298d1c8565d11c94bf6e5a697643c11b43c129b6c13b"
    let address = "0x64b69590954570d63bb60b9bba4ab3814f1a3a23"
    await arcanaInstance.files.share(did, address)
    await arcanaInstance.files.revoke(did, address)
    // await arcanaInstance.download(did)
  });



  // it('Upload public file', async () => {
  //   let file = MockFile('aaaaaaaaaaaaa.txt', 4, 'text/plain');
  //   did = await arcanaInstance.upload(file, {publicFile: true});
  //   console.log('did', did);
  //   await arcanaInstance.download(did)
  // });    
});
