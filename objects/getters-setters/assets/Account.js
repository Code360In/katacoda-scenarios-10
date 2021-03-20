class Account {
  constructor() { this._balance = 0 }
  deposit(amount) {
    if (amount >= 0) {
      this._balance += amount
    }
  }
  withdraw(amount) {
    if (amount >= 0 && this._balance >= amount) {
      this._balance -= amount
    }
  }
}

let fredsAccount = new Account()
fredsAccount.balance = 1000
fredsAccount.withdraw(200)
console.log(fredsAccount.balance)


