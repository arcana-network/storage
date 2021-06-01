import axios from "axios";
import Decryptor from "./decrypt"

const instance = axios.create({
    baseURL: "http://localhost:1080/"
});

export function createAndDownloadBlobFile(body, filename, extension = 'pdf') {
  const blob = new Blob([body]);
  const fileName = `${filename}.${extension}`;
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, fileName);
  } else {
    const link = document.createElement('a');
    // Browsers that support HTML5 download attribute
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

export default class Download{
    decrypt = async() => {
        let res = await instance.get("/files/0a6d7a320db02ec132a8ee2959afb780", {
            responseType: "arraybuffer"
        });
        let Dec = new Decryptor("b6551d0da85fc275fe613ce37657fb8d");
        createAndDownloadBlobFile(await Dec.decrypt(res.data, 0), "download", "txt")
    }
}