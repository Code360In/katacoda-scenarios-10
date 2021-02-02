const test1 = a => {
  if (a.length !== 3) {
    return 'Length is not 3'
  }
  if (typeof a[0] !== 'number') {
    return 'The element at index 0 is not a number'
  }
  return 'all ok!' 
}

exports.test1 = test1
