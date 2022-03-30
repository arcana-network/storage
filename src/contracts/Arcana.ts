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
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "enum Arcana.Status",
          "name": "_status",
          "type": "uint8"
        }
      ],
      "name": "changeUserStatus",
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
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "clientID",
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
      "inputs": [],
      "name": "deleteAccount",
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
        }
      ],
      "name": "deleteFile",
      "outputs": [],
      "stateMutability": "nonpayable",
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
        },
        {
          "internalType": "enum Arcana.WalletMode",
          "name": "_wallet_type",
          "type": "uint8"
        },
        {
          "internalType": "string[]",
          "name": "_client",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_clientId",
          "type": "string[]"
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
      "name": "reactivateAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "setAppName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_client",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_clientId",
          "type": "string"
        }
      ],
      "name": "setClientId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "_client",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "_clientId",
          "type": "string[]"
        }
      ],
      "name": "setClientIds",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "status",
      "outputs": [
        {
          "internalType": "enum Arcana.Status",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
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
    },
    {
      "inputs": [],
      "name": "walletType",
      "outputs": [
        {
          "internalType": "enum Arcana.WalletMode",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60a06040523060805234801561001457600080fd5b5060805161558162000046600039600081816110f70152818161117c01528181611d340152611db901526155816000f3fe6080604052600436106102e65760003560e01c806380afdea811610184578063c45a0155116100d6578063dd245cac1161008a578063e979a2ce11610064578063e979a2ce146108c5578063f2fde38b146108e5578063f84ed61d1461090557600080fd5b8063dd245cac1461085b578063dde8d0d91461087b578063e26b013b146108a857600080fd5b8063c5b26447116100bb578063c5b26447146107f1578063c7c02ef514610811578063d87972621461082657600080fd5b8063c45a0155146107b5578063c53be4c8146107d657600080fd5b806398c9adff11610138578063aaf10f4211610112578063aaf10f4214610760578063b9ff5f1d14610775578063c12ed14f1461079557600080fd5b806398c9adff146106ec578063a056e1fd14610720578063a10fc6721461074057600080fd5b80638da5cb5b116101695780638da5cb5b1461068557806396bab612146106b7578063978d7783146106cc57600080fd5b806380afdea8146106155780638a8b09331461066557600080fd5b80635b648b0a1161023d57806363a15202116101f15780636ab799f1116101cb5780636ab799f1146105c05780636b2877d4146105e0578063715018a61461060057600080fd5b806363a152021461054f578063645b8b1b1461056f5780636a29afdc146105a057600080fd5b80635f784b8a116102225780635f784b8a146104aa5780636184533f146104d8578063633f71551461050557600080fd5b80635b648b0a1461046d5780635bbf11b21461049557600080fd5b80633a8be7f51161029f5780634f1ef286116102795780634f1ef286146103ed5780634fb95bc614610400578063572b6c051461042e57600080fd5b80633a8be7f5146103985780633be32f7d146103b85780633c69d94f146103cd57600080fd5b80630d3fbd05116102d05780630d3fbd05146103385780633659cfe614610358578063377dd46e1461037857600080fd5b8062c5fd24146102eb5780630c97282c1461030d575b600080fd5b3480156102f757600080fd5b5061030b610306366004614ab7565b610925565b005b34801561031957600080fd5b506103226109d0565b60405161032f9190614b46565b60405180910390f35b34801561034457600080fd5b5061030b610353366004614d81565b610a5e565b34801561036457600080fd5b5061030b610373366004614e53565b6110ec565b34801561038457600080fd5b5061030b610393366004614e6e565b611268565b3480156103a457600080fd5b5061030b6103b3366004614d81565b6112ef565b3480156103c457600080fd5b5061030b611975565b3480156103d957600080fd5b5061030b6103e8366004614ec9565b611b24565b61030b6103fb366004614fa5565b611d29565b34801561040c57600080fd5b5061042061041b366004614e6e565b611e96565b60405190815260200161032f565b34801561043a57600080fd5b5061045d610449366004614e53565b6033546001600160a01b0391821691161490565b604051901515815260200161032f565b34801561047957600080fd5b50610104546104889060ff1681565b60405161032f9190615027565b3480156104a157600080fd5b5061030b61257e565b3480156104b657600080fd5b506104ca6104c536600461503a565b612623565b60405161032f92919061506f565b3480156104e457600080fd5b506104f86104f3366004614e6e565b6126d8565b60405161032f9190615091565b34801561051157600080fd5b5061053a610520366004614e53565b610103602052600090815260409020805460019091015482565b6040805192835260208301919091520161032f565b34801561055b57600080fd5b5061030b61056a3660046150de565b612809565b34801561057b57600080fd5b5061048861058a366004614e53565b6101056020526000908152604090205460ff1681565b3480156105ac57600080fd5b5061030b6105bb3660046150f7565b6129ae565b3480156105cc57600080fd5b5061030b6105db3660046150de565b612a50565b3480156105ec57600080fd5b5061030b6105fb36600461512a565b612d48565b34801561060c57600080fd5b5061030b613092565b34801561062157600080fd5b50610108546106449061010090046fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff909116815260200161032f565b34801561067157600080fd5b5061030b610680366004614e6e565b613105565b34801561069157600080fd5b5060c9546001600160a01b03165b6040516001600160a01b03909116815260200161032f565b3480156106c357600080fd5b5061053a6131ed565b3480156106d857600080fd5b5061030b6106e736600461515f565b613229565b3480156106f857600080fd5b5061070c6107073660046150de565b613318565b60405161032f9897969594939291906151b9565b34801561072c57600080fd5b5061030b61073b366004615224565b613486565b34801561074c57600080fd5b5061032261075b366004614e53565b6139f6565b34801561076c57600080fd5b5061069f613a10565b34801561078157600080fd5b5061030b6107903660046152bf565b613a48565b3480156107a157600080fd5b5061069f6107b0366004615319565b613ae1565b3480156107c157600080fd5b506101005461069f906001600160a01b031681565b3480156107e257600080fd5b506101085461045d9060ff1681565b3480156107fd57600080fd5b5061045d61080c366004615345565b613b26565b34801561081d57600080fd5b5061053a613e29565b34801561083257600080fd5b5061053a610841366004614e53565b610102602052600090815260409020805460019091015482565b34801561086757600080fd5b50610322610876366004615371565b613e56565b34801561088757600080fd5b5061089b610896366004614e6e565b613e7a565b60405161032f91906153a6565b3480156108b457600080fd5b50610106546101075461053a919082565b3480156108d157600080fd5b5061030b6108e0366004615371565b614191565b3480156108f157600080fd5b5061030b610900366004614e53565b6141d2565b34801561091157600080fd5b5061030b610920366004615371565b6142be565b61092d614338565b6001600160a01b031661094860c9546001600160a01b031690565b6001600160a01b0316146109915760405162461bcd60e51b8152602060048201819052602482015260008051602061552e83398151915260448201526064015b60405180910390fd5b6001600160a01b038216600090815261010560205260409020805482919060ff191660018360028111156109c7576109c7614ff3565b02179055505050565b60fb80546109dd90615443565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0990615443565b8015610a565780601f10610a2b57610100808354040283529160200191610a56565b820191906000526020600020905b815481529060010190602001808311610a3957829003601f168201915b505050505081565b60006101056000610a6d614338565b6001600160a01b0316815260208101919091526040016000205460ff166002811115610a9b57610a9b614ff3565b14610add5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30610af8614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610b4057600080fd5b505af1158015610b54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b78919061547e565b610bc45760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b8251845114610c3b5760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610988565b8051845114610cb25760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610988565b60005b85518110156110e45760005b85518110156110d15760ff6000888381518110610ce057610ce061549b565b6020908102919091018101518252810191909152604001600020546001600160a01b0316610d0c614338565b6001600160a01b031614610d535760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610988565b828281518110610d6557610d6561549b565b602002602001015160001415610dbd5760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610988565b610dc5614338565b6001600160a01b0316868281518110610de057610de061549b565b60200260200101516001600160a01b03161415610e4a5760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b6064820152608401610988565b6040518060400160405280858481518110610e6757610e6761549b565b60200260200101518152602001848481518110610e8657610e8661549b565b602002602001015142610e9991906154c7565b81525060fd6000898581518110610eb257610eb261549b565b602002602001015181526020019081526020016000206000878581518110610edc57610edc61549b565b602002602001015181526020019081526020016000206000888481518110610f0657610f0661549b565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000019080519060200190610f4a9291906149b4565b506020820151816001015590505060fe6000888481518110610f6e57610f6e61549b565b602002602001015181526020019081526020016000206000868481518110610f9857610f9861549b565b60200260200101518152602001908152602001600020868281518110610fc057610fc061549b565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b03909216919091179055855186908290811061100f5761100f61549b565b60200260200101516001600160a01b03168783815181106110325761103261549b565b6020026020010151611042614338565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc87988858151811061107e5761107e61549b565b60200260200101518786815181106110985761109861549b565b60200260200101516040516110b7929190918252602082015260400190565b60405180910390a4806110c9816154df565b915050610cc1565b50806110dc816154df565b915050610cb5565b505050505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561117a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610988565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166111d57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146112405760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610988565b611249816143e4565b604080516000808252602082019092526112659183919061444b565b50565b611270614338565b6001600160a01b031661128b60c9546001600160a01b031690565b6001600160a01b0316146112cf5760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b604080518082019091528281526020018190526101069190915561010755565b600061010560006112fe614338565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561132c5761132c614ff3565b1461136e5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30611389614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156113d157600080fd5b505af11580156113e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611409919061547e565b6114555760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b82518451146114cc5760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610988565b80518451146115435760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610988565b60005b85518110156110e45760005b85518110156119625760ff60008883815181106115715761157161549b565b6020908102919091018101518252810191909152604001600020546001600160a01b031661159d614338565b6001600160a01b0316146115e45760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610988565b8281815181106115f6576115f661549b565b60200260200101516000141561164e5760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610988565b611656614338565b6001600160a01b03168682815181106116715761167161549b565b60200260200101516001600160a01b031614156116db5760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b6064820152608401610988565b60405180604001604052808583815181106116f8576116f861549b565b602002602001015181526020018483815181106117175761171761549b565b60200260200101514261172a91906154c7565b81525060fd60008985815181106117435761174361549b565b60200260200101518152602001908152602001600020600087848151811061176d5761176d61549b565b6020026020010151815260200190815260200160002060008884815181106117975761179761549b565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000190805190602001906117db9291906149b4565b506020820151816001015590505060fe60008884815181106117ff576117ff61549b565b6020026020010151815260200190815260200160002060008683815181106118295761182961549b565b602002602001015181526020019081526020016000208682815181106118515761185161549b565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905585518690829081106118a0576118a061549b565b60200260200101516001600160a01b03168783815181106118c3576118c361549b565b60200260200101516118d3614338565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc87988858151811061190f5761190f61549b565b60200260200101518786815181106119295761192961549b565b6020026020010151604051611948929190918252602082015260400190565b60405180910390a48061195a816154df565b915050611552565b508061196d816154df565b915050611546565b60006101056000611984614338565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156119b2576119b2614ff3565b146119f45760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30611a0f614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015611a5757600080fd5b505af1158015611a6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a8f919061547e565b611adb5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b60026101056000611aea614338565b6001600160a01b031681526020810191909152604001600020805460ff19166001836002811115611b1d57611b1d614ff3565b0217905550565b600054610100900460ff16611b3f5760005460ff1615611b43565b303b155b611bb55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610988565b600054610100900460ff16158015611bd7576000805461ffff19166101011790555b61010080546001600160a01b0319166001600160a01b038a16179055611bfb614476565b8851611c0e9060fb9060208c01906149b4565b50611c18876144e9565b610108805470ffffffffffffffffffffffffffffffffff191687151570ffffffffffffffffffffffffffffffff001916176101006fffffffffffffffffffffffffffffffff881602179055610104805485919060ff19166001836002811115611c8357611c83614ff3565b021790555060005b8351811015611d0b57828181518110611ca657611ca661549b565b602002602001015160fc858381518110611cc257611cc261549b565b6020026020010151604051611cd791906154fa565b90815260200160405180910390209080519060200190611cf89291906149b4565b5080611d03816154df565b915050611c8b565b508015611d1e576000805461ff00191690555b505050505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611db75760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610988565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611e127f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611e7d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610988565b611e86826143e4565b611e928282600161444b565b5050565b600082815260ff6020818152604080842081516101008101835281546001600160a01b03168152600182015493810193909352600281015491830191909152600381015460608301526004810154909216151560808201526005820180548693859392909160a084019190611f0a90615443565b80601f0160208091040260200160405190810160405280929190818152602001828054611f3690615443565b8015611f835780601f10611f5857610100808354040283529160200191611f83565b820191906000526020600020905b815481529060010190602001808311611f6657829003601f168201915b50505050508152602001600682018054611f9c90615443565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc890615443565b80156120155780601f10611fea57610100808354040283529160200191612015565b820191906000526020600020905b815481529060010190602001808311611ff857829003601f168201915b5050509183525050600791909101546001600160a01b0316602090910152905061206b6101026000612045614338565b6001600160a01b0316815260208101919091526040016000206001015461010754614565565b8160600151610103600061207d614338565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101546120ab91906154c7565b11156120f95760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610988565b6000805261010260209081527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb3215460608301516101039092527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f8054909161215f916154c7565b11156121ad5760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610988565b600085815260ff6020819052604090912060040154166122355760405162461bcd60e51b815260206004820152602b60248201527f46696c65206d7573742062652075706c6f61646564206265666f726520646f7760448201527f6e6c6f6164696e672069740000000000000000000000000000000000000000006064820152608401610988565b600085815260fd60209081526040808320878452909152812081612257614338565b6001600160a01b03908116825260208083019390935260409182016000908120600101548a825260ff909452919091205491925016612294614338565b6001600160a01b031614156122b7576122b042620f42406154c7565b90506122f4565b806122f45760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610988565b856122fd614338565b6001600160a01b03167f70ca3209a41d34881db20cfa1e87e607cdc9bd70969efd77c71d730c778a1e398388604051612340929190918252602082015260400190565b60405180910390a3600086815260ff6020818152604080842081516101008101835281546001600160a01b031681526001820154938101939093526002810154918301919091526003810154606083015260048101549092161515608082015260058201805491929160a0840191906123b890615443565b80601f01602080910402602001604051908101604052809291908181526020018280546123e490615443565b80156124315780601f1061240657610100808354040283529160200191612431565b820191906000526020600020905b81548152906001019060200180831161241457829003601f168201915b5050505050815260200160068201805461244a90615443565b80601f016020809104026020016040519081016040528092919081815260200182805461247690615443565b80156124c35780601f10612498576101008083540402835291602001916124c3565b820191906000526020600020905b8154815290600101906020018083116124a657829003601f168201915b5050509183525050600791909101546001600160a01b0316602090910152606081015190915061010360006124f6614338565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101600082825461252891906154c7565b9091555050606081015160008080526101036020527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f80805490919061256e9084906154c7565b9091555091979650505050505050565b6002610105600061258d614338565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156125bb576125bb614ff3565b146126145760405162461bcd60e51b815260206004820152602360248201527f5573657220776173206e6f742064656c6574656420746f2072656163746976616044820152623a329760e91b6064820152608401610988565b60006101056000611aea614338565b60fd60209081526000938452604080852082529284528284209052825290208054819061264f90615443565b80601f016020809104026020016040519081016040528092919081815260200182805461267b90615443565b80156126c85780601f1061269d576101008083540402835291602001916126c8565b820191906000526020600020905b8154815290600101906020018083116126ab57829003601f168201915b5050505050908060010154905082565b600082815260fe60209081526040808320848452825280832080548251818502810185019093528083526060949383018282801561273f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612721575b50505050509050600080600090505b82518110156127ff57600086815260fe6020908152604080832088845290915290208054829081106127825761278261549b565b600091825260208083209091015488835260fd8252604080842089855283528084206001600160a01b039092168085529190925291206001015490925042106127ed578281815181106127d7576127d761549b565b6020026020010160006001600160a01b03168152505b806127f7816154df565b91505061274e565b5090949350505050565b600081815260ff60205260409020600701546001600160a01b031633146128985760405162461bcd60e51b815260206004820152603860248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201527f68652061737369676e65642073746f72616765206e6f646500000000000000006064820152608401610988565b600081815260ff602081905260409091206004015416156128fb5760405162461bcd60e51b815260206004820152601560248201527f46696c6520616c72656164792075706c6f6164656400000000000000000000006044820152606401610988565b600081815260ff60209081526040808320600381015490546001600160a01b0316845261010390925282208054919290916129379084906154c7565b9091555050600081815260ff602090815260408220600301548280526101039091527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f7f80549192909161298b9084906154c7565b9091555050600090815260ff60205260409020600401805460ff19166001179055565b6129b6614338565b6001600160a01b03166129d160c9546001600160a01b031690565b6001600160a01b031614612a155760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b60408051808201825292835260208084019283526001600160a01b039094166000908152610102909452909220905181559051600190910155565b600081815260ff602052604090205481906001600160a01b0316612a72614338565b6001600160a01b031614612adf5760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610988565b60006101056000612aee614338565b6001600160a01b0316815260208101919091526040016000205460ff166002811115612b1c57612b1c614ff3565b14612b5e5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30612b79614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612bc157600080fd5b505af1158015612bd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bf9919061547e565b612c455760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b600082815260ff60205260408120600301549061010390612c64614338565b6001600160a01b03166001600160a01b031681526020019081526020016000206000016000828254612c969190615516565b9091555050600082815260ff6020526040812080546001600160a01b031916815560018101829055600281018290556003810182905560048101805460ff1916905590612ce66005830182614a38565b612cf4600683016000614a38565b5060070180546001600160a01b031916905581612d0f614338565b6001600160a01b03167fa2acc0b1cda8647780f0900a02e0ba141277133ea27552fa350439c0b6684d2160405160405180910390a35050565b60006101056000612d57614338565b6001600160a01b0316815260208101919091526040016000205460ff166002811115612d8557612d85614ff3565b14612dc75760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30612de2614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612e2a57600080fd5b505af1158015612e3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e62919061547e565b612eae5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b600083815260ff602052604090205483906001600160a01b0316612ed0614338565b6001600160a01b031614612f3d5760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610988565b600084815260fd6020908152604080832085845282528083206001600160a01b0387168452909152812090612f728282614a38565b50600060019190910181905584815260fe6020908152604080832085845282528083208054825181850281018501909352808352612fee93830182828015612fe357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612fc5575b50505050508561457d565b600086815260fe6020908152604080832087845290915290208054919250908290811061301d5761301d61549b565b600091825260209091200180546001600160a01b03191690556001600160a01b03841685613049614338565b6001600160a01b03167f60cb99feacb32252ac712ece398c95440ae888fd3a720ce9f1b32077771612eb8660405161308391815260200190565b60405180910390a45050505050565b61309a614338565b6001600160a01b03166130b560c9546001600160a01b031690565b6001600160a01b0316146130f95760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b61310360006145c5565b565b610100546001600160a01b031633146131865760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c7920666163746f727920636f6e74726163742063616e2063616c6c207460448201527f6869732066756e6374696f6e00000000000000000000000000000000000000006064820152608401610988565b60408051808201909152918252602080830191825260008052610102905290517f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32055517f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32155565b3360009081526101036020908152604080832060019081015461010290935290832001546101075483929161322191614565565b915091509091565b613231614338565b6001600160a01b031661324c60c9546001600160a01b031690565b6001600160a01b0316146132905760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b60005b8251811015613313578181815181106132ae576132ae61549b565b602002602001015160fc8483815181106132ca576132ca61549b565b60200260200101516040516132df91906154fa565b908152602001604051809103902090805190602001906133009291906149b4565b508061330b816154df565b915050613293565b505050565b60ff602081905260009182526040909120805460018201546002830154600384015460048501546005860180546001600160a01b039096169794969395929491909116929161336690615443565b80601f016020809104026020016040519081016040528092919081815260200182805461339290615443565b80156133df5780601f106133b4576101008083540402835291602001916133df565b820191906000526020600020905b8154815290600101906020018083116133c257829003601f168201915b5050505050908060060180546133f490615443565b80601f016020809104026020016040519081016040528092919081815260200182805461342090615443565b801561346d5780601f106134425761010080835404028352916020019161346d565b820191906000526020600020905b81548152906001019060200180831161345057829003601f168201915b505050600790930154919250506001600160a01b031688565b60006101056000613495614338565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156134c3576134c3614ff3565b146135055760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30613520614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561356857600080fd5b505af115801561357c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135a0919061547e565b6135ec5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b8361362061010260006135fd614338565b6001600160a01b0316815260208101919091526040016000205461010654614565565b81610103600061362e614338565b6001600160a01b0316815260208101919091526040016000205461365291906154c7565b11156136a05760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610988565b600080527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb320546101036020527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f7f546136f99083906154c7565b11156137475760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610988565b600088815260ff60205260409020546001600160a01b0316156137b65760405162461bcd60e51b815260206004820152602160248201527f4f776e657220616c726561647920657869737420666f7220746869732066696c6044820152606560f81b6064820152608401610988565b8587116137eb5760405162461bcd60e51b81526020600482015260036024820152626e3e6b60e81b6044820152606401610988565b6001861161383b5760405162461bcd60e51b815260206004820152601160248201527f6b2073686f756c64206e6f7420626520300000000000000000000000000000006044820152606401610988565b846138885760405162461bcd60e51b815260206004820152601960248201527f46696c652073697a652073686f756c64206e6f742062652030000000000000006044820152606401610988565b60405180610100016040528061389c614338565b6001600160a01b03908116825260208083018b905260408084018b905260608085018b90526000608080870182905260a08088018d905260c088018c90528a871660e0909801979097528f825260ff855290839020875181546001600160a01b0319169616959095178555868401516001860155918601516002850155850151600384015584015160048301805460ff19169115159190911790559183015180519192613951926005850192909101906149b4565b5060c0820151805161396d9160068401916020909101906149b4565b5060e09190910151600790910180546001600160a01b0319166001600160a01b03928316179055600089815260ff60209081526040918290205482518b81529182018a90529181018890528a9291909116907fb927e45e3d8ce5bbdb784af6c44bcd63515f70a54ba86e21a3af868740a6a8659060600160405180910390a35050505050505050565b61010160205260009081526040902080546109dd90615443565b6000613a437f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b613a50614338565b6001600160a01b0316613a6b60c9546001600160a01b031690565b6001600160a01b031614613aaf5760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b8060fc83604051613ac091906154fa565b908152602001604051809103902090805190602001906133139291906149b4565b60fe6020528260005260406000206020528160005260406000208181548110613b0957600080fd5b6000918252602090912001546001600160a01b0316925083915050565b600082815260ff602052604081205483906001600160a01b0316613b48614338565b6001600160a01b031614613bb55760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610988565b60006101056000613bc4614338565b6001600160a01b0316815260208101919091526040016000205460ff166002811115613bf257613bf2614ff3565b14613c345760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30613c4f614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015613c9757600080fd5b505af1158015613cab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ccf919061547e565b613d1b5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b6001600160a01b038316613d715760405162461bcd60e51b815260206004820152600f60248201527f496e76616c6964206164647265737300000000000000000000000000000000006044820152606401610988565b600084815260ff6020526040812080546001600160a01b0319166001600160a01b038616178155600301549061010390613da9614338565b6001600160a01b03166001600160a01b031681526020019081526020016000206000016000828254613ddb9190615516565b9091555050600084815260ff60209081526040808320600301546001600160a01b03871684526101039092528220805491929091613e1a9084906154c7565b90915550600195945050505050565b33600090815261010360209081526040808320546101029092528220546101065483929161322191614565565b805160208183018101805160fc82529282019190930120915280546109dd90615443565b613ed660405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600015158152602001606081526020016060815260200160006001600160a01b031681525090565b600083815260fd6020908152604080832085845282528083203384529091528082208151808301909252805482908290613f0f90615443565b80601f0160208091040260200160405190810160405280929190818152602001828054613f3b90615443565b8015613f885780601f10613f5d57610100808354040283529160200191613f88565b820191906000526020600020905b815481529060010190602001808311613f6b57829003601f168201915b5050509183525050600191820154602091820152600087815260ff808352604080832081516101008101835281546001600160a01b0316815295810154948601949094526002840154908501526003830154606085015260048301541615156080840152600582018054949550909360a08401919061400690615443565b80601f016020809104026020016040519081016040528092919081815260200182805461403290615443565b801561407f5780601f106140545761010080835404028352916020019161407f565b820191906000526020600020905b81548152906001019060200180831161406257829003601f168201915b5050505050815260200160068201805461409890615443565b80601f01602080910402602001604051908101604052809291908181526020018280546140c490615443565b80156141115780601f106140e657610100808354040283529160200191614111565b820191906000526020600020905b8154815290600101906020018083116140f457829003601f168201915b5050509183525050600791909101546001600160a01b0390811660209092019190915281519192501633146141895760208201516141815760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610988565b815160c08201525b949350505050565b80610101600061419f614338565b6001600160a01b03166001600160a01b031681526020019081526020016000209080519060200190611e929291906149b4565b6141da614338565b6001600160a01b03166141f560c9546001600160a01b031690565b6001600160a01b0316146142395760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b6001600160a01b0381166142b55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610988565b611265816145c5565b6142c6614338565b6001600160a01b03166142e160c9546001600160a01b031690565b6001600160a01b0316146143255760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b8051611e929060fb9060208401906149b4565b6033546000906001600160a01b031633141561435b575060131936013560601c90565b610100546001600160a01b031633146143dc5760405162461bcd60e51b815260206004820152602c60248201527f4e6f742061207472757374656420666f72776172646572206e6f72206661637460448201527f6f727920636f6e747261637400000000000000000000000000000000000000006064820152608401610988565b613a43614617565b6143ec614338565b6001600160a01b031661440760c9546001600160a01b031690565b6001600160a01b0316146112655760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b6144548361463f565b6000825111806144615750805b156133135761447083836146fd565b50505050565b600054610100900460ff166144e15760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b613103614808565b600054610100900460ff166145545760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b61455c614883565b611265816148ee565b60008183116145745781614576565b825b9392505050565b6000805b826001600160a01b031684828151811061459d5761459d61549b565b60200260200101516001600160a01b03161461457657806145bd816154df565b915050614581565b60c980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6033546000906001600160a01b031633141561463a575060131936013560601c90565b503390565b6001600160a01b0381163b6146bc5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610988565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60606001600160a01b0383163b61477c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610988565b600080846001600160a01b03168460405161479791906154fa565b600060405180830381855af49150503d80600081146147d2576040519150601f19603f3d011682016040523d82523d6000602084013e6147d7565b606091505b50915091506147ff828260405180606001604052806027815260200161554e6027913961497b565b95945050505050565b600054610100900460ff166148735760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b61310361487e614338565b6145c5565b600054610100900460ff166131035760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b600054610100900460ff166149595760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b603380546001600160a01b0319166001600160a01b0392909216919091179055565b6060831561498a575081614576565b82511561499a5782518084602001fd5b8160405162461bcd60e51b81526004016109889190614b46565b8280546149c090615443565b90600052602060002090601f0160209004810192826149e25760008555614a28565b82601f106149fb57805160ff1916838001178555614a28565b82800160010185558215614a28579182015b82811115614a28578251825591602001919060010190614a0d565b50614a34929150614a6e565b5090565b508054614a4490615443565b6000825580601f10614a54575050565b601f01602090049060005260206000209081019061126591905b5b80821115614a345760008155600101614a6f565b80356001600160a01b0381168114614a9a57600080fd5b919050565b6003811061126557600080fd5b8035614a9a81614a9f565b60008060408385031215614aca57600080fd5b614ad383614a83565b91506020830135614ae381614a9f565b809150509250929050565b60005b83811015614b09578181015183820152602001614af1565b838111156144705750506000910152565b60008151808452614b32816020860160208601614aee565b601f01601f19169290920160200192915050565b6020815260006145766020830184614b1a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715614b9857614b98614b59565b604052919050565b600067ffffffffffffffff821115614bba57614bba614b59565b5060051b60200190565b600082601f830112614bd557600080fd5b81356020614bea614be583614ba0565b614b6f565b82815260059290921b84018101918181019086841115614c0957600080fd5b8286015b84811015614c245780358352918301918301614c0d565b509695505050505050565b600082601f830112614c4057600080fd5b81356020614c50614be583614ba0565b82815260059290921b84018101918181019086841115614c6f57600080fd5b8286015b84811015614c2457614c8481614a83565b8352918301918301614c73565b600082601f830112614ca257600080fd5b813567ffffffffffffffff811115614cbc57614cbc614b59565b614ccf601f8201601f1916602001614b6f565b818152846020838601011115614ce457600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f830112614d1257600080fd5b81356020614d22614be583614ba0565b82815260059290921b84018101918181019086841115614d4157600080fd5b8286015b84811015614c2457803567ffffffffffffffff811115614d655760008081fd5b614d738986838b0101614c91565b845250918301918301614d45565b600080600080600060a08688031215614d9957600080fd5b853567ffffffffffffffff80821115614db157600080fd5b614dbd89838a01614bc4565b96506020880135915080821115614dd357600080fd5b614ddf89838a01614c2f565b95506040880135915080821115614df557600080fd5b614e0189838a01614bc4565b94506060880135915080821115614e1757600080fd5b614e2389838a01614d01565b93506080880135915080821115614e3957600080fd5b50614e4688828901614bc4565b9150509295509295909350565b600060208284031215614e6557600080fd5b61457682614a83565b60008060408385031215614e8157600080fd5b50508035926020909101359150565b801515811461126557600080fd5b8035614a9a81614e90565b80356fffffffffffffffffffffffffffffffff81168114614a9a57600080fd5b600080600080600080600080610100898b031215614ee657600080fd5b883567ffffffffffffffff80821115614efe57600080fd5b614f0a8c838d01614c91565b9950614f1860208c01614a83565b9850614f2660408c01614a83565b9750614f3460608c01614e9e565b9650614f4260808c01614ea9565b9550614f5060a08c01614aac565b945060c08b0135915080821115614f6657600080fd5b614f728c838d01614d01565b935060e08b0135915080821115614f8857600080fd5b50614f958b828c01614d01565b9150509295985092959890939650565b60008060408385031215614fb857600080fd5b614fc183614a83565b9150602083013567ffffffffffffffff811115614fdd57600080fd5b614fe985828601614c91565b9150509250929050565b634e487b7160e01b600052602160045260246000fd5b6003811061126557634e487b7160e01b600052602160045260246000fd5b6020810161503483615009565b91905290565b60008060006060848603121561504f57600080fd5b833592506020840135915061506660408501614a83565b90509250925092565b6040815260006150826040830185614b1a565b90508260208301529392505050565b6020808252825182820181905260009190848201906040850190845b818110156150d25783516001600160a01b0316835292840192918401916001016150ad565b50909695505050505050565b6000602082840312156150f057600080fd5b5035919050565b60008060006060848603121561510c57600080fd5b61511584614a83565b95602085013595506040909401359392505050565b60008060006060848603121561513f57600080fd5b8335925061514f60208501614a83565b9150604084013590509250925092565b6000806040838503121561517257600080fd5b823567ffffffffffffffff8082111561518a57600080fd5b61519686838701614d01565b935060208501359150808211156151ac57600080fd5b50614fe985828601614d01565b60006101006001600160a01b03808c1684528a602085015289604085015288606085015287151560808501528160a08501526151f782850188614b1a565b915083820360c085015261520b8287614b1a565b925080851660e085015250509998505050505050505050565b600080600080600080600060e0888a03121561523f57600080fd5b87359650602088013595506040880135945060608801359350608088013567ffffffffffffffff8082111561527357600080fd5b61527f8b838c01614c91565b945060a08a013591508082111561529557600080fd5b506152a28a828b01614c91565b9250506152b160c08901614a83565b905092959891949750929550565b600080604083850312156152d257600080fd5b823567ffffffffffffffff808211156152ea57600080fd5b6152f686838701614c91565b9350602085013591508082111561530c57600080fd5b50614fe985828601614c91565b60008060006060848603121561532e57600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561535857600080fd5b8235915061536860208401614a83565b90509250929050565b60006020828403121561538357600080fd5b813567ffffffffffffffff81111561539a57600080fd5b61418984828501614c91565b602081526001600160a01b038251166020820152602082015160408201526040820151606082015260608201516080820152600060808301516153ed60a084018215159052565b5060a08301516101008060c085015261540a610120850183614b1a565b915060c0850151601f198584030160e08601526154278382614b1a565b92505060e08501516127ff828601826001600160a01b03169052565b600181811c9082168061545757607f821691505b6020821081141561547857634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561549057600080fd5b815161457681614e90565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156154da576154da6154b1565b500190565b60006000198214156154f3576154f36154b1565b5060010190565b6000825161550c818460208701614aee565b9190910192915050565b600082821015615528576155286154b1565b50039056fe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000809000a",
  "deployedBytecode": "0x6080604052600436106102e65760003560e01c806380afdea811610184578063c45a0155116100d6578063dd245cac1161008a578063e979a2ce11610064578063e979a2ce146108c5578063f2fde38b146108e5578063f84ed61d1461090557600080fd5b8063dd245cac1461085b578063dde8d0d91461087b578063e26b013b146108a857600080fd5b8063c5b26447116100bb578063c5b26447146107f1578063c7c02ef514610811578063d87972621461082657600080fd5b8063c45a0155146107b5578063c53be4c8146107d657600080fd5b806398c9adff11610138578063aaf10f4211610112578063aaf10f4214610760578063b9ff5f1d14610775578063c12ed14f1461079557600080fd5b806398c9adff146106ec578063a056e1fd14610720578063a10fc6721461074057600080fd5b80638da5cb5b116101695780638da5cb5b1461068557806396bab612146106b7578063978d7783146106cc57600080fd5b806380afdea8146106155780638a8b09331461066557600080fd5b80635b648b0a1161023d57806363a15202116101f15780636ab799f1116101cb5780636ab799f1146105c05780636b2877d4146105e0578063715018a61461060057600080fd5b806363a152021461054f578063645b8b1b1461056f5780636a29afdc146105a057600080fd5b80635f784b8a116102225780635f784b8a146104aa5780636184533f146104d8578063633f71551461050557600080fd5b80635b648b0a1461046d5780635bbf11b21461049557600080fd5b80633a8be7f51161029f5780634f1ef286116102795780634f1ef286146103ed5780634fb95bc614610400578063572b6c051461042e57600080fd5b80633a8be7f5146103985780633be32f7d146103b85780633c69d94f146103cd57600080fd5b80630d3fbd05116102d05780630d3fbd05146103385780633659cfe614610358578063377dd46e1461037857600080fd5b8062c5fd24146102eb5780630c97282c1461030d575b600080fd5b3480156102f757600080fd5b5061030b610306366004614ab7565b610925565b005b34801561031957600080fd5b506103226109d0565b60405161032f9190614b46565b60405180910390f35b34801561034457600080fd5b5061030b610353366004614d81565b610a5e565b34801561036457600080fd5b5061030b610373366004614e53565b6110ec565b34801561038457600080fd5b5061030b610393366004614e6e565b611268565b3480156103a457600080fd5b5061030b6103b3366004614d81565b6112ef565b3480156103c457600080fd5b5061030b611975565b3480156103d957600080fd5b5061030b6103e8366004614ec9565b611b24565b61030b6103fb366004614fa5565b611d29565b34801561040c57600080fd5b5061042061041b366004614e6e565b611e96565b60405190815260200161032f565b34801561043a57600080fd5b5061045d610449366004614e53565b6033546001600160a01b0391821691161490565b604051901515815260200161032f565b34801561047957600080fd5b50610104546104889060ff1681565b60405161032f9190615027565b3480156104a157600080fd5b5061030b61257e565b3480156104b657600080fd5b506104ca6104c536600461503a565b612623565b60405161032f92919061506f565b3480156104e457600080fd5b506104f86104f3366004614e6e565b6126d8565b60405161032f9190615091565b34801561051157600080fd5b5061053a610520366004614e53565b610103602052600090815260409020805460019091015482565b6040805192835260208301919091520161032f565b34801561055b57600080fd5b5061030b61056a3660046150de565b612809565b34801561057b57600080fd5b5061048861058a366004614e53565b6101056020526000908152604090205460ff1681565b3480156105ac57600080fd5b5061030b6105bb3660046150f7565b6129ae565b3480156105cc57600080fd5b5061030b6105db3660046150de565b612a50565b3480156105ec57600080fd5b5061030b6105fb36600461512a565b612d48565b34801561060c57600080fd5b5061030b613092565b34801561062157600080fd5b50610108546106449061010090046fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff909116815260200161032f565b34801561067157600080fd5b5061030b610680366004614e6e565b613105565b34801561069157600080fd5b5060c9546001600160a01b03165b6040516001600160a01b03909116815260200161032f565b3480156106c357600080fd5b5061053a6131ed565b3480156106d857600080fd5b5061030b6106e736600461515f565b613229565b3480156106f857600080fd5b5061070c6107073660046150de565b613318565b60405161032f9897969594939291906151b9565b34801561072c57600080fd5b5061030b61073b366004615224565b613486565b34801561074c57600080fd5b5061032261075b366004614e53565b6139f6565b34801561076c57600080fd5b5061069f613a10565b34801561078157600080fd5b5061030b6107903660046152bf565b613a48565b3480156107a157600080fd5b5061069f6107b0366004615319565b613ae1565b3480156107c157600080fd5b506101005461069f906001600160a01b031681565b3480156107e257600080fd5b506101085461045d9060ff1681565b3480156107fd57600080fd5b5061045d61080c366004615345565b613b26565b34801561081d57600080fd5b5061053a613e29565b34801561083257600080fd5b5061053a610841366004614e53565b610102602052600090815260409020805460019091015482565b34801561086757600080fd5b50610322610876366004615371565b613e56565b34801561088757600080fd5b5061089b610896366004614e6e565b613e7a565b60405161032f91906153a6565b3480156108b457600080fd5b50610106546101075461053a919082565b3480156108d157600080fd5b5061030b6108e0366004615371565b614191565b3480156108f157600080fd5b5061030b610900366004614e53565b6141d2565b34801561091157600080fd5b5061030b610920366004615371565b6142be565b61092d614338565b6001600160a01b031661094860c9546001600160a01b031690565b6001600160a01b0316146109915760405162461bcd60e51b8152602060048201819052602482015260008051602061552e83398151915260448201526064015b60405180910390fd5b6001600160a01b038216600090815261010560205260409020805482919060ff191660018360028111156109c7576109c7614ff3565b02179055505050565b60fb80546109dd90615443565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0990615443565b8015610a565780601f10610a2b57610100808354040283529160200191610a56565b820191906000526020600020905b815481529060010190602001808311610a3957829003601f168201915b505050505081565b60006101056000610a6d614338565b6001600160a01b0316815260208101919091526040016000205460ff166002811115610a9b57610a9b614ff3565b14610add5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30610af8614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610b4057600080fd5b505af1158015610b54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b78919061547e565b610bc45760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b8251845114610c3b5760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610988565b8051845114610cb25760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610988565b60005b85518110156110e45760005b85518110156110d15760ff6000888381518110610ce057610ce061549b565b6020908102919091018101518252810191909152604001600020546001600160a01b0316610d0c614338565b6001600160a01b031614610d535760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610988565b828281518110610d6557610d6561549b565b602002602001015160001415610dbd5760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610988565b610dc5614338565b6001600160a01b0316868281518110610de057610de061549b565b60200260200101516001600160a01b03161415610e4a5760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b6064820152608401610988565b6040518060400160405280858481518110610e6757610e6761549b565b60200260200101518152602001848481518110610e8657610e8661549b565b602002602001015142610e9991906154c7565b81525060fd6000898581518110610eb257610eb261549b565b602002602001015181526020019081526020016000206000878581518110610edc57610edc61549b565b602002602001015181526020019081526020016000206000888481518110610f0657610f0661549b565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000019080519060200190610f4a9291906149b4565b506020820151816001015590505060fe6000888481518110610f6e57610f6e61549b565b602002602001015181526020019081526020016000206000868481518110610f9857610f9861549b565b60200260200101518152602001908152602001600020868281518110610fc057610fc061549b565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b03909216919091179055855186908290811061100f5761100f61549b565b60200260200101516001600160a01b03168783815181106110325761103261549b565b6020026020010151611042614338565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc87988858151811061107e5761107e61549b565b60200260200101518786815181106110985761109861549b565b60200260200101516040516110b7929190918252602082015260400190565b60405180910390a4806110c9816154df565b915050610cc1565b50806110dc816154df565b915050610cb5565b505050505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561117a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610988565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166111d57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146112405760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610988565b611249816143e4565b604080516000808252602082019092526112659183919061444b565b50565b611270614338565b6001600160a01b031661128b60c9546001600160a01b031690565b6001600160a01b0316146112cf5760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b604080518082019091528281526020018190526101069190915561010755565b600061010560006112fe614338565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561132c5761132c614ff3565b1461136e5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30611389614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156113d157600080fd5b505af11580156113e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611409919061547e565b6114555760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b82518451146114cc5760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e6774680000000000006064820152608401610988565b80518451146115435760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e6774680000000000000000006064820152608401610988565b60005b85518110156110e45760005b85518110156119625760ff60008883815181106115715761157161549b565b6020908102919091018101518252810191909152604001600020546001600160a01b031661159d614338565b6001600160a01b0316146115e45760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b6044820152606401610988565b8281815181106115f6576115f661549b565b60200260200101516000141561164e5760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f000000000000006044820152606401610988565b611656614338565b6001600160a01b03168682815181106116715761167161549b565b60200260200101516001600160a01b031614156116db5760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b6064820152608401610988565b60405180604001604052808583815181106116f8576116f861549b565b602002602001015181526020018483815181106117175761171761549b565b60200260200101514261172a91906154c7565b81525060fd60008985815181106117435761174361549b565b60200260200101518152602001908152602001600020600087848151811061176d5761176d61549b565b6020026020010151815260200190815260200160002060008884815181106117975761179761549b565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000190805190602001906117db9291906149b4565b506020820151816001015590505060fe60008884815181106117ff576117ff61549b565b6020026020010151815260200190815260200160002060008683815181106118295761182961549b565b602002602001015181526020019081526020016000208682815181106118515761185161549b565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905585518690829081106118a0576118a061549b565b60200260200101516001600160a01b03168783815181106118c3576118c361549b565b60200260200101516118d3614338565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc87988858151811061190f5761190f61549b565b60200260200101518786815181106119295761192961549b565b6020026020010151604051611948929190918252602082015260400190565b60405180910390a48061195a816154df565b915050611552565b508061196d816154df565b915050611546565b60006101056000611984614338565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156119b2576119b2614ff3565b146119f45760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30611a0f614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015611a5757600080fd5b505af1158015611a6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a8f919061547e565b611adb5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b60026101056000611aea614338565b6001600160a01b031681526020810191909152604001600020805460ff19166001836002811115611b1d57611b1d614ff3565b0217905550565b600054610100900460ff16611b3f5760005460ff1615611b43565b303b155b611bb55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610988565b600054610100900460ff16158015611bd7576000805461ffff19166101011790555b61010080546001600160a01b0319166001600160a01b038a16179055611bfb614476565b8851611c0e9060fb9060208c01906149b4565b50611c18876144e9565b610108805470ffffffffffffffffffffffffffffffffff191687151570ffffffffffffffffffffffffffffffff001916176101006fffffffffffffffffffffffffffffffff881602179055610104805485919060ff19166001836002811115611c8357611c83614ff3565b021790555060005b8351811015611d0b57828181518110611ca657611ca661549b565b602002602001015160fc858381518110611cc257611cc261549b565b6020026020010151604051611cd791906154fa565b90815260200160405180910390209080519060200190611cf89291906149b4565b5080611d03816154df565b915050611c8b565b508015611d1e576000805461ff00191690555b505050505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611db75760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608401610988565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611e127f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611e7d5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608401610988565b611e86826143e4565b611e928282600161444b565b5050565b600082815260ff6020818152604080842081516101008101835281546001600160a01b03168152600182015493810193909352600281015491830191909152600381015460608301526004810154909216151560808201526005820180548693859392909160a084019190611f0a90615443565b80601f0160208091040260200160405190810160405280929190818152602001828054611f3690615443565b8015611f835780601f10611f5857610100808354040283529160200191611f83565b820191906000526020600020905b815481529060010190602001808311611f6657829003601f168201915b50505050508152602001600682018054611f9c90615443565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc890615443565b80156120155780601f10611fea57610100808354040283529160200191612015565b820191906000526020600020905b815481529060010190602001808311611ff857829003601f168201915b5050509183525050600791909101546001600160a01b0316602090910152905061206b6101026000612045614338565b6001600160a01b0316815260208101919091526040016000206001015461010754614565565b8160600151610103600061207d614338565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101546120ab91906154c7565b11156120f95760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610988565b6000805261010260209081527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb3215460608301516101039092527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f8054909161215f916154c7565b11156121ad5760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610988565b600085815260ff6020819052604090912060040154166122355760405162461bcd60e51b815260206004820152602b60248201527f46696c65206d7573742062652075706c6f61646564206265666f726520646f7760448201527f6e6c6f6164696e672069740000000000000000000000000000000000000000006064820152608401610988565b600085815260fd60209081526040808320878452909152812081612257614338565b6001600160a01b03908116825260208083019390935260409182016000908120600101548a825260ff909452919091205491925016612294614338565b6001600160a01b031614156122b7576122b042620f42406154c7565b90506122f4565b806122f45760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610988565b856122fd614338565b6001600160a01b03167f70ca3209a41d34881db20cfa1e87e607cdc9bd70969efd77c71d730c778a1e398388604051612340929190918252602082015260400190565b60405180910390a3600086815260ff6020818152604080842081516101008101835281546001600160a01b031681526001820154938101939093526002810154918301919091526003810154606083015260048101549092161515608082015260058201805491929160a0840191906123b890615443565b80601f01602080910402602001604051908101604052809291908181526020018280546123e490615443565b80156124315780601f1061240657610100808354040283529160200191612431565b820191906000526020600020905b81548152906001019060200180831161241457829003601f168201915b5050505050815260200160068201805461244a90615443565b80601f016020809104026020016040519081016040528092919081815260200182805461247690615443565b80156124c35780601f10612498576101008083540402835291602001916124c3565b820191906000526020600020905b8154815290600101906020018083116124a657829003601f168201915b5050509183525050600791909101546001600160a01b0316602090910152606081015190915061010360006124f6614338565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101600082825461252891906154c7565b9091555050606081015160008080526101036020527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f80805490919061256e9084906154c7565b9091555091979650505050505050565b6002610105600061258d614338565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156125bb576125bb614ff3565b146126145760405162461bcd60e51b815260206004820152602360248201527f5573657220776173206e6f742064656c6574656420746f2072656163746976616044820152623a329760e91b6064820152608401610988565b60006101056000611aea614338565b60fd60209081526000938452604080852082529284528284209052825290208054819061264f90615443565b80601f016020809104026020016040519081016040528092919081815260200182805461267b90615443565b80156126c85780601f1061269d576101008083540402835291602001916126c8565b820191906000526020600020905b8154815290600101906020018083116126ab57829003601f168201915b5050505050908060010154905082565b600082815260fe60209081526040808320848452825280832080548251818502810185019093528083526060949383018282801561273f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612721575b50505050509050600080600090505b82518110156127ff57600086815260fe6020908152604080832088845290915290208054829081106127825761278261549b565b600091825260208083209091015488835260fd8252604080842089855283528084206001600160a01b039092168085529190925291206001015490925042106127ed578281815181106127d7576127d761549b565b6020026020010160006001600160a01b03168152505b806127f7816154df565b91505061274e565b5090949350505050565b600081815260ff60205260409020600701546001600160a01b031633146128985760405162461bcd60e51b815260206004820152603860248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201527f68652061737369676e65642073746f72616765206e6f646500000000000000006064820152608401610988565b600081815260ff602081905260409091206004015416156128fb5760405162461bcd60e51b815260206004820152601560248201527f46696c6520616c72656164792075706c6f6164656400000000000000000000006044820152606401610988565b600081815260ff60209081526040808320600381015490546001600160a01b0316845261010390925282208054919290916129379084906154c7565b9091555050600081815260ff602090815260408220600301548280526101039091527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f7f80549192909161298b9084906154c7565b9091555050600090815260ff60205260409020600401805460ff19166001179055565b6129b6614338565b6001600160a01b03166129d160c9546001600160a01b031690565b6001600160a01b031614612a155760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b60408051808201825292835260208084019283526001600160a01b039094166000908152610102909452909220905181559051600190910155565b600081815260ff602052604090205481906001600160a01b0316612a72614338565b6001600160a01b031614612adf5760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610988565b60006101056000612aee614338565b6001600160a01b0316815260208101919091526040016000205460ff166002811115612b1c57612b1c614ff3565b14612b5e5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30612b79614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612bc157600080fd5b505af1158015612bd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bf9919061547e565b612c455760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b600082815260ff60205260408120600301549061010390612c64614338565b6001600160a01b03166001600160a01b031681526020019081526020016000206000016000828254612c969190615516565b9091555050600082815260ff6020526040812080546001600160a01b031916815560018101829055600281018290556003810182905560048101805460ff1916905590612ce66005830182614a38565b612cf4600683016000614a38565b5060070180546001600160a01b031916905581612d0f614338565b6001600160a01b03167fa2acc0b1cda8647780f0900a02e0ba141277133ea27552fa350439c0b6684d2160405160405180910390a35050565b60006101056000612d57614338565b6001600160a01b0316815260208101919091526040016000205460ff166002811115612d8557612d85614ff3565b14612dc75760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30612de2614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015612e2a57600080fd5b505af1158015612e3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e62919061547e565b612eae5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b600083815260ff602052604090205483906001600160a01b0316612ed0614338565b6001600160a01b031614612f3d5760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610988565b600084815260fd6020908152604080832085845282528083206001600160a01b0387168452909152812090612f728282614a38565b50600060019190910181905584815260fe6020908152604080832085845282528083208054825181850281018501909352808352612fee93830182828015612fe357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612fc5575b50505050508561457d565b600086815260fe6020908152604080832087845290915290208054919250908290811061301d5761301d61549b565b600091825260209091200180546001600160a01b03191690556001600160a01b03841685613049614338565b6001600160a01b03167f60cb99feacb32252ac712ece398c95440ae888fd3a720ce9f1b32077771612eb8660405161308391815260200190565b60405180910390a45050505050565b61309a614338565b6001600160a01b03166130b560c9546001600160a01b031690565b6001600160a01b0316146130f95760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b61310360006145c5565b565b610100546001600160a01b031633146131865760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c7920666163746f727920636f6e74726163742063616e2063616c6c207460448201527f6869732066756e6374696f6e00000000000000000000000000000000000000006064820152608401610988565b60408051808201909152918252602080830191825260008052610102905290517f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32055517f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32155565b3360009081526101036020908152604080832060019081015461010290935290832001546101075483929161322191614565565b915091509091565b613231614338565b6001600160a01b031661324c60c9546001600160a01b031690565b6001600160a01b0316146132905760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b60005b8251811015613313578181815181106132ae576132ae61549b565b602002602001015160fc8483815181106132ca576132ca61549b565b60200260200101516040516132df91906154fa565b908152602001604051809103902090805190602001906133009291906149b4565b508061330b816154df565b915050613293565b505050565b60ff602081905260009182526040909120805460018201546002830154600384015460048501546005860180546001600160a01b039096169794969395929491909116929161336690615443565b80601f016020809104026020016040519081016040528092919081815260200182805461339290615443565b80156133df5780601f106133b4576101008083540402835291602001916133df565b820191906000526020600020905b8154815290600101906020018083116133c257829003601f168201915b5050505050908060060180546133f490615443565b80601f016020809104026020016040519081016040528092919081815260200182805461342090615443565b801561346d5780601f106134425761010080835404028352916020019161346d565b820191906000526020600020905b81548152906001019060200180831161345057829003601f168201915b505050600790930154919250506001600160a01b031688565b60006101056000613495614338565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156134c3576134c3614ff3565b146135055760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30613520614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561356857600080fd5b505af115801561357c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906135a0919061547e565b6135ec5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b8361362061010260006135fd614338565b6001600160a01b0316815260208101919091526040016000205461010654614565565b81610103600061362e614338565b6001600160a01b0316815260208101919091526040016000205461365291906154c7565b11156136a05760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f722075736572000000000000000000006044820152606401610988565b600080527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb320546101036020527ff167d7e9ac6011f0b837eaede5176b30419264c8a43ec5db1d59bf93c98c1f7f546136f99083906154c7565b11156137475760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f722061707000000000000000000000006044820152606401610988565b600088815260ff60205260409020546001600160a01b0316156137b65760405162461bcd60e51b815260206004820152602160248201527f4f776e657220616c726561647920657869737420666f7220746869732066696c6044820152606560f81b6064820152608401610988565b8587116137eb5760405162461bcd60e51b81526020600482015260036024820152626e3e6b60e81b6044820152606401610988565b6001861161383b5760405162461bcd60e51b815260206004820152601160248201527f6b2073686f756c64206e6f7420626520300000000000000000000000000000006044820152606401610988565b846138885760405162461bcd60e51b815260206004820152601960248201527f46696c652073697a652073686f756c64206e6f742062652030000000000000006044820152606401610988565b60405180610100016040528061389c614338565b6001600160a01b03908116825260208083018b905260408084018b905260608085018b90526000608080870182905260a08088018d905260c088018c90528a871660e0909801979097528f825260ff855290839020875181546001600160a01b0319169616959095178555868401516001860155918601516002850155850151600384015584015160048301805460ff19169115159190911790559183015180519192613951926005850192909101906149b4565b5060c0820151805161396d9160068401916020909101906149b4565b5060e09190910151600790910180546001600160a01b0319166001600160a01b03928316179055600089815260ff60209081526040918290205482518b81529182018a90529181018890528a9291909116907fb927e45e3d8ce5bbdb784af6c44bcd63515f70a54ba86e21a3af868740a6a8659060600160405180910390a35050505050505050565b61010160205260009081526040902080546109dd90615443565b6000613a437f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b613a50614338565b6001600160a01b0316613a6b60c9546001600160a01b031690565b6001600160a01b031614613aaf5760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b8060fc83604051613ac091906154fa565b908152602001604051809103902090805190602001906133139291906149b4565b60fe6020528260005260406000206020528160005260406000208181548110613b0957600080fd5b6000918252602090912001546001600160a01b0316925083915050565b600082815260ff602052604081205483906001600160a01b0316613b48614338565b6001600160a01b031614613bb55760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b6064820152608401610988565b60006101056000613bc4614338565b6001600160a01b0316815260208101919091526040016000205460ff166002811115613bf257613bf2614ff3565b14613c345760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b6044820152606401610988565b610100546001600160a01b031663c7e1562c30613c4f614338565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015613c9757600080fd5b505af1158015613cab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ccf919061547e565b613d1b5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f722074686520617070006044820152606401610988565b6001600160a01b038316613d715760405162461bcd60e51b815260206004820152600f60248201527f496e76616c6964206164647265737300000000000000000000000000000000006044820152606401610988565b600084815260ff6020526040812080546001600160a01b0319166001600160a01b038616178155600301549061010390613da9614338565b6001600160a01b03166001600160a01b031681526020019081526020016000206000016000828254613ddb9190615516565b9091555050600084815260ff60209081526040808320600301546001600160a01b03871684526101039092528220805491929091613e1a9084906154c7565b90915550600195945050505050565b33600090815261010360209081526040808320546101029092528220546101065483929161322191614565565b805160208183018101805160fc82529282019190930120915280546109dd90615443565b613ed660405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600015158152602001606081526020016060815260200160006001600160a01b031681525090565b600083815260fd6020908152604080832085845282528083203384529091528082208151808301909252805482908290613f0f90615443565b80601f0160208091040260200160405190810160405280929190818152602001828054613f3b90615443565b8015613f885780601f10613f5d57610100808354040283529160200191613f88565b820191906000526020600020905b815481529060010190602001808311613f6b57829003601f168201915b5050509183525050600191820154602091820152600087815260ff808352604080832081516101008101835281546001600160a01b0316815295810154948601949094526002840154908501526003830154606085015260048301541615156080840152600582018054949550909360a08401919061400690615443565b80601f016020809104026020016040519081016040528092919081815260200182805461403290615443565b801561407f5780601f106140545761010080835404028352916020019161407f565b820191906000526020600020905b81548152906001019060200180831161406257829003601f168201915b5050505050815260200160068201805461409890615443565b80601f01602080910402602001604051908101604052809291908181526020018280546140c490615443565b80156141115780601f106140e657610100808354040283529160200191614111565b820191906000526020600020905b8154815290600101906020018083116140f457829003601f168201915b5050509183525050600791909101546001600160a01b0390811660209092019190915281519192501633146141895760208201516141815760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b6044820152606401610988565b815160c08201525b949350505050565b80610101600061419f614338565b6001600160a01b03166001600160a01b031681526020019081526020016000209080519060200190611e929291906149b4565b6141da614338565b6001600160a01b03166141f560c9546001600160a01b031690565b6001600160a01b0316146142395760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b6001600160a01b0381166142b55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610988565b611265816145c5565b6142c6614338565b6001600160a01b03166142e160c9546001600160a01b031690565b6001600160a01b0316146143255760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b8051611e929060fb9060208401906149b4565b6033546000906001600160a01b031633141561435b575060131936013560601c90565b610100546001600160a01b031633146143dc5760405162461bcd60e51b815260206004820152602c60248201527f4e6f742061207472757374656420666f72776172646572206e6f72206661637460448201527f6f727920636f6e747261637400000000000000000000000000000000000000006064820152608401610988565b613a43614617565b6143ec614338565b6001600160a01b031661440760c9546001600160a01b031690565b6001600160a01b0316146112655760405162461bcd60e51b8152602060048201819052602482015260008051602061552e8339815191526044820152606401610988565b6144548361463f565b6000825111806144615750805b156133135761447083836146fd565b50505050565b600054610100900460ff166144e15760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b613103614808565b600054610100900460ff166145545760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b61455c614883565b611265816148ee565b60008183116145745781614576565b825b9392505050565b6000805b826001600160a01b031684828151811061459d5761459d61549b565b60200260200101516001600160a01b03161461457657806145bd816154df565b915050614581565b60c980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6033546000906001600160a01b031633141561463a575060131936013560601c90565b503390565b6001600160a01b0381163b6146bc5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610988565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60606001600160a01b0383163b61477c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610988565b600080846001600160a01b03168460405161479791906154fa565b600060405180830381855af49150503d80600081146147d2576040519150601f19603f3d011682016040523d82523d6000602084013e6147d7565b606091505b50915091506147ff828260405180606001604052806027815260200161554e6027913961497b565b95945050505050565b600054610100900460ff166148735760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b61310361487e614338565b6145c5565b600054610100900460ff166131035760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b600054610100900460ff166149595760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610988565b603380546001600160a01b0319166001600160a01b0392909216919091179055565b6060831561498a575081614576565b82511561499a5782518084602001fd5b8160405162461bcd60e51b81526004016109889190614b46565b8280546149c090615443565b90600052602060002090601f0160209004810192826149e25760008555614a28565b82601f106149fb57805160ff1916838001178555614a28565b82800160010185558215614a28579182015b82811115614a28578251825591602001919060010190614a0d565b50614a34929150614a6e565b5090565b508054614a4490615443565b6000825580601f10614a54575050565b601f01602090049060005260206000209081019061126591905b5b80821115614a345760008155600101614a6f565b80356001600160a01b0381168114614a9a57600080fd5b919050565b6003811061126557600080fd5b8035614a9a81614a9f565b60008060408385031215614aca57600080fd5b614ad383614a83565b91506020830135614ae381614a9f565b809150509250929050565b60005b83811015614b09578181015183820152602001614af1565b838111156144705750506000910152565b60008151808452614b32816020860160208601614aee565b601f01601f19169290920160200192915050565b6020815260006145766020830184614b1a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715614b9857614b98614b59565b604052919050565b600067ffffffffffffffff821115614bba57614bba614b59565b5060051b60200190565b600082601f830112614bd557600080fd5b81356020614bea614be583614ba0565b614b6f565b82815260059290921b84018101918181019086841115614c0957600080fd5b8286015b84811015614c245780358352918301918301614c0d565b509695505050505050565b600082601f830112614c4057600080fd5b81356020614c50614be583614ba0565b82815260059290921b84018101918181019086841115614c6f57600080fd5b8286015b84811015614c2457614c8481614a83565b8352918301918301614c73565b600082601f830112614ca257600080fd5b813567ffffffffffffffff811115614cbc57614cbc614b59565b614ccf601f8201601f1916602001614b6f565b818152846020838601011115614ce457600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f830112614d1257600080fd5b81356020614d22614be583614ba0565b82815260059290921b84018101918181019086841115614d4157600080fd5b8286015b84811015614c2457803567ffffffffffffffff811115614d655760008081fd5b614d738986838b0101614c91565b845250918301918301614d45565b600080600080600060a08688031215614d9957600080fd5b853567ffffffffffffffff80821115614db157600080fd5b614dbd89838a01614bc4565b96506020880135915080821115614dd357600080fd5b614ddf89838a01614c2f565b95506040880135915080821115614df557600080fd5b614e0189838a01614bc4565b94506060880135915080821115614e1757600080fd5b614e2389838a01614d01565b93506080880135915080821115614e3957600080fd5b50614e4688828901614bc4565b9150509295509295909350565b600060208284031215614e6557600080fd5b61457682614a83565b60008060408385031215614e8157600080fd5b50508035926020909101359150565b801515811461126557600080fd5b8035614a9a81614e90565b80356fffffffffffffffffffffffffffffffff81168114614a9a57600080fd5b600080600080600080600080610100898b031215614ee657600080fd5b883567ffffffffffffffff80821115614efe57600080fd5b614f0a8c838d01614c91565b9950614f1860208c01614a83565b9850614f2660408c01614a83565b9750614f3460608c01614e9e565b9650614f4260808c01614ea9565b9550614f5060a08c01614aac565b945060c08b0135915080821115614f6657600080fd5b614f728c838d01614d01565b935060e08b0135915080821115614f8857600080fd5b50614f958b828c01614d01565b9150509295985092959890939650565b60008060408385031215614fb857600080fd5b614fc183614a83565b9150602083013567ffffffffffffffff811115614fdd57600080fd5b614fe985828601614c91565b9150509250929050565b634e487b7160e01b600052602160045260246000fd5b6003811061126557634e487b7160e01b600052602160045260246000fd5b6020810161503483615009565b91905290565b60008060006060848603121561504f57600080fd5b833592506020840135915061506660408501614a83565b90509250925092565b6040815260006150826040830185614b1a565b90508260208301529392505050565b6020808252825182820181905260009190848201906040850190845b818110156150d25783516001600160a01b0316835292840192918401916001016150ad565b50909695505050505050565b6000602082840312156150f057600080fd5b5035919050565b60008060006060848603121561510c57600080fd5b61511584614a83565b95602085013595506040909401359392505050565b60008060006060848603121561513f57600080fd5b8335925061514f60208501614a83565b9150604084013590509250925092565b6000806040838503121561517257600080fd5b823567ffffffffffffffff8082111561518a57600080fd5b61519686838701614d01565b935060208501359150808211156151ac57600080fd5b50614fe985828601614d01565b60006101006001600160a01b03808c1684528a602085015289604085015288606085015287151560808501528160a08501526151f782850188614b1a565b915083820360c085015261520b8287614b1a565b925080851660e085015250509998505050505050505050565b600080600080600080600060e0888a03121561523f57600080fd5b87359650602088013595506040880135945060608801359350608088013567ffffffffffffffff8082111561527357600080fd5b61527f8b838c01614c91565b945060a08a013591508082111561529557600080fd5b506152a28a828b01614c91565b9250506152b160c08901614a83565b905092959891949750929550565b600080604083850312156152d257600080fd5b823567ffffffffffffffff808211156152ea57600080fd5b6152f686838701614c91565b9350602085013591508082111561530c57600080fd5b50614fe985828601614c91565b60008060006060848603121561532e57600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561535857600080fd5b8235915061536860208401614a83565b90509250929050565b60006020828403121561538357600080fd5b813567ffffffffffffffff81111561539a57600080fd5b61418984828501614c91565b602081526001600160a01b038251166020820152602082015160408201526040820151606082015260608201516080820152600060808301516153ed60a084018215159052565b5060a08301516101008060c085015261540a610120850183614b1a565b915060c0850151601f198584030160e08601526154278382614b1a565b92505060e08501516127ff828601826001600160a01b03169052565b600181811c9082168061545757607f821691505b6020821081141561547857634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561549057600080fd5b815161457681614e90565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156154da576154da6154b1565b500190565b60006000198214156154f3576154f36154b1565b5060010190565b6000825161550c818460208701614aee565b9190910192915050565b600082821015615528576155286154b1565b50039056fe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000809000a",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
