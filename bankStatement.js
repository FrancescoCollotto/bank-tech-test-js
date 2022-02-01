const today = require('./formatDate');

class BankStatement {
  constructor() {
    this.records = [];
  }

  print() {
    if (this.records.length === 0) return "no available statement";
    console.log("date || credit || debit || balance");
    for (const entry of this.records) {
      console.log(`${entry['date']} || ${entry['credit'] || ""} || ${entry['debit'] || ""} || ${entry['balance']}`)
    } 
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