Here are the functions again:

```
const sayLater = (text, when) => {
  const task = () => console.log(text)
  setTimeout(task, when)
}
sayLater('Bonjour', 1000)
```
A free variable is a variable that's neither a parameter nor a local variable.

The `task` function has no parameters and no local variables. Hence every variable must be free. There are two: `text` and `console`.

The `sayLater` function has one free variable: `setTimeout`. It has three other variables: `text`, `when` (parameter variables), and `task` (local variable).
