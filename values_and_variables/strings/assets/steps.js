const congratulations = [
  'Great job! π',
  'Fantastic! β¨',
  'Way to go! π',
  'Awesome! π',
  'Gold Star! β­',
  'Excellent! π',
  'Super! π',
  'Keep it up! π',
  'Youβre on a roll! π²',
  'Very cool! π',
  'Youβre on fire! π₯',
  'Thumbs up! π',
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
