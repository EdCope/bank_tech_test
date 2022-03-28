const Account = require('../account');

describe('Account', () => {
  const account = new Account();
  it('has an initial balance of 0', () => {
    expect(account.getBalance()).toEqual(0);
  });

  it('a deposit can be made to the account', () => {
    account.deposit(5);
    expect(account.getBalance()).toEqual(5);
  });
});
