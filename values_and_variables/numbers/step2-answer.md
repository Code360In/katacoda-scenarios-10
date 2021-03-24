You need to provide a string that doesn't start with a digit. For example,

```let badInput = 'pie'```{{execute}}

A numeric prefix is parsed, and everything after the number is ignored. Even spaces before the number are fine. Try out:

```parseFloat(' 3 pies')```{{execute}}


