/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Forwarder, ForwarderInterface } from "../Forwarder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Forwarder.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Forwarder.ForwardRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b50604051620012db380380620012db833981016040819052620000359162000298565b604080518082018252601081526f20b931b0b730902337b93bb0b93232b960811b602080830191825283518085019094526005845264302e302e3160d81b908401528151902060e08190527fae209a0b48f21c054280f2455d32cf309387644879d9acbd8ffc1991638118856101008190524660a0529192917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6200011f8184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6080523060c05261012052506200014292506200013c9150503390565b62000173565b6200014d33620001c3565b600180546001600160a01b0319166001600160a01b0392909216919091179055620002ca565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b03163314620002235760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b0381166200028a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200021a565b620002958162000173565b50565b600060208284031215620002ab57600080fd5b81516001600160a01b0381168114620002c357600080fd5b9392505050565b60805160a05160c05160e0516101005161012051610fc16200031a60003960006108e2015260006109310152600061090c015260006108650152600061088f015260006108b90152610fc16000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b14610107578063bf5d3bdb1461012c578063c45a01551461014f578063f2fde38b1461016257600080fd5b80632d0335ab1461008d57806347153f82146100c95780635bb47808146100ea578063715018a6146100ff575b600080fd5b6100b661009b366004610ce9565b6001600160a01b031660009081526002602052604090205490565b6040519081526020015b60405180910390f35b6100dc6100d7366004610d19565b610175565b6040516100c0929190610e14565b6100fd6100f8366004610ce9565b610433565b005b6100fd6104bc565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100c0565b61013f61013a366004610d19565b610522565b60405190151581526020016100c0565b600154610114906001600160a01b031681565b6100fd610170366004610ce9565b6106a1565b60015460405163180c06e560e01b815233600482015260009160609183916001600160a01b03169063180c06e5906024016040805180830381600087803b1580156101bf57600080fd5b505af11580156101d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f79190610e37565b5114156102715760405162461bcd60e51b815260206004820152602860248201527f4f6e6c792067617465776179206e6f64652063616e2063616c6c20746869732060448201527f66756e6374696f6e00000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61027c858585610522565b6102ee5760405162461bcd60e51b815260206004820152603260248201527f4d696e696d616c466f727761726465723a207369676e617475726520646f657360448201527f206e6f74206d61746368207265717565737400000000000000000000000000006064820152608401610268565b6102fd60808601356001610e94565b6002600061030e6020890189610ce9565b6001600160a01b03166001600160a01b03168152602001908152602001600020819055506000808660200160208101906103489190610ce9565b6001600160a01b03166060880135604089013561036860a08b018b610eba565b61037560208d018d610ce9565b60405160200161038793929190610f01565b60408051601f19818403018152908290526103a191610f27565b600060405180830381858888f193505050503d80600081146103df576040519150601f19603f3d011682016040523d82523d6000602084013e6103e4565b606091505b50915091508181906104095760405162461bcd60e51b81526004016102689190610f43565b50610419603f6060890135610f56565b5a1161042757610427610f78565b90969095509350505050565b6000546001600160a01b0316331461048d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610268565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031633146105165760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610268565b6105206000610783565b565b60008061063584848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061062f92507fdd8f4b70b0f4393e889bd39128a30628a78b61816a9eb8199759e7a349657e489150610592905060208a018a610ce9565b6105a260408b0160208c01610ce9565b60408b013560608c013560808d01356105be60a08f018f610eba565b6040516105cc929190610f8e565b6040805191829003822060208301989098526001600160a01b0396871690820152949093166060850152608084019190915260a083015260c082015260e081019190915261010001604051602081830303815290604052805190602001206107e0565b90610834565b905060808501356002600061064d6020890189610ce9565b6001600160a01b03166001600160a01b031681526020019081526020016000205414801561069857506106836020860186610ce9565b6001600160a01b0316816001600160a01b0316145b95945050505050565b6000546001600160a01b031633146106fb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610268565b6001600160a01b0381166107775760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610268565b61078081610783565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061082e6107ed610858565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b6000806000610843858561097f565b91509150610850816109ef565b509392505050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156108b157507f000000000000000000000000000000000000000000000000000000000000000046145b156108db57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000808251604114156109b65760208301516040840151606085015160001a6109aa87828585610baa565b945094505050506109e8565b8251604014156109e057602083015160408401516109d5868383610c97565b9350935050506109e8565b506000905060025b9250929050565b6000816004811115610a0357610a03610f9e565b1415610a0c5750565b6001816004811115610a2057610a20610f9e565b1415610a6e5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610268565b6002816004811115610a8257610a82610f9e565b1415610ad05760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610268565b6003816004811115610ae457610ae4610f9e565b1415610b3d5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610268565b6004816004811115610b5157610b51610f9e565b14156107805760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610268565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610be15750600090506003610c8e565b8460ff16601b14158015610bf957508460ff16601c14155b15610c0a5750600090506004610c8e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610c5e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610c8757600060019250925050610c8e565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831681610ccd60ff86901c601b610e94565b9050610cdb87828885610baa565b935093505050935093915050565b600060208284031215610cfb57600080fd5b81356001600160a01b0381168114610d1257600080fd5b9392505050565b600080600060408486031215610d2e57600080fd5b833567ffffffffffffffff80821115610d4657600080fd5b9085019060c08288031215610d5a57600080fd5b90935060208501359080821115610d7057600080fd5b818601915086601f830112610d8457600080fd5b813581811115610d9357600080fd5b876020828501011115610da557600080fd5b6020830194508093505050509250925092565b60005b83811015610dd3578181015183820152602001610dbb565b83811115610de2576000848401525b50505050565b60008151808452610e00816020860160208601610db8565b601f01601f19169290920160200192915050565b8215158152604060208201526000610e2f6040830184610de8565b949350505050565b600060408284031215610e4957600080fd5b6040516040810181811067ffffffffffffffff82111715610e7a57634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b60008219821115610eb557634e487b7160e01b600052601160045260246000fd5b500190565b6000808335601e19843603018112610ed157600080fd5b83018035915067ffffffffffffffff821115610eec57600080fd5b6020019150368190038213156109e857600080fd5b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b60008251610f39818460208701610db8565b9190910192915050565b602081526000610d126020830184610de8565b600082610f7357634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052600160045260246000fd5b8183823760009101908152919050565b634e487b7160e01b600052602160045260246000fdfea164736f6c6343000809000a";

export class Forwarder__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Forwarder> {
    return super.deploy(_factory, overrides || {}) as Promise<Forwarder>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): Forwarder {
    return super.attach(address) as Forwarder;
  }
  connect(signer: Signer): Forwarder__factory {
    return super.connect(signer) as Forwarder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForwarderInterface {
    return new utils.Interface(_abi) as ForwarderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Forwarder {
    return new Contract(address, _abi, signerOrProvider) as Forwarder;
  }
}
