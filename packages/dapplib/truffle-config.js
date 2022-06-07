require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth pumpkin code hunt brave bubble thing'; 
let testAccounts = [
"0x0d3d8b04a7b1ef3d7a82e72b7d30505aea440d9d1688a766489942a3162bd453",
"0xabfde5bd6dd7cdbc229ae10a5dbecfca85dc08013ee4ddaab85a37172ca19597",
"0xbb7d1768d4da239839c684e3c52b5869d3dbd420d7eff3059a8f79d829470e72",
"0x8469214524bcd6894205a51bfcd9285b66a0777bb6bf732630ee28471aba87bd",
"0xfd197879df3b9b6135159eea76e2b6f1b7b2b398a3de747f728c738bd4763e10",
"0x447697bf8e6390bd6d90700c6624a20e46003b87137d81230e97737d94d01293",
"0xed1dfd131dfeab5c9c35d6c2f63b8a9ef9c395669a498bb93b0585460464b954",
"0xe4470ac293e17ee1c3f6e38cec408923027c5a330d6adde3966b4be069f3a26b",
"0x09dd140ed74605f0cff6f05158110a85abbbaf71e64380858461a848a10bf454",
"0xb1cda44c95d2e3a9d20fe9a3156f6c05f337a3182d9d9b4174baa6bbb61893d9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

