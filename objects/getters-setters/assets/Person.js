class Person {
  constructor(last, first) { this.last = last; this.first = first }
  get fullName() { return `${this.last}, ${this.first}` }
}
