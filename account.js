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

  withdraw(money){
    if(money > this.balance){
      throw "You cannot withdraw below 0";
    }
    return this.balance -= money;
  }
}

module.exports = Account;
