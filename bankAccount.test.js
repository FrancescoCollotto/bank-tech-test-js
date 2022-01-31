const { expect } = require('@jest/globals');
const BankAccount = require('./bankAccount');
const account = new BankAccount;

describe('BankAccount', () => {
  it('can deposit an amount of money', () => {
    account.deposit(1000);
    expect(account.balance).toBe(1000);
  });

  it('can withdraw an amount of money', () => {
    account.withdraw(500);
    expect(account.balance).toBe(500);
  });

  it('log a record of any operation into statement', () => {
    expect(account.statement.length).toBe(2);
    expect(account.statement[0].debit).toBe(500)
  })
});
