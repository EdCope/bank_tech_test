const Transaction = require('../transaction')

describe('Transaction', () => {
  date = new Date(Date.UTC('2022','02','28'));
  const transaction = new Transaction(date, 500, 500, 1000);
  it('has a date', () => {
    expect(transaction.getDate()).toEqual(date);
  })
  it('stores how much was credited', () => {
    expect(transaction.credited).toEqual(500);
  });
  it('stores how much was debited', () => {
    expect(transaction.debited).toEqual(500);
  })
  it('stores the balance at this time', () => {
    expect(transaction.balance).toEqual(1000);
  });
})
