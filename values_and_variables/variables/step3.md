Finally, let us practice declaring constants. A constant is a variable that never changes. You use the `const` keyword instead of `let`.

Go ahead, declare a constant `THE_ANSWER` and initialize it with whatever you think the answer to life, the universe, and everything is.

Check your work:

`steps.test4(THE_ANSWER)`{{execute}}

Now try changing the value of the constant:

```THE_ANSWER = 'To be or not to be...'```{{execute}}

If you declared the constant correctly, that assignment statement throws an exception. 

*NOTE:* In JavaScript, it is common to use `const` for any value that doesn't change, not just for cosmic constants like `PI` or `THE_ANSWER`:

```const greeting = 'Hello, World!'
console.log(greeting)```{{execute}}

Use `const` when you can, and `let` when you must. And stay away from the evil `var`!

