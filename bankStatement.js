class BankStatement {

  print(transactions) {
    if (transactions.length === 0) {
      return "no available statement";
    }
    const printableStatement = this.formatTransactions(transactions);
    console.log(printableStatement); 
  }

  formatTransactions(transactions) {
    let balance = 0;
    const formattedTransactions = transactions.map((transaction) => {
      if(transaction["credit"]) {
        balance += transaction["credit"];
        return `${transaction["date"]} || ${transaction["credit"].toFixed(2)} ||    || ${balance.toFixed(2)}\n`;
      }
      balance -= transaction["debit"];
      return `${transaction["date"]} ||    || ${transaction["debit"].toFixed(2)} || ${balance.toFixed(2)}\n`;
    });
    formattedTransactions.push("date || credit || debit || balance\n")
    return formattedTransactions.reverse().join('');
  } 

}

module.exports = BankStatement;
