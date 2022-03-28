class Transaction{
  constructor(date, previousBalance, balance){
    this.date = date;
    this.previousBalance = previousBalance;
    this.balance = balance;
  }

  getDate(){
    return this.date;
  }
}

module.exports = Transaction;
