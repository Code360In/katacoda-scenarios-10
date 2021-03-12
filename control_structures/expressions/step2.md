In many programming languages, statements are terminated by semicolons. This is also true in JavaScript. But in JavaScript, you can omit semicolons. Missing semicolons are automatically inserted.

Try this:

`let number = 6 * 7`{{execute}}

No semicolon, but it works exactly as in the previous step. The semicolon is silently inserted.

How does JavaScript know when to insert semicolons? The basic rule is the *offending token* rule. If a line starts with a token that couldn't have been a part of the preceding line, a semicolon is added. Consider this:

```let a = number +
   1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6
let b = a + 1```{{execute}}

It works perfectly:

```a
b```{{execute}}

Let's look at those tokens.

* Look at the first token of line 2: the literal `1`. That can be a continuation of `let a = number +`. *Not offending, no semicolon.*
* Look at the first token of line 3: the `let` keyword. That cannot not be a continuation of `let a = number + 1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6`. *Offending, therefore semicolon.*

The offending token rule fails if a line starts with a token that could have been a part of the previous line. 

```let c = 2 * b
(console.log(6 * 7))```{{execute}}

Look at the first token of line 2: an open parenthesis `(`. It could have been a continuation of the first line.

```let c = 2 * b(console.log(6 * 7))```{{execute}}

The expression `b(console.log(6 * 7))` is a function call. Not offending, no semicolon. 👿

Such failures are rare in practice. If you decide not to use semicolons, beware of lines that start with `(` or `[`. 


