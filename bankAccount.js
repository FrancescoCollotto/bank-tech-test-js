const BankStatement = require('./bankStatement');
const {invalidInput, formatDate} = require('./helperFunctions');
const today = formatDate;

class BankAccount {
  constructor() {
    this.transactions = [];
    this.statement = new BankStatement;
  }

  deposit(credit) {
    if (invalidInput(credit)) {
    return 'invalid input';
    }
    this.addTransaction(credit, "credit");
  }

  withdraw(debit) {
    if (invalidInput(debit)) {
      return 'invalid input';
    }
    this.addTransaction(debit, "debit");
  }

  addTransaction(amount, operation) {
    this.transactions.push({date: today(), [operation]: amount})
  }

  balance() {
    let balance = 0;
    for(const transaction of this.transactions) {
      if(transaction["credit"]) {
        balance += transaction["credit"];
      } else {
        balance -= transaction["debit"];
      }
    }
    return balance;
  }

  printStatement() {
    this.statement.print(this.transactions);
  }

}

module.exports = BankAccount;
