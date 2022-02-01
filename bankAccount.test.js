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

  it('log a record of any operation into statement', () => {
    expect(account.statement.length).toBe(2);
    expect(account.statement[0].debit).toBe(300)
    expect(account.statement[0].balance).toBe(700)
  })

  it('log the statement to the terminal', () => {
    console.log = jest.fn();
    account.printStatement();
    expect(console.log).toHaveBeenCalled();
  })

  it('return no available statement if no record has been registered', () => {
    const secondAccount = new BankAccount;
    expect(secondAccount.printStatement()).toBe("no available statement");
  })
});
