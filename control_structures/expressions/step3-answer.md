This is not correct.

Let's say you add the missing semicolon:


```
function enigma() {
  return
    1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6 + 6 * 7;
}

enigma()
```{{execute}}

JavaScript will still insert a semicolon after the `return`. You can't win 👿. 

The JavaScript world is divided over the issue of semicolons.

* Some programmers say: Semicolons are clutter. Don't use them. Just watch out for lines starting with `([` and ending with `return`.
* Other programmers say: Semicolons are pure goodness. Always add them. Still, gotta watch out for lines ending in jumpy keywords.

Each team will have chosen one or the other convention. Just follow your team's convention.
