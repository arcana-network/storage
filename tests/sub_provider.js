const { ethers } = require("ethers");

const { JsonRpcEngine } = require('json-rpc-engine');

module.exports.createEngine = createEngine;

function createEngine(address) {
  const engine = new JsonRpcEngine();

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

  return engine;

}