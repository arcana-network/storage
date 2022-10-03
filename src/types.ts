interface UploadParams {
  chunkSize: number;
  duplicate: boolean;
  publicFile: boolean;
}

interface Rule {
  address: string;
  validity: number;
}

interface CustomError extends Error {
    code?: string;
}