const BankAccount = require('../bankAccount');
const account = new BankAccount;

describe('BankAccount', () => {
  it('deposit operations are recorded', () => {
    account.deposit(1000);
    expect(account.transactions[0]["credit"]).toBe(1000);
  });

  it('withdraw operations are recorded', () => {
    account.withdraw(300);
    expect(account.transactions[1]["debit"]).toBe(300);
    expect(account.transactions.length).toBe(2);
  });

  it('return the standing balance', () => {
    expect(account.balance()).toBe(700);
  });

  it('checks if the valid input(positive number) is passed to deposit or withdraw functions', () => {
    expect(account.deposit("200")).toBe("invalid input");
    expect(account.withdraw(-500)).toBe("invalid input");
  })

  it('rounds the number input in deposit and withdraw to 2 decimal places', () => {
    account.deposit(300.5555);
    expect(account.balance()).toBe(1000.56);
  })

  it('can print the account statement', () => {
    const print = jest.fn();
    const mockBankStatement = {
      print: print,
    }
    const newAccount = new BankAccount;
    newAccount.statement = mockBankStatement;
    newAccount.printStatement();
    expect(mockBankStatement.print).toHaveBeenCalled();
  })

});
