const Account = require('../account');
const Transaction = require('../transaction');

describe('Account', () => {
  beforeEach(() => {
    account = new Account( Transaction );
  })
  
  it('has an initial balance of 0', () => {
    expect(account.getBalance()).toEqual(0);
  });

  describe('deposit', () => {
    it('a deposit can be made to the account', () => {
      account.deposit(5);
      expect(account.getBalance()).toEqual(5);
    });

    it('records a transaction when a deposit is made', () => {
      transaction = {date: new Date(Date.now()), previousBalance: 0, balance: 5}
      account.deposit(5);
      expect(account.getTransactions()).toEqual([transaction]);
    })

    it('raises an error when a deposit of 0 is made', () => {
      expect(() => {account.deposit(0)}).toThrow("You cannot deposit nothing");
    })

  })

  describe('withdraw', () => {
    it('can withdraw from the account', () => {
      account.deposit(5);
      account.withdraw(3);
      expect(account.getBalance()).toEqual(2);
    })

    it('records a transaction when a withdrawal is made', () => {
      transaction = {date: new Date(Date.now()), previousBalance: 5, balance: 2}
      account.balance = 5;
      account.withdraw(3);
          
      expect(account.getTransactions()).toEqual([transaction])
    })

    it('raises an error when a withdrawal of 0 is attempted', () => {
      expect(() => {account.withdraw(0)}).toThrow("You cannot withdraw nothing");
    })
  
    it('raises an error if you try to withdraw below 0', () => {
      expect(() => {account.withdraw(1)}).toThrow("You cannot withdraw below 0");
    })
  })
  
});
