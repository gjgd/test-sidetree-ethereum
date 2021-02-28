import { getLedger } from '../src';

it('should not have typings errors', async () => {
  const ledger = await getLedger();
  console.log(ledger);
  expect(ledger).toBeDefined();
});
