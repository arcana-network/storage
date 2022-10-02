interface UploadParams {
  chunkSize: number;
  duplicate: boolean;
  publicFile: boolean;
}

interface Rule {
  address: string;
  validity: number;
}
