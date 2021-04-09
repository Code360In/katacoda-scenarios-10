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
  if (a !== `J. R. "Bob" Dobbs`) {
    return 'Try again!'
  }
  return congrats()
}

exports.test2 = a => {
  if (a !== `"Bob"'s pipe`) {
    return `Are you sure you have double quotes around Bob and a single quote after that?`
  }
  return congrats()
}
