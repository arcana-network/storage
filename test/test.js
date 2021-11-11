const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const address = '0x73A15a259d1bB5ACC23319CCE876a976a278bE82';
//hardhat
// const address = '0x5CE5D307E4D3FA292f1F7F88C3F75Fc911554396';
//polygon
// const address = '0x86c89626024123Fe01d4389Ea277895bb80f4a1d';
// arcana
// const address = '0x37032e133884fcE151aF8a54A440177210313743';
// local polygon
// const address = '0xA512F9AeDEd064D2DDd266812A834543EC93Ebaf';
const gateway = 'http://localhost:9010/';
const address = 1;
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
  strEmail = strEmail + '@';
  for (var j = 0; j < 8; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + '.com';
  return strEmail;
};

describe('Upload File', () => {
  let file,
    did,
    wallet,
    api,
    arcanaInstance,
    access,
    receiverWallet,
    sharedInstance,
    file_count = 0;

  before(async () => {
    file = MockFile('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt', 2 ** 20, 'image/txt');
    file = new File([file], file.name, { type: file.type });
    const wallet = await arcana.utils.getRandomWallet();
    arcanaInstance = new arcana.storage.Arcana(address, wallet.privateKey, makeEmail(), gateway);
    await arcanaInstance.login();
  });

  it('My Files should return empty array', async () => {
    let files = await arcanaInstance.myFiles();
    chai.expect(files.length).equal(0);
  });

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
    upload.onError = (err) => {
      console.log(err);
      throw Error(err);
    };
    while (!complete) {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
  });

  it('Fail download tranaction', async () => {
    receiverWallet = await arcana.utils.getRandomWallet();
    sharedInstance = new arcana.storage.Arcana(address, receiverWallet, makeEmail(), gateway);
    let download = await sharedInstance.getDownloader();
    try {
      await download.download(did);
      throw Error('should throw an error');
    } catch (err) {
      chai.expect(err.code).equal('UNAUTHORIZED');
      chai.expect(err.message).equal("You can't download this file");
    }
  });

  it('Fail revoke transaction', async () => {
    let access = await sharedInstance.getAccess();
    try {
      await access.revoke(did, receiverWallet.address);
      throw Error('should throw an error');
    } catch (err) {
      chai.expect(err.code).equal('TRANSACTION');
      chai.expect(err.message).equal('This function can only be called by file owner');
    }
  });

  // it('Fail to upload a big file', async () => {
  //   const bigFile = MockFile('asdf', 10000001, 'image/txt');
  //   let upload = await arcanaInstance.getUploader();
  //   try {
  //     await upload.upload(bigFile);
  //     upload.onSuccess = () => {
  //       file_count += 1;
  //     };
  //     throw Error('No error occured');
  //   } catch (err) {
  //     console.log(err);
  //     chai.expect(err.code).equal('TRANSACTION');
  //     chai.expect(err.message).equal('No space left for user');
  //   }
  // });

  it('Should skip uploading same file', async () => {
    let upload = await arcanaInstance.getUploader();
    upload.onSuccess = () => {
      console.log('Skip file upload');
    };
    did = await upload.upload(file);
  });

  it('My files', async () => {
    let files = await arcanaInstance.myFiles();
    chai.expect(files.length).equal(file_count);
    chai.expect(files[0]['did']).equal(did.substring(2));
    chai.expect(files[0]['size']).equal(file.size);
  });

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

  it('Share file', async () => {
    access = await arcanaInstance.getAccess();
    let tx = await access.share([did], [receiverWallet._signingKey().publicKey], [150]);
    chai.expect(tx).not.null;
  });

  it('Shared users', async () => {
    chai.expect((await access.getSharedUsers(did))[0]).equal(receiverWallet.address);
    chai.expect((await access.getSharedUsers(did)).length).equal(1);
  });

  it('Download shared file', async () => {
    let download = await sharedInstance.getDownloader();
    await download.download(did);
  });

  it('Files shared with me', async () => {
    let files = await sharedInstance.sharedFiles();
    chai.expect(files.length).equal(1);
    chai.expect(files[0]['did']).equal(did.substring(2));
    chai.expect(files[0]['size']).equal(file.size);
  });

  it('Revoke', async () => {
    let tx = await access.revoke(did, receiverWallet.address);
    chai.expect(tx).not.null;
  });

  it('Generate Wallet', async () => {
    const wallet = await arcana.utils.getWallet('0x22fd4c393275398cbde74f85af7be2b79858bea05182250024d3e7f296b838b3');
    chai.expect(wallet.address).to.equal('0xa23039d0Fca2af54E8b9ac2ECaE78e3084Cc687b');
  });

  it('Change File Owner', async () => {
    let tx = await access.changeFileOwner(did, receiverWallet.address);
    chai.expect(tx).not.null;
  });

  it('Delete File', async () => {
    const Access = await sharedInstance.getAccess();
    let files = await sharedInstance.sharedFiles();
    chai.expect(files.length).equal(1);
    chai.expect(files[0].did).equal(did.replace('0x', ''));
    let tx = await Access.deleteFile(did);
    files = await sharedInstance.sharedFiles();
    chai.expect(files.length).equal(0);
    chai.expect(tx).not.null;
  });

  it('Get consumed and total upload limit', async () => {
    const Access = await arcanaInstance.getAccess();
    let [consumed, total] = await Access.getUploadLimit(did);
    chai.expect(consumed).equal(file.size);
  });

  it('Get consumed and total download limit', async () => {
    const Access = await sharedInstance.getAccess();
    let [consumed, total] = await Access.getDownloadLimit(did);
    chai.expect(consumed).equal(file.size);
  });
});
