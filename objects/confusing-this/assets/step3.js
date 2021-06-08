class Logger {
  constructor() { this.observers = [] }
  addObserver(f) { this.observers.push(f) }
  notifyObservers(event) {
    for (const observer of this.observers)
      observer(event) 
  }
}

class LogArea {
  constructor(logger) {
    this.textArea = document.createElement("textArea")
    this.textArea.rows = 20
    logger.addObserver(event => this.append(event))
  } 
  append(obj) { this.textArea.value += obj + "\n" }
}

window.addEventListener('load', () => {
  const logger = new Logger()
  const logArea = new LogArea(logger)
  const body = document.getElementsByTagName("body")[0]
  body.appendChild(logArea.textArea)
  const button1 = document.getElementById("button1")
  button1.addEventListener('click', event => logger.notifyObservers(event))
})
