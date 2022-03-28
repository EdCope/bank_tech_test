class Account {
  constructor(){
    this.balance = 0;
  }

  getBalance(){
    return this.balance;
  }

  deposit(money){
    return this.balance += money;
  }
}

module.exports = Account;
