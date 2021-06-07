We need to add a second parameter:

`const makeCounter = (start, increment) => {`

Instead of `current++`, use `current += increment`

The initial value of `current` needs to be adjusted too: from `start - 1` to `start - increment`. Here is the complete function:

```
const makeCounter = (start, increment) => {
  let current = start - increment
  const updater = () => {
    current += increment
    return current
  }
  return updater
}
```

Note that the updater now captures two variables: `current` and `increment`.
