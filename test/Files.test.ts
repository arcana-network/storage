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

async function mockShareResponse(file, arcanaWallet ) {
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

        console.log("before return");
        
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

function getMockFile() {
  let  name =  'mock.txt',
    mimeType = 'plain/txt';
    var blob = new Blob(["abcdeabcde12"], { type: mimeType });

    var dummyBlob = new nBlob([blob.arrayBuffer()], { type: mimeType });
    blob.arrayBuffer = dummyBlob.arrayBuffer;

    blob.lastModifiedDate = new Date(2020, 1, 1);
    blob.name = name;
    return blob;
}


test.before(async (t) => {
    //Mock file details
    t.context.did = "0x4de0e96b0a8886e42a2c35b57df8a9d58a93b5bff655bc37a30e2ab8e29dc066" ;
    let oBlob = getMockFile();
    t.context.file = new File([oBlob], oBlob.name, { type: oBlob.type });

    //start MSW server
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
    await mockArcana.mock.share.returns();
    await mockArcana.mock.files.returns(...(await mockShareResponse( t.context.file, wallet)));


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



test("Share file successfully", async t => {
  
    let access = await t.context.storageInstance.getAccess();
    await t.context.server.use(
        rest.post("https://gateway02.arcana.network/api/meta-tx/", (req, res, ctx) => {

            return res.once(ctx.json(
                {
                    wait: Promise.resolve()
                }
            ));
        })
    )

    let tx = await access.share([t.context.did], [t.context.receiverWallet._signingKey().publicKey], [150]);

    t.truthy(tx);
})