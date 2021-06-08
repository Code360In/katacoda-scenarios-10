Let's look at how the `Account` class is used:

```
let fredsAccount = new Account(1000)
fredsAccount.deposit(500)
fredsAccount.withdraw(200)
console.log(fredsAccount.balance)
// Should print 1300
```

From the usage, we can deduce the following:

* There is a property `balance`
* There are methods `deposit`, `withdraw`
* The constructor has one parameter, the initial balance

That tells us the outline of the class:

```
class Account {
  constructor(initialBalance) {
    ...
  }
  deposit(amount) {
    ...
  }
  withdraw(amount) {
    ...
  }
}

```{{copy}}

The constructor is:

```
  constructor(initialBalance) {
    this.balance = initialBalance
  }
```{{copy}}

Note the use of `this.`

The `deposit` method adds the deposit amount to the balance:

```
  deposit(amount) {
    this.balance += amount
  }

```{{copy}}

In the `withdraw` method, you subtract the amount. And perhaps add a check against overdrawing the account:

```
  withdraw(amount) {
    if (amount <= this.balance)
      this.balance -= amount
  }

```{{copy}}

Note that the `balance` property is not private. You could manipulate it directly. There is a "stage 3" proposal for private fields that you will see in the "Getters and Setters" scenario. 

TODO: Link
