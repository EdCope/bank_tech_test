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
    this.balance += money;
    this.transactions.push(new this.transaction(this.#now(), money, null, this.balance));
    return this.balance;
  }

  withdraw(money){
    if(money > this.balance){
      throw "You cannot withdraw below 0";
    }
    return this.balance -= money;
  }

  #now(){
    return new Date(Date.now())
  }

}

module.exports = Account;
