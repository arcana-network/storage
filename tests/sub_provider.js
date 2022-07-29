// const Web3 = require('web3');
const { ethers } = require("ethers");

// const ProviderEngine = require('web3-provider-engine')
// const HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet-ethtx.js')
// const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js')
// const FixtureProvider = require('web3-provider-engine/subproviders/fixture.js');

const { JsonRpcEngine,createAsyncMiddleware } = require('json-rpc-engine');

const {
  providerFromEngine,
  createWalletMiddleware,
  TransactionParams,
  MessageParams,
} = require('eth-json-rpc-middleware');

// module.exports.createProvider = createProvider;
module.exports.createEngine = createEngine;

function createEngine(address) {
  const engine = new JsonRpcEngine();
  // const getAccounts = async () => [address];
  let counter = 0
  engine.push((req, res, next,end) => {
    
    switch(req.method)   {
    case "eth_chainId" :  res.result = 100; break;
    case "net_version" : res.result = 100;break;
    case "eth_requestAccounts" : res.result = [address]; break;
    case "eth_accounts" : res.result = [address]; break;
    case "eth_blockNumber" : res.result = ++counter; break;
    case "eth_signTypedData_v4" : res.result = "dummy Signature" ; break;
    case "personal_sign": res.result = "dummy Signature"; break;
    case "eth_call" : 
      switch(true)  {
        case req.params[0].data.startsWith("0x2d0335ab") : res.result = ethers.utils.defaultAbiCoder.encode(["uint"], [ethers.BigNumber.from("0")]);
        break;
      }
    } 

    if(res.result) { 
      end();
    }
    else next();
  }) 
  // engine.push(createWalletMiddleware({ getAccounts }));
 
  

  // const provider = providerFromEngine(engine);

  return engine;

}



/*

function createProvider(rpcUrl, { address, privateKey }) {
  var engine = new ProviderEngine();
 
  engine.addProvider(new FixtureProvider({
      eth_requestAccounts: [address],
      eth_accounts: [address],
      eth_chainId: 100,
      eth_signTypedData_v4: async (payload, next, done) => {
        done(null, "dummy signature");
      },
      eth_call:  
      async (payload, next, done) => {
      
        //EXPERIMENTAL: return response based on function selector and data
        switch(true) {
        case payload.params[0].data.startsWith("0x2d0335ab") :  done(null, ethers.utils.defaultAbiCoder.encode(["uint"], [ethers.BigNumber.from("0")] ) ) ;
          break;
        default : next(null, payload);
        }
    
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

*/


/*
  //Fixture usage
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
