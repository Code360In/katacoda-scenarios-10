const mkString = (array, {
  separator = ',',
  leftDelimiter = '[',
  rightDelimiter = ']'
} = {}) => {
  return leftDelimiter + array.join(separator) + rightDelimiter
}

const values = [1, 7, 2, 9]
let result = mkString(values, { leftDelimiter: '(', rightDelimiter: ')' })
console.log(result)
