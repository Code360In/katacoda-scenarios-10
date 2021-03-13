In many programming languages, statements are terminated by semicolons. This is also true in JavaScript. But in JavaScript, you can omit semicolons. Missing semicolons are automatically inserted.

How does JavaScript know when to insert semicolons? The basic rule is the *offending token* rule. If a line starts with a token that couldn't have been a part of the preceding line, a semicolon is added. Consider this:

```
function enigma() {
  let result = 6 * 7
    + 5 * 6 + 4 * 5 + 3 * 4 + 2 * 3 + 1 * 2
  return result
}
enigma()
```{{execute}}

Run the code. Does it work as you expect?

Let's look at those tokens.

* The first token of line 3 is the literal `+`. That can be a continuation of `let result = 6 * 7`. *Not offending, no semicolon.*
* The first token of line 4 is the `return` keyword. That cannot not be a continuation of `let a = 6 * 7 + 5 * 6 + 4 * 5 + 3 * 4 + 2 * 3 + 1 * 2` *Offending, therefore semicolon.*

Very occasionally, the offending token rule fails. Here is a contrived example:

```
function square(a) {
  let result = a * a
  (console.log(result))
  return a
}
square(3)
```{{execute}}

Run the code. Does it work as you expect?

Look at the first token of line 3: an open parenthesis `(`. It could have been a continuation of the first line. The statement

```
let result = a * a(console.log(result));
```{{execute}}

is syntactically correct. The expression `a(console.log(result))` could be a function call. Not offending, no semicolon. 👿

Such failures are rare in practice. If you decide not to use semicolons, beware of lines that start with `(` or `[`. 
