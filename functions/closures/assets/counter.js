const makeCounter = (start) => {
  let current = start - 1
  const updater = () => {
    current++
    return current
  }
  return updater
}

const myFirstCounter = makeCounter(3, -1)
console.log('myFirstCounter:')
console.log(myFirstCounter())
console.log(myFirstCounter())
console.log(myFirstCounter())
const mySecondCounter = makeCounter(10, 5)
console.log('mySecondCounter:')
console.log(mySecondCounter())
console.log(mySecondCounter())
console.log(mySecondCounter())
