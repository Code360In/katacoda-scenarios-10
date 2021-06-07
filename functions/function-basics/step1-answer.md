By analogy with the definition of `average`, you can see that the general form is

```function square(x) => {
  return ...
}```

Now you need to compute the square of `x`. That's simply `x * x` or `Math.pow(x, 2)`. We'll stick with the simpler version.`

So, here is the function:

```function square(x) => {
  return x * x
}```{{execute}}


And here are a couple of test cases:

```
square(3)
square(-1)
```{{execute}}
