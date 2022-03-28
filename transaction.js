class Transaction{
  constructor(date, credited, debited, balance){
    this.date = date;
    this.credited = credited;
    this.debited = debited;
    this.balance = balance;
  }

  getDate(){
    return this.date;
  }
}

module.exports = Transaction;
