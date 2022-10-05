export interface UploadParams {
  chunkSize: number;
  duplicate: boolean;
  publicFile: boolean;
}

export interface Rule {
  address: string;
  validity: number;
}

export interface CustomError extends Error {
    code?: string;
}
