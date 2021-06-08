Click on the Browser tab and click on the Step 3 link.

Click on the button a few times. You'll see entries in the text area.

Look at the code in `step3.js`.

The `Logger` class collects functions for logging events. They are called *observers*. There could be multiple observers. The `notifyObservers` method notifies all of them. 

The `LogArea` class creates a text area. And it adds an observer that calls the `append` method, which appends a line to the text area.

Now let's break the app. In `LogArea`, replace 

```
    logger.addObserver(event => this.append(event))`
```

with 

```
    logger.addObserver(function(event) {
      try {
        this.append(event) 
      } catch (e) {
        alert(e.message)
      }
    })
```{{copy}}


You know the call `this.append(event)` can't work. Inside a `function` function, `this` doesn't mean the `LogArea` instance.

Click on the reload button to the right of the Browser tab. Click on the Click Me button. You should get an alert with the exception. What is it? Why? 

Now make a seemingly harmless change in the `notifyObservers` method. Change

```
    for (const observer of this.observers)
      observer(event) 
```

to 

```
    for (let i = 0; i < this.observers.length; i++)
      this.observers[i](event) 
```{{copy}}

Click on the reload button to the right of the Browser tab. Click on the Click Me button. You should get an alert with a *different* exception. What is it? Why did it change???
