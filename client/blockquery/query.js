// city student arch chronic capital armed injury hurry rich push evil dose
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:8545`));
const contractAddress = '0x4d7b7D554Ef91523a54964F098f6223946CFC122'

let currentBlock = 0;
web3.eth.getBlockNumber().then((e) => {
  console.log(e);
  currentBlock = e;
});

let n = 0;
web3.eth.getTransactionCount(contractAddress, currentBlock).then((e) => {
  n = e
  console.log("trx count n: ", e);
});


for (let i = currentBlock; i>=0; i--) { //&& (n > 0)
  try {
    if (block && block.transactions) {
       web3.eth.getBlock(currentBlock, true).then((block) => 
          block.transactions.forEach(tx => {
                console.log("trx data: ",tx.data.input);
              }))}
    }catch(e) {
    console.log("problem at block: ",i," e: ", e);}
}



const abiDecoder = require('abi-decoder');
const { abi: abi1 } =  require("./HPA.json");

abiDecoder.addABI(abi1);
console.log(getBlock());
let tx_input2 = '0x80543199000000000000000000000000000000000000000000000000000000000000030c000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000b544553545f4368726f6d6500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000074469706c6f6d610000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000176d657263792d636f6c6c6567652d7369676e6174757265000000000000000000';
const decoded_input = abiDecoder.decodeMethod(tx_input2);
console.log(decoded_input.params[3])





// =============================================================================================================================
// const getBlock = () => {
//   web3.eth.getBlock('latest', (err, block) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(block);
//       return block.blockNumber;
//     }
//   })
// }
// const getTransaction = (blockNumber, transactionIndex) => {
//   web3.eth.getTransactionFromBlock(blockNumber, transactionIndex)
//     .then(transaction => {
//       console.log(transaction);
//       return transaction;
//     })
// }

// const getTransactionData = (transaction) => {
//   transaction.input.then(input => {
//     const decoded_input = abiDecoder.decodeMethod(tx_input2);
//     console.log(decoded_input.params[3].value);
//   })
//  }


// const getTransactionDataSignature = () => {



//  }


// //take ABIs of required contracts

// // client\src\contracts\HPA.json

// // console.log(abi1)

// //register ABIs

// /* result
// {
//   name: 'request',
//   params: [
//     { name: '_control', value: 'control', type: 'string' },
//     { name: '_tId', value: 'tid', type: 'string' },
//     { name: '_number', value: 'inumber', type: 'string' }
//   ]
// }
// */

// /*
// const InputDataDecoder = require('ethereum-input-data-decoder');
// // const decoder = new InputDataDecoder(`./HPA.json`);

// // const data = `0x80543199000000000000000000000000000000000000000000000000000000000000030c000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000b544553545f4368726f6d6500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000074469706c6f6d610000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000176d657263792d636f6c6c6567652d7369676e6174757265000000000000000000`;

// // const result = decoder.decodeData(data);

// // console.log(result);


// */