class Employee {
  #name
  #salary
  constructor(name, salary) {
    this.#name = name
    this.#salary = salary
  }
  raiseSalary(percent) {
    this.#salary *= 1 + percent / 100
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary) 
    this.bonus = bonus 
  }
  
  getSalary() { return this.salary + this.bonus }
}

const boss = new Manager('Mary Lee', 180000, 10000)
console.log(boss.getSalary()) // Should be 190000

