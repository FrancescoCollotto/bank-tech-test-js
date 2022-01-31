class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(credit) {
    this.balance += credit;
  }
}

module.exports = BankAccount;