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

  printStatement(){
    let statement = "date || credit || debit || balance\n"
    this.getTransactions()
      .reverse()
      .forEach(transaction => {
        let change = transaction.balance - transaction.previousBalance;
        let credit = 0, debit = 0;
        change > 0 ? credit += change : debit += -change;
        
        statement += `${transaction.date.toLocaleDateString()} `
        statement += `|| ${credit === 0 ? `` : `${credit.toFixed(2)} `}`
        statement += `|| ${debit === 0 ? `` : `${debit.toFixed(2)} `}`
        statement += `|| ${transaction.balance.toFixed(2)}\n`
      })

    return statement;
  }

  deposit(money){
    if(money === 0) throw "You cannot deposit nothing";
    this.#recordTransaction(money);
    return this.balance += money;
  }

  withdraw(money){
    if(money === 0) throw "You cannot withdraw nothing";
    if(money > this.balance) throw "You cannot withdraw below 0";
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
