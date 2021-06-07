Try it out: 

```
function indexOf(arr, value) {
  for (let i in arr) {
    if (arr[i] === value) return i
  }
}
```{{execute}}

And now

`indexOf(['Eggs', 'Spam', 'Hash browns', 'Salsa'], 'Avocado')`{{execute}}

As you can see, the result is `undefined`. That is what a function returns without a `return` statement, or with a statement 

```
return
```

that isn't followed by a value.

Is this a good idea? In our example, it's perfectly reasonable. Both -1 and `undefined` can be indicators of "no matching array position". 

In your own functions, be sure to understand if there is an exit without a specified return value. And document, document, document.
