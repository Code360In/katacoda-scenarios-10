When a function receives many arguments, some with defaults, then it is a good idea to bundle up arguments into an object. Consider a function that turns an array into a string, with configurable delimiters and element separator. When you see a call

`mkString(values, '(', '|', ')')`

you wonder: Is that really the right order of the strings, or should it be 

`mkString(values, '|' '(', ')')`

And it gets even more confusing if you want to use the default separator but not the default delimiters. 

It is better if the function accepts a configuration object:

`mkString(values, { leftDelimiter: '(', rightDelimiter: ')' })`

This is the JavaScript version of *named parameters*. 

Have a look at `mkString.js` and run the code:

`node --use-strict mkString.js`{{execute}}

Just to make sure you are getting the hang of it, change the function call so that the result is `[1, 7, 2, 9]` with a space after each comma.

The curious syntax

```
{
  separator = ',',
  leftDelimiter = '[',
  rightDelimiter = ']'
}
``` 

is a destructuring declaration. It declares three parameter variables `separator`, `leftDelimiter`, and `rightDelimiter`. The variables are set to the corresponding properties of the passed-in object. When a property is missing, the default is used.

A final question: Look carefully at the function declaration in the `mkString.js` file. Can you explain the `= {}` after the destructuring?
