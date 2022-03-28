const Transaction = require('../transaction')

describe('Transaction', () => {
  date = new Date(Date.UTC('2022','02','28'));
  it('has a date and new balance', () => {
    const transaction = new Transaction(date, 500, 1000);
    expect(transaction.getDate()).toEqual(date);
    expect(transaction.balance).toEqual(1000);
  })
  it('stores the previous balance', () => {
    const transaction = new Transaction(date, 500, 1000);
    expect(transaction.previousBalance).toEqual(500);
  });
})
