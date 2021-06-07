Variables declared with `var` have a bizarre and unwelcome behavior when they are captured. Even though each loop iteration is supposed to have its own fresh variable, `var` only provides a single variable that is reused in each iteration.

That one variable is captured by all click listeners. 

Once the loop is done, its content is the *last* item. And all listeners update the last item. 

That is why you should never use `var`. Use `let` or `const`.

