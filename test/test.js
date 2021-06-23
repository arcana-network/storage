const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateString = (length) => {
  let result = ' ';
  const charactersLength = characters.length;
  while (result.length < length) {
    // result += characters.charAt(Math.floor(Math.random() * charactersLength));
    result += '1,'; 
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
  let file;

  before(() => {
    file = MockFile('mock2.txt', 2 ** 20);
    window.file = file;
    window.privateKey = '0x1068e1d200d2bd3140445afec1ac7829f0012b87ff6c646f6b01023c95db13c8';
    window.publicKey =
      '19095de907dde35066bfb780f520cc5a026463f6dc0e8acde90bebf6691d5bf0ed503338414631fc5b6ccc8cad7487ad2c76ee1813a370ae14803912f43d8fd7';
  });

  it('Should upload a file', async () => {
    let upload = new arcana.Uploader();
    upload.upload(file);
  });

  it('Should download a file', async() => {
    let download = new arcana.Downloader();
    download.download("0x5bbbb93400d07ea5ede2a46a8079307dda8e8d3410c76800f1a2925c2cf0a4db", "296d87619f06a41f509db5c2f4ded372+9602b753-b5aa-4de2-8804-3a3614855949")
  })
});
