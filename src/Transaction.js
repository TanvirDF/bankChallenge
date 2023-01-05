class Transaction {
    #date
    #type
    #amount
    #balance
    constructor(date, type, amount, balance) {
        this.#date = date
        this.#type = type
        this.#amount = amount
        this.#balance = balance
    }

    get date() {
        return this.#date
    }
    set date(date) {
        this.#date = date
    }

    get type() {
        return this.#type
    }

    set type(type) {
        this.#type = type
    }

    get amount() {
        return this.#amount
    }

    set amount(num) {
        this.#amount = Math.round(num * 1e2) / 1e2
    }

    get balance() {
        return this.#balance
    }

    set balance(num) {
        this.#balance = Math.round(num * 1e2) / 1e2
    }

}

module.exports = Transaction;