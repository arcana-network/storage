export interface UploadParams {
  chunkSize: number;
  publicFile: boolean;
}

export interface Rule {
  address: string;
  validity: number;
}

export interface CustomError extends Error {
    code?: string;
}