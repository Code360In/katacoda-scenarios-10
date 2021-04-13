You just saw how to pick values out of an array with destructuring. You can also pick values out of an object:

```
const harry =  { name: 'Harry', age: 42, salary: 100000 }
let { name, age } = harry
name
age
```{{execute}}

The left hand side is *not* an object! It is a *pattern* that is matched against the right hand side.

The effect is the same as these two variable declarations.

```
let name = harry.name
let age = harry.age
```

You can also use destructuring to set existing variables:

```
{ name, age } = { name: 'Cheddar', color: 'pale yellow', age: '24 months' } 
name
age
```{{execute}}

Try this yourself: Given the object 

```
const firstMoonLanding = { year: 1969, month: 7, day: 20, hour: 20, minute: 17 }
```{{execute}}

declare two variables `day` and `month` that hold the day and month of the first moon landing. Use destructuring.

Then check your work:

`steps.test1(day, month)`{{execute}}

