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
      "name": "NewUpdateAccess",
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
        },
        {
          "internalType": "address",
          "name": "_ephemeral_address",
          "type": "address"
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
          "name": "_fileSize",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_encryptedMetaData",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "_storageNode",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_ephemeral_address",
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
  "bytecode": "0x60a06040523060805234801561001457600080fd5b50608051614e156100456000396000818161105a015281816110df01528181611ba20152611c270152614e156000f3fe6080604052600436106102d05760003560e01c8063715018a611610179578063c45a0155116100d6578063dd245cac1161008a578063e45d8ba011610064578063e45d8ba01461087c578063f2fde38b1461089c578063f84ed61d146108bc57600080fd5b8063dd245cac14610812578063dde8d0d914610832578063e26b013b1461085f57600080fd5b8063c5b26447116100bb578063c5b26447146107a8578063c7c02ef5146107c8578063d8797262146107dd57600080fd5b8063c45a01551461076c578063c53be4c81461078d57600080fd5b8063978d77831161012d578063aaf10f4211610112578063aaf10f4214610717578063b9ff5f1d1461072c578063c12ed14f1461074c57600080fd5b8063978d7783146106c657806398c9adff146106e657600080fd5b80638a8b09331161015e5780638a8b09331461065f5780638da5cb5b1461067f57806396bab612146106b157600080fd5b8063715018a6146105fa57806380afdea81461060f57600080fd5b80635b648b0a11610232578063633f7155116101e65780636a29afdc116101c05780636a29afdc1461059a5780636ab799f1146105ba5780636b2877d4146105da57600080fd5b8063633f7155146104ff57806363a1520214610549578063645b8b1b1461056957600080fd5b80635c0d15d7116102175780635c0d15d7146104745780635f784b8a146104945780636184533f146104d257600080fd5b80635b648b0a146104375780635bbf11b21461045f57600080fd5b80633be32f7d116102895780634a40d90d1161026e5780634a40d90d146103b75780634f1ef286146103e5578063572b6c05146103f857600080fd5b80633be32f7d146103825780633c69d94f1461039757600080fd5b806333dd1c0f116102ba57806333dd1c0f146103225780633659cfe614610342578063377dd46e1461036257600080fd5b8062c5fd24146102d55780630c97282c146102f7575b600080fd5b3480156102e157600080fd5b506102f56102f0366004614425565b6108dc565b005b34801561030357600080fd5b5061030c610987565b60405161031991906144b4565b60405180910390f35b34801561032e57600080fd5b506102f561033d36600461459d565b610a15565b34801561034e57600080fd5b506102f561035d3660046146a5565b61104f565b34801561036e57600080fd5b506102f561037d3660046146c0565b6111cb565b34801561038e57600080fd5b506102f5611252565b3480156103a357600080fd5b506102f56103b236600461480b565b611401565b3480156103c357600080fd5b506103d76103d23660046148e7565b611606565b604051908152602001610319565b6102f56103f336600461491c565b611b97565b34801561040457600080fd5b506104276104133660046146a5565b6033546001600160a01b0391821691161490565b6040519015158152602001610319565b34801561044357600080fd5b50610103546104529060ff1681565b604051610319919061499e565b34801561046b57600080fd5b506102f5611d04565b34801561048057600080fd5b506102f561048f3660046149b1565b611da9565b3480156104a057600080fd5b506103d76104af3660046148e7565b60fd60209081526000938452604080852082529284528284209052825290205481565b3480156104de57600080fd5b506104f26104ed3660046146c0565b61223f565b6040516103199190614a23565b34801561050b57600080fd5b5061053461051a3660046146a5565b610102602052600090815260409020805460019091015482565b60408051928352602083019190915201610319565b34801561055557600080fd5b506102f5610564366004614a70565b61236d565b34801561057557600080fd5b506104526105843660046146a5565b6101046020526000908152604090205460ff1681565b3480156105a657600080fd5b506102f56105b5366004614a89565b612512565b3480156105c657600080fd5b506102f56105d5366004614a70565b6125b4565b3480156105e657600080fd5b506102f56105f5366004614abc565b612890565b34801561060657600080fd5b506102f5612bc1565b34801561061b57600080fd5b506101075461063e9061010090046fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff9091168152602001610319565b34801561066b57600080fd5b506102f561067a3660046146c0565b612c34565b34801561068b57600080fd5b5060c9546001600160a01b03165b6040516001600160a01b039091168152602001610319565b3480156106bd57600080fd5b50610534612d1c565b3480156106d257600080fd5b506102f56106e1366004614af1565b612d58565b3480156106f257600080fd5b50610706610701366004614a70565b612e47565b604051610319959493929190614b4b565b34801561072357600080fd5b50610699612f1b565b34801561073857600080fd5b506102f5610747366004614b91565b612f53565b34801561075857600080fd5b50610699610767366004614beb565b612fec565b34801561077857600080fd5b5061010054610699906001600160a01b031681565b34801561079957600080fd5b50610107546104279060ff1681565b3480156107b457600080fd5b506104276107c3366004614c17565b613031565b3480156107d457600080fd5b50610534613334565b3480156107e957600080fd5b506105346107f83660046146a5565b610101602052600090815260409020805460019091015482565b34801561081e57600080fd5b5061030c61082d366004614c43565b613361565b34801561083e57600080fd5b5061085261084d3660046146c0565b613385565b6040516103199190614c78565b34801561086b57600080fd5b506101055461010654610534919082565b34801561088857600080fd5b506102f561089736600461459d565b61350d565b3480156108a857600080fd5b506102f56108b73660046146a5565b613b40565b3480156108c857600080fd5b506102f56108d7366004614c43565b613c2c565b6108e4613ca6565b6001600160a01b03166108ff60c9546001600160a01b031690565b6001600160a01b0316146109485760405162461bcd60e51b81526020600482018190526024820152600080516020614dc283398151915260448201526064015b60405180910390fd5b6001600160a01b038216600090815261010460205260409020805482919060ff1916600183600281111561097e5761097e61496a565b02179055505050565b60fb805461099490614cd7565b80601f01602080910402602001604051908101604052809291908181526020018280546109c090614cd7565b8015610a0d5780601f106109e257610100808354040283529160200191610a0d565b820191906000526020600020905b8154815290600101906020018083116109f057829003601f168201915b505050505081565b60006101046000610a24613ca6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115610a5257610a5261496a565b14610a945760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c30610aaf613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610af757600080fd5b505af1158015610b0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2f9190614d12565b610b7b5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b8151835114610bf25760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e677468000000000000606482015260840161093f565b8051835114610c695760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e677468000000000000000000606482015260840161093f565b60005b84518110156110485760005b84518110156110355760ff6000878381518110610c9757610c97614d2f565b6020908102919091018101518252810191909152604001600020546001600160a01b0316610cc3613ca6565b6001600160a01b031614610d0a5760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b604482015260640161093f565b828181518110610d1c57610d1c614d2f565b602002602001015160001415610d745760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f00000000000000604482015260640161093f565b610d7c613ca6565b6001600160a01b0316858281518110610d9757610d97614d2f565b60200260200101516001600160a01b03161415610e015760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b606482015260840161093f565b828181518110610e1357610e13614d2f565b602002602001015142610e269190614d5b565b60fd6000888581518110610e3c57610e3c614d2f565b602002602001015181526020019081526020016000206000868481518110610e6657610e66614d2f565b602002602001015181526020019081526020016000206000878481518110610e9057610e90614d2f565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555060fe6000878481518110610ed257610ed2614d2f565b602002602001015181526020019081526020016000206000858381518110610efc57610efc614d2f565b60200260200101518152602001908152602001600020858281518110610f2457610f24614d2f565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558451859082908110610f7357610f73614d2f565b60200260200101516001600160a01b0316868381518110610f9657610f96614d2f565b6020026020010151610fa6613ca6565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc879878581518110610fe257610fe2614d2f565b6020026020010151878681518110610ffc57610ffc614d2f565b602002602001015160405161101b929190918252602082015260400190565b60405180910390a48061102d81614d73565b915050610c78565b508061104081614d73565b915050610c6c565b5050505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156110dd5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161093f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166111387f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146111a35760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b606482015260840161093f565b6111ac81613d52565b604080516000808252602082019092526111c891839190613db9565b50565b6111d3613ca6565b6001600160a01b03166111ee60c9546001600160a01b031690565b6001600160a01b0316146112325760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b604080518082019091528281526020018190526101059190915561010655565b60006101046000611261613ca6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561128f5761128f61496a565b146112d15760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c306112ec613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561133457600080fd5b505af1158015611348573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136c9190614d12565b6113b85760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b600261010460006113c7613ca6565b6001600160a01b031681526020810191909152604001600020805460ff191660018360028111156113fa576113fa61496a565b0217905550565b600054610100900460ff1661141c5760005460ff1615611420565b303b155b6114925760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161093f565b600054610100900460ff161580156114b4576000805461ffff19166101011790555b61010080546001600160a01b0319166001600160a01b038a161790556114d8613de4565b88516114eb9060fb9060208c0190614322565b506114f587613e57565b610107805470ffffffffffffffffffffffffffffffffff191687151570ffffffffffffffffffffffffffffffff001916176101006fffffffffffffffffffffffffffffffff881602179055610103805485919060ff191660018360028111156115605761156061496a565b021790555060005b83518110156115e85782818151811061158357611583614d2f565b602002602001015160fc85838151811061159f5761159f614d2f565b60200260200101516040516115b49190614d8e565b908152602001604051809103902090805190602001906115d5929190614322565b50806115e081614d73565b915050611568565b5080156115fb576000805461ff00191690555b505050505050505050565b600083815260ff60208181526040808420815160a08101835281546001600160a01b0316815260018201549381019390935260028101549093161515908201526003820180548793859392909160608401919061166290614cd7565b80601f016020809104026020016040519081016040528092919081815260200182805461168e90614cd7565b80156116db5780601f106116b0576101008083540402835291602001916116db565b820191906000526020600020905b8154815290600101906020018083116116be57829003601f168201915b5050509183525050600491909101546001600160a01b03166020909101529050611731610101600061170b613ca6565b6001600160a01b0316815260208101919091526040016000206001015461010654613ed3565b81602001516101026000611743613ca6565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101546117719190614d5b565b11156117bf5760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f72207573657200000000000000000000604482015260640161093f565b6000805261010160209081527f0cdd55771c7d27dcc6a0e4e270b6c2288741ffbaa23147ee33eabaa4ce4aa5a054828201516101029092527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32154909161182491614d5b565b11156118725760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f72206170700000000000000000000000604482015260640161093f565b600086815260ff6020819052604090912060020154166118fa5760405162461bcd60e51b815260206004820152602b60248201527f46696c65206d7573742062652075706c6f61646564206265666f726520646f7760448201527f6e6c6f6164696e67206974000000000000000000000000000000000000000000606482015260840161093f565b600086815260fd6020908152604080832088845290915281208161191c613ca6565b6001600160a01b03908116825260208083019390935260409182016000908120548b825260ff909452919091205491925016611956613ca6565b6001600160a01b031614156119795761197242620f4240614d5b565b90506119b6565b806119b65760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b604482015260640161093f565b866119bf613ca6565b6001600160a01b03167f70ca3209a41d34881db20cfa1e87e607cdc9bd70969efd77c71d730c778a1e398389604051611a02929190918252602082015260400190565b60405180910390a3600087815260ff60208181526040808420815160a08101835281546001600160a01b031681526001820154938101939093526002810154909316151590820152600382018054919291606084019190611a6290614cd7565b80601f0160208091040260200160405190810160405280929190818152602001828054611a8e90614cd7565b8015611adb5780601f10611ab057610100808354040283529160200191611adb565b820191906000526020600020905b815481529060010190602001808311611abe57829003601f168201915b5050509183525050600491909101546001600160a01b03166020918201528101519091506101026000611b0c613ca6565b6001600160a01b03166001600160a01b031681526020019081526020016000206001016000828254611b3e9190614d5b565b909155505060208082015160008080526101029092527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb321805491929091611b86908490614d5b565b909155509198975050505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611c255760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161093f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611c807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611ceb5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b606482015260840161093f565b611cf482613d52565b611d0082826001613db9565b5050565b60026101046000611d13613ca6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115611d4157611d4161496a565b14611d9a5760405162461bcd60e51b815260206004820152602360248201527f5573657220776173206e6f742064656c6574656420746f2072656163746976616044820152623a329760e91b606482015260840161093f565b600061010460006113c7613ca6565b60006101046000611db8613ca6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115611de657611de661496a565b14611e285760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c30611e43613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015611e8b57600080fd5b505af1158015611e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec39190614d12565b611f0f5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b83611f436101016000611f20613ca6565b6001600160a01b0316815260208101919091526040016000205461010554613ed3565b816101026000611f51613ca6565b6001600160a01b03168152602081019190915260400160002054611f759190614d5b565b1115611fc35760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f72207573657200000000000000000000604482015260640161093f565b600080527f0cdd55771c7d27dcc6a0e4e270b6c2288741ffbaa23147ee33eabaa4ce4aa59f546101026020527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb3205461201c908390614d5b565b111561206a5760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f72206170700000000000000000000000604482015260640161093f565b600086815260ff60205260409020546001600160a01b0316156120d95760405162461bcd60e51b815260206004820152602160248201527f4f776e657220616c726561647920657869737420666f7220746869732066696c6044820152606560f81b606482015260840161093f565b846121265760405162461bcd60e51b815260206004820152600f60248201527f53686f756c64206e6f7420626520300000000000000000000000000000000000604482015260640161093f565b6040518060a00160405280612139613ca6565b6001600160a01b03908116825260208083018990526000604080850182905260608086018b90528985166080909601959095528b825260ff835290819020855181546001600160a01b031916941693909317835584820151600184015584015160028301805460ff191691151591909117905591830151805191926121c692600385019290910190614322565b5060809190910151600490910180546001600160a01b0319166001600160a01b03928316179055600087815260ff6020908152604091829020549151888152899392909216917f726a4464eb36c1fee64d3616d06107ca25ad191a8833f29e2b8e846321125263910160405180910390a3505050505050565b600082815260fe6020908152604080832084845282528083208054825181850281018501909352808352606094938301828280156122a657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612288575b50505050509050600080600090505b825181101561236357600086815260fe6020908152604080832088845290915290208054829081106122e9576122e9614d2f565b600091825260208083209091015488835260fd8252604080842089855283528084206001600160a01b039092168085529190925291205490925042106123515782818151811061233b5761233b614d2f565b6020026020010160006001600160a01b03168152505b8061235b81614d73565b9150506122b5565b5090949350505050565b600081815260ff60205260409020600401546001600160a01b031633146123fc5760405162461bcd60e51b815260206004820152603860248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201527f68652061737369676e65642073746f72616765206e6f64650000000000000000606482015260840161093f565b600081815260ff6020819052604090912060020154161561245f5760405162461bcd60e51b815260206004820152601560248201527f46696c6520616c72656164792075706c6f616465640000000000000000000000604482015260640161093f565b600081815260ff60209081526040808320600181015490546001600160a01b03168452610102909252822080549192909161249b908490614d5b565b9091555050600081815260ff602090815260408220600101548280526101029091527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb3208054919290916124ef908490614d5b565b9091555050600090815260ff60205260409020600201805460ff19166001179055565b61251a613ca6565b6001600160a01b031661253560c9546001600160a01b031690565b6001600160a01b0316146125795760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b60408051808201825292835260208084019283526001600160a01b039094166000908152610101909452909220905181559051600190910155565b600081815260ff602052604090205481906001600160a01b03166125d6613ca6565b6001600160a01b0316146126435760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b606482015260840161093f565b60006101046000612652613ca6565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156126805761268061496a565b146126c25760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c306126dd613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561272557600080fd5b505af1158015612739573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061275d9190614d12565b6127a95760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b600082815260ff602052604081206001015490610102906127c8613ca6565b6001600160a01b03166001600160a01b0316815260200190815260200160002060000160008282546127fa9190614daa565b9091555050600082815260ff6020526040812080546001600160a01b03191681556001810182905560028101805460ff191690559061283c60038301826143a6565b5060040180546001600160a01b031916905581612857613ca6565b6001600160a01b03167fa2acc0b1cda8647780f0900a02e0ba141277133ea27552fa350439c0b6684d2160405160405180910390a35050565b6000610104600061289f613ca6565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156128cd576128cd61496a565b1461290f5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c3061292a613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561297257600080fd5b505af1158015612986573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129aa9190614d12565b6129f65760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b600083815260ff602052604090205483906001600160a01b0316612a18613ca6565b6001600160a01b031614612a855760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b606482015260840161093f565b600084815260fd6020908152604080832085845282528083206001600160a01b0387168452825280832083905586835260fe825280832085845282528083208054825181850281018501909352808352612b1d93830182828015612b1257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612af4575b505050505085613eeb565b600086815260fe60209081526040808320878452909152902080549192509082908110612b4c57612b4c614d2f565b600091825260209091200180546001600160a01b03191690556001600160a01b03841685612b78613ca6565b6001600160a01b03167f020d11a518178a498576a55c87164bdcd0306e4c930caf13f2a9c2049cc70ba486604051612bb291815260200190565b60405180910390a45050505050565b612bc9613ca6565b6001600160a01b0316612be460c9546001600160a01b031690565b6001600160a01b031614612c285760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b612c326000613f33565b565b610100546001600160a01b03163314612cb55760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c7920666163746f727920636f6e74726163742063616e2063616c6c207460448201527f6869732066756e6374696f6e0000000000000000000000000000000000000000606482015260840161093f565b60408051808201909152918252602080830191825260008052610101905290517f0cdd55771c7d27dcc6a0e4e270b6c2288741ffbaa23147ee33eabaa4ce4aa59f55517f0cdd55771c7d27dcc6a0e4e270b6c2288741ffbaa23147ee33eabaa4ce4aa5a055565b33600090815261010260209081526040808320600190810154610101909352908320015461010654839291612d5091613ed3565b915091509091565b612d60613ca6565b6001600160a01b0316612d7b60c9546001600160a01b031690565b6001600160a01b031614612dbf5760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b60005b8251811015612e4257818181518110612ddd57612ddd614d2f565b602002602001015160fc848381518110612df957612df9614d2f565b6020026020010151604051612e0e9190614d8e565b90815260200160405180910390209080519060200190612e2f929190614322565b5080612e3a81614d73565b915050612dc2565b505050565b60ff6020819052600091825260409091208054600182015460028301546003840180546001600160a01b039094169592949190921692909190612e8990614cd7565b80601f0160208091040260200160405190810160405280929190818152602001828054612eb590614cd7565b8015612f025780601f10612ed757610100808354040283529160200191612f02565b820191906000526020600020905b815481529060010190602001808311612ee557829003601f168201915b505050600490930154919250506001600160a01b031685565b6000612f4e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b612f5b613ca6565b6001600160a01b0316612f7660c9546001600160a01b031690565b6001600160a01b031614612fba5760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b8060fc83604051612fcb9190614d8e565b90815260200160405180910390209080519060200190612e42929190614322565b60fe602052826000526040600020602052816000526040600020818154811061301457600080fd5b6000918252602090912001546001600160a01b0316925083915050565b600082815260ff602052604081205483906001600160a01b0316613053613ca6565b6001600160a01b0316146130c05760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b606482015260840161093f565b600061010460006130cf613ca6565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156130fd576130fd61496a565b1461313f5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c3061315a613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156131a257600080fd5b505af11580156131b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131da9190614d12565b6132265760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b6001600160a01b03831661327c5760405162461bcd60e51b815260206004820152600f60248201527f496e76616c696420616464726573730000000000000000000000000000000000604482015260640161093f565b600084815260ff6020526040812080546001600160a01b0319166001600160a01b0386161781556001015490610102906132b4613ca6565b6001600160a01b03166001600160a01b0316815260200190815260200160002060000160008282546132e69190614daa565b9091555050600084815260ff60209081526040808320600101546001600160a01b03871684526101029092528220805491929091613325908490614d5b565b90915550600195945050505050565b336000908152610102602090815260408083205461010190925282205461010554839291612d5091613ed3565b805160208183018101805160fc825292820191909301209152805461099490614cd7565b6040805160a080820183526000808352602080840182905283850182905260608085018190526080850183905287835260fd8252858320878452825285832033845282528583205488845260ff8084528785208851968701895280546001600160a01b031687526001810154948701949094526002840154161515968501969096526003820180549596959394939184019161342090614cd7565b80601f016020809104026020016040519081016040528092919081815260200182805461344c90614cd7565b80156134995780601f1061346e57610100808354040283529160200191613499565b820191906000526020600020905b81548152906001019060200180831161347c57829003601f168201915b5050509183525050600491909101546001600160a01b03908116602090920191909152815191925016331461350557816135055760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b604482015260640161093f565b949350505050565b6000610104600061351c613ca6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561354a5761354a61496a565b1461358c5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c306135a7613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156135ef57600080fd5b505af1158015613603573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136279190614d12565b6136735760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b81518351146136ea5760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e677468000000000000606482015260840161093f565b80518351146137615760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e677468000000000000000000606482015260840161093f565b60005b84518110156110485760005b8451811015613b2d5760ff600087838151811061378f5761378f614d2f565b6020908102919091018101518252810191909152604001600020546001600160a01b03166137bb613ca6565b6001600160a01b0316146138025760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b604482015260640161093f565b82828151811061381457613814614d2f565b60200260200101516000141561386c5760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f00000000000000604482015260640161093f565b613874613ca6565b6001600160a01b031685828151811061388f5761388f614d2f565b60200260200101516001600160a01b031614156138f95760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b606482015260840161093f565b82828151811061390b5761390b614d2f565b60200260200101514261391e9190614d5b565b60fd600088858151811061393457613934614d2f565b60200260200101518152602001908152602001600020600086858151811061395e5761395e614d2f565b60200260200101518152602001908152602001600020600087848151811061398857613988614d2f565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555060fe60008784815181106139ca576139ca614d2f565b6020026020010151815260200190815260200160002060008584815181106139f4576139f4614d2f565b60200260200101518152602001908152602001600020858281518110613a1c57613a1c614d2f565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558451859082908110613a6b57613a6b614d2f565b60200260200101516001600160a01b0316868381518110613a8e57613a8e614d2f565b6020026020010151613a9e613ca6565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc879878581518110613ada57613ada614d2f565b6020026020010151878681518110613af457613af4614d2f565b6020026020010151604051613b13929190918252602082015260400190565b60405180910390a480613b2581614d73565b915050613770565b5080613b3881614d73565b915050613764565b613b48613ca6565b6001600160a01b0316613b6360c9546001600160a01b031690565b6001600160a01b031614613ba75760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b6001600160a01b038116613c235760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161093f565b6111c881613f33565b613c34613ca6565b6001600160a01b0316613c4f60c9546001600160a01b031690565b6001600160a01b031614613c935760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b8051611d009060fb906020840190614322565b6033546000906001600160a01b0316331415613cc9575060131936013560601c90565b610100546001600160a01b03163314613d4a5760405162461bcd60e51b815260206004820152602c60248201527f4e6f742061207472757374656420666f72776172646572206e6f72206661637460448201527f6f727920636f6e74726163740000000000000000000000000000000000000000606482015260840161093f565b612f4e613f85565b613d5a613ca6565b6001600160a01b0316613d7560c9546001600160a01b031690565b6001600160a01b0316146111c85760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b613dc283613fad565b600082511180613dcf5750805b15612e4257613dde838361406b565b50505050565b600054610100900460ff16613e4f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b612c32614176565b600054610100900460ff16613ec25760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b613eca6141f1565b6111c88161425c565b6000818311613ee25781613ee4565b825b9392505050565b6000805b826001600160a01b0316848281518110613f0b57613f0b614d2f565b60200260200101516001600160a01b031614613ee45780613f2b81614d73565b915050613eef565b60c980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6033546000906001600160a01b0316331415613fa8575060131936013560601c90565b503390565b6001600160a01b0381163b61402a5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161093f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60606001600160a01b0383163b6140ea5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e74726163740000000000000000000000000000000000000000000000000000606482015260840161093f565b600080846001600160a01b0316846040516141059190614d8e565b600060405180830381855af49150503d8060008114614140576040519150601f19603f3d011682016040523d82523d6000602084013e614145565b606091505b509150915061416d8282604051806060016040528060278152602001614de2602791396142e9565b95945050505050565b600054610100900460ff166141e15760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b612c326141ec613ca6565b613f33565b600054610100900460ff16612c325760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b600054610100900460ff166142c75760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b603380546001600160a01b0319166001600160a01b0392909216919091179055565b606083156142f8575081613ee4565b8251156143085782518084602001fd5b8160405162461bcd60e51b815260040161093f91906144b4565b82805461432e90614cd7565b90600052602060002090601f0160209004810192826143505760008555614396565b82601f1061436957805160ff1916838001178555614396565b82800160010185558215614396579182015b8281111561439657825182559160200191906001019061437b565b506143a29291506143dc565b5090565b5080546143b290614cd7565b6000825580601f106143c2575050565b601f0160209004906000526020600020908101906111c891905b5b808211156143a257600081556001016143dd565b80356001600160a01b038116811461440857600080fd5b919050565b600381106111c857600080fd5b80356144088161440d565b6000806040838503121561443857600080fd5b614441836143f1565b915060208301356144518161440d565b809150509250929050565b60005b8381101561447757818101518382015260200161445f565b83811115613dde5750506000910152565b600081518084526144a081602086016020860161445c565b601f01601f19169290920160200192915050565b602081526000613ee46020830184614488565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715614506576145066144c7565b604052919050565b600067ffffffffffffffff821115614528576145286144c7565b5060051b60200190565b600082601f83011261454357600080fd5b813560206145586145538361450e565b6144dd565b82815260059290921b8401810191818101908684111561457757600080fd5b8286015b84811015614592578035835291830191830161457b565b509695505050505050565b600080600080608085870312156145b357600080fd5b843567ffffffffffffffff808211156145cb57600080fd5b6145d788838901614532565b95506020915081870135818111156145ee57600080fd5b8701601f810189136145ff57600080fd5b803561460d6145538261450e565b81815260059190911b8201840190848101908b83111561462c57600080fd5b928501925b8284101561465157614642846143f1565b82529285019290850190614631565b9750505050604087013591508082111561466a57600080fd5b61467688838901614532565b9350606087013591508082111561468c57600080fd5b5061469987828801614532565b91505092959194509250565b6000602082840312156146b757600080fd5b613ee4826143f1565b600080604083850312156146d357600080fd5b50508035926020909101359150565b600082601f8301126146f357600080fd5b813567ffffffffffffffff81111561470d5761470d6144c7565b614720601f8201601f19166020016144dd565b81815284602083860101111561473557600080fd5b816020850160208301376000918101602001919091529392505050565b80151581146111c857600080fd5b803561440881614752565b80356fffffffffffffffffffffffffffffffff8116811461440857600080fd5b600082601f83011261479c57600080fd5b813560206147ac6145538361450e565b82815260059290921b840181019181810190868411156147cb57600080fd5b8286015b8481101561459257803567ffffffffffffffff8111156147ef5760008081fd5b6147fd8986838b01016146e2565b8452509183019183016147cf565b600080600080600080600080610100898b03121561482857600080fd5b883567ffffffffffffffff8082111561484057600080fd5b61484c8c838d016146e2565b995061485a60208c016143f1565b985061486860408c016143f1565b975061487660608c01614760565b965061488460808c0161476b565b955061489260a08c0161441a565b945060c08b01359150808211156148a857600080fd5b6148b48c838d0161478b565b935060e08b01359150808211156148ca57600080fd5b506148d78b828c0161478b565b9150509295985092959890939650565b6000806000606084860312156148fc57600080fd5b8335925060208401359150614913604085016143f1565b90509250925092565b6000806040838503121561492f57600080fd5b614938836143f1565b9150602083013567ffffffffffffffff81111561495457600080fd5b614960858286016146e2565b9150509250929050565b634e487b7160e01b600052602160045260246000fd5b600381106111c857634e487b7160e01b600052602160045260246000fd5b602081016149ab83614980565b91905290565b600080600080600060a086880312156149c957600080fd5b8535945060208601359350604086013567ffffffffffffffff8111156149ee57600080fd5b6149fa888289016146e2565b935050614a09606087016143f1565b9150614a17608087016143f1565b90509295509295909350565b6020808252825182820181905260009190848201906040850190845b81811015614a645783516001600160a01b031683529284019291840191600101614a3f565b50909695505050505050565b600060208284031215614a8257600080fd5b5035919050565b600080600060608486031215614a9e57600080fd5b614aa7846143f1565b95602085013595506040909401359392505050565b600080600060608486031215614ad157600080fd5b83359250614ae1602085016143f1565b9150604084013590509250925092565b60008060408385031215614b0457600080fd5b823567ffffffffffffffff80821115614b1c57600080fd5b614b288683870161478b565b93506020850135915080821115614b3e57600080fd5b506149608582860161478b565b60006001600160a01b038088168352866020840152851515604084015260a06060840152614b7c60a0840186614488565b91508084166080840152509695505050505050565b60008060408385031215614ba457600080fd5b823567ffffffffffffffff80821115614bbc57600080fd5b614bc8868387016146e2565b93506020850135915080821115614bde57600080fd5b50614960858286016146e2565b600080600060608486031215614c0057600080fd5b505081359360208301359350604090920135919050565b60008060408385031215614c2a57600080fd5b82359150614c3a602084016143f1565b90509250929050565b600060208284031215614c5557600080fd5b813567ffffffffffffffff811115614c6c57600080fd5b613505848285016146e2565b6020815260006001600160a01b0380845116602084015260208401516040840152604084015115156060840152606084015160a06080850152614cbe60c0850182614488565b90508160808601511660a0850152809250505092915050565b600181811c90821680614ceb57607f821691505b60208210811415614d0c57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215614d2457600080fd5b8151613ee481614752565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115614d6e57614d6e614d45565b500190565b6000600019821415614d8757614d87614d45565b5060010190565b60008251614da081846020870161445c565b9190910192915050565b600082821015614dbc57614dbc614d45565b50039056fe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000809000a",
  "deployedBytecode": "0x6080604052600436106102d05760003560e01c8063715018a611610179578063c45a0155116100d6578063dd245cac1161008a578063e45d8ba011610064578063e45d8ba01461087c578063f2fde38b1461089c578063f84ed61d146108bc57600080fd5b8063dd245cac14610812578063dde8d0d914610832578063e26b013b1461085f57600080fd5b8063c5b26447116100bb578063c5b26447146107a8578063c7c02ef5146107c8578063d8797262146107dd57600080fd5b8063c45a01551461076c578063c53be4c81461078d57600080fd5b8063978d77831161012d578063aaf10f4211610112578063aaf10f4214610717578063b9ff5f1d1461072c578063c12ed14f1461074c57600080fd5b8063978d7783146106c657806398c9adff146106e657600080fd5b80638a8b09331161015e5780638a8b09331461065f5780638da5cb5b1461067f57806396bab612146106b157600080fd5b8063715018a6146105fa57806380afdea81461060f57600080fd5b80635b648b0a11610232578063633f7155116101e65780636a29afdc116101c05780636a29afdc1461059a5780636ab799f1146105ba5780636b2877d4146105da57600080fd5b8063633f7155146104ff57806363a1520214610549578063645b8b1b1461056957600080fd5b80635c0d15d7116102175780635c0d15d7146104745780635f784b8a146104945780636184533f146104d257600080fd5b80635b648b0a146104375780635bbf11b21461045f57600080fd5b80633be32f7d116102895780634a40d90d1161026e5780634a40d90d146103b75780634f1ef286146103e5578063572b6c05146103f857600080fd5b80633be32f7d146103825780633c69d94f1461039757600080fd5b806333dd1c0f116102ba57806333dd1c0f146103225780633659cfe614610342578063377dd46e1461036257600080fd5b8062c5fd24146102d55780630c97282c146102f7575b600080fd5b3480156102e157600080fd5b506102f56102f0366004614425565b6108dc565b005b34801561030357600080fd5b5061030c610987565b60405161031991906144b4565b60405180910390f35b34801561032e57600080fd5b506102f561033d36600461459d565b610a15565b34801561034e57600080fd5b506102f561035d3660046146a5565b61104f565b34801561036e57600080fd5b506102f561037d3660046146c0565b6111cb565b34801561038e57600080fd5b506102f5611252565b3480156103a357600080fd5b506102f56103b236600461480b565b611401565b3480156103c357600080fd5b506103d76103d23660046148e7565b611606565b604051908152602001610319565b6102f56103f336600461491c565b611b97565b34801561040457600080fd5b506104276104133660046146a5565b6033546001600160a01b0391821691161490565b6040519015158152602001610319565b34801561044357600080fd5b50610103546104529060ff1681565b604051610319919061499e565b34801561046b57600080fd5b506102f5611d04565b34801561048057600080fd5b506102f561048f3660046149b1565b611da9565b3480156104a057600080fd5b506103d76104af3660046148e7565b60fd60209081526000938452604080852082529284528284209052825290205481565b3480156104de57600080fd5b506104f26104ed3660046146c0565b61223f565b6040516103199190614a23565b34801561050b57600080fd5b5061053461051a3660046146a5565b610102602052600090815260409020805460019091015482565b60408051928352602083019190915201610319565b34801561055557600080fd5b506102f5610564366004614a70565b61236d565b34801561057557600080fd5b506104526105843660046146a5565b6101046020526000908152604090205460ff1681565b3480156105a657600080fd5b506102f56105b5366004614a89565b612512565b3480156105c657600080fd5b506102f56105d5366004614a70565b6125b4565b3480156105e657600080fd5b506102f56105f5366004614abc565b612890565b34801561060657600080fd5b506102f5612bc1565b34801561061b57600080fd5b506101075461063e9061010090046fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff9091168152602001610319565b34801561066b57600080fd5b506102f561067a3660046146c0565b612c34565b34801561068b57600080fd5b5060c9546001600160a01b03165b6040516001600160a01b039091168152602001610319565b3480156106bd57600080fd5b50610534612d1c565b3480156106d257600080fd5b506102f56106e1366004614af1565b612d58565b3480156106f257600080fd5b50610706610701366004614a70565b612e47565b604051610319959493929190614b4b565b34801561072357600080fd5b50610699612f1b565b34801561073857600080fd5b506102f5610747366004614b91565b612f53565b34801561075857600080fd5b50610699610767366004614beb565b612fec565b34801561077857600080fd5b5061010054610699906001600160a01b031681565b34801561079957600080fd5b50610107546104279060ff1681565b3480156107b457600080fd5b506104276107c3366004614c17565b613031565b3480156107d457600080fd5b50610534613334565b3480156107e957600080fd5b506105346107f83660046146a5565b610101602052600090815260409020805460019091015482565b34801561081e57600080fd5b5061030c61082d366004614c43565b613361565b34801561083e57600080fd5b5061085261084d3660046146c0565b613385565b6040516103199190614c78565b34801561086b57600080fd5b506101055461010654610534919082565b34801561088857600080fd5b506102f561089736600461459d565b61350d565b3480156108a857600080fd5b506102f56108b73660046146a5565b613b40565b3480156108c857600080fd5b506102f56108d7366004614c43565b613c2c565b6108e4613ca6565b6001600160a01b03166108ff60c9546001600160a01b031690565b6001600160a01b0316146109485760405162461bcd60e51b81526020600482018190526024820152600080516020614dc283398151915260448201526064015b60405180910390fd5b6001600160a01b038216600090815261010460205260409020805482919060ff1916600183600281111561097e5761097e61496a565b02179055505050565b60fb805461099490614cd7565b80601f01602080910402602001604051908101604052809291908181526020018280546109c090614cd7565b8015610a0d5780601f106109e257610100808354040283529160200191610a0d565b820191906000526020600020905b8154815290600101906020018083116109f057829003601f168201915b505050505081565b60006101046000610a24613ca6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115610a5257610a5261496a565b14610a945760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c30610aaf613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610af757600080fd5b505af1158015610b0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2f9190614d12565b610b7b5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b8151835114610bf25760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e677468000000000000606482015260840161093f565b8051835114610c695760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e677468000000000000000000606482015260840161093f565b60005b84518110156110485760005b84518110156110355760ff6000878381518110610c9757610c97614d2f565b6020908102919091018101518252810191909152604001600020546001600160a01b0316610cc3613ca6565b6001600160a01b031614610d0a5760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b604482015260640161093f565b828181518110610d1c57610d1c614d2f565b602002602001015160001415610d745760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f00000000000000604482015260640161093f565b610d7c613ca6565b6001600160a01b0316858281518110610d9757610d97614d2f565b60200260200101516001600160a01b03161415610e015760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b606482015260840161093f565b828181518110610e1357610e13614d2f565b602002602001015142610e269190614d5b565b60fd6000888581518110610e3c57610e3c614d2f565b602002602001015181526020019081526020016000206000868481518110610e6657610e66614d2f565b602002602001015181526020019081526020016000206000878481518110610e9057610e90614d2f565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555060fe6000878481518110610ed257610ed2614d2f565b602002602001015181526020019081526020016000206000858381518110610efc57610efc614d2f565b60200260200101518152602001908152602001600020858281518110610f2457610f24614d2f565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558451859082908110610f7357610f73614d2f565b60200260200101516001600160a01b0316868381518110610f9657610f96614d2f565b6020026020010151610fa6613ca6565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc879878581518110610fe257610fe2614d2f565b6020026020010151878681518110610ffc57610ffc614d2f565b602002602001015160405161101b929190918252602082015260400190565b60405180910390a48061102d81614d73565b915050610c78565b508061104081614d73565b915050610c6c565b5050505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156110dd5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161093f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166111387f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146111a35760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b606482015260840161093f565b6111ac81613d52565b604080516000808252602082019092526111c891839190613db9565b50565b6111d3613ca6565b6001600160a01b03166111ee60c9546001600160a01b031690565b6001600160a01b0316146112325760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b604080518082019091528281526020018190526101059190915561010655565b60006101046000611261613ca6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561128f5761128f61496a565b146112d15760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c306112ec613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561133457600080fd5b505af1158015611348573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136c9190614d12565b6113b85760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b600261010460006113c7613ca6565b6001600160a01b031681526020810191909152604001600020805460ff191660018360028111156113fa576113fa61496a565b0217905550565b600054610100900460ff1661141c5760005460ff1615611420565b303b155b6114925760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161093f565b600054610100900460ff161580156114b4576000805461ffff19166101011790555b61010080546001600160a01b0319166001600160a01b038a161790556114d8613de4565b88516114eb9060fb9060208c0190614322565b506114f587613e57565b610107805470ffffffffffffffffffffffffffffffffff191687151570ffffffffffffffffffffffffffffffff001916176101006fffffffffffffffffffffffffffffffff881602179055610103805485919060ff191660018360028111156115605761156061496a565b021790555060005b83518110156115e85782818151811061158357611583614d2f565b602002602001015160fc85838151811061159f5761159f614d2f565b60200260200101516040516115b49190614d8e565b908152602001604051809103902090805190602001906115d5929190614322565b50806115e081614d73565b915050611568565b5080156115fb576000805461ff00191690555b505050505050505050565b600083815260ff60208181526040808420815160a08101835281546001600160a01b0316815260018201549381019390935260028101549093161515908201526003820180548793859392909160608401919061166290614cd7565b80601f016020809104026020016040519081016040528092919081815260200182805461168e90614cd7565b80156116db5780601f106116b0576101008083540402835291602001916116db565b820191906000526020600020905b8154815290600101906020018083116116be57829003601f168201915b5050509183525050600491909101546001600160a01b03166020909101529050611731610101600061170b613ca6565b6001600160a01b0316815260208101919091526040016000206001015461010654613ed3565b81602001516101026000611743613ca6565b6001600160a01b03166001600160a01b03168152602001908152602001600020600101546117719190614d5b565b11156117bf5760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f72207573657200000000000000000000604482015260640161093f565b6000805261010160209081527f0cdd55771c7d27dcc6a0e4e270b6c2288741ffbaa23147ee33eabaa4ce4aa5a054828201516101029092527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb32154909161182491614d5b565b11156118725760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f72206170700000000000000000000000604482015260640161093f565b600086815260ff6020819052604090912060020154166118fa5760405162461bcd60e51b815260206004820152602b60248201527f46696c65206d7573742062652075706c6f61646564206265666f726520646f7760448201527f6e6c6f6164696e67206974000000000000000000000000000000000000000000606482015260840161093f565b600086815260fd6020908152604080832088845290915281208161191c613ca6565b6001600160a01b03908116825260208083019390935260409182016000908120548b825260ff909452919091205491925016611956613ca6565b6001600160a01b031614156119795761197242620f4240614d5b565b90506119b6565b806119b65760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b604482015260640161093f565b866119bf613ca6565b6001600160a01b03167f70ca3209a41d34881db20cfa1e87e607cdc9bd70969efd77c71d730c778a1e398389604051611a02929190918252602082015260400190565b60405180910390a3600087815260ff60208181526040808420815160a08101835281546001600160a01b031681526001820154938101939093526002810154909316151590820152600382018054919291606084019190611a6290614cd7565b80601f0160208091040260200160405190810160405280929190818152602001828054611a8e90614cd7565b8015611adb5780601f10611ab057610100808354040283529160200191611adb565b820191906000526020600020905b815481529060010190602001808311611abe57829003601f168201915b5050509183525050600491909101546001600160a01b03166020918201528101519091506101026000611b0c613ca6565b6001600160a01b03166001600160a01b031681526020019081526020016000206001016000828254611b3e9190614d5b565b909155505060208082015160008080526101029092527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb321805491929091611b86908490614d5b565b909155509198975050505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415611c255760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b606482015260840161093f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316611c807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614611ceb5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b606482015260840161093f565b611cf482613d52565b611d0082826001613db9565b5050565b60026101046000611d13613ca6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115611d4157611d4161496a565b14611d9a5760405162461bcd60e51b815260206004820152602360248201527f5573657220776173206e6f742064656c6574656420746f2072656163746976616044820152623a329760e91b606482015260840161093f565b600061010460006113c7613ca6565b60006101046000611db8613ca6565b6001600160a01b0316815260208101919091526040016000205460ff166002811115611de657611de661496a565b14611e285760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c30611e43613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015611e8b57600080fd5b505af1158015611e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec39190614d12565b611f0f5760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b83611f436101016000611f20613ca6565b6001600160a01b0316815260208101919091526040016000205461010554613ed3565b816101026000611f51613ca6565b6001600160a01b03168152602081019190915260400160002054611f759190614d5b565b1115611fc35760405162461bcd60e51b815260206004820152601660248201527f4e6f207370616365206c65667420666f72207573657200000000000000000000604482015260640161093f565b600080527f0cdd55771c7d27dcc6a0e4e270b6c2288741ffbaa23147ee33eabaa4ce4aa59f546101026020527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb3205461201c908390614d5b565b111561206a5760405162461bcd60e51b815260206004820152601560248201527f4e6f207370616365206c65667420666f72206170700000000000000000000000604482015260640161093f565b600086815260ff60205260409020546001600160a01b0316156120d95760405162461bcd60e51b815260206004820152602160248201527f4f776e657220616c726561647920657869737420666f7220746869732066696c6044820152606560f81b606482015260840161093f565b846121265760405162461bcd60e51b815260206004820152600f60248201527f53686f756c64206e6f7420626520300000000000000000000000000000000000604482015260640161093f565b6040518060a00160405280612139613ca6565b6001600160a01b03908116825260208083018990526000604080850182905260608086018b90528985166080909601959095528b825260ff835290819020855181546001600160a01b031916941693909317835584820151600184015584015160028301805460ff191691151591909117905591830151805191926121c692600385019290910190614322565b5060809190910151600490910180546001600160a01b0319166001600160a01b03928316179055600087815260ff6020908152604091829020549151888152899392909216917f726a4464eb36c1fee64d3616d06107ca25ad191a8833f29e2b8e846321125263910160405180910390a3505050505050565b600082815260fe6020908152604080832084845282528083208054825181850281018501909352808352606094938301828280156122a657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612288575b50505050509050600080600090505b825181101561236357600086815260fe6020908152604080832088845290915290208054829081106122e9576122e9614d2f565b600091825260208083209091015488835260fd8252604080842089855283528084206001600160a01b039092168085529190925291205490925042106123515782818151811061233b5761233b614d2f565b6020026020010160006001600160a01b03168152505b8061235b81614d73565b9150506122b5565b5090949350505050565b600081815260ff60205260409020600401546001600160a01b031633146123fc5760405162461bcd60e51b815260206004820152603860248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201527f68652061737369676e65642073746f72616765206e6f64650000000000000000606482015260840161093f565b600081815260ff6020819052604090912060020154161561245f5760405162461bcd60e51b815260206004820152601560248201527f46696c6520616c72656164792075706c6f616465640000000000000000000000604482015260640161093f565b600081815260ff60209081526040808320600181015490546001600160a01b03168452610102909252822080549192909161249b908490614d5b565b9091555050600081815260ff602090815260408220600101548280526101029091527f565a22c1af7fcc038f06206699a6bd0ad8c85d23dafe9aebac3e0df68e8fb3208054919290916124ef908490614d5b565b9091555050600090815260ff60205260409020600201805460ff19166001179055565b61251a613ca6565b6001600160a01b031661253560c9546001600160a01b031690565b6001600160a01b0316146125795760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b60408051808201825292835260208084019283526001600160a01b039094166000908152610101909452909220905181559051600190910155565b600081815260ff602052604090205481906001600160a01b03166125d6613ca6565b6001600160a01b0316146126435760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b606482015260840161093f565b60006101046000612652613ca6565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156126805761268061496a565b146126c25760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c306126dd613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561272557600080fd5b505af1158015612739573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061275d9190614d12565b6127a95760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b600082815260ff602052604081206001015490610102906127c8613ca6565b6001600160a01b03166001600160a01b0316815260200190815260200160002060000160008282546127fa9190614daa565b9091555050600082815260ff6020526040812080546001600160a01b03191681556001810182905560028101805460ff191690559061283c60038301826143a6565b5060040180546001600160a01b031916905581612857613ca6565b6001600160a01b03167fa2acc0b1cda8647780f0900a02e0ba141277133ea27552fa350439c0b6684d2160405160405180910390a35050565b6000610104600061289f613ca6565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156128cd576128cd61496a565b1461290f5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c3061292a613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b15801561297257600080fd5b505af1158015612986573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129aa9190614d12565b6129f65760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b600083815260ff602052604090205483906001600160a01b0316612a18613ca6565b6001600160a01b031614612a855760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b606482015260840161093f565b600084815260fd6020908152604080832085845282528083206001600160a01b0387168452825280832083905586835260fe825280832085845282528083208054825181850281018501909352808352612b1d93830182828015612b1257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612af4575b505050505085613eeb565b600086815260fe60209081526040808320878452909152902080549192509082908110612b4c57612b4c614d2f565b600091825260209091200180546001600160a01b03191690556001600160a01b03841685612b78613ca6565b6001600160a01b03167f020d11a518178a498576a55c87164bdcd0306e4c930caf13f2a9c2049cc70ba486604051612bb291815260200190565b60405180910390a45050505050565b612bc9613ca6565b6001600160a01b0316612be460c9546001600160a01b031690565b6001600160a01b031614612c285760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b612c326000613f33565b565b610100546001600160a01b03163314612cb55760405162461bcd60e51b815260206004820152602c60248201527f4f6e6c7920666163746f727920636f6e74726163742063616e2063616c6c207460448201527f6869732066756e6374696f6e0000000000000000000000000000000000000000606482015260840161093f565b60408051808201909152918252602080830191825260008052610101905290517f0cdd55771c7d27dcc6a0e4e270b6c2288741ffbaa23147ee33eabaa4ce4aa59f55517f0cdd55771c7d27dcc6a0e4e270b6c2288741ffbaa23147ee33eabaa4ce4aa5a055565b33600090815261010260209081526040808320600190810154610101909352908320015461010654839291612d5091613ed3565b915091509091565b612d60613ca6565b6001600160a01b0316612d7b60c9546001600160a01b031690565b6001600160a01b031614612dbf5760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b60005b8251811015612e4257818181518110612ddd57612ddd614d2f565b602002602001015160fc848381518110612df957612df9614d2f565b6020026020010151604051612e0e9190614d8e565b90815260200160405180910390209080519060200190612e2f929190614322565b5080612e3a81614d73565b915050612dc2565b505050565b60ff6020819052600091825260409091208054600182015460028301546003840180546001600160a01b039094169592949190921692909190612e8990614cd7565b80601f0160208091040260200160405190810160405280929190818152602001828054612eb590614cd7565b8015612f025780601f10612ed757610100808354040283529160200191612f02565b820191906000526020600020905b815481529060010190602001808311612ee557829003601f168201915b505050600490930154919250506001600160a01b031685565b6000612f4e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b612f5b613ca6565b6001600160a01b0316612f7660c9546001600160a01b031690565b6001600160a01b031614612fba5760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b8060fc83604051612fcb9190614d8e565b90815260200160405180910390209080519060200190612e42929190614322565b60fe602052826000526040600020602052816000526040600020818154811061301457600080fd5b6000918252602090912001546001600160a01b0316925083915050565b600082815260ff602052604081205483906001600160a01b0316613053613ca6565b6001600160a01b0316146130c05760405162461bcd60e51b815260206004820152602e60248201527f546869732066756e6374696f6e2063616e206f6e6c792062652063616c6c656460448201526d10313c903334b6329037bbb732b960911b606482015260840161093f565b600061010460006130cf613ca6565b6001600160a01b0316815260208101919091526040016000205460ff1660028111156130fd576130fd61496a565b1461313f5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c3061315a613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156131a257600080fd5b505af11580156131b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131da9190614d12565b6132265760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b6001600160a01b03831661327c5760405162461bcd60e51b815260206004820152600f60248201527f496e76616c696420616464726573730000000000000000000000000000000000604482015260640161093f565b600084815260ff6020526040812080546001600160a01b0319166001600160a01b0386161781556001015490610102906132b4613ca6565b6001600160a01b03166001600160a01b0316815260200190815260200160002060000160008282546132e69190614daa565b9091555050600084815260ff60209081526040808320600101546001600160a01b03871684526101029092528220805491929091613325908490614d5b565b90915550600195945050505050565b336000908152610102602090815260408083205461010190925282205461010554839291612d5091613ed3565b805160208183018101805160fc825292820191909301209152805461099490614cd7565b6040805160a080820183526000808352602080840182905283850182905260608085018190526080850183905287835260fd8252858320878452825285832033845282528583205488845260ff8084528785208851968701895280546001600160a01b031687526001810154948701949094526002840154161515968501969096526003820180549596959394939184019161342090614cd7565b80601f016020809104026020016040519081016040528092919081815260200182805461344c90614cd7565b80156134995780601f1061346e57610100808354040283529160200191613499565b820191906000526020600020905b81548152906001019060200180831161347c57829003601f168201915b5050509183525050600491909101546001600160a01b03908116602090920191909152815191925016331461350557816135055760405162461bcd60e51b815260206004820152600d60248201526c056616c6964697479206973203609c1b604482015260640161093f565b949350505050565b6000610104600061351c613ca6565b6001600160a01b0316815260208101919091526040016000205460ff16600281111561354a5761354a61496a565b1461358c5760405162461bcd60e51b815260206004820152601260248201527155736572206973206e6f742061637469766560701b604482015260640161093f565b610100546001600160a01b031663c7e1562c306135a7613ca6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b1580156135ef57600080fd5b505af1158015613603573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136279190614d12565b6136735760405162461bcd60e51b815260206004820152601f60248201527f55736572206e6f74207265676973746572656420666f72207468652061707000604482015260640161093f565b81518351146136ea5760405162461bcd60e51b815260206004820152603a60248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f65732077697468206163636573732074797065206c656e677468000000000000606482015260840161093f565b80518351146137615760405162461bcd60e51b815260206004820152603760248201527f55736572206172726179206c656e67746820646f6573206e6f74206d6174636860448201527f657320776974682076616c6964697479206c656e677468000000000000000000606482015260840161093f565b60005b84518110156110485760005b8451811015613b2d5760ff600087838151811061378f5761378f614d2f565b6020908102919091018101518252810191909152604001600020546001600160a01b03166137bb613ca6565b6001600160a01b0316146138025760405162461bcd60e51b815260206004820152600e60248201526d2737ba103334b6329037bbb732b960911b604482015260640161093f565b82828151811061381457613814614d2f565b60200260200101516000141561386c5760405162461bcd60e51b815260206004820152601960248201527f56616c6964697479206d757374206265206e6f6e207a65726f00000000000000604482015260640161093f565b613874613ca6565b6001600160a01b031685828151811061388f5761388f614d2f565b60200260200101516001600160a01b031614156138f95760405162461bcd60e51b815260206004820152602260248201527f41766f69642073686172696e672066696c652077697468207468656d73656c76604482015261657360f01b606482015260840161093f565b82828151811061390b5761390b614d2f565b60200260200101514261391e9190614d5b565b60fd600088858151811061393457613934614d2f565b60200260200101518152602001908152602001600020600086858151811061395e5761395e614d2f565b60200260200101518152602001908152602001600020600087848151811061398857613988614d2f565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555060fe60008784815181106139ca576139ca614d2f565b6020026020010151815260200190815260200160002060008584815181106139f4576139f4614d2f565b60200260200101518152602001908152602001600020858281518110613a1c57613a1c614d2f565b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b039092169190911790558451859082908110613a6b57613a6b614d2f565b60200260200101516001600160a01b0316868381518110613a8e57613a8e614d2f565b6020026020010151613a9e613ca6565b6001600160a01b03167f1ebaec2e787dc387c941232bf165b988dd5c126cd5f60b7215b6ece61bfbc879878581518110613ada57613ada614d2f565b6020026020010151878681518110613af457613af4614d2f565b6020026020010151604051613b13929190918252602082015260400190565b60405180910390a480613b2581614d73565b915050613770565b5080613b3881614d73565b915050613764565b613b48613ca6565b6001600160a01b0316613b6360c9546001600160a01b031690565b6001600160a01b031614613ba75760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b6001600160a01b038116613c235760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161093f565b6111c881613f33565b613c34613ca6565b6001600160a01b0316613c4f60c9546001600160a01b031690565b6001600160a01b031614613c935760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b8051611d009060fb906020840190614322565b6033546000906001600160a01b0316331415613cc9575060131936013560601c90565b610100546001600160a01b03163314613d4a5760405162461bcd60e51b815260206004820152602c60248201527f4e6f742061207472757374656420666f72776172646572206e6f72206661637460448201527f6f727920636f6e74726163740000000000000000000000000000000000000000606482015260840161093f565b612f4e613f85565b613d5a613ca6565b6001600160a01b0316613d7560c9546001600160a01b031690565b6001600160a01b0316146111c85760405162461bcd60e51b81526020600482018190526024820152600080516020614dc2833981519152604482015260640161093f565b613dc283613fad565b600082511180613dcf5750805b15612e4257613dde838361406b565b50505050565b600054610100900460ff16613e4f5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b612c32614176565b600054610100900460ff16613ec25760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b613eca6141f1565b6111c88161425c565b6000818311613ee25781613ee4565b825b9392505050565b6000805b826001600160a01b0316848281518110613f0b57613f0b614d2f565b60200260200101516001600160a01b031614613ee45780613f2b81614d73565b915050613eef565b60c980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6033546000906001600160a01b0316331415613fa8575060131936013560601c90565b503390565b6001600160a01b0381163b61402a5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161093f565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60606001600160a01b0383163b6140ea5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e74726163740000000000000000000000000000000000000000000000000000606482015260840161093f565b600080846001600160a01b0316846040516141059190614d8e565b600060405180830381855af49150503d8060008114614140576040519150601f19603f3d011682016040523d82523d6000602084013e614145565b606091505b509150915061416d8282604051806060016040528060278152602001614de2602791396142e9565b95945050505050565b600054610100900460ff166141e15760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b612c326141ec613ca6565b613f33565b600054610100900460ff16612c325760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b600054610100900460ff166142c75760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161093f565b603380546001600160a01b0319166001600160a01b0392909216919091179055565b606083156142f8575081613ee4565b8251156143085782518084602001fd5b8160405162461bcd60e51b815260040161093f91906144b4565b82805461432e90614cd7565b90600052602060002090601f0160209004810192826143505760008555614396565b82601f1061436957805160ff1916838001178555614396565b82800160010185558215614396579182015b8281111561439657825182559160200191906001019061437b565b506143a29291506143dc565b5090565b5080546143b290614cd7565b6000825580601f106143c2575050565b601f0160209004906000526020600020908101906111c891905b5b808211156143a257600081556001016143dd565b80356001600160a01b038116811461440857600080fd5b919050565b600381106111c857600080fd5b80356144088161440d565b6000806040838503121561443857600080fd5b614441836143f1565b915060208301356144518161440d565b809150509250929050565b60005b8381101561447757818101518382015260200161445f565b83811115613dde5750506000910152565b600081518084526144a081602086016020860161445c565b601f01601f19169290920160200192915050565b602081526000613ee46020830184614488565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715614506576145066144c7565b604052919050565b600067ffffffffffffffff821115614528576145286144c7565b5060051b60200190565b600082601f83011261454357600080fd5b813560206145586145538361450e565b6144dd565b82815260059290921b8401810191818101908684111561457757600080fd5b8286015b84811015614592578035835291830191830161457b565b509695505050505050565b600080600080608085870312156145b357600080fd5b843567ffffffffffffffff808211156145cb57600080fd5b6145d788838901614532565b95506020915081870135818111156145ee57600080fd5b8701601f810189136145ff57600080fd5b803561460d6145538261450e565b81815260059190911b8201840190848101908b83111561462c57600080fd5b928501925b8284101561465157614642846143f1565b82529285019290850190614631565b9750505050604087013591508082111561466a57600080fd5b61467688838901614532565b9350606087013591508082111561468c57600080fd5b5061469987828801614532565b91505092959194509250565b6000602082840312156146b757600080fd5b613ee4826143f1565b600080604083850312156146d357600080fd5b50508035926020909101359150565b600082601f8301126146f357600080fd5b813567ffffffffffffffff81111561470d5761470d6144c7565b614720601f8201601f19166020016144dd565b81815284602083860101111561473557600080fd5b816020850160208301376000918101602001919091529392505050565b80151581146111c857600080fd5b803561440881614752565b80356fffffffffffffffffffffffffffffffff8116811461440857600080fd5b600082601f83011261479c57600080fd5b813560206147ac6145538361450e565b82815260059290921b840181019181810190868411156147cb57600080fd5b8286015b8481101561459257803567ffffffffffffffff8111156147ef5760008081fd5b6147fd8986838b01016146e2565b8452509183019183016147cf565b600080600080600080600080610100898b03121561482857600080fd5b883567ffffffffffffffff8082111561484057600080fd5b61484c8c838d016146e2565b995061485a60208c016143f1565b985061486860408c016143f1565b975061487660608c01614760565b965061488460808c0161476b565b955061489260a08c0161441a565b945060c08b01359150808211156148a857600080fd5b6148b48c838d0161478b565b935060e08b01359150808211156148ca57600080fd5b506148d78b828c0161478b565b9150509295985092959890939650565b6000806000606084860312156148fc57600080fd5b8335925060208401359150614913604085016143f1565b90509250925092565b6000806040838503121561492f57600080fd5b614938836143f1565b9150602083013567ffffffffffffffff81111561495457600080fd5b614960858286016146e2565b9150509250929050565b634e487b7160e01b600052602160045260246000fd5b600381106111c857634e487b7160e01b600052602160045260246000fd5b602081016149ab83614980565b91905290565b600080600080600060a086880312156149c957600080fd5b8535945060208601359350604086013567ffffffffffffffff8111156149ee57600080fd5b6149fa888289016146e2565b935050614a09606087016143f1565b9150614a17608087016143f1565b90509295509295909350565b6020808252825182820181905260009190848201906040850190845b81811015614a645783516001600160a01b031683529284019291840191600101614a3f565b50909695505050505050565b600060208284031215614a8257600080fd5b5035919050565b600080600060608486031215614a9e57600080fd5b614aa7846143f1565b95602085013595506040909401359392505050565b600080600060608486031215614ad157600080fd5b83359250614ae1602085016143f1565b9150604084013590509250925092565b60008060408385031215614b0457600080fd5b823567ffffffffffffffff80821115614b1c57600080fd5b614b288683870161478b565b93506020850135915080821115614b3e57600080fd5b506149608582860161478b565b60006001600160a01b038088168352866020840152851515604084015260a06060840152614b7c60a0840186614488565b91508084166080840152509695505050505050565b60008060408385031215614ba457600080fd5b823567ffffffffffffffff80821115614bbc57600080fd5b614bc8868387016146e2565b93506020850135915080821115614bde57600080fd5b50614960858286016146e2565b600080600060608486031215614c0057600080fd5b505081359360208301359350604090920135919050565b60008060408385031215614c2a57600080fd5b82359150614c3a602084016143f1565b90509250929050565b600060208284031215614c5557600080fd5b813567ffffffffffffffff811115614c6c57600080fd5b613505848285016146e2565b6020815260006001600160a01b0380845116602084015260208401516040840152604084015115156060840152606084015160a06080850152614cbe60c0850182614488565b90508160808601511660a0850152809250505092915050565b600181811c90821680614ceb57607f821691505b60208210811415614d0c57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215614d2457600080fd5b8151613ee481614752565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115614d6e57614d6e614d45565b500190565b6000600019821415614d8757614d87614d45565b5060010190565b60008251614da081846020870161445c565b9190910192915050565b600082821015614dbc57614dbc614d45565b50039056fe4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000809000a",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
