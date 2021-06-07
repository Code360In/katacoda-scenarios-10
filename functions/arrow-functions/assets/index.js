window.addEventListener('load', () => {
  const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>` 
  const countries = ['United States', 'Brazil', 'India', '',
    'Russia', 'South Africa', 'Mexico', 'Peru', 'Colombia']
  const listHTML = enclose('ul',
    countries.filter(i => i.trim() !== '')
    .map(i => enclose('li', i))
    .join(''))

  const body = document.getElementsByTagName('body')[0]
  body.innerHTML = listHTML
})
