class Account {
  constructor() { this.balance = 0 }  
  deposit(amount) { this.balance += amount }  
  withdraw(amount) { this.balance -= amount }
  spreadTheWealth(accounts) {
    accounts.map(function (account) {
      account.deposit(this.balance / accounts.length)
    })
    this.balance = 0
  }
}

const petersAccount = new Account()
petersAccount.deposit(1000)
const paulsAccount = new Account()
const marysAccount = new Account()
petersAccount.spreadTheWealth([paulsAccount, marysAccount])
console.log({petersAccount, paulsAccount, marysAccount})
