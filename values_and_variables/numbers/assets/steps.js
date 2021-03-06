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
  console.log(NaN)
  return congrats()
}

exports.test3 = a => {
  if (a !== 10n**100n) {
    return `Are you sure that's a 1 followed by one hundred 0s?`
  }
  return congrats()
}
