const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const delay = ms => new Promise(res => setTimeout(res, ms));
const appAddress = "Fd3d7b91fbB83c418697C66F134E06193590Ff90"
const chainId = 40404;
const gateway = "http://localhost:9010/"

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
    arcanaInstance;


  before(async () => {
    file = MockFile('qwertyuiopasdfghjklzxcvbnmqwertyuiop.txt', 10, 'text/plain');
    file = new File([file], file.name, { type: file.type });
    arcanaInstance = await arcana.storage.StorageProvider.init({
      appAddress,
      chainId,
      gateway
    });
    let allFiles = await arcanaInstance.files.all()
    console.log({allFiles})
  });



  it('Upload', async () => {
    did1 = await arcanaInstance.upload(file);
    console.log(did1)
  });

  it.skip('Download', async () => {
    await arcanaInstance.download(did1)  
  })

  it('Share', async () => {
    let address = "0xbd92a7c9BF0aE4CaaE3978f9177A696fe7eA179F"
    await arcanaInstance.files.share(did1, address)
    alert("change account")
    let store = await arcana.storage.StorageProvider.init({
      appAddress,
      chainId,
      gateway
    });
    await store.download(did1)  
  });


  it.skip('DownloadNFT', async () => {
    // did1 = "02220d65fe78758cb650441217004b9fa79249f171918055af29b85fba947e37";
    await arcanaInstance.linkNft(did1, 1, "0x35B33203DcFd0933a773B28C9Fce13012B5a1434", 80001)
    await arcanaInstance.download(did1)
  })

  it.skip("Delete file", async () => {
    let my_file_old = await arcanaInstance.files.list(arcana.storage.AccessTypeEnum.MY_FILES);
    await arcanaInstance.files.delete(did)
    let my_file_new = await arcanaInstance.files.list(arcana.storage.AccessTypeEnum.MY_FILES);
    chai.expect(my_file_old.length - my_file_new.length).equal(1);
  })
  // it('Upload public file', async () => {
  //   let file = MockFile('aaaaaaaaaaaaa.txt', 4, 'text/plain');
  //   did = await arcanaInstance.upload(file, {publicFile: true});
  //   console.log('did', did);
  //   await arcanaInstance.download(did)
  // });
});
