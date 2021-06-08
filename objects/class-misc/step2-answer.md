Here is the complete constructor for the `Manager` class:

```
constructor(name, salary, bonus) {
  super(name, salary) 
  this.bonus = bonus 
}
```{{copy}}

Copy and paste it into the `Manager` class. Be sure that you replaced

```
const boss = new Manager('Mary Lee', 180000)
boss.setBonus(10000)
```

with 
```
const boss = new Manager('Mary Lee', 180000, 10000)
```{{copy}

Then run the code again: 

`node Employee.js`{{execute}}
