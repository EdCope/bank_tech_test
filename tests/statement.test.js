const Statement = require('../statement');

describe('Statement', () => {
  it('should have a header', () => {
    const statement = new Statement();
    expect(statement.header).toBe('"date || credit || debit || balance\n"')
  })
})
