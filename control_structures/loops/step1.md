Let's start our tools. For one of the tasks, we need a web server:

`npx http-server -c-1 &`{{execute}}

Click on the black block below to execute the command.

When the web server has started, also 

`node --use-strict`{{execute}}

JavaScript has the classic three-part `for` loop of all languages that trace their heritage back to the C language.

```
let items = ['Eggs', 'Spam', 'Hash browns', 'Salsa']
for (let i = 1; i <= items.length; i++)
   console.log(`${i}. ${items[i - 1]}`)
```{{execute}}

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

An array can have gaps, for example: `[1, 2, 3, , , , 'many']`. What does the `for of` loop do with the gaps? Are they skipped, or do they become `undefined`? Or `null`? Try it out!




