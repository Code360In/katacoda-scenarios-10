const congratulations = [
  'Great job! 🙌',
  'Fantastic! ✨',
  'Way to go! 🎊',
  'Awesome! 😆',
  'Gold Star! ⭐',
  'Excellent! 🎉',
  'Super! 🎊',
  'Keep it up! 🎈',
  'You’re on a roll! 🎲',
  'Very cool! 😎',
  'You’re on fire! 🔥',
  'Thumbs up! 👍',
]
const congrats = () => 
  congratulations[Math.floor(Math.random() * congratulations.length)]

exports.test1 = a => {
  if (typeof a !== 'object')
    return 'That’s not an object'
  if (!('age' in a))
    return 'There is no age property'
  if (typeof a.age !== 'number')
    return 'The age is not a number'
  if (a.age >= 42)
    return 'Harry didn’t get any younger'  
  return congrats()
}

exports.test2 = a => {
  if (typeof a !== 'object')
    return 'That’s not an object'
  if (!('salary' in a))
    return 'There is no salary property'
  if (typeof a.salary !== 'number')
    return 'The salary is not a number'
  return congrats()
}

exports.test3 = (a, b) => {  
  if (typeof b !== 'object')
    return 'That’s not an object'
  if (!('name' in b))
    return 'There is no name property'
  if (b.name !== 'Sally')
    return 'The name isn’t Sally'
  if (b.salary !== 2 * a.salary)
    return 'The salary isn’t twice as much'
  return congrats()  
}

exports.test4 = a => {
  if (typeof a !== 'object')
    return 'That’s not an object'
  if (!('favorite beer' in a))
    return `There is no 'favorite beer' property`
  if (a['favorite beer'] !== 'Lager')
    return `The favorite beer isn't Lager`
  return congrats()
}
