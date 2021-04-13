If the right hand side has fewer elements than the destructuring construct on the left, variables are set to `undefined`, and the array for the rest is empty:

```
[first, second, ...others] = [2]
{ second, others }
```{{execute}}

If the right hand side is a number or object, you get a type error:

```
[first, second, ...others] = 42
```{{execute}}

```
[first, second, ...others] = { name: 'Harry', age: 42 }
```{{execute}}

See the next step for properly destructuring objects.

Interestingly, if the right hand side is a string, you extract its characters:

```
[first, second, ...others] = "Harry"
{ first, second, others }
```{{execute}}








