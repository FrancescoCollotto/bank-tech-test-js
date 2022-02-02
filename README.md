# Bank tech test

A simple banking app that reproduce an employer tech test. The aim is to produce the best quality code possible with focus on TDD, OO design, DRY and readable code.

### User Stories

* A user can deposit an amount of money into the bank account
* A user can withdraw an amount of money from the bank account
* A user can check the standing balance
* A user can print the account statement showing: date, amount and balance of each operation
* A user can only input a valid number to deposit or withdraw (positive number)

### Approach

I made 2 classes and one file containg 2 helper functions.  
BankAccount is the main class, it has 5 methods: `deposit`, `withdraw`, `addTransaction`, `balance` and `printStatement`. BankStatement is the second class and it is injected into BankAccount, it has 2 methods: `print` and `formatTransactions`. The helperFunctions file has 2 functions: `formatDate` to grab today's date in the proper format and `invalidInput` to check the inputs pass to deposit and withdraw functions in BankAccount.

### Setup and how to run 

In the terminal run `npm install` inside the project directory to install the app dependency  
To run the app:  
enter the node repl in the terminal with `node`, `.load bankAccount.js` to load the app in node  
you can now use the bank account like so:  

```
const account = new BankAccount;
account.deposit(1000)
account.withdraw(200)
account.balance()
account.printStatement()
```

### How to run the tests

`npm install -g jest` install jest globally in your machine if you haven't already  
Run `jest` in the project directory to run the tests