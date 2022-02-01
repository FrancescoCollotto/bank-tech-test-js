const BankAccount = require('./bankAccount');
const account = new BankAccount;

describe('BankAccount', () => {
  it('can deposit an amount of money', () => {
    account.deposit(1000);
    expect(account.balance).toBe(1000);
  });

  it('can withdraw an amount of money', () => {
    account.withdraw(300);
    expect(account.balance).toBe(700);
  });

  it('checks if the valid input(positive number) is passed to deposit or withdraw functions', () => {
    expect(account.deposit("200")).toBe("invalid input");
    expect(account.withdraw(-500)).toBe("invalid input");
  })

  it('rounds the number input in deposit and withdraw to 2 decimal places', () => {
    account.deposit(300.5555);
    expect(account.balance).toBe(1000.56);
  })

});
