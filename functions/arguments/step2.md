What happens if you supply too many arguments to a function? Try it out: Add a call 

`console.log(average(3, 4, 5))` 

to `average.js` and run it:

`node --use-strict arguments.js`{{execute}}

As you can see, excess arguments are simply ignored.

What if you want to compute the average of an arbitrary number of values? Then you use a *rest parameter*:

```
const average = (...args) => {
  console.log({args})
  if (args.length === 0) return 0
  let sum = 0
  for (x of args) sum += x
  return sum / args.length
}
```

All arguments are placed in an array `args` that you process like any other array. 

Look at `average2.js` and run it:

`node --use-strict average2.js`{{execute}}

Now add these lines to `average2.js`:

```
let numbers = [3, 1, 4, 1, 5, 9, 2, 6]
console.log(average(numbers))
```

Run it again. 

`node --use-strict average2.js`{{execute}}

What happens? Why?
