class Account {
    constructor(transactionClass){
    
    this.transaction = transactionClass;
    this.balance = 0;
    this.transactions = [];

  }

  getBalance(){
    return this.balance;
  }

  getTransactions(){
    return this.transactions;
  }

  deposit(money){
    this.#recordTransaction(money);
    return this.balance += money;
  }

  withdraw(money){
    if(money > this.balance){
      throw "You cannot withdraw below 0";
    }
    this.#recordTransaction(-money);
    return this.balance -= money;
  }

  #now(){
    return new Date(Date.now())
  }

  #recordTransaction(money){
    this.transactions.push(new this.transaction(this.#now(), this.balance, this.balance + money));
  }

}

module.exports = Account;
