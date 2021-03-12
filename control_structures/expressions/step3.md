On to The second semicolon rule. A semicolon is inserted if a `return` keyword is last in line:

`function mystery(x) {
  if (x < 0) return
  console.log(Math.sqrt(x))
}

mystery(4)
mystery(-4)`{{execute}}

That makes sense. We don't want to return the value returned by `console.log`. But watch this: 

```function enigma() {
  return
    1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6 + 6 * 7
}

enigma()```{{execute}}

Time for another angry face with horns: 👿. A semicolon is inserted, and the function returns the value `undefined`. The code that follows is never executed.

This behavior holds for all "jumpy" keywords (`break`, `continue`, `return`, `throw`, and `yield`) that jump somewhere else instead of to the next line.

Be wary of lines ending in jumpy keywords.

>>Question: If I faithfully put semicolons everywhere, I don't need to worry about jumpy keywords <<
( ) Correct
(*) Incorrect

