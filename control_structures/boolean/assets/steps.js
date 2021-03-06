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
    return 'Doug Adams would approve! π½'
  else
    return 'The conventional answer is 42, but yours is probably more appropriate.'
}

