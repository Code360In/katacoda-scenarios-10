The `return` statement terminates a function and returns its value. Consider this example:

```
function indexOf(arr, value) {
  for (let i in arr) {
    if (arr[i] === value) return i
  }
  return -1
}
```{{execute}}

Try calling it:

`indexOf(['Eggs', 'Spam', 'Hash browns', 'Salsa'], 'Spam')`{{execute}}

When the function checks that `arr[1] === 'Spam'`, the `return i` statement terminates the function and returned the value 1. 

The statement `return -1` only happens when there is no match:

`indexOf(['Eggs', 'Spam', 'Hash browns', 'Salsa'], 'Avocado')`{{execute}}

What happens if a function ends without any `return` statement? Try it out by removing `return -1` from the `indexOf` function.
