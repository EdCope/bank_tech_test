const Transaction = require('../transaction')

describe('Transaction', () => {
  date = new Date(Date.UTC('2022','02','28'));
  const transaction = new Transaction(date);
  it('has a date', () => {
    console.log(transaction.date);
    expect(transaction.getDate()).toEqual(date);
  })
})
