class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
  getSalary() { return this.salary }
}

class Manager extends Employee {
  getSalary() { return this.salary + this.bonus }
  setBonus(bonus) { this.bonus = bonus }
}

const boss = new Manager('Mary Lee', 180000)
boss.setBonus(10000)
boss.raiseSalary(10) // The raiseSalary method is inherited
console.log({boss})

console.log('boss instanceof Employee:', boss instanceof Employee)
