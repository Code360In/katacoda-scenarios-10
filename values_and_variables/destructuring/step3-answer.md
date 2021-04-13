The trick is to think about pattern matching. To the left of the `=`, you want to build up a pattern that has `first` and `third` in the right places:

```
let { values: [first, , third] } = enigma
```{{execute}}


