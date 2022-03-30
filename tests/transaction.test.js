const Transaction = require('../transaction')

describe('Transaction', () => {
  date = new Date(Date.UTC('2022','02','28'));
  it('has a date and an amount', () => {
    const transaction = new Transaction(date, 500);
    expect(transaction.getDate()).toEqual(date);
    expect(transaction.amount).toEqual(500);
  })
})
