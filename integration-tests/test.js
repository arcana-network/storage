const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const delay = ms => new Promise(res => setTimeout(res, ms));
const appAddress = "0xf3d49dC1cbF960A2e30c5C707801848f541a3064"

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
    did1,
    did2,
    arcanaInstance,
    access,
    receiverWallet,
    sharedInstance,
    file_count = 0;


  before(async () => {
    file = MockFile('qwertyuiopasdfghjklzxcvbnmqwasdfasdfasdfasdfertyuiop.txt', 10, 'text/plain');
    file = new File([file], file.name, { type: file.type });
    arcanaInstance = await arcana.storage.StorageProvider.init({
      appAddress
    });

  });



  it.only('Upload', async () => {
    did1 = await arcanaInstance.upload(file);
    did2 = await arcanaInstance.upload(file);
    console.log(did1, did2)
  });


  it.only('Share', async () => {
    let address = "0xbd92a7c9BF0aE4CaaE3978f9177A696fe7eA179F"
    await arcanaInstance.files.share(did1, address)
    await arcanaInstance.files.share(did2, address)
    await arcanaInstance.files.revoke(did1, address)
    alert("change account")
    let store = await arcana.storage.StorageProvider.init({
      appAddress,
    });
    await store.download(did2)  
  });

  it('Download', async () => {
  
    await arcanaInstance.download(did)  
  })

  it.skip("Delete file", async () => {
    let my_file_old = await arcanaInstance.files.list(arcana.storage.AccessTypeEnum.MY_FILES);
    await arcanaInstance.files.delete(did)
    let my_file_new = await arcanaInstance.files.list(arcana.storage.AccessTypeEnum.MY_FILES);
    chai.expect(my_file_old.length - my_file_new.length).equal(1); 
  })

});
