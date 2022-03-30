const Statement = require('../statement');

describe('Statement', () => {
  let statement;
  beforeEach(() => {
    t1 = { date: new Date(Date.UTC('2023','00','10')), amount: 500 }
    t2 = { date: new Date(Date.UTC('2023','00','11')), amount: -200 }
    t3 = { date: new Date(Date.UTC('2023','00','12')), amount: 100 }
    account = { getTransactions: () => [t1, t2, t3]}
    statement = new Statement(account);
  })
  it('should have a header', () => {
    expect(statement.header).toBe('date || credit || debit || balance\n')
  })
  it('gathers the balances over time', () => {
    expect(statement.getBalancesOverTime()).toEqual([400,300,500])
  })
  it('creates a transaction history', () => {
    expect(statement.create()).toEqual("date || credit || debit || balance\n" +
    "12/01/2023 || 100.00 || || 400.00\n" +
    "11/01/2023 || || 200.00 || 300.00\n" +
    "10/01/2023 || 500.00 || || 500.00\n");
  })
})
