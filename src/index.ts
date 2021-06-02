import Download from "./download"


export class Upload {
  upload = (file: File) => {
    // let upload = new tus.Upload(file, {
    //   endpoint: 'http://localhost:1080/files/',
    //   retryDelays: [0, 3000, 5000, 10000, 20000],
    //   metadata: {
    //     filename: file.name,
    //     filetype: file.type,
    //   },
    //   onError: function (error) {
    //     console.log('Failed because: ' + error);
    //   },
    //   onProgress: function (bytesUploaded, bytesTotal) {
    //     var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
    //     console.log(bytesUploaded, bytesTotal, percentage + '%');
    //   },
    //   onSuccess: function () {
    //     console.log('Download %s from %s', upload.url);
    //     localStorage.setItem("download url", upload.url)
    //   },
    //   fileReader: new FileReader("asdf"),
    //   chunkSize: 4*2 ** 20,
    // });

    // upload.start();

  // let download = new Download();
  //   download.decrypt();
   let hash = new KeyGen(file);
   hash.getKey()
  };

}