const test = require( 'ava');

const arcana = require('../dist/standalone/storage.umd');

test('should be able to require the module', async t => {

    // const wallet = await arcana.utils.getRandomWallet();  
    console.log(arcana.utils.getRandomWallet());
    t.pass();

})