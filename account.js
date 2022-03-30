const Statement = require("./statement");

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
    const statement = new Statement(this);
    return statement.create();
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
