const BankStatement = require('./bankStatement');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.statement = new BankStatement;
  }

  deposit(credit) {
    if (this.#invalidInput(credit)) return 'invalid input';
    credit = Number(credit.toFixed(2));
    this.balance += credit;
    this.statement.addEntry(credit, "credit", this.balance);
  }

  withdraw(debit) {
    if (this.#invalidInput(debit)) return 'invalid input';
    debit = Number(debit.toFixed(2));
    this.balance -= debit;
    this.statement.addEntry(debit, "debit", this.balance);
  }

  printStatement() {
    this.statement.print();
  }

  #invalidInput(input) {
    return typeof input !== 'number' || input < 0;
  }

}

module.exports = BankAccount;
