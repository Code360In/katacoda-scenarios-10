In the preceding step, you destructured objects. That is, you placed certain property values into variables. The property names and the variable names matched exactly. For example, the `age` property was put into an `age` variable.

If you don't want the variable names to match, you have to work a bit harder. Put the variable names inot the destructuring pattern, so that their positions match the property *values*:

```
let { name: harrysName, age: harrysAge } =  harry
harrysName
harrysAge
```
{{execute}}

This is not so common because it offers little benefit over the equivalent
```
let harrysName = harry.name
let harrysAge = harry.age
```

Finally, you can capture the unmatched properties in an object:

```
const sally = { name: 'Sally', age: 39, salary: 120000 }
let { name: sallysName, ...rest } = sally
sallysName
rest
```

As a final challenge, use destructuring to define variables `first` and `third` that are set to the first and third values of this object: 

```
let enigma = { values: [1, 7, 2, 9], name: 'Fred' }
```

Check your work:

`steps.test2(first, second)`{{execute}}
