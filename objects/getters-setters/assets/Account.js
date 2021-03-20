class Account {
  #balance = 0 // Private field
  deposit(amount) {
    if (amount >= 0) {
      this.#balance += amount
    }
  }
  withdraw(amount) {
    if (amount >= 0 && this.#balance >= amount) {
      this.#balance -= amount
    }
  }
}

let fredsAccount = new Account()
fredsAccount.balance = 1000
fredsAccount.withdraw(200)
console.log(fredsAccount.balance)


