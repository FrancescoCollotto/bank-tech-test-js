const {formatDate} = require('./helperFunctions');
const today = formatDate;

class BankStatement {
  constructor() {
    this.records = [];
  }

  print() {
    if (this.records.length === 0) return "no available statement";
    let printableStatement = "date || credit || debit || balance\n";
    for (const entry of this.records) {
      printableStatement += `${entry['date']} || ${entry['credit'] || ""} || ${entry['debit'] || ""} || ${entry['balance']}\n`;
    }
    console.log(printableStatement); 
  }

  addEntry(amount, operation, balance) {
    const entry = {
      date: today(),
      balance: balance.toFixed(2),
    }
    entry[operation] = amount.toFixed(2);
    this.records.unshift(entry)
  }
}

module.exports = BankStatement;