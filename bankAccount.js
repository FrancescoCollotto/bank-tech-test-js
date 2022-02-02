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
    credit = Number(credit.toFixed(2));
    this.addTransaction(credit, "credit");
  }

  withdraw(debit) {
    if (invalidInput(debit)) return 'invalid input';
    debit = Number(debit.toFixed(2));
    this.addTransaction(debit, "debit");
  }

  addTransaction(amount, operation) {
    const transaction = {
      date: today(),
      [operation]: amount,
    }
    this.transactions.push(transaction)
  }

  printStatement() {
    this.statement.print(this.transactions);
  }

}

module.exports = BankAccount;
