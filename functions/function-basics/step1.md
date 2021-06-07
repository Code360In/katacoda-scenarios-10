Let's get started by firing up Node.js:

`node --use-strict`{{execute}}

Load the helper code:

`const steps = require('./steps.js')`{{execute}}

A function has input variables (or parameters) and produces a result (or return value). Here is an example:

```
function average(x, y) {
  return (x + y) / 2
}
```{{execute}}

Now you can call the function. Provide input values (called *arguments*), and Node will show the result:

```
average(6, 7)
```{{execute}}

In JavaScript, function parameters don't have types. Of course, the `average` function is meant to compute the average of two *numbers*. But nothing stops you from passing something else. Give it a try:

```
average('6', '7')
```{{execute}}

That wasn't so good. The value of `'6' + '7'` is the string `'67'`, and `'67' / 2'` is 33.5 thanks to a type conversion. 

Be sure to document the types that your functions are intended to accept!

Now it's your turn. Define a function `square` that computes the square of a given number. For example, `square(3)` should return 9.

When you are done, check your result:

`steps.test1(square)`{{execute}}


