export default class Decryptor {
    public static create_counter(value: number) {
        if (value === 0) {
            return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
        let counterValue = value / 16;
        const counter = new Array(16);
        for (let index = 15; index >= 0; --index) {
            counter[index] = counterValue % 256;
            counterValue = Math.floor(counterValue / 256);
        }
        return new Uint8Array(counter);
    }

    private key: Uint8Array;
    private cryptoKey: CryptoKey;
    constructor(key: string) {
        this.key = new Uint8Array(key.split("").map((a: string) => a.charCodeAt(0)));
    }

    public async decrypt(data: ArrayBuffer, counterValue: number) {
        const iv = Decryptor.create_counter(counterValue);
        this.cryptoKey =  await window.crypto.subtle.importKey("raw", this.key, "AES-CTR", false, ["decrypt"]);
        return window.crypto.subtle.decrypt(
            {
                counter: iv,
                length: 64,
                name: "AES-CTR",
            },
            this.cryptoKey,
            data,
          );
    }

    public terminate() {
        return true;
    }
}