import Web3 from 'web3';
import { EthereumLedger } from '@sidetree/ethereum';

export const getLedger = () => {
  const web3 = new Web3('http://localhost:8545');
  const ledger = new EthereumLedger(web3);
  return ledger;
};
