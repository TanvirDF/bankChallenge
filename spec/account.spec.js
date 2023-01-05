const Account = require("../src/Account.js");
const DateGenerator = require("../src/DateGenerator.js");
const Transaction = require("../src/Transaction.js");



describe("Account Test", () => {

    let testAccount

    beforeEach(() => {
        testAccount = new Account(500)
    })
    afterEach(() => {
        testAccount = null
    })


    it("Account has Balance property that holds the account balance of the client in 2 decimal point", () => {
        //arrange
        const amount = 100.00
        //act
        const account = new Account(amount)
        //assert
        expect(account.balance).toEqual(amount)
    })

    describe("Account deposit", () => {

        it("depositing an amount will add a transaction Object to a transaction list", () => {
            //act
            testAccount.deposit(100)

            //assert
            expect(testAccount.transactionList.length).toBeTruthy()
            expect(testAccount.transactionList[0]).toBeInstanceOf(Transaction)
            expect(testAccount.transactionList[0].balance).toEqual(600)
            expect(testAccount.transactionList[0].type).toEqual('deposit')


        })

        it("deposit takes a date argument, if one is not passed then todays date will be passed as default to the transaction object.", () => {

            const todaySpy = spyOn(DateGenerator, 'getTodaysDate');
            testAccount.deposit(100);
            expect(todaySpy).toHaveBeenCalled();

        })

        it("depositing an amount will increase the balance", () => {
            testAccount.deposit(300)
            expect(testAccount.balance).toBe(800)
        })
    })

    describe("Account withdraw", () => {
        it("Withdrawing an amount will add a transaction record to a transaction list", () => {
            //act
            testAccount.withdraw(200)

            //assert
            expect(testAccount.transactionList.length).toBeTruthy()
            expect(testAccount.transactionList[0]).toBeInstanceOf(Transaction)
            expect(testAccount.transactionList[0].balance).toEqual(300)
            expect(testAccount.transactionList[0].type).toEqual('withdraw')


        })

        it("deposit takes a date argument, if one is not passed then todays date will be passed as default to the transaction object.", () => {

            const todaySpy = spyOn(DateGenerator, 'getTodaysDate');
            testAccount.withdraw(100);
            expect(todaySpy).toHaveBeenCalled();

        })

        it("Withdrawing an amount will decrease the balance", () => {
            testAccount.deposit(300)
            expect(testAccount.balance).toBe(800)
        })

    })


})