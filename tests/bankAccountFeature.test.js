const BankAccount = require('../bankAccount');
const account = new BankAccount;
const {formatDate} = require('../helperFunctions');
const today = formatDate;

describe('BankAccount feature test', () => {
  it('can deposit, withdraw, show the balance and print a bank statement', () => {
    account.deposit(1000);
    expect(account.transactions[0]["credit"]).toBe(1000);
    account.withdraw(200.55);
    expect(account.transactions[1]["debit"]).toBe(200.55);
    expect(account.balance()).toBe(799.45);
    console.log = jest.fn();
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance\n${today()} ||    || 200.55 || 799.45\n${today()} || 1000.00 ||    || 1000.00\n`);
  })
})
