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

