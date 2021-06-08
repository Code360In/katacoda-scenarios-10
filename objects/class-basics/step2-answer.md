Let's make another employee:

```

const barney = new Employee('Barney Rubble', 50000)
```{{execute}}

And raise his salary:

```
barney.raiseSalary(4)
barney
```{{execute}}

Are the `raiseSalary` methods the same?

```
fred.raiseSalary === barney.raiseSalary
```{{execute}}

Sadly, no. 

It is possible to make them the same. Make a single function somewhere and assign it in the constructor function. You can do this manually, but it isn't worth it. The `class` syntax, which you will see in the next step, takes care of it.


