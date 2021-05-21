JavaScript has two "bottom" values: `undefined` and `null`. Some library functions prefer to return `undefined` to indicate the absence of a value. Others return `null`. 

When you call such a function, you may want to substitute a different value in case of failure. That is what the `??` operator does. If `x` is neither `undefined` nor `null`, the expression 

```x ?? defaultValue``` 

evaluates to `x`. But if `x` is `undefined` or `null`, the expression's value is `defaultValue`. 

As an example, the call `str.match(regex)` returns an array whose initial element is the first substring matching the regular expression, or `null` if there was no match.

To see this in action, 

1. Click the following command to exit `node` 
    ```
    .exit
    ```{{execute}}
2. Start a web server:
    ```
    npx http-server -c-1
    ```{{execute}}
    
3. Click on the Browser tab to see the result
4. Enter your age in the text field. Also, enter a value that isn't a number. Observe how the text below changes.
5. Click on the IDE tab and open the file `index.js`. See how the `??` operator is used.



