Let's say you add the missing semicolon:


```function enigma() {
  return
    1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6 + 6 * 7;
}

enigma()```{{execute}}

JavaScript will still insert another semicolon after the `return`. You can't win 👿. 

The JavaScript world is divided over this issue.

* Some programmers say: Semicolons are clutter. Just watch out for lines starting with `([` and ending with `return`.
* Other programmers say: Semicolons are pure goodness. Still, gotta watch out for lines ending in jumpy keywords.


>> Who is right?<<
[ ] Semicolons are clutter
[ ] Semicolons are pure goodness

There is no right answer. 

Each project will have arbitrarily chosen one or the other. Just follow that.
