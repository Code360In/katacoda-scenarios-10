The `parseInt` and `parseFloat` functions convert strings to numbers.

Try them out: 

```
let input = '3.14'
parseInt(input)
parseFloat(input)
```{{execute}}

There are special values `Infinity` and `NaN`:

```
1 / 0
Math.sqrt(-1)
```{{execute}}

`parseInt` and `parseFloat` can also return `NaN` when you call them with a bad input. Try it out: Define a string variable `badInput`.

Then this code to check your work.

`steps.test2(parseFloat(badInput))`{{execute}}


