Let's move on to the `for in` loop. It visits all keys of an object: 

```
const fred = { name: 'Fred Flintstone', age: 42, 'best friend': 'Barney Rubble' }
for (const key in fred) 
  console.log(`Key: ${key}, value: ${fred[key]}`)
```{{execute}}

You can also use the `for in` loop with arrays. After all, an array is an object with keys `'0'`, `'1'`, `'2'`, and so on:

```
for (const key in items) 
  console.log(`Key: ${key}, value: ${items[key]}`)
```{execute}

How does the `for in` loop treat holes in an array? Does it skip them or not? Try it out with an example!
