So far, we have seen that `for of` iterates over values, and `for in` iterates over keys. Seems easy enough. 

Can anything go wrong? Of course it can. This is JavaScript after all.

Consider this loop:

```
for (const key in items)
   console.log(`${key + 1}. ${items[key]}`)
```{{execute}}

Why 01. 11. 21. 31.? 

Recall that in JavaScript, all keys are *strings*. Wit arrays, this is easy to forget since you can access an element with an integer index: `items[0]`. However, the operand of the `[]` operator is always converted to a string. 

The expression `key` + 1 concatenates the strings `'0'`, `'1'`, `'2'`, '`3`' with the value 1, which is turned into the string `'1'` prior to concatenation.

The remedy is to turn the key to a number before adding 1:

```
for (const key in items)
   console.log(`${parseInt(key) + 1}. ${items[key]}`)
```{{execute}}

Here is another gotcha:

```
let message = 'Holá 🌐'
for (const key in message)
   console.log(`Key ${key}, value ${message[key]}`)
```

The 🌐 character requires two UTF-16 code units, stored at index 5 and 6. Reading the corresponding values yields the codes that are displayed as broken characters.

And a final question for you: Can you use `for of` to get all values of an object? Try it out!

