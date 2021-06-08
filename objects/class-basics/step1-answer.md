Here is such an object:

```
let sally = {
  name: 'Sally Albright',
  salary: 100000,
  raiseSalary: function (percent) {
    this.salary *= 1 + percent / 100
  }
}
```{{execute}}

Let's give her a raise:

```
sally.raiseSalary(12)
```{{execute}}

It's a bit unsatisfactory that `harry` and `sally` need to define their own methods. The next step shows how to make that easier.
