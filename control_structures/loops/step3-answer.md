Let's try::

```
console.log(fred)
for (const value of fred) 
   console.log(value)
```{{execute}}

It plainly doesn't work. The `for of` loop yields the values of an *iterable* such as an array (or array-like object) or a string.

As a rule of thumb, use `for of` with arrays and strings, and `for in` with objects.
