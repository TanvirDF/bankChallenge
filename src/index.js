const Account = require("./Account");
const StatementPrinter = require("./StatementPrinter");


const testAccount = new Account()
testAccount.deposit(1000, '10/01/2012')
testAccount.deposit(2000, '13/01/2012')
testAccount.withdraw(500, '14/01/2012')
testAccount.deposit(100)


const printer = new StatementPrinter(testAccount)
printer.print()

