It happens all the time that you have variables, and then you want to make an object with the exact same property names and values. For example:

```
let name = 'Sally'
let age = 39
{ name: name, age: age }
```{{execute}}

There is a convenient shortcut:

```
{ name, age }
```{{execute}}

If there is no colon after the property name, its value is taken from the variable with the same name.

Define a variable `sally` that holds an object whose name is the one stored in `name`, and whose salary is twice as much as the salary of `harry`. 

Then check your work:

`steps.test3(harry, sally)`{{execute}}


