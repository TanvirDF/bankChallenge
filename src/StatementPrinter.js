const Account = require("./Account")

class StatementPrinter {
    constructor(account = new Account()) {
        this.account = account
    }
    print() {
        console.log(`date` + "\t" + '   ||' + '  credit  ' + '||' + '   debit  ' + '||' + '  balance')
        for (let i = this.account.transactionList.length - 1; i >= 0; i--) {
            if (this.account.transactionList[i].type === 'deposit') {
                console.log(`${this.account.transactionList[i].date} ` + '||' + this.formatter(this.account.transactionList[i].amount) + '||' + ' '.repeat(10) + '||' + this.formatter(this.account.transactionList[i].balance))
            } else {
                console.log(`${this.account.transactionList[i].date} ` + '||' + ' '.repeat(10) + '||' + this.formatter(this.account.transactionList[i].amount) + '||' + this.formatter(this.account.transactionList[i].balance))
            }

        }



    }

    formatter(num) {
        let str = num.toFixed(2) + ' '
        const space = 10
        const len = str.length

        return ' '.repeat(space - len) + str
    }
}




module.exports = StatementPrinter