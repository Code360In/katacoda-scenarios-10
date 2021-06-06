window.addEventListener('load', () => {
  const button = document.getElementById('selectAll')
  button.addEventListener('click', () => {
    const list = document.getElementById('list')
    for (const item of list.children) {
      item.style.fontWeight = 1100 - window.getComputedStyle(item).fontWeight
    }
  })
})
