import test from 'ava';
import sinon from 'sinon';
import { ethers } from 'ethers';
import { createProvider } from './sub_provider'
import fs from 'fs';
import nock from 'nock';
import { utils as ethUtils, BigNumber } from 'ethers';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';


//SDK imports
import { StorageProvider } from '../src/index';
import * as utils from '../src/Utils';
import {errorCodes} from "../src/errors";

//Load contract addresses
let sContracts: any = fs.readFileSync("./contracts.json"),
    oContracts = JSON.parse(sContracts);

const gateway = 'http://localhost:9010/api/v1';
const RPC_URL = 'http://127.0.0.1:10002/';
const appId = 1;
const debug = false;

//To ignore strict http request/response rules
axios.defaults.adapter = httpAdapter;
const nockOptions = { 'Access-Control-Allow-Origin': '*' }

/*
Not using moxis because of axios instance initialization in SDK
Below to be covered in Integration Tests
-> Download  (due to tus client instance)
*/

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
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

let file,
    arcanaInstance,
    receiverInstance

function meta_tx_nock(reply_data) {

    const nockMetaReply = async (uri, body: any) => {
        return reply_data ?? { data: "dummy data", token: "dummy token" };
    }

    nock(gateway).defaultReplyHeaders(nockOptions)
        .post("/meta-tx/").
        reply(200, nockMetaReply).intercept("/meta-tx/", "OPTIONS")
        .reply(200, nockMetaReply, { 'access-control-allow-headers': 'Authorization' });
}


async function nockSetup() {

    nock("https://dkgnode1.arcana.network:443")
        .defaultReplyHeaders(nockOptions)
        .persist()
        .post("/rpc")
        .reply(200, { "jsonrpc": "2.0", "result": { "ok": true }, "id": 10 });

    nock('http://localhost:9010')
        .defaultReplyHeaders(nockOptions)
        .persist()
        .get("/api/v1/get-config/")
        .reply(200, {
            "Factory": oContracts.Factory,
            "Forwarder": oContracts.Forwarder,
            "RPC_URL": "http://localhost:10002",
            "DID": oContracts.DID,
            "DKG": "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
        })
        .post("/api/v1/login/")
        .reply(200, { token: "123456789" })
        .get("/api/v1/get-nonce/")
        .query(true)
        .reply(200, "0")
        .get("/api/v1/get-address/")
        .query(true)
        .reply(200, { address: oContracts.App })
        .intercept("/api/v1/get-address/", "OPTIONS")
        .query(true)
        .reply(200, { address: oContracts.App }, { 'access-control-allow-headers': 'Authorization' })
        .get("/api/v1/get-node-address/")
        .query({ appid: appId })
        .reply(200, { host: 'https://localhost:3000/', address: storage_node.address });


}

function sinonMockObjectSetup() {
    sinon.replace(utils, 'getDKGNodes', () => [
        {
            declaredIp: "dkgnode1.arcana.network:443",
            position: "1",
            pubKx: BigNumber.from("29023421385368379144749466045924017514934229958180852799451398628000593771667"),
            pubKy: BigNumber.from("31632158778368581637676511185062566059198308712876704725543144993632262155464"),
        },
        {
            declaredIp: "dkgnode1.arcana.network:443",
            position: "2",
            pubKx: BigNumber.from("105719267757522549686383951453889518570805320580847799971673920448991999863268"),
            pubKy: BigNumber.from("12311889399951856112539425386359305279151271210811891657961588078446721210801"),

        },
        {
            declaredIp: "dkgnode1.arcana.network:443",
            position: "3",
            pubKx: BigNumber.from("112513454780213693752054630002769173645973927254986348958538391710171734325064"),
            pubKy: BigNumber.from("31826403948237730820406540123018982546704465196666925150128355254483964682271")
        },
        {
            declaredIp: "dkgnode1.arcana.network:443",
            position: "4",
            pubKx: BigNumber.from("103022124116237959935952092341458720857383888117879935947184525301185593633427"),
            pubKy: BigNumber.from("83428276264331813311663241272832111383329363811859329412601611536906464022186"),
        },
        {
            declaredIp: "dkgnode1.arcana.network:443",
            position: "5",
            pubKx: BigNumber.from("72082384183905358797739369765923546941331333550297636524350044306990429216270"),
            pubKy: BigNumber.from("661783827736034504670612788123848346528644035307464845748154787461466575102"),
        },
        {
            declaredIp: "dkgnode1.arcana.network:443",
            position: "6",
            pubKx: BigNumber.from("30438236858857419456992904193833033911277657186396590512267279659738218054034"),
            pubKy: BigNumber.from("27076479865999379327196017777333283283075678191787288284998453473449446886409"),
        }
    ]);
    sinon.replace(utils, "checkTxnStatus", () => Promise.resolve());
}

async function mockFile() {
    // file = MockFile('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.txt', 2 ** 10, 'image/txt');
    file = await (await fetch("https://picsum.photos/id/872/200/300")).blob();
    file = new File([file], file.name, { type: file.type });
    return Promise.resolve();
}

//Wallet Setup
const memonic = "test test test test test test test test test test test junk",
    path = "m/44'/60'/0'/0/";

const deployer = ethers.Wallet.fromMnemonic(memonic, path + "0"),
    gateway_node = ethers.Wallet.fromMnemonic(memonic, path + "1"),
    storage_node = ethers.Wallet.fromMnemonic(memonic, path + "2"),
    bridge = ethers.Wallet.fromMnemonic(memonic, path + "3"),
    arcanaWallet = ethers.Wallet.fromMnemonic(memonic, path + "4"),
    receiverWallet = ethers.Wallet.fromMnemonic(memonic, path + "5");
;

import FixtureProvider from 'web3-provider-engine/subproviders/fixture.js';


//shared fixture     
let fixture;

//Mock server & stub setup
test.serial.before(async (t) => {
    //Mock gateway response(s) setup
    nockSetup();
    //Mock basic Storage utils
    sinonMockObjectSetup();
    //File prep
    await mockFile();

    t.context.arcanaProvider = createProvider(RPC_URL, { address: arcanaWallet.address, privateKey: arcanaWallet.privateKey })
    t.context.receiverProvider = createProvider(RPC_URL, { address: receiverWallet.address, privateKey: receiverWallet.privateKey })

    //Storage instances
    arcanaInstance = new StorageProvider({
        appId,
        email: makeEmail(),
        gateway: gateway + "/",
        debug,
        chainId: 100,
        provider: t.context.arcanaProvider
    });

    receiverInstance = new StorageProvider({
        appId,
        provider: t.context.receiverProvider,
        email: makeEmail(),
        gateway: gateway + "/",
        debug,
        chainId: 100
    });

});

//clear fixture after each test
test.afterEach((t) => {
    if (!!fixture) t.context.arcanaProvider.removeProvider(fixture);
    fixture = null;
})

test.serial("Upload file", async (t) => {
    meta_tx_nock(undefined);

    //Add sub provider Fixture at index 0 for top most priority
    fixture = new FixtureProvider({
        personal_sign: async (payload, next, done) => {
            payload.params[0] = ethers.utils.hashMessage(payload.params[0])
            next(null, payload);
        },
        eth_call: async (payload, next, done) => {
            done(null, ethers.utils.defaultAbiCoder.encode(["uint"], [ethers.BigNumber.from("0")] ) );
        }
    });
    t.context.arcanaProvider.addProvider(fixture, 0);

    let upload = await arcanaInstance.getUploader();

    await t.notThrowsAsync(upload.upload(file));

})

test.todo("Download file")

test.todo("Metadata URL")

test.serial('Share file', async (t) => {
    t.plan(4);
    meta_tx_nock(undefined);

    let access = await arcanaInstance.getAccess();
    // let tx = await access.share([did], [receiverWallet._signingKey().publicKey], [150]);
    let tx = await access.share([did], [receiverWallet.address], [150]);
    t.truthy(tx);

    //Now check whether it showing in receipt user list
    nock(gateway).defaultReplyHeaders(nockOptions)
        .get("/shared-files/")
        .reply(200, [{ did: did.substring(2), size: file.size }], { 'access-control-allow-headers': 'Authorization' });

    let files = await receiverInstance.sharedFiles();
    t.is(files.length, 1);
    t.is(files[0]['did'], did.substring(2));
    t.is(files[0]['size'], file.size);

});

test.serial('Fail revoke transaction on unauthorized files', async (t) => {
    t.plan(3);
    const expected_errorCode = "only_file_owner";
    nock(gateway).defaultReplyHeaders(nockOptions)
        .post("/meta-tx/")
        .reply(200, {
            err: expected_errorCode
        })


    let access = await receiverInstance.getAccess();
    let err = await t.throwsAsync(access.revoke(did, arcanaWallet.address));
    t.is(err.message, errorCodes[expected_errorCode].replace(/[.,]/g,""));
    t.assert(err.code.startsWith(expected_errorCode));
});

/*
//Redundent test, covered in sharing
test.serial.only('Files shared with self', async (t) => {
    t.plan(3);
    nock(gateway).defaultReplyHeaders(nockOptions)
        .get("/shared-files/")
        .reply(200, [{ did: did.substring(2), size: file.size }], { 'access-control-allow-headers': 'Authorization' })
        .intercept("/shared-files/", "OPTIONS")
        .reply(200, null, { 'access-control-allow-headers': 'Authorization' });

    let files = await receiverInstance.sharedFiles();
    t.is(files.length, 1);
    t.is(files[0]['did'], did.substring(2));
    t.is(files[0]['size'], file.size);
});
*/

test.serial('Get consumed and total upload limit', async (t) => {

    fixture = new FixtureProvider({
        eth_call: async (payload, next, done) => {            
            done(null, ethers.utils.defaultAbiCoder.encode(["uint","uint"],[file.size,"1000000"]));
        }
    });

    t.context.arcanaProvider.addProvider(fixture,0)

    const Access = await arcanaInstance.getAccess();
    let [consumed, total] = await Access.getUploadLimit(did);

    t.is(consumed, file.size);
    t.is(total,1000000 );
});


/* ~~~~~~~~~~
Migration in progress for all the below test cases
 ~~~~~~~~~~~ */

test.serial('Revoke', async (t) => {

    let access = await arcanaInstance.getAccess();

    // meta_tx_nock();
    await mockArcana.mock.getAllUsers.returns([await receiverWallet.address]);

    let before = await access.getSharedUsers(did);
    let tx = await access.revoke(did, receiverWallet.address);
    await mockArcana.mock.getAllUsers.returns([]);

    let after = await access.getSharedUsers(did);

    t.truthy(tx);

    t.is(before.includes(receiverWallet.address), true);
    t.is(after.includes(receiverWallet.address), false);
    t.is(before.length - after.length, 1);

    await nock(gateway).defaultReplyHeaders(nockOptions)
        .get("/shared-files/")
        .reply(200, [], { 'access-control-allow-headers': 'Authorization' })
        .intercept("/shared-files/", "OPTIONS")
        .reply(200, null, { 'access-control-allow-headers': 'Authorization' });

    let files = await receiverInstance.sharedFiles();
    t.is(files.length, 0);

});

test.serial('Delete File', async (t) => {
    // meta_tx_nock();

    nock(gateway).defaultReplyHeaders(nockOptions)
        .get("/list-files/")
        .reply(200, [{ did: did.substring(2) }], { 'access-control-allow-headers': 'Authorization' })
        .intercept("/list-files/", "OPTIONS")
        .reply(200, null, { 'access-control-allow-headers': 'Authorization' });

    let access = await arcanaInstance.getAccess(),
        files = await arcanaInstance.myFiles();

    t.is(files.length, 1);
    t.is(files[0].did, did.substring(2));

    nock(gateway).defaultReplyHeaders(nockOptions)
        .get("/list-files/")
        .reply(200, [], { 'access-control-allow-headers': 'Authorization' })
        .intercept("/list-files/", "OPTIONS")
        .reply(200, null, { 'access-control-allow-headers': 'Authorization' });

    let tx = await access.deleteFile(did);
    files = await arcanaInstance.myFiles();


    t.is(files.length, 0);
    t.truthy(tx);
});