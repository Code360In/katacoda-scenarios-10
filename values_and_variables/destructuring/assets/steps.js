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

exports.test1 = (a, b) => {
  if (a !== 20) {
    return 'That is not the day of the first moon landing'
  }
  if (b !== 7) {
    return 'That is not the month of the first moon landing'
  }
  return congrats()
}

exports.test2 = (a, b) => {
  if (a !== 1) {
    return 'That is not the first element of values'
  }
  if (b !== 2) {
    return 'That is not the second element of values'
  }
  return congrats()
}

