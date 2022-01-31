const BankAccount = require('./bankAccount');
const account = new BankAccount;

describe('BankAccount', () => {
  it('can deposit an amount of money', () => {
    account.deposit(1000);
    expect(account.balance).toBe(1000)
  });
});