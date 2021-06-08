All employees should have the same methods. That's what makes a class--a set of objects with the same behavior. We can make a function for producing objects with the same behavior:

```
function Employee(name, salary) {
  this.name = name
  this.salary = salary
  this.raiseSalary = function (percent) {
    this.salary *= 1 + percent / 100
  }
}
```{{execute}}

Call this function with the `new` operator:

```
const fred = new Employee('Fred Flintstone', 40000)
fred
fred.raiseSalary(5)
fred
```{{execute}}

The `new` operator does a special trick. It makes an empty object and calls the function with `this` pointing to that empty object. The function is expected to get busy and set object properties. Then the `new` operator yields the newly constructed object.

Here, we gave the function `Employee` a name that starts with an uppercase letter. That's just to be cute--it looks like a constructor in an OO language. And in a way, it is. All objects obtained by calling `new Employee(..., ...)` have the same behavior.

Try it out: Make another employee and raise the salary.

A final question. When you have two employees, are their `raiseSalary` functions identical? 



