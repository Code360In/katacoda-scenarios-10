You get an error: TypeError: Cannot read property 'balance' of undefined

Because `this` is `undefined`, the expression `this.balance` throws an exception.

Of course, that's not what was intended. Nobody wants to call the anonymous function on an object. The `this` reference should be the one from the account. 

Simply use an arrow function:

```
accounts.map(account => 
  account.deposit(this.balance / accounts.length))
```{{copy}}

In the arrow function, `this` means whatever `this` meant in the enclosing scope. Here, the account object.

Run the program again. 

`node Account.js`{{execute}}

You should now see the balance spread over the other two accounts.

The moral is: Use arrow functions. Except for methods. And for methods, use `class` and the method syntax. That way, you'll never need the `function` keyword.

