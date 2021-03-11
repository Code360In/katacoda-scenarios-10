exports.test1 = a => {
  if (!Array.isArray(a)) {
    return 'This isn’t an array'
  }
  if (a.length !== 3) {
    return 'Length is not 3'
  }
  if (typeof a[0] !== 'number') {
    return 'The element at index 0 is not a number'
  }
  if (typeof a[1] !== 'string') {
    return 'The element at index 1 is not a string'
  }
  if (typeof a[2] !== 'boolean') {
    return 'The element at index 2 is not a Boolean value'
  }
  return 'Great job 🙌' 
}

exports.test2 = a => {
  if (!Array.isArray(a)) {
    return 'This isn’t an array'
  }
  console.log("Your array: ", a)
  if (a.length !== 1000) {    
    return `This array has length ${a.length}`
  }
  return 'Fantastic ✨' 
}

exports.pidigits = () => [...'31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'].map(c => parseInt(c))

exports.test3 = a => {
  const b = exports.pidigits()
  if (!Array.isArray(a)) {
    return 'This isn’t an array'
  }  
  if (a.length !== 100) {    
    return `This array has length ${a.length}. It should have length ${b.length - 1}.`
  }
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i])
      return `Expected ${b[i]} at index ${i}`
  }
  return 'Way to go 🎊'   
}
