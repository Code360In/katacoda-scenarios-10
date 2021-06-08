class CounterButton {
  constructor() {
    this.counter = 0
    this.button = document.createElement('button')
    this.increment()
    this.button.style.margin = '.5em'
  }
  
  increment() {
    this.counter++
    this.button.textContent = this.counter    
  }

  autoIncrement() {
    setInterval(this.increment.bind(this), 1000)
  }
}

window.addEventListener('load', () => {
  const counter1 = new CounterButton()
  const counter2 = new CounterButton()
  const firstDiv = document.getElementsByTagName('div')[0]
  firstDiv.appendChild(counter1.button)
  firstDiv.appendChild(counter2.button)

  counter1.autoIncrement()
  
  counter2.button.addEventListener('click',
    counter2.increment.bind(counter2)) 
})
