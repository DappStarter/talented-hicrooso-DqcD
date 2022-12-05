require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember artwork gloom nature swift travel'; 
let testAccounts = [
"0x4b1d7c8a516724163f9a6d5a0dcb6444267f81832a56f59ca5920d881429dca5",
"0x269ba5fd664fa41b636d3b832b576290d1c6f124ee20af81f851694cce203eb2",
"0xcb43a73c3827ee0ad0508146ff0cbbddef98c0a049f6121d2ffa4174476fec97",
"0x938c198c496dcdbc42a7860003ca1a8209f99b12906acec3af9b489884cc5718",
"0x0ecdbf357c8495eb3c7cc26f7c50553235d4ad9747a80ab7c1f9084e4f2908da",
"0x300684a123684d868fedbce897ba6772c7b901b7a7d4ebd3ff2231b97d3e619a",
"0xcc2ac386095df25095143fe76b221e847cbc2186388fe80bae3160e4cd608491",
"0xf9c3b526ed8689dd194b718138b1ae32e8109501b1a7e4d57c0963a5aa10227e",
"0xfed9c173cb2b359ef6c601c5e4d0c8d5016c6221280169e5e85eb7db44be617a",
"0xd13ac1c0f1e1b7f2b651867887aa6675d296afd24fb185f325977c2ad15acd73"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

