1. When you change `this.salary` to `this.#salary` in `Manager.getSalary`, you get an error that the `Manager` class doesn't have a `#salary` field. A subclass cannot see the private fields of a superclass.
2. When you change `this.salary` to `this.getSalary()`, you get a stack overflow. The method calls itself!
3. When you change `this.salary` to `Employee.getSalary()`, you get an error that `Employee.getSalary` is not a function. 
4. Replacing `this.salary` with `super.getSalary()` works.

For the bonus task, replace `Employee.getSalary` with a getter

`get salary() { return this.#salary }`{{copy}}

and `Manager.getSalary` with a getter

`get salary() { return super.salary + this.bonus }`{{copy}}

Then you also need to change 

`console.log(boss.getSalary())`

to

`console.log(boss.salary)`{{copy}}

Now run the code one last time:

`node Employee2.js`{{execute}}
