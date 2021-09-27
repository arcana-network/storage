const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const address = '0x73A15a259d1bB5ACC23319CCE876a976a278bE82';

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
  let file, did, wallet, api, arcanaInstance, access, receiverWallet, sharedIntance;

  before(async () => {
    file = MockFile('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt', 2 ** 20, 'image/txt');
    file = new File([file], file.name, { type: file.type });
    const wallet = await arcana.utils.getRandomWallet();
    arcanaInstance = new arcana.Arcana(address, wallet.privateKey, makeEmail());
    await arcanaInstance.login();
  });

  it('Should upload a file', async () => {
    let upload = await arcanaInstance.getUploader();
    let complete = false;
    upload.onSuccess = () => {
      console.log('Completed file upload');
      complete = true;
    };
    did = await upload.upload(file);
    while (complete) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('Should skip uploading same file', async () => {
    let upload = await arcanaInstance.getUploader();
    upload.onSuccess = () => {
      console.log('Skip file upload');
    };
    did = await upload.upload(file);
  });

  it('My files', async () => {
    let files = await arcanaInstance.myFiles();
    chai.expect(files.length).equal(1);
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
    receiverWallet = await arcana.utils.getRandomWallet();
    console.log('DID', did, receiverWallet.address);
    let tx = await access.share([did], [receiverWallet._signingKey().publicKey], [150]);
    chai.expect(tx).not.null;
  });

  it('Download shared file', async () => {
    sharedIntance = new arcana.Arcana(address, receiverWallet, makeEmail());
    let download = await sharedIntance.getDownloader();
    await download.download(did);
  });

  it('Files shared with me', async () => {
    let files = await sharedIntance.sharedFiles();
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
    const Access = await sharedIntance.getAccess();
    let tx = await Access.deleteFile(did);
    chai.expect(tx).not.null;
  });
});
