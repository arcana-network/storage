const MockFile = (name, size, mimeType) => {
  name = name || 'mock.txt';
  size = size || 1024;
  mimeType = mimeType || 'plain/txt';

  function range(count) {
    var output = '';
    for (var i = 0; i < count; i++) {
      output += 'a';
    }
    return output;
  }

  var blob = new Blob([range(size)], { type: mimeType });
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
    file = MockFile('mock2.txt', 5 * 2 ** 20);
  });

  it('Should upload a file', async () => {
    let upload = new arcana.Uploader('http://localhost:1080/files/');
    upload.upload(file);
  });
});
