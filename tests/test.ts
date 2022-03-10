import test from 'ava';
import { StorageProvider, utils } from '../src/index';
import { Blob as nBlob } from 'blob-polyfill';
import sinon from 'sinon';

import nock from 'nock';

import { utils as ethUtils, BigNumber } from 'ethers';

import arcana from '../src/contracts/Arcana';
import forwarder from '../src/contracts/Forwarder';


import { MockProvider } from 'ethereum-waffle';
const { deployMockContract } = require('@ethereum-waffle/mock-contract');

/*
Not using moxis because of axios instance in login
Below to be covered in Integration Tests
-> Upload (due to tus client instance)
-> Download  (due to tus client instance)
*/

const nockOptions = {'Access-Control-Allow-Origin': '*'}


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


let file,
    did = "0x4de0e96b0a8886e42a2c35b57df8a9d58a93b5bff655bc37a30e2ab8e29dc066",
    arcanaInstance,
    access,
    receiverWallet,
    receiverInstance,
    arcanaWallet,
    mockArcana,
    meta_tx_scope;

function meta_tx_nock () {

    nock('https://gateway02.arcana.network/').defaultReplyHeaders(nockOptions)
    .post("/api/meta-tx/").
    reply(200, {
        wait: Promise.resolve()
    }).intercept("/api/meta-tx/", "OPTIONS")
    .reply(200, {
        wait: Promise.resolve()
    },{'access-control-allow-headers': 'Authorization'} );

}


function nockSetup()
{   

   
   

    nock('https://gateway02.arcana.network/').defaultReplyHeaders(nockOptions).persist()
    .get('/get-config/')
    .reply(200, {
        "Factory": "0xC392ACbF071750876DF339D26dA542EbE5738646",
        "Forwarder": "0x90e29b3662E63bC46510aca861167072A48D7318",
        "RPC_URL": "https://blockchain-dev.arcana.network"
    })
    .post("/login/")
    .reply(200, { token: "123456789" })
    .get("/get-nonce/")
    .query(true)
    .reply(200, "0")
    .get("/get-address/")
    .query(true)
    .reply(200, { address: "0x98f92D5B2Eb666f993c5930624C2a73a3ED5B158" })
    .intercept("/get-address/", "OPTIONS")
    .query(true)
    .reply(200, { address: "0x98f92D5B2Eb666f993c5930624C2a73a3ED5B158" },{'access-control-allow-headers': 'Authorization'})
    .get("/api/get-address/")
    .reply(200, { host: 'https://localhost:3000/', address: '0x98f92D5B2Eb666f993c5930624C2a73a3ED5B158' });
    
   
}

//Mock server & stub setup
test.serial.before(async () => {


     //File prep
     file = MockFile('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt', 2 ** 10, 'image/txt');
     file = new File([file], file.name, { type: file.type });
 

    nockSetup();

    //Mock provider
    const provider = new MockProvider();

    [arcanaWallet, receiverWallet] = new MockProvider().getWallets();
    // fakeArcana = sinon.fake.returns({
    //     convergence: async () => Promise.resolve(String(Math.random()))
    // })

    //Mock Arcana
    mockArcana = await deployMockContract(arcanaWallet, arcana.abi)

    await mockArcana.mock.convergence.returns(String(Math.random()))
    await mockArcana.mock.share.returns();
    await mockArcana.mock.files.returns(...(await mockShareResponse()));
    await mockArcana.mock.getAllUsers.returns([await receiverWallet.address]);
    await mockArcana.mock.getUploadLimit.returns(file.size, 1000);

    sinon.replace(utils, 'Arcana', () => mockArcana);

    //Mock Forwarder
    const mockForwarder = await deployMockContract(arcanaWallet, forwarder.abi);
    await mockForwarder.mock.getNonce.returns(0);

    sinon.replace(utils, 'Forwarder', () => mockForwarder);
    sinon.replace(utils, 'getProvider', () => provider);

    sinon.replace(utils, "checkTxnStatus", () => Promise.resolve());

    //Storage instances
    arcanaInstance = new StorageProvider({
            appId,
            privateKey: arcanaWallet.privateKey,
            email: makeEmail(),
            gateway,
            debug
        });

    receiverInstance = new StorageProvider({
                    appId,
                    privateKey: receiverWallet.privateKey,
                    email: makeEmail(),
                    gateway,
                    debug,
                });

})

//done
test.serial('Share file', async (t) => {
    meta_tx_nock();
    let access = await arcanaInstance.getAccess();
    let tx = await access.share([did], [receiverWallet._signingKey().publicKey], [150]);
    t.truthy(tx);
});


//done
test.serial('Fail revoke transaction on unauthorized files', async (t) => {

    nock('https://gateway02.arcana.network/').defaultReplyHeaders(nockOptions)
        .intercept("/api/meta-tx/", "OPTIONS")
          .reply(200,null,{'access-control-allow-headers': 'Authorization'})
        .post("/api/meta-tx/")
        .reply(200, {
            err: {
                error:
                {
                    message: 'This function can only be called by file owner'
                }
            }
          })
          

    let access = await receiverInstance.getAccess();
    let err = await t.throwsAsync(access.revoke(did, arcanaWallet.address));
    t.is(err.message, 'This function can only be called by file owner');
    t.is(err.code, 'TRANSACTION');

});

//done
test.serial('Files shared with self', async (t) => {

    nock('https://gateway02.arcana.network/').defaultReplyHeaders(nockOptions)
    .get("/api/shared-files/")
    .reply(200, [{ did: did.substring(2) , size: file.size}], { 'access-control-allow-headers': 'Authorization' })
    .intercept("/api/shared-files/", "OPTIONS")
    .reply(200,null,{ 'access-control-allow-headers': 'Authorization' });

    let files = await receiverInstance.sharedFiles();
    t.is(files.length, 1);
    t.is(files[0]['did'], did.substring(2));
    t.is(files[0]['size'], file.size);
});

//done
test.serial('Get consumed and total upload limit', async (t) => {
    const Access = await arcanaInstance.getAccess();
    let [consumed, total] = await Access.getUploadLimit(did);

    t.is(consumed, file.size);
});

//done
test.serial('Revoke', async (t) => {

    let access = await arcanaInstance.getAccess();

    meta_tx_nock();
    await mockArcana.mock.getAllUsers.returns([await receiverWallet.address]);

    let before = await access.getSharedUsers(did);
    let tx = await access.revoke(did, receiverWallet.address);
    await mockArcana.mock.getAllUsers.returns([]);

    let after = await access.getSharedUsers(did);

    t.truthy(tx);

    t.is(before.includes(receiverWallet.address), true);
    t.is(after.includes(receiverWallet.address), false);
    t.is(before.length - after.length, 1);

    await nock('https://gateway02.arcana.network/').defaultReplyHeaders(nockOptions)
        .get("/api/shared-files/")
        .reply(200, [], { 'access-control-allow-headers': 'Authorization' })
        .intercept("/api/shared-files/", "OPTIONS")
        .reply(200,null,{ 'access-control-allow-headers': 'Authorization' });

    let files = await receiverInstance.sharedFiles();
    t.is(files.length, 0);

});

//done
test.serial('Delete File', async (t) => {
      meta_tx_nock();

    nock('https://gateway02.arcana.network/').defaultReplyHeaders(nockOptions)
    .get("/api/list-files/")
    .reply(200, [{ did: did.substring(2) }], { 'access-control-allow-headers': 'Authorization' })
    .intercept("/api/list-files/", "OPTIONS")
    .reply(200,null,{ 'access-control-allow-headers': 'Authorization' });
    
    let access = await arcanaInstance.getAccess(),
        files = await arcanaInstance.myFiles();

    t.is(files.length, 1);
    t.is(files[0].did, did.substring(2));

    nock('https://gateway02.arcana.network/').defaultReplyHeaders(nockOptions)
    .get("/api/list-files/")
    .reply(200, [], { 'access-control-allow-headers': 'Authorization' })
    .intercept("/api/list-files/", "OPTIONS")
    .reply(200,null,{ 'access-control-allow-headers': 'Authorization' });

    let tx = await access.deleteFile(did);
    files = await arcanaInstance.myFiles();


    t.is(files.length, 0);
    t.truthy(tx);
});