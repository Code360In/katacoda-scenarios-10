A function with free variables *captures* those variables. They stick around with the function. A function together with the captured variables is called a *closure*. A closure has both code (the body of the function) and data (the captured variables).

Here is a more dramatic example:

```
let makeCounter = (start) => {
  let current = start - 1
  const updater = () => {
    current++
    return current
  }
  return updater
}

const myFirstCounter = makeCounter(1)
console.log('myFirstCounter:')
console.log(myFirstCounter())
console.log(myFirstCounter())
console.log(myFirstCounter())
const mySecondCounter = makeCounter(10)
console.log('mySecondCounter:')
console.log(mySecondCounter())
console.log(mySecondCounter())
console.log(mySecondCounter())
```{{execute}}

Look at the `updater` function. It has captured the `current` variable. 

When you call the function, it increments the variable and returns its value. 

Look carefully how you get the function. You call `makeCounter`, which returns the function. You save it in a variable such as `myFirstCounter`. Then you call the function as often as you like.

Also note that each call to `makeCounter` gives you a new function that captures a different `current` value. 

Go ahead and make the `makeCounter` function a bit more flexible. Provide a second parameter `increment`. For example, a counter made with `makeCounter(10, 5)` should count 10, 15, 20, and so on.

It would be tedious to edit the function code in Node. Exit Node:

`exit`{{execute}}

Use the IDE tab to start Visual Studio Code. Edit `counter.js`. ThThen run the code with

`node --use-strict counter.js`{{execute}}
