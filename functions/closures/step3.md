Open the browser tab and see what happens when you click on each of the country names. The font weight toggles between normal (weight 400) and bold (weight 700).

Using the IDE tab, have a look at the code. `index.html` has the list of countries. In `index.js`, a loop traverses the list items:

```
  const items = document.getElementById('list').children
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i]

  }

```

A listener for the `click` event is attached to each item:


```
    item.addEventListener('click', event => {
      item.style.fontWeight = 1100 - getComputedStyle(item).fontWeight
    })
```

Why 1100? Computing 1100 - 400 = 700 and 1100 - 700 = 400 toggles between bold and normal font weight. The details of the DOM API are not important.

In each loop iteration, there is a different `item` variable. And each iteration passes a different anonymous function to the `addEventListener` method. That function captures the `item` variable. 

When you click on an item, its listener changes `item.style`, where the captured `item` is the same as the `item` to which the listener was attached. That is how it should be.

Now make one tiny change: In `let item = items[i]`, change `let` to `var`. 

Refresh the browser by clicking on the round arrows to the *right* of the Browser tab. Click on a few items. What happens? Why???

Really, there is no way for you to know. Just peek at the solution.
