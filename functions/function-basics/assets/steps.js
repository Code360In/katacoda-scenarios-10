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
  if (typeof a !== 'function') {
    return 'This isnβt a function'
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

