import test from 'ava';
import { StorageProvider, utils } from '../src/index';
import { setupServer } from 'msw/node';
import { handlers } from './_request_stubs';
import sinon from 'sinon';
import { Blob as nBlob } from 'blob-polyfill';
import { utils as ethUtils } from 'ethers';

//Truffle waffle
import arcana from '../src/contracts/Arcana';
import {  MockProvider } from 'ethereum-waffle';
import { deployMockContract } from '@ethereum-waffle/mock-contract' ;

//MSW
import { rest } from 'msw';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

async function mockShareResponse(file, arcanaWallet ) {

    let sPrivateKey = "73f557a06bf353efc8c1c6961620cf7dc8d550519b14a322df4ea50c8a3ed813";
    arcanaWallet = await utils.getWallet(sPrivateKey);

    const hasher = new utils.KeyGen(file, 10 * 2 ** 20);

    const hash = await hasher.getHash();
    let key = await window.crypto.subtle.generateKey(
        {
            name: 'AES-CTR',
            length: 256,
        },
        true,
        ['encrypt', 'decrypt'],
    );
    const aes_raw = await crypto.subtle.exportKey('raw', key);
    const hexString = await utils.toHexString(aes_raw);

    const encryptedKey = await utils.encryptKey(await arcanaWallet._signingKey().publicKey, hexString);

    const encryptedMetaData = await utils.AESEncrypt(
        key,
        JSON.stringify({
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            hash,
        }),
    );

  

    let uMetadata = await ethUtils.toUtf8Bytes(encryptedMetaData),
        udata = await ethUtils.toUtf8Bytes(encryptedKey);

    return Promise.resolve([await arcanaWallet.getAddress(),
        6,
        6,
    file.size,
        true,
        uMetadata,
        udata,
     await arcanaWallet.getAddress()
    ]);

}

const generateString = (length) => {
    let result = '';
    const charactersLength = characters.length;
    while (result.length < length) {
        result += 'a';
        // result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const MockFile = (name, size, mimeType) => {
    name = name || 'mock.txt';
    size = size || 1024;
    mimeType = mimeType || 'plain/txt';
    var blob = new Blob([generateString(size)], { type: mimeType });

    var dummyBlob = new nBlob([blob.arrayBuffer()], { type: mimeType });
    blob.arrayBuffer = dummyBlob.arrayBuffer;

    blob.lastModifiedDate = new Date(2020, 1, 1);
    blob.name = name;
    return blob;
};

test.before(async (t) => {
    //Mock file details
    t.context.did = "0x4de0e96b0a8886e42a2c35b57df8a9d58a93b5bff655bc37a30e2ab8e29dc066" ;
    let file = MockFile('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt', 2 ** 10, 'image/txt');
    file = new File([file], file.name, { type: file.type });

    t.context.file = file;

    //MSW server
    t.context.server = setupServer(...handlers);
    t.context.server.listen();

    //Mocks
    const provider = new MockProvider();
    const [wallet, receiverWallet] = provider.getWallets();

    t.context.receiverWallet = receiverWallet;

    let gateway = "https://gateway02.arcana.network/",
        appId = 1,
        debug = true;

    t.context.storageInstance = new StorageProvider({
        appId,
        privateKey: wallet.privateKey,
        email: "123@email.com",
        gateway,
        debug
    }
    )

    let mockArcana = await deployMockContract(wallet, arcana.abi)
    await mockArcana.mock.convergence.returns(String(Math.random()))

    sinon.replace(utils, 'Arcana', () => mockArcana);
    sinon.replace(utils, 'getProvider', () => provider);
})

test.after.always(async (t) => {
    t.context.server.close();
})


test('My Files should return empty array', async (t) => {
    let files = await t.context.storageInstance.myFiles();
    t.is(files.length, 0);
});

test('Shared Files should return empty array', async (t) => {
    let files = await t.context.storageInstance.sharedFiles();
    t.is(files.length, 0);
});
