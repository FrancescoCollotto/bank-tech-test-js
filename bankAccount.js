class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(credit) {
    this.balance += credit;
  }

  withdraw(debit) {
    this.balance -= debit;
  }
}

module.exports = BankAccount;
