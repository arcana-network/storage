const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

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
    file = MockFile('mock.txt', 2 * 2 ** 20);
    const wallet = await arcana.utils.getWallet('0x1068e1d200d2bd3140445afec1ac7829f0012b87ff6c646f6b01023c95db13c8');
    arcanaInstance = new arcana.Arcana(wallet);
  });

  it('Should upload a file', async () => {
    let upload = await arcanaInstance.getUploader();
    upload.onSuccess = () => {
      console.log('Completed file upload');
    };
    did = await upload.upload(file);
    await new Promise((resolve) => setTimeout(resolve, 4000));
  });

  it('Should download a file', async () => {
    let download = await arcanaInstance.getDownloader();
    await download.download(did);
  });

  it('Share file', async () => {
    access = await arcanaInstance.getAccess();
    receiverWallet = await arcana.utils.getWallet('0xa11c0370501f00f2ebe942b81a546e05b919a09bc9c45ea78a7181bbabcfa4f8');
    let tx = await access.share([did], [receiverWallet._signingKey().publicKey], [150]);
    chai.expect(tx).not.null;
  });

  it('Download shared file', async () => {
    sharedIntance = new arcana.Arcana(receiverWallet);
    let download = await sharedIntance.getDownloader();
    await download.download(did);
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
