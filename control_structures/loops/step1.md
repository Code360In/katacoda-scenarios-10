Let's start Node. Click on the black rectangle below:

`node --use-strict`{{execute}}

JavaScript has the classic three-part `for` loop of all languages that trace their heritage back to the C language.

```
let items = ['Eggs', 'Spam', 'Hash browns', 'Salsa']
for (let i = 1; i <= items.length; i++)
   console.log(`${i}. ${items[i - 1]}`)
```{{execute}}

Click the black rectangle above to run the code.

There are two additional forms of the `for` loop. The `for in` form iterates over the keys of an array or object, and the `for of` form iterates over the values of an iterable. 

With an array, we usually want to do the latter. Here goes:

```
for (const item of items) 
   console.log(`* ${item}`)
```{{execute}}

As you can see, the variable `item` is created once for each loop iteration, and initialized with the current value.

Strings are also iterable. The `for of` loop delivers each character as a string:

```
for (const character of 'Holá 🌐')
   console.log(character)
```{{execute}}

You can also use the `for of` loop with *array-like* objects. For example, the DOM expressions `element.children` or `doc.getElementsByClassName` do *not* return arrays. But the returned objects are iterable. 

To see an example, 

1. Click on the Browser tab and observe what happens when you click the button.
2. Click on the IDE tab and open the file `index.html`. Locate the code for the bulleted list. 
3. Open the file `index.js`. Focus on lines 4 - 6 and note how the iterable value `list.childred` is used in a `for of` loop.

Finally, here is a research question for you. An array can have gaps, for example: `[1, 2, 3, , , , 'many']`. What does the `for of` loop do with the gaps? Are they skipped, or do they become `undefined`? Or `null`? Try it out!




