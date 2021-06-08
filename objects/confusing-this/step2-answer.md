You have two arguments. The function literal must start out as:

`(x, y) =>`

You want to put the literal into a variable `max`:

`const max = (x, y) =>`

Now the body. Maybe you saw that one compute the result with a single expression:

```
let max = (x, y) => x > y ? x : y
max(6, 7)
max(6, 5)
```{{execute}}

I use `let max` instead of `const max` to demonstrate a second solution. 

If you use an `if/else` statement, you need to provide braces and `return`:

```
max = (x, y) => {
  if (x > y) return x
  else return y
}
max(6, 7)
max(6, 5)
```{{execute}}

Should you use arrow or function syntax? Many JavaScript programmers nowadays prefer arrows.
