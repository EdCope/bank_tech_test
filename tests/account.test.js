const Account = require('../account');

describe('Account', () => {
  let account;
  beforeEach(() => {
    account = new Account();
  })
  
  it('has an initial balance of 0', () => {
    expect(account.getBalance()).toEqual(0);
  });

  it('a deposit can be made to the account', () => {
    account.deposit(5);
    expect(account.getBalance()).toEqual(5);
  });

  it('can withdraw from the account', () => {
    account.deposit(5);
    account.withdraw(3);
    expect(account.getBalance()).toEqual(2);
  })

  it('raises an error if you try to withdraw below 0', () => {
    expect(() => {account.withdraw(1)}).toThrow("You cannot withdraw below 0");
  })
});
