Here are two solutions.

You can simply add a `map` to the pipeline:

```
  const listHTML = enclose('ul',
    countries.filter(i => i.trim() !== '')
      .map(sanitize)
      .map(i => enclose('li', i))
      .join(''))
```

Note that you don't need an arrow expression to pass a function that has a name.

Alternatively, you can call `sanitize` in the call to `enclose`:

```
  const listHTML = enclose('ul',
    countries.filter(i => i.trim() !== '')
      .map(i => enclose('li', sanitize(i)))
      .join(''))
```


