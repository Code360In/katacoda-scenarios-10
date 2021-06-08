In the editor to the right, click on `Employee.js` and look at the code. Note the `Employee` class and the `Manager` subclass. 

Run the code:

`node Employee.js`

Managers are like employees. In the code, look how the `raiseSalary` method is *inherited*. Even though the `Manager` class doesn't have a `raiseSalary` method, you can invoke it on `Manager` objects.

As in Java, you can use an `instanceof` test to check if an object belongs to a class. Both of the following are `true`:

```
boss instanceof Employee
boss instanceof Manager
```

But managers are also different from employees. They get a bonus for doing their work. Look at the `getSalary` method in the code. It *overrides* the `getSalary` method in the superclass.

Note how managers are constructed. The `Manager` class has no constructor. The constructor parameters are passed to the `Employee` superclass. 

This is nicer than in Java or C++, where the no-argument superclass constructor would be used.

But let's add a constructor, so that we can specify the bonus in the constructor. 

In the code, replace

```
const boss = new Manager('Mary Lee', 180000)
boss.setBonus(10000)
```

with 
```
const boss = new Manager('Mary Lee', 180000, 10000)
```{{copy}

Add a constructor in the `Manager` class. A subclass constructor *must* call the superclass constructor in the first line. The syntax is 

```
super(name, salary)
```{{copy}}

to pass the `name` and `salary` parameters to the superclass.

When you are done, run the code again:

`node Employee.js`{{execute}}
