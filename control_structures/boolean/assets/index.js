window.addEventListener('load', () => {
  const input = document.getElementById('age')
  input.addEventListener('input', () => {
    const result = document.getElementById('result')
    const match = input.value.match(/^[0-9]+$/) ?? ['-1']
    const age = parseInt(match[0])
    result.textContent = `Next year, you'll be ${age + 1}`
  })
})
