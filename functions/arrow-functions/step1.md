Let's get started by firing up Node.js:

`node --use-strict`{{execute}}

Suppose we need to multiply all numbers in an array by 10. We can do this with `map`:

```
let numbers = [0, 1, 2, 4]
function multiplyByTen(x) { return x * 10 }
numbers.map(multiplyByTen)
```{{execute}}

But it's a lot of trouble to define a function that you are probably never going to use again.

*Function literals* to the rescue:

```
numbers.map(function (x) { return x * 10 })
```{{execute}}

The expression `function (x) { return x * 10 }` is a function literal. It's a value that you write down. Just like the number literal `10` or the string literal `'ten'`. The value of the function literal is simply the function that multiplies its argument by ten. 

The function literal has no name. That's fine. The number literal `10` doesn't have a name either.

Now it's your turn. Compute the cubes (x * x * x) of the numbers, without defining a named function. Simply pass a function literal to `map`.

