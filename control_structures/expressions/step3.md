On to the second semicolon rule. A semicolon is inserted if a `return` keyword is the last token in a line:

```
function printRoot(x) {
  if (x < 0) return
  console.log(Math.sqrt(x))
}

printRoot(4)
printRoot(-4)
```{{execute}}

That makes sense. We don't want to return the value returned by `console.log`. But watch this: 

```
function enigma() {
  return
    1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6 + 6 * 7
}

enigma()
```{{execute}}

Time for another angry face with horns 👿. A semicolon is inserted, and the function returns the value `undefined`. The code that follows is never executed.

This behavior holds for all "jumpy" keywords (`break`, `continue`, `return`, `throw`, and `yield`). These statements cause the program to jump somewhere else instead of moving on to the next line.

Be wary of lines ending in jumpy keywords.

The JavaScript world is divided over the issue of semicolons.

* Some programmers say: Semicolons are clutter. Don't use them. Just watch out for lines starting with `([` and ending in jumpy keywords.
* Other programmers say: Semicolons are pure goodness. Always add them. Still, gotta watch out for lines ending in jumpy keywords.

My advice is not to fret over this. Each team will have chosen one or the other convention. Just follow your team's convention.

>>Question: If I faithfully put semicolons everywhere, I don't need to worry about jumpy keywords <<
( ) Correct
(*) Incorrect

