export default class Encryptor{
    public static create_counter(value: number) {
        if (value === 0) {
            return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
        let counterValue = value / 16;
        const counter = new Uint8Array(16);
        for (let index = 15; index >= 0; --index) {
            counter[index] = counterValue % 256;
            counterValue = Math.floor(counterValue / 256);
        }
        
        return counter;
    }
    private key: Uint8Array;
    private cryptoKey: CryptoKey;
    private iv: Uint8Array;
    constructor(key: any, counterValue: number) {
        this.key = new Uint8Array(key.split("").map((a: string) => a.charCodeAt(0)));
        console.log("key", this.key);
        this.iv = Encryptor.create_counter(counterValue);
        console.log("this iv",this.iv)
    }

    public async encrypt(data: ArrayBuffer) {
        this.cryptoKey =  await window.crypto.subtle.importKey("raw", this.key, "AES-CTR", false, ["encrypt"]);
        return window.crypto.subtle.encrypt(
            {
                counter: this.iv,
                length: 64,
                name: "AES-CTR",
            },
            this.cryptoKey,
            data,
          );
    }
}