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

  it('checks if the valid input(positive number with max two decimal places) is passed to deposit or withdraw functions', () => {
    expect(account.deposit("200")).toBe("invalid input");
    expect(account.withdraw(-500)).toBe("invalid input");
    expect(account.withdraw(100.1234)).toBe("invalid input");
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
