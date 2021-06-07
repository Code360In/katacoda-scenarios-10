const average = (...args) => {
  console.log({args})
  if (args.length === 0) return 0
  let sum = 0
  for (const x of args) sum += x
  return sum / args.length
}

console.log(average(3, 1, 4, 1, 5, 9, 2, 6))
console.log(average())
