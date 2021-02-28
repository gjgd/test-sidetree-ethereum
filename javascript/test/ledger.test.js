const { getLedger } = require('../src');

it('should not have typings errors', async () => {
  const ledger = await getLedger();
  expect(ledger).toBeDefined();
});
