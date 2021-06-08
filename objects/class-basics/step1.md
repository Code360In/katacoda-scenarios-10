Start Node so we can make some experiments:

`node --use-strict`{{execute}}

In JavaScript, you can easily make an object without having to first define a class:

```
let harry = { name: 'Harry Smith', salary: 90000 }
```{{execute}}

It's an object. It has state, identity, behavior. Ok, maybe not behavior--there are no methods. Let's fix that:

```
let harry = {
  name: 'Harry Burns',
  salary: 90000,
  raiseSalary: function (percent) {
    this.salary *= 1 + percent / 100
  }
}
```{{execute}}

This object has three properties: a string, a number, and a function. The function-based property works just like a method:

```
harry.raiseSalary(10)
harry
```{{execute}}

When calling a function as `obj.fun(args)`, the special variable `this` is set to `obj`. That's why `harry.raiseSalary(10)` causes `harry.salary` to go up.

Now it's your turn. Make an object `sally` that implements another employee. Raise her salary. 
