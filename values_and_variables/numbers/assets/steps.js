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
  if (a === Number.MAX_SAFE_INTEGER + 2) {
    return 'That is the smallest. What is the second-smallest?'
  }
  if (a !== Number.MAX_SAFE_INTEGER + 4) {
    return 'Try again!'
  }
  return congrats()
}

exports.test2 = a => {
  if (!Number.isNaN(a)) {
    return `parseFloat yields ${a}, not NaN`
  }
  return congrats()
}

exports.test3 = a => {
  if (a !== 10n**100n) {
    return `Are you sure that's a 1 followed by one hundred 0s?`
  }
  return congrats()
}
