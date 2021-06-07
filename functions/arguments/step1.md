What happens if you call a JavaScript function with fewer arguments than it has parameters? Let's try it out. In the editor, look at `average.js`. Then run the code: 

`node --use-strict arguments.js`{{execute}}

As you can see, the missing parameters are set to `undefined`. We can use that to our advantage. Change `average` so that it returns `x` if `y` is `undefined` and 0 if `x` is also `undefined`.

To test your code, run 

`node --use-strict arguments.js`{{execute}}

again.

Since `undefined` is rarely a convenient default, you can supply *default arguments*. If you define the function as 

```
const average(x = 0, y = x) { 
  ...
}
```

then the defaults replace missing arguments. Go ahead: Use these defaults and complete the function body. (Hint: The defaults are cleverly chosen to make it simple.)



