const Transaction = require("./Transaction")
const DateGenerator = require("./DateGenerator.js")

class Account {
    #balance
    #transactionList
    constructor(balance = 0) {
        this.#balance = balance
        this.#transactionList = []
    }
    get balance() {
        return this.#balance
    }
    set balance(amount) {
        this.#balance = this.#roundToTwoDecimal(amount)
    }
    get transactionList() {
        return this.#transactionList
    }

    #addTransaction(transaction) {
        this.#transactionList.push(transaction)
    }

    #roundToTwoDecimal(num) {
        return Math.round(num * 1e2) / 1e2
    }

    deposit(amount, date) {
        amount = this.#roundToTwoDecimal(amount)
        const today = DateGenerator.getTodaysDate()
        this.balance += amount
        this.#addTransaction(new Transaction(date ? date : today, 'deposit', amount, this.balance))

    }

    withdraw(amount, date) {
        amount = this.#roundToTwoDecimal(amount)
        const today = DateGenerator.getTodaysDate()
        this.balance -= amount
        this.#addTransaction(new Transaction(date ? date : today, 'withdraw', amount, this.balance))
    }




}






// const account = new Account(100.2315)

// account.deposit(100.45345, '01/06/2022')
// console.log(account.balance)

// console.log(account.transactionList[0].date)
// console.log(account.transactionList[0].balance)

// const account2 = new Account(100)

// account2.deposit(100)

// console.log(account2.transactionList[0].date)

module.exports = Account