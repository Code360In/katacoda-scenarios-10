window.addEventListener('load', () => {
  const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>`
  const dummyParent = document.createElement('div')

  const sanitize = text => {
    dummyParent.innerHTML = ''
    dummyParent.appendChild(document.createTextNode(text))
    return dummyParent.innerHTML
  }
  
  const countries = [
    '', 'United States', 'Brazil', 'India', 
    '</li></ul><h1>Pirate&apos;s Bay</h1><ul><li>',
    'Russia', 'South Africa', 'Mexico', 'Peru', 'Colombia'
  ]

  const listHTML = enclose('ul',
    countries.filter(i => i.trim() !== '')
      .map(i => enclose('li', i))
      .join(''))

  const body = document.getElementsByTagName('body')[0]
  body.innerHTML = listHTML
})
