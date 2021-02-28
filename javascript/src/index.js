const Web3 = require('web3');
const { EthereumLedger } = require('@sidetree/ethereum');

const getLedger = () => {
  const web3 = new Web3('http://localhost:8545');
  const ledger = new EthereumLedger(web3);
  return ledger;
};

module.exports = { getLedger };
