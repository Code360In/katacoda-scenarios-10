On to the second semicolon rule. A semicolon is inserted if a `return` keyword is the last token in a line:

```
function printRoot(x) {
  if (x < 0) return
JavaScript has two "bottom" values: `undefined` and `null`. Some libraries prefer to return `undefined` to indicate the absence of a value. Others return `null`. 

If you don't want to deal with the difference, you can use the `??` operator. If `x` is `undefined` or `null`, the expression `x ?? y` is `undefined`. Otherwise, it is `y`. 

TODO: How to test this? regex? 




>>Question: If I faithfully put semicolons everywhere, I don't need to worry about jumpy keywords <<
( ) Correct
(*) Incorrect

