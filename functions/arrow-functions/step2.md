*Arrow functions* provide a compact form for function literals. Instead of the `'function'` keyword, you use an arrow `=>` after the parameter. If the function has a single `return` statement, you can omit the braces and `return`:

`numbers.map(x => x * 10)`{{execute}}

The expression `x => x * 10` is the arrow version of `function (x) { return x * 10 }`.

**Note:** In the course on objects, you will see that arrow functions and functions defined with the `function` keyword behave differently when they are invoked as methods. For now, this difference is not important.

If you have more than one argument, you need parentheses: 

`const average = (x, y) => (x + y) / 2`

Use empty parentheses for functions with no argument:

```
const dieToss = () => Math.trunc(Math.random() * 6) + 1
dieToss()
dieToss()
dieToss()
```{{execute}}

Use braces and `return` if the body of the function has multiple statements:

```
const indexOf = (arr, value) => {
  for (const i in arr) {
    if (arr[i] === value) return i
  }
  return undefined
}
indexOf(numbers, 4)
```{{execute}}

Try it yourself: Using arrow syntax, define a function `max` that returns the larger of its arguments (just like `Math.max`).
