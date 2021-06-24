const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateString = (length) => {
  let result = ' ';
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

describe('Upload File', () => {
  let file, did;

  before(() => {
    file = MockFile('mock2.txt', 2 ** 20);
    window.file = file;
    window.privateKey = '0x1068e1d200d2bd3140445afec1ac7829f0012b87ff6c646f6b01023c95db13c8';
    window.publicKey =
      '19095de907dde35066bfb780f520cc5a026463f6dc0e8acde90bebf6691d5bf0ed503338414631fc5b6ccc8cad7487ad2c76ee1813a370ae14803912f43d8fd7';
  });

  it('Should upload a file', async () => {
    let upload = new arcana.Uploader();
    did = await upload.upload(file);
    await new Promise(resolve => setTimeout(resolve, 2000));
  });

  it('Should download a file', async() => {
    let download = new arcana.Downloader();
    download.download(did)
  })
});
