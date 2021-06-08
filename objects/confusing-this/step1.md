You have seen how to use `this` in constructors and methods. Whenever you refer to a property or method of the current object, you use a `this.` prefix. This, erm, is normal and not a problem.

However, in other situations, `this` brings untold grief to JavaScript programmers. In this scenario, you will learn how to recognize and avoid it.

The principal culprit are `function` functions. The ones defined as `function (args) { body }`. Traditionally, they were the only functions that JavaScript had. If you call a `function` function `f` as `obj.f(args)`, then `this` is set to `obj` inside the body of the function. If you call it as `f(args)`, `this` is undefined.

Arrow functions--the ones defined as `(args) => { body }`--don't set `this` at all. They can't be used for methods. But you should use them for everything else. 

To see why, look at the `Account.js` file in the IDE. Note the `spreadTheWealth` method:

```
  spreadTheWealth(accounts) {
    accounts.map(function(account) {
      account.deposit(this.balance / accounts.length) 
    })
    this.balance = 0
  }

```
Run the program. 

`node Account.js`{{execute}}

What error do you get? Why?

Fix the error by passing an arrow function to `map`. 
