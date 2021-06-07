window.addEventListener('load', () => {
  const items = document.getElementById('list').children
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    item.addEventListener('click', event => {
      item.style.fontWeight = 1100 - getComputedStyle(item).fontWeight
    })
  }
 
})
