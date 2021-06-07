To solve the first challenge, test for `undefined`:

```
let average = (x, y) => {
  console.log({x, y})
  if (x === undefined) return 0
  if (y === undefined) return x
  return (x + y) / 2
}
```

In the second challenge, the defaults are set so that the normal calculation gets the correct result. 

If `x` is not provided, it is set to 0, and `y` is set to `x`, which is 0. The function returns (0 + 0) / 2.

If `y` is not provided, then it is set to `x`. The function returns (x + x) / 2.

```
let average = (x = 0, y = x) => {
  console.log({x, y})
  return (x + y) / 2
}
```


