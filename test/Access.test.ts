import test from 'ava';
import { StorageProvider, utils } from '../src/index';
import { Blob as nBlob } from 'blob-polyfill';
import sinon from 'sinon';

import { handlers } from './_request_stubs';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { utils as ethUtils, BigNumber } from 'ethers';

import arcana from '../src/contracts/Arcana';
import forwarder from '../src/contracts/Forwarder';

// import { start, stop } from './_tus_server';


import {  MockProvider } from 'ethereum-waffle';
const { deployMockContract } = require('@ethereum-waffle/mock-contract');

/*
Not using moxis because of axios instance in login
Below to be covered in Integration Tests
-> Upload (due to tus client instance)
-> Download  (due to tus client instance)
*/


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const gateway = false;
const gateway = 'https://gateway02.arcana.network/';
const appId = 1;
const debug = false;

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

const bytesToHexString = (bytes) => {
    if (!bytes) return null;
    bytes = new Uint8Array(bytes);
    var hexBytes = [];
    for (var i = 0; i < bytes.length; ++i) {
        var byteString = bytes[i].toString(16);
        if (byteString.length < 2) byteString = '0' + byteString;
        hexBytes.push(byteString);
    }
    return hexBytes.join('');
};

function printFile(file) {
    const reader = new FileReader();
    reader.onload = function (evt) {
        console.log(evt.target.result);
    };
    reader.readAsText(file);
}

const makeEmail = () => {
    var strValues = 'abcdefg12345';
    var strEmail = '';
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = '';
    strEmail = strEmail + '@example.com';
    return strEmail;
};
/*
async function mockShareResponse() {
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
*/


async function mockShareResponseArgs(file, arcanaWallet ) {

    // let sPrivateKey = "73f557a06bf353efc8c1c6961620cf7dc8d550519b14a322df4ea50c8a3ed813";
    // arcanaWallet = await utils.getWallet(sPrivateKey);

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



let file,
    did = "0x4de0e96b0a8886e42a2c35b57df8a9d58a93b5bff655bc37a30e2ab8e29dc066",
    arcanaInstance,
    access,
    receiverWallet,
    receiverInstance,
    file_count = 0;

var server;
var arcanaWallet;
var mockArcana;

//Wallet and Instance setup
test.serial.before(async (t) => {

    //File prep
    file = MockFile('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt', 2 ** 10, 'image/txt');
    file = new File([file], file.name, { type: file.type });
    //Using PrivateKey from ganache, 0x71BA0248596F4fec9599e3Cd7eb26b92F2fD3DE5
    let sPrivateKey = "73f557a06bf353efc8c1c6961620cf7dc8d550519b14a322df4ea50c8a3ed813";
    arcanaWallet = await utils.getWallet(sPrivateKey);
    try {

        arcanaInstance = new StorageProvider({
            appId,
            privateKey: sPrivateKey,
            email: makeEmail(),
            gateway,
            debug,
        });

        //second instance , 0xeBfD4bd6d89312B03F6Dc09038836d419B0547f2
        let sPrivateKey2 = "dab3052b530f0555adddaa66d9096c3e322751427bc2af0bac9a3206e2d03979";
        receiverWallet = await utils.getWallet(sPrivateKey2),
            receiverInstance = new StorageProvider({
                appId,
                privateKey: sPrivateKey2,
                email: makeEmail(),
                gateway,
                debug,
            });

        access = await arcanaInstance.getAccess();

    } catch (e) {
        console.log(e);
    }

});


//Mock server & stub setup
test.serial.before(async () => {
    server = setupServer(...handlers);
    server.listen();

    //Mock provider
    const provider = new MockProvider();

    const [wallet, otherWallet] = new MockProvider().getWallets();
    // fakeArcana = sinon.fake.returns({
    //     convergence: async () => Promise.resolve(String(Math.random()))
    // })

    //Mock Arcana
    mockArcana = await deployMockContract(wallet, arcana.abi)

    await mockArcana.mock.convergence.returns(String(Math.random()))
    await mockArcana.mock.share.returns();
    // await mockArcana.mock.files.returns( ...(await mockShareResponse())  );
    await mockArcana.mock.files.returns(...(await mockShareResponseArgs(file, wallet)));

    sinon.replace(utils, 'Arcana', () => mockArcana );

    //Mock Forwarder
    const mockForwarder = await deployMockContract(wallet, forwarder.abi);
    await mockForwarder.mock.getNonce.returns(0);

    sinon.replace(utils, 'Forwarder', () => mockForwarder);
    sinon.replace(utils, 'getProvider', () => provider);

})


test.after.always(() => {
    server.close();
})



test.serial.only('Share file', async (t) => {
    await server.use(
        rest.post(
         "https://gateway02.arcana.network/api/meta-tx/",
         (req, res, ctx) => res.once(ctx.json({wait: Promise.resolve() } ) )
        )
    );

    let tx = await access.share([did], [receiverWallet._signingKey().publicKey], [150]);
    t.truthy(tx);
});



