class Account {
  static percentOf(amount, rate) { return amount * rate / 100 }
  static OVERDRAFT_FEE = 30
  
  constructor(initialBalance) {
    this.balance = initialBalance
  }
  deposit(amount) {
    this.balance += amount
  }
  addInterest(rate) {
    this.balance += Account.percentOf(this.balance, rate)
  }  
  withdraw(amount) {
    if (this.balance < amount) 
      this.balance -= Account.OVERDRAFT_FEE
    else
      this.balance -= amount
  }
}

let fredsAccount = new Account(1000)
console.log({fredsAccount})
fredsAccount.withdraw(200)
console.log({fredsAccount})
fredsAccount.addInterest(5) // 5% interest
console.log({fredsAccount})
fredsAccount.withdraw(1000)
console.log({fredsAccount})

