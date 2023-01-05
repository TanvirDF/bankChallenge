const StatementPrinter = require("../src/StatementPrinter");

describe("Statement Printer - ", () => {
    it("takes an account object and prints the statement", () => {
        testAccount = {
            balance: 0,
            transactionList: [],
            deposit: () => { },
            withdraw: () => { }
        }


        const testPrinter = new StatementPrinter(testAccount)
        testPrinter.print()



    })
})