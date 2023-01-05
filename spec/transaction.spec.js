const Transaction = require('../src/Transaction.js')

describe('Transaction Test-', () => {
    //arrange
    let date, testTransaction, type, amount, balance

    beforeEach(() => {
        date = "20/06/2022"
        type = "deposit"
        amount = 100
        balance = 200
        testTransaction = new Transaction(date, type, amount, balance)
    })

    describe("Transaction date,", () => {
        it("Transaction class has date property of Date object type", () => {
            //arrange
            //act
            //assert
            expect(testTransaction.date).toEqual(date)

        })
        it("getter for date", () => {
            //arrange
            //act //assert
            expect(testTransaction.date).toEqual(date)

        })

        it("setter for date", () => {
            //arrange
            const oldDate = testTransaction.date
            const newDate = "25/06/2022"
            //act 
            testTransaction.date = newDate
            //assert
            expect(testTransaction.date).toEqual(newDate)
            expect(testTransaction.date).not.toEqual(oldDate)

        })
    })

    describe("Transaction type,", () => {


        it("Transaction class has transaction type property ", () => {

            //arrange
            //act
            //assert
            expect(testTransaction.type).toEqual(type)

        })

        it("getter for type", () => {
            //arrange
            //act //assert
            expect(testTransaction.type).toEqual(type)

        })
        it("setter for type", () => {
            //arrange
            const oldType = testTransaction.type
            const newType = "withdraw"
            //act 
            testTransaction.type = newType
            //assert
            expect(testTransaction.type).toEqual(newType)
            expect(testTransaction.type).not.toEqual(oldType)

        })

    })

    describe("Transaction Amount,", () => {


        it("Transaction class has amount property to record the amount going in and out of the account ", () => {

            //arrange
            //act
            //assert
            expect(testTransaction.amount).toEqual(amount)

        })

        it("getter for amount", () => {
            //arrange
            //act //assert
            expect(testTransaction.amount).toBeInstanceOf(Number)

        })
        it("setter for amount ", () => {
            //arrange
            const oldAmount = testTransaction.amount
            const newAmount = 200
            //act 
            testTransaction.amount = newAmount
            //assert
            expect(testTransaction.balance).toEqual(200)
            expect(testTransaction.type).not.toEqual(oldAmount)

        })
    })

    describe("Transaction Balance,", () => {


        it("Transaction class has Balance property that holds the current balance  ", () => {

            //arrange
            //act
            //assert
            expect(testTransaction.balance).toEqual(balance)

        })

        it("getter for balance", () => {
            //arrange
            //act //assert
            expect(testTransaction.balance).toBeInstanceOf(Number)

        })
        it("setter for balance ", () => {
            //arrange
            const oldBalance = testTransaction.balance
            const newBalance = 500
            //act 
            testTransaction.balance = newBalance
            //assert
            expect(testTransaction.balance).toEqual(500)
            expect(testTransaction.type).not.toEqual(oldBalance)

        })

    })



}) 