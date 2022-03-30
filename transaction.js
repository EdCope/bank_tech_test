class Transaction{
  constructor(date, amount){
    this.date = date;
    this.amount = amount;
  }

  getDate(){
    return this.date;
  }
}

module.exports = Transaction;
