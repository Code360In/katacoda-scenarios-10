Unfortunately, being a good semicolon citizen does not protect you.

Let's say you add the missing semicolon:

```
function enigma() {
  return
    1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6 + 6 * 7;
}

enigma()
```{{execute}}

JavaScript will still insert a semicolon after the `return` 👿. 

