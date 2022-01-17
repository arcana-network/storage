export default {
  "_format": "hh-sol-artifact-1",
  "contractName": "Arcana",
  "sourceName": "contracts/Arcana.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        }
      ],
      "name": "DeleteFileEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "n",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "k",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fileSize",
          "type": "uint256"
        }
      ],
      "name": "NewFileUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "validity",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "accessType",
          "type": "bytes32"
        }
      ],
      "name": "NewPermissionCheck",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "accessType",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "validity",
          "type": "uint256"
        }
      ],
      "name": "NewShare",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "identity",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "file",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "accessType",
          "type": "bytes32"
        }
      ],
      "name": "NewUpdateACK",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "accessSpecifier",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "encryptedKey",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "validity",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "aggregateLogin",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "appId",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "",
          "type": "uint128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "appName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "changeFileOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        }
      ],
      "name": "checkPermission",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "consumption",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "convergence",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "defaultLimit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        }
      ],
      "name": "deleteFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "discordClientId",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "factory",
      "outputs": [
        {
          "internalType": "contract FactoryInterface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "files",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "n",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "k",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "fileSize",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "uploaded",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "encryptedMetaData",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "encryptedKey",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "storageNode",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        }
      ],
      "name": "getAllUsers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDownloadLimit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        }
      ],
      "name": "getFile",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "n",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "k",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "fileSize",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "uploaded",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "encryptedMetaData",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "encryptedKey",
              "type": "bytes"
            },
            {
              "internalType": "address",
              "name": "storageNode",
              "type": "address"
            }
          ],
          "internalType": "struct Arcana.File",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getUploadLimit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "githubClientId",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "googleClientId",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_appName",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_factory",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_relayer",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_aggregateLogin",
          "type": "bool"
        },
        {
          "internalType": "uint128",
          "name": "_appId",
          "type": "uint128"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "forwarder",
          "type": "address"
        }
      ],
      "name": "isTrustedForwarder",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "limit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "redditClientId",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_accessType",
          "type": "bytes32"
        }
      ],
      "name": "revoke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "name": "setAppLevelLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_convergence",
          "type": "string"
        }
      ],
      "name": "setConvergence",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bandwidth",
          "type": "uint256"
        }
      ],
      "name": "setDefaultLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "setDiscordClientId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "setGithubClientId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "setGoogleClientId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "setRedditClientId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "setTwitchClientId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "setTwitterClientId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "store",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bandwidth",
          "type": "uint256"
        }
      ],
      "name": "setUserLevelLimit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "_files",
          "type": "bytes32[]"
        },
        {
          "internalType": "address[]",
          "name": "_user",
          "type": "address[]"
        },
        {
          "internalType": "bytes32[]",
          "name": "_accessType",
          "type": "bytes32[]"
        },
        {
          "internalType": "bytes[]",
          "name": "_encryptedKey",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_validity",
          "type": "uint256[]"
        }
      ],
      "name": "share",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32[]",
          "name": "_files",
          "type": "bytes32[]"
        },
        {
          "internalType": "address[]",
          "name": "_user",
          "type": "address[]"
        },
        {
          "internalType": "bytes32[]",
          "name": "_accessType",
          "type": "bytes32[]"
        },
        {
          "internalType": "bytes[]",
          "name": "_encryptedKey",
          "type": "bytes[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_validity",
          "type": "uint256[]"
        }
      ],
      "name": "shareUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "twitchClientId",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "twitterClientId",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        }
      ],
      "name": "uploadClose",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_file",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_n",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_k",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_fileSize",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_encryptedMetaData",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "_encryptedKey",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_storageNode",
          "type": "address"
        }
      ],
      "name": "uploadInit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userAccess",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c614e4861004b600039600081816110a90152818161112e015281816119d10152611a560152614e486000f3fe6080604052600436106103085760003560e01c806380afdea81161019a578063c53be4c8116100e1578063d99764cd1161008a578063e979a2ce11610064578063e979a2ce146108ee578063f2fde38b1461090e578063f3b68aa81461092e57610308565b8063d99764cd1461088f578063dde8d0d9146108a4578063e26b013b146108d157610308565b8063cc1a092c116100bb578063cc1a092c14610830578063ce90d5ef14610845578063d87972621461085a57610308565b8063c53be4c8146107e0578063c5b26447146107fb578063c7c02ef51461081b57610308565b8063a056e1fd11610143578063b074210c1161011d578063b074210c1461077f578063c12ed14f1461079f578063c45a0155146107bf57610308565b8063a056e1fd1461072a578063a10fc6721461074a578063aaf10f421461076a57610308565b806396bab6121161017457806396bab612146106cc57806398c9adff146106e157806399dc83781461071557610308565b806380afdea81461062f5780638a8b09331461067f5780638da5cb5b1461069f57610308565b806353ac40e41161025e57806363a15202116102075780636ab799f1116101e15780636ab799f1146105da5780636b2877d4146105fa578063715018a61461061a57610308565b806363a152021461057a57806368c4481e1461059a5780636a29afdc146105ba57610308565b80635f784b8a116102385780635f784b8a146104d55780636184533f14610503578063633f71551461053057610308565b806353ac40e414610470578063572b6c051461049057806358d393c2146104c057610308565b8063377dd46e116102c05780634d6bede11161029a5780634d6bede11461040f5780634f1ef2861461042f5780634fb95bc61461044257610308565b8063377dd46e146103af5780633a8be7f5146103cf57806340049aa8146103ef57610308565b80633127585b116102f15780633127585b1461035a5780633659cfe61461037a57806336abc5461461039a57610308565b80630c97282c1461030d5780630d3fbd0514610338575b600080fd5b34801561031957600080fd5b5061032261094e565b60405161032f9190614c1b565b60405180910390f35b34801561034457600080fd5b506103586103533660046147b7565b6109dc565b005b34801561036657600080fd5b50610358610375366004614a2e565b61102a565b34801561038657600080fd5b5061035861039536600461471f565b61109e565b3480156103a657600080fd5b5061032261121a565b3480156103bb57600080fd5b506103586103ca366004614916565b611228565b3480156103db57600080fd5b506103586103ea3660046147b7565b6112a5565b3480156103fb57600080fd5b5061035861040a366004614a2e565b6118e6565b34801561041b57600080fd5b5061035861042a366004614a2e565b611956565b61035861043d366004614739565b6119c6565b34801561044e57600080fd5b5061046261045d366004614916565b611b2f565b60405190815260200161032f565b34801561047c57600080fd5b5061035861048b366004614a2e565b612219565b34801561049c57600080fd5b506104b06104ab36600461471f565b61228a565b604051901515815260200161032f565b3480156104cc57600080fd5b506103226122a1565b3480156104e157600080fd5b506104f56104f0366004614937565b6122ae565b60405161032f929190614bf9565b34801561050f57600080fd5b5061052361051e366004614916565b612364565b60405161032f9190614bac565b34801561053c57600080fd5b5061056561054b36600461471f565b610108602052600090815260409020805460019091015482565b6040805192835260208301919091520161032f565b34801561058657600080fd5b5061035861059536600461489f565b6124b4565b3480156105a657600080fd5b506103586105b5366004614a2e565b6125c6565b3480156105c657600080fd5b506103586105d5366004614785565b612636565b3480156105e657600080fd5b506103586105f536600461489f565b6126ce565b34801561060657600080fd5b506103586106153660046148e2565b6128f3565b34801561062657600080fd5b50610358612b3f565b34801561063b57600080fd5b5061010b5461065e9061010090046fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff909116815260200161032f565b34801561068b57600080fd5b5061035861069a366004614916565b612ba8565b3480156106ab57600080fd5b506106b4612c96565b6040516001600160a01b03909116815260200161032f565b3480156106d857600080fd5b50610565612ca6565b3480156106ed57600080fd5b506107016106fc36600461489f565b612ce2565b60405161032f989796959493929190614b41565b34801561072157600080fd5b50610322612e4f565b34801561073657600080fd5b50610358610745366004614996565b612e5c565b34801561075657600080fd5b5061032261076536600461471f565b6133de565b34801561077657600080fd5b506106b46133f8565b34801561078b57600080fd5b5061035861079a366004614a61565b613430565b3480156107ab57600080fd5b506106b46107ba36600461496b565b61356c565b3480156107cb57600080fd5b50610105546106b4906001600160a01b031681565b3480156107ec57600080fd5b5061010b546104b09060ff1681565b34801561080757600080fd5b506104b06108163660046148b7565b6135b2565b34801561082757600080fd5b506105656137b4565b34801561083c57600080fd5b506103226137e1565b34801561085157600080fd5b506103226137ef565b34801561086657600080fd5b5061056561087536600461471f565b610107602052600090815260409020805460019091015482565b34801561089b57600080fd5b506103226137fc565b3480156108b057600080fd5b506108c46108bf366004614916565b613809565b60405161032f9190614c2e565b3480156108dd57600080fd5b506101095461010a54610565919082565b3480156108fa57600080fd5b50610358610909366004614a2e565b613b23565b34801561091a57600080fd5b5061035861092936600461471f565b613b64565b34801561093a57600080fd5b50610358610949366004614a2e565b613c46565b60fb805461095b90614d64565b80601f016020809104026020016040519081016040528092919081815260200182805461098790614d64565b80156109d45780601f106109a9576101008083540402835291602001916109d4565b820191906000526020600020905b8154815290600101906020018083116109b757829003601f168201915b505050505081565b610105546001600160a01b031663c7e1562c306109f7613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610a3f57600080fd5b505af1158015610a53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a779190614883565b610ac85760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f7220746865206170700060448201526064015b60405180910390fd5b8251845114610b3f5760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610abf565b8051845114610bb65760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610abf565b60005b85518110156110225760005b855181101561100f576101046000888381518110610bf357634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518252810191909152604001600020546001600160a01b0316610c1f613cb7565b6001600160a01b031614610c665760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610abf565b828281518110610c8657634e487b7160e01b600052603260045260246000fd5b602002602001015160001415610cde5760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610abf565b6040518060400160405280858481518110610d0957634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001848481518110610d3657634e487b7160e01b600052603260045260246000fd5b602002602001015142610d499190614d20565b8152506101026000898581518110610d7157634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000878581518110610da957634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000888481518110610de157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000019080519060200190610e259291906144aa565b50602082015181600101559050506101036000888481518110610e5857634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000868481518110610e9057634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020868281518110610ec657634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558551869082908110610f2357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316878381518110610f5457634e487b7160e01b600052603260045260246000fd5b6020026020010151610f64613cb7565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc879888581518110610fae57634e487b7160e01b600052603260045260246000fd5b6020026020010151878681518110610fd657634e487b7160e01b600052603260045260246000fd5b6020026020010151604051610ff5929190918252602082015260400190565b60405180910390a48061100781614d9f565b915050610bc5565b508061101a81614d9f565b915050610bb9565b505050505050565b611032613cb7565b6001600160a01b0316611043612c96565b6001600160a01b0316146110875760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a9060fc9060208401906144aa565b5050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561112c5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610abf565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166111877f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146111f25760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610abf565b6111fb81613d6c565b6040805160008082526020820190925261121791839190613dc9565b50565b610100805461095b90614d64565b611230613cb7565b6001600160a01b0316611241612c96565b6001600160a01b0316146112855760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b604080518082019091528281526020018190526101099190915561010a55565b610105546001600160a01b031663c7e1562c306112c0613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561130857600080fd5b505af115801561131c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113409190614883565b61138c5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b82518451146114035760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610abf565b805184511461147a5760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610abf565b60005b85518110156110225760005b85518110156118d35761010460008883815181106114b757634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518252810191909152604001600020546001600160a01b03166114e3613cb7565b6001600160a01b03161461152a5760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610abf565b82818151811061154a57634e487b7160e01b600052603260045260246000fd5b6020026020010151600014156115a25760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610abf565b60405180604001604052808583815181106115cd57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020018483815181106115fa57634e487b7160e01b600052603260045260246000fd5b60200260200101514261160d9190614d20565b815250610102600089858151811061163557634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600087848151811061166d57634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060008884815181106116a557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000190805190602001906116e99291906144aa565b5060208201518160010155905050610103600088848151811061171c57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600086838151811061175457634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002086828151811061178a57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905585518690829081106117e757634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031687838151811061181857634e487b7160e01b600052603260045260246000fd5b6020026020010151611828613cb7565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc87988858151811061187257634e487b7160e01b600052603260045260246000fd5b602002602001015187868151811061189a57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516118b9929190918252602082015260400190565b60405180910390a4806118cb81614d9f565b915050611489565b50806118de81614d9f565b91505061147d565b6118ee613cb7565b6001600160a01b03166118ff612c96565b6001600160a01b0316146119435760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a9060fd9060208401906144aa565b61195e613cb7565b6001600160a01b031661196f612c96565b6001600160a01b0316146119b35760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a9060fe9060208401906144aa565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611a545760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610abf565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611aaf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611b1a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610abf565b611b2382613d6c565b61109a82826001613dc9565b60008281526101046020908152604080832081516101008101835281546001600160a01b0316815260018201549381019390935260028101549183019190915260038101546060830152600481015460ff1615156080830152600581018054869385939092909160a084019190611ba590614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054611bd190614d64565b8015611c1e5780601f10611bf357610100808354040283529160200191611c1e565b820191906000526020600020905b815481529060010190602001808311611c0157829003601f168201915b50505050508152602001600682018054611c3790614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054611c6390614d64565b8015611cb05780601f10611c8557610100808354040283529160200191611cb0565b820191906000526020600020905b815481529060010190602001808311611c9357829003601f168201915b5050509183525050600791909101546001600160a01b03166020909101529050611d066101076000611ce0613cb7565b6001600160a01b0316815260208101919091526040016000206001015461010a54613df5565b81606001516101086000611d18613cb7565b6001600160a01b03166001600160a01b0316815260200190815260200160002060010154611d469190614d20565b1115611d945760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610abf565b6000805261010760209081527f331dfb57104e72786854bf31c772dc9a931d657318c4f1b2d5d7a6908ee8598d5460608301516101089092527f19cd6c0224a525fda373c8746d9bf9b3a5d963385cde8a99acec1ada706b2a82549091611dfa91614d20565b1115611e485760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610abf565b6000858152610104602052604090206004015460ff16611ed05760405162461bcd60e51b815260206004820152602b60248201527f46696c65206d7573742062652075706c6f61646564206265666f726520646f7760448201527f6e6c6f6164696e672069740000000000000000000000000000000000000000006064820152608401610abf565b600085815261010260209081526040808320878452909152812081611ef3613cb7565b6001600160a01b03908116825260208083019390935260409182016000908120600101548a8252610104909452919091205491925016611f31613cb7565b6001600160a01b03161415611f5457611f4d42620f4240614d20565b9050611f91565b80611f915760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610abf565b85611f9a613cb7565b6001600160a01b03167f70ca3209a41d34881db20cfa1e87e607cdc9bd70969efd77c71d730c778a1e398388604051611fdd929190918252602082015260400190565b60405180910390a360008681526101046020908152604080832081516101008101835281546001600160a01b0316815260018201549381019390935260028101549183019190915260038101546060830152600481015460ff161515608083015260058101805460a08401919061205390614d64565b80601f016020809104026020016040519081016040528092919081815260200182805461207f90614d64565b80156120cc5780601f106120a1576101008083540402835291602001916120cc565b820191906000526020600020905b8154815290600101906020018083116120af57829003601f168201915b505050505081526020016006820180546120e590614d64565b80601f016020809104026020016040519081016040528092919081815260200182805461211190614d64565b801561215e5780601f106121335761010080835404028352916020019161215e565b820191906000526020600020905b81548152906001019060200180831161214157829003601f168201915b5050509183525050600791909101546001600160a01b031660209091015260608101519091506101086000612191613cb7565b6001600160a01b03166001600160a01b0316815260200190815260200160002060010160008282546121c39190614d20565b9091555050606081015160008080526101086020527f19cd6c0224a525fda373c8746d9bf9b3a5d963385cde8a99acec1ada706b2a828054909190612209908490614d20565b9091555091979650505050505050565b612221613cb7565b6001600160a01b0316612232612c96565b6001600160a01b0316146122765760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a906101019060208401906144aa565b6065546001600160a01b038281169116145b919050565b60ff805461095b90614d64565b6101026020908152600093845260408085208252928452828420905282529020805481906122db90614d64565b80601f016020809104026020016040519081016040528092919081815260200182805461230790614d64565b80156123545780601f1061232957610100808354040283529160200191612354565b820191906000526020600020905b81548152906001019060200180831161233757829003601f168201915b5050505050908060010154905082565b60008281526101036020908152604080832084845282528083208054825181850281018501909352808352606094938301828280156123cc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116123ae575b50505050509050600080600090505b82518110156124aa57600086815261010360209081526040808320888452909152902080548290811061241e57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101548883526101028252604080842089855283528084206001600160a01b039092168085529190925291206001015490925042106124985782818151811061248257634e487b7160e01b600052603260045260246000fd5b6020026020010160006001600160a01b03168152505b806124a281614d9f565b9150506123db565b5090949350505050565b600081815261010460205260409020600701546001600160a01b031633146125445760405162461bcd60e51b815260206004820152603860248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201527f68652061737369676e65642073746f72616765206e6f646500000000000000006064820152608401610abf565b6000818152610104602052604090206004015460ff16156125a75760405162461bcd60e51b815260206004820152601560248201527f46696c6520616c72656164792075706c6f6164656400000000000000000000006044820152606401610abf565b600090815261010460205260409020600401805460ff19166001179055565b6125ce613cb7565b6001600160a01b03166125df612c96565b6001600160a01b0316146126235760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a9060ff9060208401906144aa565b61263e613cb7565b6001600160a01b031661264f612c96565b6001600160a01b0316146126935760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b60408051808201825292835260208084019283526001600160a01b039094166000908152610107909452909220905181559051600190910155565b6000818152610104602052604090205481906001600160a01b03166126f1613cb7565b6001600160a01b03161461275e5760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610abf565b610105546001600160a01b031663c7e1562c30612779613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156127c157600080fd5b505af11580156127d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127f99190614883565b6128455760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b60008281526101046020526040812080546001600160a01b031916815560018101829055600281018290556003810182905560048101805460ff1916905590612891600583018261452e565b61289f60068301600061452e565b5060070180546001600160a01b0319169055816128ba613cb7565b6001600160a01b03167fa2acc0b1cda8647780f0900a02e0ba141277133ea27552fa350439c0b6684d2160405160405180910390a35050565b610105546001600160a01b031663c7e1562c3061290e613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561295657600080fd5b505af115801561296a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298e9190614883565b6129da5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b60008381526101026020908152604080832084845282528083206001600160a01b0386168452909152812090612a10828261452e565b5060006001919091018190558381526101036020908152604080832084845282528083208054825181850281018501909352808352612a8d93830182828015612a8257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612a64575b505050505084613e0d565b600085815261010360209081526040808320868452909152902080549192509082908110612acb57634e487b7160e01b600052603260045260246000fd5b600091825260209091200180546001600160a01b03191690556001600160a01b03831684612af7613cb7565b6001600160a01b03167f60cb99feacb32252ac712ece398c95440ae888fd3a720ce9f1b32077771612eb85604051612b3191815260200190565b60405180910390a450505050565b612b47613cb7565b6001600160a01b0316612b58612c96565b6001600160a01b031614612b9c5760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b612ba66000613e63565b565b612bbd610105546001600160a01b0316331490565b612c2f5760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c7920666163746f727920636f6e74726163742063616e2063616c6c207460448201527f6869732066756e6374696f6e00000000000000000000000000000000000000006064820152608401610abf565b60408051808201909152918252602080830191825260008052610107905290517f331dfb57104e72786854bf31c772dc9a931d657318c4f1b2d5d7a6908ee8598c55517f331dfb57104e72786854bf31c772dc9a931d657318c4f1b2d5d7a6908ee8598d55565b6033546001600160a01b03165b90565b33600090815261010860209081526040808320600190810154610107909352908320015461010a54839291612cda91613df5565b915091509091565b610104602052600090815260409020805460018201546002830154600384015460048501546005860180546001600160a01b039096169694959394929360ff9092169291612d2f90614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054612d5b90614d64565b8015612da85780601f10612d7d57610100808354040283529160200191612da8565b820191906000526020600020905b815481529060010190602001808311612d8b57829003601f168201915b505050505090806006018054612dbd90614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054612de990614d64565b8015612e365780601f10612e0b57610100808354040283529160200191612e36565b820191906000526020600020905b815481529060010190602001808311612e1957829003601f168201915b505050600790930154919250506001600160a01b031688565b60fc805461095b90614d64565b610105546001600160a01b031663c7e1562c30612e77613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612ebf57600080fd5b505af1158015612ed3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef79190614883565b612f435760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b83612f776101076000612f54613cb7565b6001600160a01b0316815260208101919091526040016000205461010954613df5565b816101086000612f85613cb7565b6001600160a01b03168152602081019190915260400160002054612fa99190614d20565b1115612ff75760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610abf565b600080527f331dfb57104e72786854bf31c772dc9a931d657318c4f1b2d5d7a6908ee8598c546101086020527f19cd6c0224a525fda373c8746d9bf9b3a5d963385cde8a99acec1ada706b2a8154613050908390614d20565b111561309e5760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610abf565b600088815261010460205260409020546001600160a01b03161561310e5760405162461bcd60e51b815260206004820152602160248201527f4f776e657220616c726561647920657869737420666f7220746869732066696c6044820152606560f81b6064820152608401610abf565b8587116131435760405162461bcd60e51b81526020600482015260036024820152626e3e6b60e81b6044820152606401610abf565b600186116131935760405162461bcd60e51b815260206004820152601160248201527f6b2073686f756c64206e6f7420626520300000000000000000000000000000006044820152606401610abf565b846131e05760405162461bcd60e51b815260206004820152600f60248201527f53686f756c64206e6f74206265203000000000000000000000000000000000006044820152606401610abf565b6040518061010001604052806131f4613cb7565b6001600160a01b03908116825260208083018b905260408084018b905260608085018b90526000608080870182905260a08088018d905260c088018c90528a871660e0909801979097528f8252610104855290839020875181546001600160a01b0319169616959095178555868401516001860155918601516002850155850151600384015584015160048301805460ff191691151591909117905591830151805191926132aa926005850192909101906144aa565b5060c082015180516132c69160068401916020909101906144aa565b5060e09190910151600790910180546001600160a01b0319166001600160a01b039092169190911790558461010860006132fe613cb7565b6001600160a01b03166001600160a01b0316815260200190815260200160002060000160008282546133309190614d20565b909155505060008080526101086020527f19cd6c0224a525fda373c8746d9bf9b3a5d963385cde8a99acec1ada706b2a818054879290613371908490614d20565b9091555050600088815261010460209081526040918290205482518a815291820189905291810187905289916001600160a01b0316907fb927e45e3d8ce5bbdb784af6c44bcd63515f70a54ba86e21a3af868740a6a8659060600160405180910390a35050505050505050565b610106602052600090815260409020805461095b90614d64565b600061342b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b600054610100900460ff1680613449575060005460ff16155b6134ac5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff161580156134d7576000805460ff1961ff0019909116610100171660011790555b61010580546001600160a01b0319166001600160a01b0387161790556134fb613eb5565b855161350e9060fb9060208901906144aa565b5061351884613f80565b61010b805460ff19168415151770ffffffffffffffffffffffffffffffff0019166101006fffffffffffffffffffffffffffffffff8516021790558015611022576000805461ff0019169055505050505050565b610103602052826000526040600020602052816000526040600020818154811061359557600080fd5b6000918252602090912001546001600160a01b0316925083915050565b6000828152610104602052604081205483906001600160a01b03166135d5613cb7565b6001600160a01b0316146136425760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610abf565b610105546001600160a01b031663c7e1562c3061365d613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156136a557600080fd5b505af11580156136b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136dd9190614883565b6137295760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b6001600160a01b03831661377f5760405162461bcd60e51b815260206004820152600f60248201527f496e76616c6964206164647265737300000000000000000000000000000000006044820152606401610abf565b60008481526101046020526040902080546001600160a01b0385166001600160a01b0319909116179055600191505092915050565b336000908152610108602090815260408083205461010790925282205461010954839291612cda91613df5565b610101805461095b90614d64565b60fe805461095b90614d64565b60fd805461095b90614d64565b61386560405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600015158152602001606081526020016060815260200160006001600160a01b031681525090565b6000838152610102602090815260408083208584528252808320338452909152808220815180830190925280548290829061389f90614d64565b80601f01602080910402602001604051908101604052809291908181526020018280546138cb90614d64565b80156139185780601f106138ed57610100808354040283529160200191613918565b820191906000526020600020905b8154815290600101906020018083116138fb57829003601f168201915b505050918352505060019182015460209182015260008781526101048252604080822081516101008101835281546001600160a01b03168152948101549385019390935260028301549084015260038201546060840152600482015460ff1615156080840152600582018054949550909360a08401919061399890614d64565b80601f01602080910402602001604051908101604052809291908181526020018280546139c490614d64565b8015613a115780601f106139e657610100808354040283529160200191613a11565b820191906000526020600020905b8154815290600101906020018083116139f457829003601f168201915b50505050508152602001600682018054613a2a90614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054613a5690614d64565b8015613aa35780601f10613a7857610100808354040283529160200191613aa3565b820191906000526020600020905b815481529060010190602001808311613a8657829003601f168201915b5050509183525050600791909101546001600160a01b039081166020909201919091528151919250163314613b1b576020820151613b135760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610abf565b815160c08201525b949350505050565b806101066000613b31613cb7565b6001600160a01b03166001600160a01b03168152602001908152602001600020908051906020019061109a9291906144aa565b613b6c613cb7565b6001600160a01b0316613b7d612c96565b6001600160a01b031614613bc15760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b6001600160a01b038116613c3d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610abf565b61121781613e63565b613c4e613cb7565b6001600160a01b0316613c5f612c96565b6001600160a01b031614613ca35760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a906101009060208401906144aa565b6000613cc23361228a565b15613cd6575060131936013560601c612ca3565b613ceb610105546001600160a01b0316331490565b613d5d5760405162461bcd60e51b815260206004820152602c60248201527f4e6f742061207472757374656420666f72776172646572206e6f72206661637460448201527f6f727920636f6e747261637400000000000000000000000000000000000000006064820152608401610abf565b613d6561404d565b9050612ca3565b613d74613cb7565b6001600160a01b0316613d85612c96565b6001600160a01b0316146112175760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b613dd283614072565b600082511180613ddf5750805b15613df057613dee8383614127565b505b505050565b6000818311613e045781613e06565b825b9392505050565b6000805b826001600160a01b0316848281518110613e3b57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031614613e065780613e5b81614d9f565b915050613e11565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680613ece575060005460ff16155b613f315760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff16158015613f5c576000805460ff1961ff0019909116610100171660011790555b613f64614229565b613f6c6142e3565b8015611217576000805461ff001916905550565b600054610100900460ff1680613f99575060005460ff16155b613ffc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff16158015614027576000805460ff1961ff0019909116610100171660011790555b61402f614229565b6140388261439a565b801561109a576000805461ff00191690555050565b60006140583361228a565b1561406c575060131936013560601c612ca3565b33613d65565b803b6140e65760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610abf565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b61419d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610abf565b600080846001600160a01b0316846040516141b89190614b25565b600060405180830381855af49150503d80600081146141f3576040519150601f19603f3d011682016040523d82523d6000602084013e6141f8565b606091505b50915091506142208282604051806060016040528060278152602001614e1560279139614471565b95945050505050565b600054610100900460ff1680614242575060005460ff16155b6142a55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff16158015613f6c576000805460ff1961ff0019909116610100171660011790558015611217576000805461ff001916905550565b600054610100900460ff16806142fc575060005460ff16155b61435f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff1615801561438a576000805460ff1961ff0019909116610100171660011790555b613f6c614395613cb7565b613e63565b600054610100900460ff16806143b3575060005460ff16155b6144165760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff16158015614441576000805460ff1961ff0019909116610100171660011790555b606580546001600160a01b0319166001600160a01b038416179055801561109a576000805461ff00191690555050565b60608315614480575081613e06565b8251156144905782518084602001fd5b8160405162461bcd60e51b8152600401610abf9190614c1b565b8280546144b690614d64565b90600052602060002090601f0160209004810192826144d8576000855561451e565b82601f106144f157805160ff191683800117855561451e565b8280016001018555821561451e579182015b8281111561451e578251825591602001919060010190614503565b5061452a929150614566565b5090565b50805461453a90614d64565b6000825580601f1061454c5750611217565b601f01602090049060005260206000209081019061121791905b5b8082111561452a5760008155600101614567565b80356001600160a01b038116811461229c57600080fd5b600082601f8301126145a2578081fd5b813560206145b76145b283614cfc565b614ccb565b82815281810190858301838502870184018810156145d3578586fd5b855b858110156145f8576145e68261457b565b845292840192908401906001016145d5565b5090979650505050505050565b600082601f830112614615578081fd5b813560206146256145b283614cfc565b8281528181019085830183850287018401881015614641578586fd5b855b858110156145f857813584529284019290840190600101614643565b600082601f83011261466f578081fd5b8135602061467f6145b283614cfc565b82815281810190858301855b858110156145f8576146a2898684358b01016146b4565b8452928401929084019060010161468b565b600082601f8301126146c4578081fd5b813567ffffffffffffffff8111156146de576146de614dd0565b6146f1601f8201601f1916602001614ccb565b818152846020838601011115614705578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215614730578081fd5b613e068261457b565b6000806040838503121561474b578081fd5b6147548361457b565b9150602083013567ffffffffffffffff81111561476f578182fd5b61477b858286016146b4565b9150509250929050565b600080600060608486031215614799578081fd5b6147a28461457b565b95602085013595506040909401359392505050565b600080600080600060a086880312156147ce578081fd5b853567ffffffffffffffff808211156147e5578283fd5b6147f189838a01614605565b96506020880135915080821115614806578283fd5b61481289838a01614592565b95506040880135915080821115614827578283fd5b61483389838a01614605565b94506060880135915080821115614848578283fd5b61485489838a0161465f565b93506080880135915080821115614869578283fd5b5061487688828901614605565b9150509295509295909350565b600060208284031215614894578081fd5b8151613e0681614de6565b6000602082840312156148b0578081fd5b5035919050565b600080604083850312156148c9578182fd5b823591506148d96020840161457b565b90509250929050565b6000806000606084860312156148f6578081fd5b833592506149066020850161457b565b9150604084013590509250925092565b60008060408385031215614928578182fd5b50508035926020909101359150565b60008060006060848603121561494b578081fd5b83359250602084013591506149626040850161457b565b90509250925092565b60008060006060848603121561497f578081fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a0312156149b0578485fd5b87359650602088013595506040880135945060608801359350608088013567ffffffffffffffff808211156149e3578384fd5b6149ef8b838c016146b4565b945060a08a0135915080821115614a04578384fd5b50614a118a828b016146b4565b925050614a2060c0890161457b565b905092959891949750929550565b600060208284031215614a3f578081fd5b813567ffffffffffffffff811115614a55578182fd5b613b1b848285016146b4565b600080600080600060a08688031215614a78578283fd5b853567ffffffffffffffff811115614a8e578384fd5b614a9a888289016146b4565b955050614aa96020870161457b565b9350614ab76040870161457b565b92506060860135614ac781614de6565b915060808601356fffffffffffffffffffffffffffffffff81168114614aeb578182fd5b809150509295509295909350565b60008151808452614b11816020860160208601614d38565b601f01601f19169290920160200192915050565b60008251614b37818460208701614d38565b9190910192915050565b60006101006001600160a01b03808c1684528a602085015289604085015288606085015287151560808501528160a0850152614b7f82850188614af9565b915083820360c0850152614b938287614af9565b925080851660e085015250509998505050505050505050565b6020808252825182820181905260009190848201906040850190845b81811015614bed5783516001600160a01b031683529284019291840191600101614bc8565b50909695505050505050565b600060408252614c0c6040830185614af9565b90508260208301529392505050565b600060208252613e066020830184614af9565b6000602082526001600160a01b0383511660208301526020830151604083015260408301516060830152606083015160808301526080830151614c7560a084018215159052565b5060a08301516101008060c0850152614c92610120850183614af9565b915060c0850151601f198584030160e0860152614caf8382614af9565b92505060e08501516124aa828601826001600160a01b03169052565b604051601f8201601f1916810167ffffffffffffffff81118282101715614cf457614cf4614dd0565b604052919050565b600067ffffffffffffffff821115614d1657614d16614dd0565b5060209081020190565b60008219821115614d3357614d33614dba565b500190565b60005b83811015614d53578181015183820152602001614d3b565b83811115613dee5750506000910152565b600281046001821680614d7857607f821691505b60208210811415614d9957634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415614db357614db3614dba565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b801515811461121757600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000802000a",
  "deployedBytecode": "0x6080604052600436106103085760003560e01c806380afdea81161019a578063c53be4c8116100e1578063d99764cd1161008a578063e979a2ce11610064578063e979a2ce146108ee578063f2fde38b1461090e578063f3b68aa81461092e57610308565b8063d99764cd1461088f578063dde8d0d9146108a4578063e26b013b146108d157610308565b8063cc1a092c116100bb578063cc1a092c14610830578063ce90d5ef14610845578063d87972621461085a57610308565b8063c53be4c8146107e0578063c5b26447146107fb578063c7c02ef51461081b57610308565b8063a056e1fd11610143578063b074210c1161011d578063b074210c1461077f578063c12ed14f1461079f578063c45a0155146107bf57610308565b8063a056e1fd1461072a578063a10fc6721461074a578063aaf10f421461076a57610308565b806396bab6121161017457806396bab612146106cc57806398c9adff146106e157806399dc83781461071557610308565b806380afdea81461062f5780638a8b09331461067f5780638da5cb5b1461069f57610308565b806353ac40e41161025e57806363a15202116102075780636ab799f1116101e15780636ab799f1146105da5780636b2877d4146105fa578063715018a61461061a57610308565b806363a152021461057a57806368c4481e1461059a5780636a29afdc146105ba57610308565b80635f784b8a116102385780635f784b8a146104d55780636184533f14610503578063633f71551461053057610308565b806353ac40e414610470578063572b6c051461049057806358d393c2146104c057610308565b8063377dd46e116102c05780634d6bede11161029a5780634d6bede11461040f5780634f1ef2861461042f5780634fb95bc61461044257610308565b8063377dd46e146103af5780633a8be7f5146103cf57806340049aa8146103ef57610308565b80633127585b116102f15780633127585b1461035a5780633659cfe61461037a57806336abc5461461039a57610308565b80630c97282c1461030d5780630d3fbd0514610338575b600080fd5b34801561031957600080fd5b5061032261094e565b60405161032f9190614c1b565b60405180910390f35b34801561034457600080fd5b506103586103533660046147b7565b6109dc565b005b34801561036657600080fd5b50610358610375366004614a2e565b61102a565b34801561038657600080fd5b5061035861039536600461471f565b61109e565b3480156103a657600080fd5b5061032261121a565b3480156103bb57600080fd5b506103586103ca366004614916565b611228565b3480156103db57600080fd5b506103586103ea3660046147b7565b6112a5565b3480156103fb57600080fd5b5061035861040a366004614a2e565b6118e6565b34801561041b57600080fd5b5061035861042a366004614a2e565b611956565b61035861043d366004614739565b6119c6565b34801561044e57600080fd5b5061046261045d366004614916565b611b2f565b60405190815260200161032f565b34801561047c57600080fd5b5061035861048b366004614a2e565b612219565b34801561049c57600080fd5b506104b06104ab36600461471f565b61228a565b604051901515815260200161032f565b3480156104cc57600080fd5b506103226122a1565b3480156104e157600080fd5b506104f56104f0366004614937565b6122ae565b60405161032f929190614bf9565b34801561050f57600080fd5b5061052361051e366004614916565b612364565b60405161032f9190614bac565b34801561053c57600080fd5b5061056561054b36600461471f565b610108602052600090815260409020805460019091015482565b6040805192835260208301919091520161032f565b34801561058657600080fd5b5061035861059536600461489f565b6124b4565b3480156105a657600080fd5b506103586105b5366004614a2e565b6125c6565b3480156105c657600080fd5b506103586105d5366004614785565b612636565b3480156105e657600080fd5b506103586105f536600461489f565b6126ce565b34801561060657600080fd5b506103586106153660046148e2565b6128f3565b34801561062657600080fd5b50610358612b3f565b34801561063b57600080fd5b5061010b5461065e9061010090046fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff909116815260200161032f565b34801561068b57600080fd5b5061035861069a366004614916565b612ba8565b3480156106ab57600080fd5b506106b4612c96565b6040516001600160a01b03909116815260200161032f565b3480156106d857600080fd5b50610565612ca6565b3480156106ed57600080fd5b506107016106fc36600461489f565b612ce2565b60405161032f989796959493929190614b41565b34801561072157600080fd5b50610322612e4f565b34801561073657600080fd5b50610358610745366004614996565b612e5c565b34801561075657600080fd5b5061032261076536600461471f565b6133de565b34801561077657600080fd5b506106b46133f8565b34801561078b57600080fd5b5061035861079a366004614a61565b613430565b3480156107ab57600080fd5b506106b46107ba36600461496b565b61356c565b3480156107cb57600080fd5b50610105546106b4906001600160a01b031681565b3480156107ec57600080fd5b5061010b546104b09060ff1681565b34801561080757600080fd5b506104b06108163660046148b7565b6135b2565b34801561082757600080fd5b506105656137b4565b34801561083c57600080fd5b506103226137e1565b34801561085157600080fd5b506103226137ef565b34801561086657600080fd5b5061056561087536600461471f565b610107602052600090815260409020805460019091015482565b34801561089b57600080fd5b506103226137fc565b3480156108b057600080fd5b506108c46108bf366004614916565b613809565b60405161032f9190614c2e565b3480156108dd57600080fd5b506101095461010a54610565919082565b3480156108fa57600080fd5b50610358610909366004614a2e565b613b23565b34801561091a57600080fd5b5061035861092936600461471f565b613b64565b34801561093a57600080fd5b50610358610949366004614a2e565b613c46565b60fb805461095b90614d64565b80601f016020809104026020016040519081016040528092919081815260200182805461098790614d64565b80156109d45780601f106109a9576101008083540402835291602001916109d4565b820191906000526020600020905b8154815290600101906020018083116109b757829003601f168201915b505050505081565b610105546001600160a01b031663c7e1562c306109f7613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610a3f57600080fd5b505af1158015610a53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a779190614883565b610ac85760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f7220746865206170700060448201526064015b60405180910390fd5b8251845114610b3f5760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610abf565b8051845114610bb65760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610abf565b60005b85518110156110225760005b855181101561100f576101046000888381518110610bf357634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518252810191909152604001600020546001600160a01b0316610c1f613cb7565b6001600160a01b031614610c665760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610abf565b828281518110610c8657634e487b7160e01b600052603260045260246000fd5b602002602001015160001415610cde5760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610abf565b6040518060400160405280858481518110610d0957634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001848481518110610d3657634e487b7160e01b600052603260045260246000fd5b602002602001015142610d499190614d20565b8152506101026000898581518110610d7157634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000878581518110610da957634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000888481518110610de157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000019080519060200190610e259291906144aa565b50602082015181600101559050506101036000888481518110610e5857634e487b7160e01b600052603260045260246000fd5b602002602001015181526020019081526020016000206000868481518110610e9057634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020868281518110610ec657634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558551869082908110610f2357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316878381518110610f5457634e487b7160e01b600052603260045260246000fd5b6020026020010151610f64613cb7565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc879888581518110610fae57634e487b7160e01b600052603260045260246000fd5b6020026020010151878681518110610fd657634e487b7160e01b600052603260045260246000fd5b6020026020010151604051610ff5929190918252602082015260400190565b60405180910390a48061100781614d9f565b915050610bc5565b508061101a81614d9f565b915050610bb9565b505050505050565b611032613cb7565b6001600160a01b0316611043612c96565b6001600160a01b0316146110875760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a9060fc9060208401906144aa565b5050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561112c5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610abf565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166111877f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146111f25760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610abf565b6111fb81613d6c565b6040805160008082526020820190925261121791839190613dc9565b50565b610100805461095b90614d64565b611230613cb7565b6001600160a01b0316611241612c96565b6001600160a01b0316146112855760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b604080518082019091528281526020018190526101099190915561010a55565b610105546001600160a01b031663c7e1562c306112c0613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561130857600080fd5b505af115801561131c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113409190614883565b61138c5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b82518451146114035760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610abf565b805184511461147a5760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610abf565b60005b85518110156110225760005b85518110156118d35761010460008883815181106114b757634e487b7160e01b600052603260045260246000fd5b6020908102919091018101518252810191909152604001600020546001600160a01b03166114e3613cb7565b6001600160a01b03161461152a5760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610abf565b82818151811061154a57634e487b7160e01b600052603260045260246000fd5b6020026020010151600014156115a25760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610abf565b60405180604001604052808583815181106115cd57634e487b7160e01b600052603260045260246000fd5b602002602001015181526020018483815181106115fa57634e487b7160e01b600052603260045260246000fd5b60200260200101514261160d9190614d20565b815250610102600089858151811061163557634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600087848151811061166d57634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060008884815181106116a557634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000190805190602001906116e99291906144aa565b5060208201518160010155905050610103600088848151811061171c57634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001908152602001600020600086838151811061175457634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002086828151811061178a57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905585518690829081106117e757634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031687838151811061181857634e487b7160e01b600052603260045260246000fd5b6020026020010151611828613cb7565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc87988858151811061187257634e487b7160e01b600052603260045260246000fd5b602002602001015187868151811061189a57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516118b9929190918252602082015260400190565b60405180910390a4806118cb81614d9f565b915050611489565b50806118de81614d9f565b91505061147d565b6118ee613cb7565b6001600160a01b03166118ff612c96565b6001600160a01b0316146119435760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a9060fd9060208401906144aa565b61195e613cb7565b6001600160a01b031661196f612c96565b6001600160a01b0316146119b35760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a9060fe9060208401906144aa565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611a545760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610abf565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611aaf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611b1a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610abf565b611b2382613d6c565b61109a82826001613dc9565b60008281526101046020908152604080832081516101008101835281546001600160a01b0316815260018201549381019390935260028101549183019190915260038101546060830152600481015460ff1615156080830152600581018054869385939092909160a084019190611ba590614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054611bd190614d64565b8015611c1e5780601f10611bf357610100808354040283529160200191611c1e565b820191906000526020600020905b815481529060010190602001808311611c0157829003601f168201915b50505050508152602001600682018054611c3790614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054611c6390614d64565b8015611cb05780601f10611c8557610100808354040283529160200191611cb0565b820191906000526020600020905b815481529060010190602001808311611c9357829003601f168201915b5050509183525050600791909101546001600160a01b03166020909101529050611d066101076000611ce0613cb7565b6001600160a01b0316815260208101919091526040016000206001015461010a54613df5565b81606001516101086000611d18613cb7565b6001600160a01b03166001600160a01b0316815260200190815260200160002060010154611d469190614d20565b1115611d945760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610abf565b6000805261010760209081527f331dfb57104e72786854bf31c772dc9a931d657318c4f1b2d5d7a6908ee8598d5460608301516101089092527f19cd6c0224a525fda373c8746d9bf9b3a5d963385cde8a99acec1ada706b2a82549091611dfa91614d20565b1115611e485760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610abf565b6000858152610104602052604090206004015460ff16611ed05760405162461bcd60e51b815260206004820152602b60248201527f46696c65206d7573742062652075706c6f61646564206265666f726520646f7760448201527f6e6c6f6164696e672069740000000000000000000000000000000000000000006064820152608401610abf565b600085815261010260209081526040808320878452909152812081611ef3613cb7565b6001600160a01b03908116825260208083019390935260409182016000908120600101548a8252610104909452919091205491925016611f31613cb7565b6001600160a01b03161415611f5457611f4d42620f4240614d20565b9050611f91565b80611f915760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610abf565b85611f9a613cb7565b6001600160a01b03167f70ca3209a41d34881db20cfa1e87e607cdc9bd70969efd77c71d730c778a1e398388604051611fdd929190918252602082015260400190565b60405180910390a360008681526101046020908152604080832081516101008101835281546001600160a01b0316815260018201549381019390935260028101549183019190915260038101546060830152600481015460ff161515608083015260058101805460a08401919061205390614d64565b80601f016020809104026020016040519081016040528092919081815260200182805461207f90614d64565b80156120cc5780601f106120a1576101008083540402835291602001916120cc565b820191906000526020600020905b8154815290600101906020018083116120af57829003601f168201915b505050505081526020016006820180546120e590614d64565b80601f016020809104026020016040519081016040528092919081815260200182805461211190614d64565b801561215e5780601f106121335761010080835404028352916020019161215e565b820191906000526020600020905b81548152906001019060200180831161214157829003601f168201915b5050509183525050600791909101546001600160a01b031660209091015260608101519091506101086000612191613cb7565b6001600160a01b03166001600160a01b0316815260200190815260200160002060010160008282546121c39190614d20565b9091555050606081015160008080526101086020527f19cd6c0224a525fda373c8746d9bf9b3a5d963385cde8a99acec1ada706b2a828054909190612209908490614d20565b9091555091979650505050505050565b612221613cb7565b6001600160a01b0316612232612c96565b6001600160a01b0316146122765760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a906101019060208401906144aa565b6065546001600160a01b038281169116145b919050565b60ff805461095b90614d64565b6101026020908152600093845260408085208252928452828420905282529020805481906122db90614d64565b80601f016020809104026020016040519081016040528092919081815260200182805461230790614d64565b80156123545780601f1061232957610100808354040283529160200191612354565b820191906000526020600020905b81548152906001019060200180831161233757829003601f168201915b5050505050908060010154905082565b60008281526101036020908152604080832084845282528083208054825181850281018501909352808352606094938301828280156123cc57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116123ae575b50505050509050600080600090505b82518110156124aa57600086815261010360209081526040808320888452909152902080548290811061241e57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101548883526101028252604080842089855283528084206001600160a01b039092168085529190925291206001015490925042106124985782818151811061248257634e487b7160e01b600052603260045260246000fd5b6020026020010160006001600160a01b03168152505b806124a281614d9f565b9150506123db565b5090949350505050565b600081815261010460205260409020600701546001600160a01b031633146125445760405162461bcd60e51b815260206004820152603860248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201527f68652061737369676e65642073746f72616765206e6f646500000000000000006064820152608401610abf565b6000818152610104602052604090206004015460ff16156125a75760405162461bcd60e51b815260206004820152601560248201527f46696c6520616c72656164792075706c6f6164656400000000000000000000006044820152606401610abf565b600090815261010460205260409020600401805460ff19166001179055565b6125ce613cb7565b6001600160a01b03166125df612c96565b6001600160a01b0316146126235760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a9060ff9060208401906144aa565b61263e613cb7565b6001600160a01b031661264f612c96565b6001600160a01b0316146126935760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b60408051808201825292835260208084019283526001600160a01b039094166000908152610107909452909220905181559051600190910155565b6000818152610104602052604090205481906001600160a01b03166126f1613cb7565b6001600160a01b03161461275e5760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610abf565b610105546001600160a01b031663c7e1562c30612779613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156127c157600080fd5b505af11580156127d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127f99190614883565b6128455760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b60008281526101046020526040812080546001600160a01b031916815560018101829055600281018290556003810182905560048101805460ff1916905590612891600583018261452e565b61289f60068301600061452e565b5060070180546001600160a01b0319169055816128ba613cb7565b6001600160a01b03167fa2acc0b1cda8647780f0900a02e0ba141277133ea27552fa350439c0b6684d2160405160405180910390a35050565b610105546001600160a01b031663c7e1562c3061290e613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561295657600080fd5b505af115801561296a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061298e9190614883565b6129da5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b60008381526101026020908152604080832084845282528083206001600160a01b0386168452909152812090612a10828261452e565b5060006001919091018190558381526101036020908152604080832084845282528083208054825181850281018501909352808352612a8d93830182828015612a8257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612a64575b505050505084613e0d565b600085815261010360209081526040808320868452909152902080549192509082908110612acb57634e487b7160e01b600052603260045260246000fd5b600091825260209091200180546001600160a01b03191690556001600160a01b03831684612af7613cb7565b6001600160a01b03167f60cb99feacb32252ac712ece398c95440ae888fd3a720ce9f1b32077771612eb85604051612b3191815260200190565b60405180910390a450505050565b612b47613cb7565b6001600160a01b0316612b58612c96565b6001600160a01b031614612b9c5760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b612ba66000613e63565b565b612bbd610105546001600160a01b0316331490565b612c2f5760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c7920666163746f727920636f6e74726163742063616e2063616c6c207460448201527f6869732066756e6374696f6e00000000000000000000000000000000000000006064820152608401610abf565b60408051808201909152918252602080830191825260008052610107905290517f331dfb57104e72786854bf31c772dc9a931d657318c4f1b2d5d7a6908ee8598c55517f331dfb57104e72786854bf31c772dc9a931d657318c4f1b2d5d7a6908ee8598d55565b6033546001600160a01b03165b90565b33600090815261010860209081526040808320600190810154610107909352908320015461010a54839291612cda91613df5565b915091509091565b610104602052600090815260409020805460018201546002830154600384015460048501546005860180546001600160a01b039096169694959394929360ff9092169291612d2f90614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054612d5b90614d64565b8015612da85780601f10612d7d57610100808354040283529160200191612da8565b820191906000526020600020905b815481529060010190602001808311612d8b57829003601f168201915b505050505090806006018054612dbd90614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054612de990614d64565b8015612e365780601f10612e0b57610100808354040283529160200191612e36565b820191906000526020600020905b815481529060010190602001808311612e1957829003601f168201915b505050600790930154919250506001600160a01b031688565b60fc805461095b90614d64565b610105546001600160a01b031663c7e1562c30612e77613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612ebf57600080fd5b505af1158015612ed3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ef79190614883565b612f435760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b83612f776101076000612f54613cb7565b6001600160a01b0316815260208101919091526040016000205461010954613df5565b816101086000612f85613cb7565b6001600160a01b03168152602081019190915260400160002054612fa99190614d20565b1115612ff75760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610abf565b600080527f331dfb57104e72786854bf31c772dc9a931d657318c4f1b2d5d7a6908ee8598c546101086020527f19cd6c0224a525fda373c8746d9bf9b3a5d963385cde8a99acec1ada706b2a8154613050908390614d20565b111561309e5760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610abf565b600088815261010460205260409020546001600160a01b03161561310e5760405162461bcd60e51b815260206004820152602160248201527f4f776e657220616c726561647920657869737420666f7220746869732066696c6044820152606560f81b6064820152608401610abf565b8587116131435760405162461bcd60e51b81526020600482015260036024820152626e3e6b60e81b6044820152606401610abf565b600186116131935760405162461bcd60e51b815260206004820152601160248201527f6b2073686f756c64206e6f7420626520300000000000000000000000000000006044820152606401610abf565b846131e05760405162461bcd60e51b815260206004820152600f60248201527f53686f756c64206e6f74206265203000000000000000000000000000000000006044820152606401610abf565b6040518061010001604052806131f4613cb7565b6001600160a01b03908116825260208083018b905260408084018b905260608085018b90526000608080870182905260a08088018d905260c088018c90528a871660e0909801979097528f8252610104855290839020875181546001600160a01b0319169616959095178555868401516001860155918601516002850155850151600384015584015160048301805460ff191691151591909117905591830151805191926132aa926005850192909101906144aa565b5060c082015180516132c69160068401916020909101906144aa565b5060e09190910151600790910180546001600160a01b0319166001600160a01b039092169190911790558461010860006132fe613cb7565b6001600160a01b03166001600160a01b0316815260200190815260200160002060000160008282546133309190614d20565b909155505060008080526101086020527f19cd6c0224a525fda373c8746d9bf9b3a5d963385cde8a99acec1ada706b2a818054879290613371908490614d20565b9091555050600088815261010460209081526040918290205482518a815291820189905291810187905289916001600160a01b0316907fb927e45e3d8ce5bbdb784af6c44bcd63515f70a54ba86e21a3af868740a6a8659060600160405180910390a35050505050505050565b610106602052600090815260409020805461095b90614d64565b600061342b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b600054610100900460ff1680613449575060005460ff16155b6134ac5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff161580156134d7576000805460ff1961ff0019909116610100171660011790555b61010580546001600160a01b0319166001600160a01b0387161790556134fb613eb5565b855161350e9060fb9060208901906144aa565b5061351884613f80565b61010b805460ff19168415151770ffffffffffffffffffffffffffffffff0019166101006fffffffffffffffffffffffffffffffff8516021790558015611022576000805461ff0019169055505050505050565b610103602052826000526040600020602052816000526040600020818154811061359557600080fd5b6000918252602090912001546001600160a01b0316925083915050565b6000828152610104602052604081205483906001600160a01b03166135d5613cb7565b6001600160a01b0316146136425760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610abf565b610105546001600160a01b031663c7e1562c3061365d613cb7565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156136a557600080fd5b505af11580156136b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136dd9190614883565b6137295760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610abf565b6001600160a01b03831661377f5760405162461bcd60e51b815260206004820152600f60248201527f496e76616c6964206164647265737300000000000000000000000000000000006044820152606401610abf565b60008481526101046020526040902080546001600160a01b0385166001600160a01b0319909116179055600191505092915050565b336000908152610108602090815260408083205461010790925282205461010954839291612cda91613df5565b610101805461095b90614d64565b60fe805461095b90614d64565b60fd805461095b90614d64565b61386560405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600015158152602001606081526020016060815260200160006001600160a01b031681525090565b6000838152610102602090815260408083208584528252808320338452909152808220815180830190925280548290829061389f90614d64565b80601f01602080910402602001604051908101604052809291908181526020018280546138cb90614d64565b80156139185780601f106138ed57610100808354040283529160200191613918565b820191906000526020600020905b8154815290600101906020018083116138fb57829003601f168201915b505050918352505060019182015460209182015260008781526101048252604080822081516101008101835281546001600160a01b03168152948101549385019390935260028301549084015260038201546060840152600482015460ff1615156080840152600582018054949550909360a08401919061399890614d64565b80601f01602080910402602001604051908101604052809291908181526020018280546139c490614d64565b8015613a115780601f106139e657610100808354040283529160200191613a11565b820191906000526020600020905b8154815290600101906020018083116139f457829003601f168201915b50505050508152602001600682018054613a2a90614d64565b80601f0160208091040260200160405190810160405280929190818152602001828054613a5690614d64565b8015613aa35780601f10613a7857610100808354040283529160200191613aa3565b820191906000526020600020905b815481529060010190602001808311613a8657829003601f168201915b5050509183525050600791909101546001600160a01b039081166020909201919091528151919250163314613b1b576020820151613b135760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610abf565b815160c08201525b949350505050565b806101066000613b31613cb7565b6001600160a01b03166001600160a01b03168152602001908152602001600020908051906020019061109a9291906144aa565b613b6c613cb7565b6001600160a01b0316613b7d612c96565b6001600160a01b031614613bc15760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b6001600160a01b038116613c3d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610abf565b61121781613e63565b613c4e613cb7565b6001600160a01b0316613c5f612c96565b6001600160a01b031614613ca35760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b805161109a906101009060208401906144aa565b6000613cc23361228a565b15613cd6575060131936013560601c612ca3565b613ceb610105546001600160a01b0316331490565b613d5d5760405162461bcd60e51b815260206004820152602c60248201527f4e6f742061207472757374656420666f72776172646572206e6f72206661637460448201527f6f727920636f6e747261637400000000000000000000000000000000000000006064820152608401610abf565b613d6561404d565b9050612ca3565b613d74613cb7565b6001600160a01b0316613d85612c96565b6001600160a01b0316146112175760405162461bcd60e51b81526020600482018190526024820152600080516020614df58339815191526044820152606401610abf565b613dd283614072565b600082511180613ddf5750805b15613df057613dee8383614127565b505b505050565b6000818311613e045781613e06565b825b9392505050565b6000805b826001600160a01b0316848281518110613e3b57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031614613e065780613e5b81614d9f565b915050613e11565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680613ece575060005460ff16155b613f315760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff16158015613f5c576000805460ff1961ff0019909116610100171660011790555b613f64614229565b613f6c6142e3565b8015611217576000805461ff001916905550565b600054610100900460ff1680613f99575060005460ff16155b613ffc5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff16158015614027576000805460ff1961ff0019909116610100171660011790555b61402f614229565b6140388261439a565b801561109a576000805461ff00191690555050565b60006140583361228a565b1561406c575060131936013560601c612ca3565b33613d65565b803b6140e65760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610abf565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b61419d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610abf565b600080846001600160a01b0316846040516141b89190614b25565b600060405180830381855af49150503d80600081146141f3576040519150601f19603f3d011682016040523d82523d6000602084013e6141f8565b606091505b50915091506142208282604051806060016040528060278152602001614e1560279139614471565b95945050505050565b600054610100900460ff1680614242575060005460ff16155b6142a55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff16158015613f6c576000805460ff1961ff0019909116610100171660011790558015611217576000805461ff001916905550565b600054610100900460ff16806142fc575060005460ff16155b61435f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff1615801561438a576000805460ff1961ff0019909116610100171660011790555b613f6c614395613cb7565b613e63565b600054610100900460ff16806143b3575060005460ff16155b6144165760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610abf565b600054610100900460ff16158015614441576000805460ff1961ff0019909116610100171660011790555b606580546001600160a01b0319166001600160a01b038416179055801561109a576000805461ff00191690555050565b60608315614480575081613e06565b8251156144905782518084602001fd5b8160405162461bcd60e51b8152600401610abf9190614c1b565b8280546144b690614d64565b90600052602060002090601f0160209004810192826144d8576000855561451e565b82601f106144f157805160ff191683800117855561451e565b8280016001018555821561451e579182015b8281111561451e578251825591602001919060010190614503565b5061452a929150614566565b5090565b50805461453a90614d64565b6000825580601f1061454c5750611217565b601f01602090049060005260206000209081019061121791905b5b8082111561452a5760008155600101614567565b80356001600160a01b038116811461229c57600080fd5b600082601f8301126145a2578081fd5b813560206145b76145b283614cfc565b614ccb565b82815281810190858301838502870184018810156145d3578586fd5b855b858110156145f8576145e68261457b565b845292840192908401906001016145d5565b5090979650505050505050565b600082601f830112614615578081fd5b813560206146256145b283614cfc565b8281528181019085830183850287018401881015614641578586fd5b855b858110156145f857813584529284019290840190600101614643565b600082601f83011261466f578081fd5b8135602061467f6145b283614cfc565b82815281810190858301855b858110156145f8576146a2898684358b01016146b4565b8452928401929084019060010161468b565b600082601f8301126146c4578081fd5b813567ffffffffffffffff8111156146de576146de614dd0565b6146f1601f8201601f1916602001614ccb565b818152846020838601011115614705578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215614730578081fd5b613e068261457b565b6000806040838503121561474b578081fd5b6147548361457b565b9150602083013567ffffffffffffffff81111561476f578182fd5b61477b858286016146b4565b9150509250929050565b600080600060608486031215614799578081fd5b6147a28461457b565b95602085013595506040909401359392505050565b600080600080600060a086880312156147ce578081fd5b853567ffffffffffffffff808211156147e5578283fd5b6147f189838a01614605565b96506020880135915080821115614806578283fd5b61481289838a01614592565b95506040880135915080821115614827578283fd5b61483389838a01614605565b94506060880135915080821115614848578283fd5b61485489838a0161465f565b93506080880135915080821115614869578283fd5b5061487688828901614605565b9150509295509295909350565b600060208284031215614894578081fd5b8151613e0681614de6565b6000602082840312156148b0578081fd5b5035919050565b600080604083850312156148c9578182fd5b823591506148d96020840161457b565b90509250929050565b6000806000606084860312156148f6578081fd5b833592506149066020850161457b565b9150604084013590509250925092565b60008060408385031215614928578182fd5b50508035926020909101359150565b60008060006060848603121561494b578081fd5b83359250602084013591506149626040850161457b565b90509250925092565b60008060006060848603121561497f578081fd5b505081359360208301359350604090920135919050565b600080600080600080600060e0888a0312156149b0578485fd5b87359650602088013595506040880135945060608801359350608088013567ffffffffffffffff808211156149e3578384fd5b6149ef8b838c016146b4565b945060a08a0135915080821115614a04578384fd5b50614a118a828b016146b4565b925050614a2060c0890161457b565b905092959891949750929550565b600060208284031215614a3f578081fd5b813567ffffffffffffffff811115614a55578182fd5b613b1b848285016146b4565b600080600080600060a08688031215614a78578283fd5b853567ffffffffffffffff811115614a8e578384fd5b614a9a888289016146b4565b955050614aa96020870161457b565b9350614ab76040870161457b565b92506060860135614ac781614de6565b915060808601356fffffffffffffffffffffffffffffffff81168114614aeb578182fd5b809150509295509295909350565b60008151808452614b11816020860160208601614d38565b601f01601f19169290920160200192915050565b60008251614b37818460208701614d38565b9190910192915050565b60006101006001600160a01b03808c1684528a602085015289604085015288606085015287151560808501528160a0850152614b7f82850188614af9565b915083820360c0850152614b938287614af9565b925080851660e085015250509998505050505050505050565b6020808252825182820181905260009190848201906040850190845b81811015614bed5783516001600160a01b031683529284019291840191600101614bc8565b50909695505050505050565b600060408252614c0c6040830185614af9565b90508260208301529392505050565b600060208252613e066020830184614af9565b6000602082526001600160a01b0383511660208301526020830151604083015260408301516060830152606083015160808301526080830151614c7560a084018215159052565b5060a08301516101008060c0850152614c92610120850183614af9565b915060c0850151601f198584030160e0860152614caf8382614af9565b92505060e08501516124aa828601826001600160a01b03169052565b604051601f8201601f1916810167ffffffffffffffff81118282101715614cf457614cf4614dd0565b604052919050565b600067ffffffffffffffff821115614d1657614d16614dd0565b5060209081020190565b60008219821115614d3357614d33614dba565b500190565b60005b83811015614d53578181015183820152602001614d3b565b83811115613dee5750506000910152565b600281046001821680614d7857607f821691505b60208210811415614d9957634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415614db357614db3614dba565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b801515811461121757600080fdfe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000802000a",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
