const BankStatement = require('./bankStatement');
const {formatDate} = require('./helperFunctions');
const today = formatDate;
const accountStatement = new BankStatement;

describe('Statement', () => {
  it('add a new entry operation in statement', () => {
    accountStatement.addEntry(1000, "credit", 1000);
    accountStatement.addEntry(200, "debit", 800);
    expect(accountStatement.records.length).toBe(2);
    expect(accountStatement.records[0].debit).toBe("200.00");
    expect(accountStatement.records[0].balance).toBe("800.00");
    expect(accountStatement.records[0].date).toBe(today());
  })  

  it('log the statement to the terminal with only one call to console.log', () => {
    console.log = jest.fn();
    accountStatement.print();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance\n${today()} ||  || 200.00 || 800.00\n${today()} || 1000.00 ||  || 1000.00\n`);
  })

  it('return no available statement if no record has been registered', () => {
    const secondAccountStatement = new BankStatement;
    expect(secondAccountStatement.print()).toBe("no available statement");
  })
})