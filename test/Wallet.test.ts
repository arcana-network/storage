import test from 'ava';
import { StorageProvider, utils } from '../src/index';
import { setupServer } from 'msw/node';
import { handlers } from './_request_stubs';
import sinon from 'sinon';

//Truffle waffle
import arcana from '../src/contracts/Arcana';
import {  MockProvider } from 'ethereum-waffle';
import { deployMockContract } from '@ethereum-waffle/mock-contract' ;


test.before(async (t) => {
    //start MSW server
    t.context = {
        server: setupServer(...handlers)
    }
    t.context.server.listen();

    const provider = new MockProvider();
    const [wallet] = provider.getWallets();

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


test('Could generate a wallet via private key', async t => {
   //Using PrivateKey from ganache, 0x71BA0248596F4fec9599e3Cd7eb26b92F2fD3DE5
   let sPrivateKey = "73f557a06bf353efc8c1c6961620cf7dc8d550519b14a322df4ea50c8a3ed813";
    let wallet = await utils.getWallet(sPrivateKey);

    t.is(wallet.address, "0x71BA0248596F4fec9599e3Cd7eb26b92F2fD3DE5");
})

test("Could generate a Random wallet", async t => {
    let wallet = await utils.getRandomWallet();
    t.truthy(wallet.privateKey);
})

test("Should login", async t => {
 await t.notThrowsAsync(t.context.storageInstance.login());
})