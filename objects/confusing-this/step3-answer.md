The first error message was: "this is undefined".

That makes perfect sense. When the function is called as

`observer(event)`

there is no `obj.`, so `this` is undefined.

The second error message is different: "this.append is not a function"

Why would the message be different??? 

I am glad you asked. 

Now the function call is

`this.observers[i](event)`

The explanation is rather bizarre. JavaScript considers the `[i]` as a method call. Therefore, `this` is set to `observers`. When executing the function `observers[i]`, that's what `this` is. It's no longer `undefined`. But of course, `obsrvers` doesn't have an `append` property. Just imagine if it did. The result would be even more obscure.

This is an incredibly subtle point, and nobody should have to worry about it. We only got here because we changed a perfectly good arrow function into a `function` function.

The moral is:
* Don't use `function` functions. Use arrow functions.
* Don't be afraid of `this`. It works fine with constructors, methods, and arrow functions inside methods.
* But don't mess with `this`. Don't use `bind`. Use arrow functions.

