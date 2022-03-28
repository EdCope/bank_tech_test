const Account = require('../account');

describe('Account', () => {
  const account = new Account();
  it('has an initial balance of 0', () => {
    expect(account.getBalance()).toEqual(0);
  })
});
