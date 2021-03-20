In the editor to the right, click on Person1.js and look at the code. Pay attention to the `fullName` method. Note the `get` prefix.

Look at the `console.log` call and note that the `fullName` method is invoked *without parentheses*. It's a method that looks like a property.

To run the code, click on the black block below:

`node Person1.js`{{execute}}

Now do a couple of experiments. 
1. Try assigning to the property:
```
fred.fullName = 'Astaire, Fred'
console.log(fred)
```{{copy}}
2. Make `fullName` a regular method by removing `get`. What else do you need to change?
