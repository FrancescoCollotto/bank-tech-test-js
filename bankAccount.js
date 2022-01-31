const today = require('./formatDate');

class BankAccount {
  constructor() {
    this.balance = 0;
    this.statement = [];
  }

  deposit(credit) {
    this.balance += credit;
    this.#addStatementEntry(credit, "credit");
  }

  withdraw(debit) {
    this.balance -= debit;
    this.#addStatementEntry(debit, "debit");
  }

  printStatement() {
    if (this.statement.length === 0) return "no available statement";
    console.log("date || credit || debit || balance");
    for (const entry of this.statement) {
      console.log(`${entry['date']} || ${entry['credit'] || ""} || ${entry['debit'] || ""} || ${entry['balance']}`)
    } 
  }

  #addStatementEntry(amount, operation) {
    const entry = {
      date: today(),
      balance: this.balance,
    }
    entry[operation] = amount;
    this.statement.unshift(entry)
  }

}

module.exports = BankAccount;
