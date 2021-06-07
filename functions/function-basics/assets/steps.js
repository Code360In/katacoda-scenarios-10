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
  if (typeof a !== 'function') {
    return 'This isn’t a function'
  }
  if (a(3) !== 9) {
    return 'square(3) is not 9'
  }
  if (a(0) !== 0) {
    return 'square(0) is not 0'
  }
  if (a(-1) !== 1) {
    return 'square(-1) is not 1'
  }
  
  return congrats()
}

