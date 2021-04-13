Let's get started by firing up Node.js. Click on the black block below to execute the commands.

`node --use-strict`{{execute}}

`const steps = require('./steps.js')`{{execute}}

Destructuring is a convenient way to get values out of an array or object. Here is an easy way to get the first two elements out of an array:

```
let numbers = [1, 7, 2, 9]
let [first, second] = numbers
first
second
```{{execute}}

As you can see, `let [first, second] = ...` declares two variables `first` and `second`. 

They are initialized with the matching array elements on the right hand side.

You can also use destructing to change the values of existing variables:

```
[first, second] = [2, 3, 5, 7, 11, 13]
first
second
```{{execute}}

You can skip elements:

```
[first, , third] = [2, 3, 5, 7, 11, 13]
first
third
```{{execute}}


As you saw, it is ok if there are additional elements on the right hand side. You can capture them all in an array:

```
let others
[first, second, ...others] = [2, 3, 5, 7, 11, 13]
others
```{{execute}}

Experiment to find out:
* What happens when the right hand side doesn't have two elements?
* What happens when the right hand side isn't an array?






