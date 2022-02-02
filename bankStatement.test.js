const BankStatement = require('./bankStatement');
const accountStatement = new BankStatement;
const transactions = [
  {date: "30/01/2022", credit: 2000},
  {date: "31/01/2022", debit: 1500},
]

describe('Statement', () => {
  it('format the transactions into a string ready to be print', () => {
    const printableString = accountStatement.formatTransactions(transactions);
    expect(printableString).toBe("date || credit || debit || balance\n31/01/2022 ||    || 1500.00 || 500.00\n30/01/2022 || 2000.00 ||    || 2000.00\n")
  })  

  it('log the statement to the terminal with only one call to console.log', () => {
    console.log = jest.fn();
    accountStatement.print(transactions);
    expect(console.log).toHaveBeenCalledTimes(1);
  })

  it('return no available statement if no transactions has been registered', () => {
    expect(accountStatement.print([])).toBe("no available statement");
  })
})