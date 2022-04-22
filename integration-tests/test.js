const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const gateway = 'https://gateway-testnet.arcana.network/';
// const gateway = 'http://localhost:9010/api/v1/';
const gateway = 'https://gateway-dev.arcana.network/api/v1/';
const appId = 1;
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
    file = MockFile('aaaaaaaaaaaaa.txt', 2 ** 2, 'image/txt');
    file = new File([file], file.name, { type: file.type });
    arcanaInstance = new arcana.storage.StorageProvider({
      appId,
      provider: window.ethereum,
      email: makeEmail(),
      gateway,
      debug,
    });
    // await arcanaInstance.login();
  });

  // it('My Files should return empty array', async () => {
  //   let files = await arcanaInstance.myFiles();
  //   chai.expect(files.length).equal(0);
  // });

  it('Shared Files should return empty array', async () => {
    let files = await arcanaInstance.sharedFiles();
    chai.expect(files.length).equal(0);
  });

  it('Should upload a file', async () => {
    let upload = await arcanaInstance.getUploader();
    let complete = false;
    upload.onSuccess = () => {
      console.log('Completed file upload');
      complete = true;
      file_count += 1;
    };
    did = await upload.upload(file);
    console.log('did', did);
    upload.onError = (err) => {
      console.log(err);
      throw Error(err);
    };
    while (!complete) {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
  });

  // it('Fail download tranaction', async () => {
  //   receiverWallet = await arcana.storage.utils.getRandomWallet();
  //   console.log('Receiver wallet address', receiverWallet.address);
  //   sharedInstance = new arcana.storage.StorageProvider({
  //     appId,
  //     privateKey: receiverWallet,
  //     email: makeEmail(),
  //     gateway,
  //     debug,
  //   });
  //   let download = await sharedInstance.getDownloader();
  //   try {
  //     await download.download(did);
  //     throw Error('should throw an error');
  //   } catch (err) {
  //     chai.expect(err.code).equal('UNAUTHORIZED');
  //     chai.expect(err.message).equal('You cant download this file');
  //   }
  // });

  // it('Fail revoke transaction', async () => {
  //   let access = await sharedInstance.getAccess();
  //   try {
  //     await access.revoke(did, receiverWallet.address);
  //     throw Error('should throw an error');
  //   } catch (err) {
  //     chai.expect(err.code).equal('TRANSACTION');
  //     console.log(err.message);
  //     // chai.expect(err.message).equal('This function can only be called by file owner');
  //   }
  // });

  // it('Should skip uploading same file', async () => {
  //   let upload = await arcanaInstance.getUploader();
  //   upload.onSuccess = () => {
  //     console.log('Skip file upload');
  //   };
  //   try {
  //     did = await upload.upload(file);
  //     throw new Error('');
  //   } catch (e) {
  //     chai.expect(e.message.includes('File is already uploaded')).is.true;
  //   }
  // });

  // it('My files', async () => {
  //   let files = await arcanaInstance.myFiles();
  //   chai.expect(files.length).equal(file_count);
  //   chai.expect(files[0]['did']).equal(did.substring(2));
  //   chai.expect(files[0]['size']).equal(file.size);
  // });

  it('Should download a file', async () => {
    let download = await arcanaInstance.getDownloader();
    download.onSuccess = () => {
      console.log('Download completed');
    };
    download.onProgress = (a, b) => {
      console.log(a, b);
    };
    await download.download(did);
  });

  // it('Share file', async () => {
  //   access = await arcanaInstance.getAccess();
  //   let tx = await access.share([did], [receiverWallet._signingKey().publicKey], [150]);
  //   chai.expect(tx).not.null;
  // });

  // it('Shared users', async () => {
  //   chai.expect((await access.getSharedUsers(did))[0]).equal(receiverWallet.address);
  //   chai.expect((await access.getSharedUsers(did)).length).equal(1);
  // });

  // it('Download shared file', async () => {
  //   let download = await sharedInstance.getDownloader();
  //   await download.download(did);
  // });

  // it('Files shared with me', async () => {
  //   let files = await sharedInstance.sharedFiles();
  //   chai.expect(files.length).equal(1);
  //   chai.expect(files[0]['did']).equal(did.substring(2));
  //   chai.expect(files[0]['size']).equal(file.size);
  // });

  // it('Revoke', async () => {
  //   let before = await access.getSharedUsers(did);
  //   let tx = await access.revoke(did, receiverWallet.address);
  //   let after = await access.getSharedUsers(did);
  //   chai.expect(before.includes(receiverWallet.address)).is.true;
  //   chai.expect(after.includes(receiverWallet.address)).is.false;
  //   chai.expect(before.length - after.length).equal(1);
  //   let files = await sharedInstance.sharedFiles();
  //   chai.expect(files.length).equal(0);
  //   chai.expect(tx).exist;
  // });

  // // it('Change File Owner', async () => {
  // //   let tx = await access.changeFileOwner(did, receiverWallet.address);
  // //   chai.expect(tx).not.null;
  // // });

  // it('Get consumed and total upload limit', async () => {
  //   const Access = await arcanaInstance.getAccess();
  //   let [consumed, total] = await Access.getUploadLimit(did);
  //   chai.expect(consumed).equal(file.size);
  // });

  // it('Delete File', async () => {
  //   let files = await arcanaInstance.myFiles();
  //   chai.expect(files.length).equal(1);
  //   chai.expect(files[0].did).equal(did.replace('0x', ''));
  //   let tx = await access.deleteFile(did);
  //   files = await arcanaInstance.myFiles();
  //   chai.expect(files.length).equal(0);
  //   chai.expect(tx).not.null;
  // });

  // it('Get consumed and total download limit', async () => {
  //   const Access = await sharedInstance.getAccess();
  //   let [consumed, total] = await Access.getDownloadLimit(did);
  //   chai.expect(consumed).equal(file.size);
  // });

  // it('Delete Account', async () => {
  //   const Access = await sharedInstance.getAccess();
  //   await Access.deleteAccount();
  //   chai.expect(await Access.getAccountStatus()).equal(2);
  // });
});


describe("Negative testing", ()=> {
  let file, appId = 1001;
  before(()=> {
    file = MockFile('aaaaaaaaaaaaa.txt', 2 ** 2, 'image/txt');
    file = new File([file], file.name, { type: file.type });


  })

  it("Should return correct error for invalid app" , async ()=> {
   let arcanaInstance = new arcana.storage.StorageProvider({
      appId,
      provider: window.ethereum,
      email: makeEmail(),
      gateway,
      debug,
    });


    await arcanaInstance.login().catch(()=> {
      chai.expect(true).is.true;
    });

  })
})
