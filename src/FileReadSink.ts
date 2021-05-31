import { IReadResult } from "./interfaces";

export default class FileReadSink {
    public readonly size: number;
    private file: File;
    constructor(file: File) {
        this.file = file;
        this.size = file.size;
    }

    public read<T>(position: number, length: number, binary: boolean): Promise<{data: T, length: number}> {
        return new Promise((resolve, reject) => {
            this._chunk_reader(position, length, binary, (evt: any) => {
                if (evt.target.error == null) {
                    resolve({ data: evt.target.result, length: evt.total });
                } else {
                    reject(evt.target.error);
                }
            });
        });
    }

    private _chunk_reader(offset: number, length: number, binary: boolean, readEventHandler: (evt: any) => void) {
        const r: FileReader = new FileReader();
        let blob;
        if (!(offset === 0 && this.size <= length)) {
            blob = this.file.slice(offset, offset + length);
        } else {
            blob = this.file;
        }
        r.onload = readEventHandler;
        if (binary) {
            r.readAsBinaryString(blob);
        } else {
            r.readAsArrayBuffer(blob);
        }
    }
}