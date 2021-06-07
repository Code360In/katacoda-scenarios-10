In JavaScript, functions are values. You can store a function in a variable:

```let f = average
f(6, 7)
```{{execute}}

The variable `f` holds the function. You call the function in the usual way, with the `()` operator.

Why bother? You can put another function into the variable:

```f = Math.max
f(6, 7)
```{{execute}}

Now `f` holds the `Math.max` function, and `f(6, 7)` computes the maximum.

You can pass a function to another function. The `map` method applies a function to all values in an array:

```val numbers = [0, 1, 2, 4]
numbers.map(Math.sqrt)
```{{execute}}

Try passing your `square` function instead. What happens?
