class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  raiseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}

const harry = new Employee('Harry Burns', 90000)
const sally = new Employee('Sally Albright', 100000)
harry.raiseSalary(10)
sally.raiseSalary(10)

console.log({harry, sally})
console.log(typeof Employee)
console.log(harry.raiseSalary === sally.raiseSalary)


