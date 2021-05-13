Let's get started by firing up Node.js. Click on the black block below to execute the command.

`node --use-strict`{{execute}}

A *Boolean value* is either `true` or `false`. The name comes from the logician George Boole who discovered the laws of logic way back when. (Fun fact: His daughter Alicia learned how to visualize four-dimensional objects at an early age.)

In JavaScript, you check for equality with the `===` operator. 

`6 * 7 === 42`{{execute}}

`'Hello' === 'Hel' + 'lo'`{{execute}}

If the operands don't have the same type, the result is `false`:

`'42' === 42`{{execute}}

The opposite of `===` is `!==`:

`'42' !== 42`{{execute}}

*Caution:* There are also `==` and `!=` operators from the dark ages of JavaScript. These are not useful and you should avoid them. Why? Try this out:

`'42' == [42]`{{execute}}

Really? A string equals an array??? This makes no sense. Don't use `==` and `!=`.

When comparing objects or arrays, `===` does *not* look into the contents, but only checks whetherr they refer to the same memory location. Consider these variables:

```
const harry = { name: 'Harry Smith', age: 42 }
const harry2 = harry
const harry3 = { name: 'Harry Smith', age: 42 }
```{{execute}}

What do you think? Is `harry === harry2`? Is `harry === harry3`?

