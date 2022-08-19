export const readHash = "0x7265616400000000000000000000000000000000000000000000000000000000";
export const chainId = 40405;

export var chainIdToGateway = new Map([
    [40405, "https://gateway001-testnet.arcana.network/api/v1/"],
    [40404, "https://gateway-dev.arcana.network/api/v1/"],
    // Testing Chain, used locally
    [100, "http://localhost:9010"]
]);
export var chainIdToRPCURL = new Map([
    [40405, "https://blockchain001-testnet.arcana.network"],
    [40404, "https://blockchain-dev.arcana.network"],
    [100, "http://localhost:8545"]
])
export var chainIdToBlockchainExplorerURL = new Map([
   [40405, "https://explorer.beta.arcana.network"],
   [40404, "https://dev-explorer.arcana.network"],
])
