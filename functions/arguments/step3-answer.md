We want a result with delimiters `'['` and `']'`, and separator `', '`. Our delimiters are the same as the default values. But the separator is not. Hence the call is:

```
result = mkString(values, { separator = ', ' })
console.log(result)
```

Try it out: append to `mkString.js` and run

`node --use-strict mkString.js`{{execute}}

And the answer for the bonus question: The default `= {}` allows you to omit the configuration parameter if you are happy with all defaults:

```
result = mkString(values)
console.log(result)
```





