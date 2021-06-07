Let's get started by firing up Node.js:

`node --use-strict`{{execute}}

The `setTimeout` function calls another function after a delay (in milliseconds). Try it out:

`setTimeout(() => console.log('Goodbye'), 5000)`{{execute}}

You'll have to wait five seconds to see the answer.

Let's make this more flexible:

```
const sayLater = (text, when) => {
  const task = () => console.log(text)
  setTimeout(task, when)
}
sayLater('Bonjour', 1000)
```

If you think about it, something remarkable is happening.

1. `sayLater` is called
2. `sayLater` calls `setTimeout`, passing `text` and `task`
3. `sayLater` returns. The local variable `task` and the parameter variables `text` and `when` are removed.
4. A little less than 1000 milliseconds later, `task` is called.

Clearly, the function value stays around. It is kept alive by passing it to `setTimeout`. 

But what about `text`? The variable is long gone. Re-read steps 1. - 4. if you aren't sure why.

To understand what is happening, we need a useful concept. A *free variable* of a function is a variable that is not defined within the function. That is, not a local variable, and not a parameter variable.

>>Question: How many free variables does the `task` function have?<<
( ) 0
( ) 1
(*) 2


>>Question: How many free variables does the `sayLater` function have?<<
( ) 0
(*) 1
( ) 2
( ) More than 2
