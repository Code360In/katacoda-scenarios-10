Click on the Browser tab. Note that the text on the first button increments once per second. The text on the second button increments when you click on it.

Ignore the Step 3 link for now. 

In the IDE, read through the code of `index.js`. 

How is the timer set? How is the click listener of the second button set?

They are set as the following expressions:

```
this.increment.bind(this)
counter2.increment.bind(counter2)
```

Here, `this.increment` and `counter2.increment` refer to the `increment method`. But a method is just a function. When it is invoked in the `setInterval` or `click` callback, then `this` is `undefined`. The `bind` method forces a `this` parameter.

Many programmers find `bind` confusing. It is not necessary. You can simply use an arrow function to specify what you want.

```
() => this.increment()
event => counter2.increment()
```

Make those changes in `index.js`. Click on the reload button to the right of the browser window. The buttons should still work as before.

The moral is: Avoid `bind`. Just write an arrow function.
