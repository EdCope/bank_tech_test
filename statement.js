class Statement{
  constructor(account){
    this.header = 'date || credit || debit || balance\n';
    this.body = '';
    this.account = account;
  }

  getBalancesOverTime(){
    let runningTotal = 0;
    return this.account.getTransactions()
      .map(transaction => {
        return runningTotal += transaction.amount;
      })
      .reverse();
  }

  create(){
    const balances = this.getBalancesOverTime();
    this.account.getTransactions()
      .reverse()
      .forEach( (transaction, index) => {
        this.body += `${transaction.date.toLocaleDateString()} `
        this.body += `|| ${transaction.amount < 0 ? `` : `${transaction.amount.toFixed(2)} `}`
        this.body += `|| ${transaction.amount > 0 ? `` : `${(-transaction.amount).toFixed(2)} `}`
        this.body += `|| ${balances[index].toFixed(2)}\n`
      })
    return this.header + this.body;
  }

}

module.exports = Statement;
