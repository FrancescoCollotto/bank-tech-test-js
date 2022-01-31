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

  #addStatementEntry(amount, operation) {
    const entry = {
      date: "31-01-22",
      balance: this.balance,
    }
    entry[operation] = amount;
    this.statement.unshift(entry)
  }

}

module.exports = BankAccount;
