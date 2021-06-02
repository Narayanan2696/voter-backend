const Web3 = require('web3');
require('custom-env').env(true);
const constants = require('../constants/appConstants');

const web3Instance = new Web3(process.env.ETHEREUM_SERVICE_URL);

const getAccountBalance = () => {
  // geth account address retrieved manually temporarily
  return new Promise((resolve, reject) => {
    web3Instance.eth.getBalance(process.env.TEST_RINKABY_ADDRESS, (error, balance) => {
      if(error != null){
        console.log(error)
        reject(error);
      }else{
        console.log(balance)
        resolve(balance);
      }
    })
  })
}

const createContract = () => {
  new web3Instance.eth.Contract(constants.VOTING_CONTRACT_ABI);
}

const castVote = () => {
  web3Instance.eth.methods.vote().call((error, casted) => {
    if(error != null){
      console.log(error)
    }else{
      console.log(casted)
    }
  })
}

module.exports = {
  getAccountBalance,
  createContract,
  castVote,
}