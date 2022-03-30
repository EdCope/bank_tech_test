class Account {
  constructor(transactionClass){
    this.Transaction = transactionClass;
    this.balance = 0;
    this.transactions = [];
  }

  getTransactions(){
    return this.transactions;
  }

  printStatement(){
    let statement = "date || credit || debit || balance\n"
    let runningTotal = 0;
    let balances = this.getTransactions()
        .map(transaction => {
          return runningTotal += transaction.amount;
        })
        .reverse();
    this.getTransactions()
      .reverse()
      .forEach( (transaction, index) => {
        statement += `${transaction.date.toLocaleDateString()} `
        statement += `|| ${transaction.amount < 0 ? `` : `${transaction.amount.toFixed(2)} `}`
        statement += `|| ${transaction.amount > 0 ? `` : `${(-transaction.amount).toFixed(2)} `}`
        statement += `|| ${balances[index].toFixed(2)}\n`
      })
    return statement;
  }

  deposit(money){
    if(money === 0) throw "Deposits must be a positive number";
    this.#recordTransaction(money);
    return this.balance += money;
  }

  withdraw(money){
    if(money === 0) throw "Withdrawal amounts must be a positive number";
    if(money > this.balance) throw "There is insufficient balance to withdraw";
    this.#recordTransaction(-money);
    return this.balance -= money;
  }

  #recordTransaction(money){
    this.transactions.push(new this.Transaction(this.#now(), money));
  }

  #now(){
    return new Date(Date.now())
  }

}

module.exports = Account;
