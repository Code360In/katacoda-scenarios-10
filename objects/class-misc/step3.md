In the editor to the right, click on Employee2.js. Note how the `Employee` class now has a private field for the salary. 

This breaks the code for the `Manager.getSalary` method. It can no longer obtain the salary as `this.salary`. 

Run the code to see what happens.

`node Employee2.js`{{execute}}

1. Can you change `this.salary` to `this.#salary` in `Manager.getSalary`? Try it out!
2. Can you call `this.getSalary()` to invoke `Employee.getSalary`?
3. How about `Employee.getSalary()`?

We need a way to call the superclass method. JavaScript uses the same syntax as Java:

`super.getSalary()`. 

Fix up the `Manager.getSalary` method so that the salary is correctly reported.

For extra credit, make a getter `salary` in both classes. To invoke a superclass getter, you call

`super.salary`

