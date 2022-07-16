// const Web3 = require('web3');
const { ethers } = require("ethers");

const ProviderEngine = require('web3-provider-engine')
const HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet-ethtx.js')
// const ZeroEng = require("web3-provider-engine/dist/ZeroClientProvider")
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js')
const FixtureProvider = require('web3-provider-engine/subproviders/fixture.js');

// module.exports.provider = engine;

module.exports.createProvider = createProvider;

function createProvider(rpcUrl, { address, privateKey }) {
  var engine = new ProviderEngine();


  
  engine.addProvider(new FixtureProvider({
      eth_requestAccounts: [address],
      eth_accounts: [address],
      eth_chainId: 100,
      eth_signTypedData_v4: async (payload, next, done) => {
    
        done(null, "dummy signature");
      }
    }
    ));

    


  engine.addProvider(new HookedWalletSubprovider({
    getAccounts: function (cb) {
      cb(null, [address])
    },
    getPrivateKey: (address, cb) => { cb(null, ethers.utils.arrayify(privateKey)) }
  }));

  engine.addProvider(new RpcSubprovider({
    rpcUrl
  }));


  engine.start()

  return engine;

}


/*

 fixture = new FixtureProvider({
        eth_requestAccounts: [address],
        eth_accounts: [address],
        eth_chainId: 100,
        personal_sign: async (payload, next, done) => {
          payload.params[0] = ethers.utils.hashMessage(payload.params[0])
          next(null, payload);
        },
        eth_call: async (payload, next, done) => {
      
          //EXPERIMENTAL: return response based on function selector and data
          // switch(true) {
      
          //   case payload.params[0].data.startsWith("0x2d0335ab") : done(null, {
          //     "jsonrpc": "2.0",
          //     "id": payload.id,
          //     "result": ethers.constants.HashZero 
          // } ) ;
      
          // default : next(null, payload);
          // }
      
          next(null, payload);
        },
        eth_signTypedData_v4: async (payload, next, done) => {
      
          done(null, "dummy signature");
        }
      
    });


*/

/*
const address = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
  privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const memonic = "test test test test test test test test test test test junk",
  path = "m/44'/60'/0'/0/",
  arcanaWallet = ethers.Wallet.fromMnemonic(memonic, path + "4");






engine.addProvider(new RpcSubprovider({
  rpcUrl: 'http://127.0.0.1:10002/',
}))

engine.on('error', function (err) {
  console.error(err.stack)
});


//Starting block polling
// engine.on('block', function (block) {
//   console.log('================================')
//   console.log('BLOCK CHANGED:', '#' + block.number.toString('hex'), '0x' + block.hash.toString('hex'))
//   console.log('================================')
// });

engine.start()
*/