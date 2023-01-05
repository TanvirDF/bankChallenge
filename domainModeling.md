
**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

| noun           | verb             |
| -----          | -----------      |
| client account | deposit          |
| amount         | withdraw         |
| date           | print Statement  |
| credit         |                  |
| debit          |                  |
| balance        |                  |


| Objects        | Properties                   | Messages           | Output        |
| -------        | ---------------              | -----------------  | --------      |
| Transaction    | date@String                  | getDate()          | @String       |
|                |                              | setDate(@String)   | @void         |
|                | type@String                  | getType()          | @String       |
|                |                              | setType(@String)   | @void         |
|                | amount@Number                | getAmount()        | @Number       |
|                |                              | setAmount(@Number) | @void         |
|                | balance@Number               | getBalance()       | @Number       |
|                |                              | setBalance(@number)| @void         |
| ClientAccount  | balance@Number               | getBalance()       | @number       |
|                |                              | setBalance(@Number)| @void         |
|                | transactionList@Transaction  | getTransactions()  | [@Transaction]|
|                |                              | deposit(@Number)   | @void         |
|                |                              | withdraw(@Number)  | @void         |
|StatementPrinter|                              | printStatement(@Account)|@void     |

