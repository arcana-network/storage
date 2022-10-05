interface UploadParams {
  chunkSize: number;
  publicFile: boolean;
}

interface Rule {
  address: string;
  validity: number;
}

interface CustomError extends Error {
  code?: string;
}
