// export interface IRequestWrapper {
//     begin: (successHandler, errorHandler) => void;
// }

export interface IReadResult {
    data: ArrayBuffer | string;
    length: number;
}

// export interface IUploadOptions {
//     k: number;
//     n: number;
//     happy: number;
// }

// export interface IUnpackedUrl {
//     encryptionKey: string;
//     k: number;
//     n: number;
//     rootHash: string;
//     size: number;
// }

// export interface IDownloadOptions {
//     downloadPath: string;
//     app_name?: string;
//     downloadUri?: string;
//     request_id?: string;
//     user_name?: string;
//     type?: FileDownloadType;
//     pure?: boolean;
//     useWorkers?: boolean;
// }

// export const EosDefaults = {
//     actor: process.env.actor,
//     appid: process.env.appid,
//     endpoint: "https://jungle2.cryptolions.io:443",
//     privateKey: process.env.privateKey,
//     userName: process.env.userName,
// };

// export const getTableRowDefaults = {
//     code: "nebuloustest",
//     index_position: 3,
//     json: true,
//     key_type: "i64",
//     limit: 1,
//     reverse: false,
//     scope: "nebuloustest",
//     show_payer: false,
//     table: "nodestaba",
//     table_key: "node_qlength",
// };

// export interface IEncryptionKeyGenerator {
//     get_encryption_key(): Promise<string>;
//     get_storage_index(): string;
// }

// export interface IEncryptor {
//     encrypt(data: ArrayBuffer): PromiseLike<ArrayBuffer>;
// }

// export interface IDecryptor {
//     decrypt(data: ArrayBuffer, counter: number): PromiseLike<ArrayBuffer>;
// }

// export interface IOptions {
//     k?: number;
//     n?: number;
//     happy?: number;
// }

// export interface IUploaderOptions {
//     chunkSize: 1024;
// }

// export interface IEncodingParams extends IUploadOptions {
//     segment_size?: number;
//     server_layer?: ServerLayer;
//     convergence: string;
// }

// export enum UploaderState {
//     idle = "idle",
//     paused = "paused",
//     busy = "busy",
//     completed = "completed",
//     aborted = "aborted",
// }

// export enum UploaderCurrentProcess {
//     init = "init",
//     evaluating_encryption_key = "evaluating_encryption_key",
//     encrypting = "encrypting",
//     uploading = "uploading",
// }

// export enum ServerLayer {
//     TOP = "top",
//     MID = "mid",
//     BOT = "bot",
// }

// export enum Size {
//     KiB = 1024,
//     MiB = 1024 * KiB,
//     GiB = 1024 * MiB,
//     TiB = 1024 * GiB,
// }

// export enum Defaults {
//     blockSize = 64 * Size.KiB,
//     chunkSize = Size.MiB,
//     maxSegmentSize = 128 * Size.KiB,
// }

// export const UPLOAD_PATH = "/suri";

// export enum DownloadEventStates {
//     downloading = "downloading",
//     decrypting = "decrypting",
//     decoding = "decoding",
//     zipping = "zipping",
//     complete = "complete",
// }

// export enum HashTags {
//     CONVERGENT_ENCRYPTION_TAG = "allmydata_immutable_content_to_key_with_added_secret_v1+",
//     STORAGE_INDEX_TAG = "allmydata_immutable_key_to_storage_index_v1",
//     KEYLEN = 16,
// }

// export enum FileChunkState {
//     initialized = "initialized",
//     inprogress = "inprogress",
//     encrypted = "encrypted",
//     completed = "completed",
//     errored = "errored",
// }

// export enum FileDownloadType {
//     Stream = "Stream",
//     Download = "Download",
// }