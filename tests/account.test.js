const Account = require('../account');
const Transaction = require('../transaction');

describe('Account', () => {
  beforeEach(() => {
    account = new Account( Transaction );
  })
  
  it('has an initial balance of 0', () => {
    expect(account.balance).toEqual(0);
  });

  describe('deposit', () => {
    it('a deposit can be made to the account', () => {
      account.deposit(5);
      expect(account.balance).toEqual(5);
    });

    it('records a transaction when a deposit is made', () => {
      transaction = {date: new Date(Date.now()), previousBalance: 0, balance: 5}
      account.deposit(5);
      expect(account.getTransactions()).toEqual([transaction]);
    })

    it('raises an error when a deposit of 0 is made', () => {
      expect(() => {account.deposit(0)}).toThrow("Deposits must be a positive number");
    })

  })

  describe('withdraw', () => {
    it('can withdraw from the account', () => {
      account.deposit(5);
      account.withdraw(3);
      expect(account.balance).toEqual(2);
    })

    it('records a transaction when a withdrawal is made', () => {
      transaction = {date: new Date(Date.now()), previousBalance: 5, balance: 2}
      account.balance = 5;
      account.withdraw(3);
          
      expect(account.getTransactions()).toEqual([transaction])
    })

    it('raises an error when a withdrawal of 0 is attempted', () => {
      expect(() => {account.withdraw(0)}).toThrow("Withdrawal amounts must be a positive number");
    })
  
    it('raises an error if you try to withdraw below 0', () => {
      expect(() => {account.withdraw(1)}).toThrow("There is insufficient balance to withdraw");
    })
  })

  describe('printStatement', () => {
    it('prints out a statement showing a transaction history', () => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() => new Date(Date.UTC('2023','00','10')).valueOf());
      account.deposit(1000);
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() => new Date(Date.UTC('2023','00','13')).valueOf())
      account.deposit(2000);
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() => new Date(Date.UTC('2023','00','14')).valueOf())
      account.withdraw(500);
      expect(account.printStatement())
      .toEqual("date || credit || debit || balance\n" +
      "14/01/2023 || || 500.00 || 2500.00\n" +
      "13/01/2023 || 2000.00 || || 3000.00\n" +
      "10/01/2023 || 1000.00 || || 1000.00\n")
    })
    
  })
  
});
