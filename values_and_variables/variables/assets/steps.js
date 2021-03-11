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
  if (typeof a !== 'number') {
    return 'The variable does not hold a number'
  }
  return congrats()
}

exports.test2 = a => {
  if (typeof a !== 'string') {
    return 'The variable does not hold a string'
  }
  return congrats()
}

exports.test3 = a => {
  if (a !== undefined) {
    return `The variable holds ${a}, not undefined`
  }
  return congrats()
}

exports.test4 = a => {
  if (a === 42)
    return 'Doug Adams would approve! 👽'
  else
    return 'The conventional answer is 42, but yours is probably more appropriate.'
}

