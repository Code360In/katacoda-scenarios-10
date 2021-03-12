In many programming languages, statements are terminated by semicolons. This is also true in JavaScript. But in JavaScript, you can omit semicolons. Missing semicolons are automatically inserted.

Try this:

`let number = 6 * 7`{{execute}}

No semicolon, but it works exactly as in the previous step. The semicolon is silently inserted.

How does JavaScript know when to insert semicolons? The basic rule is simple. If a line starts with a token that couldn't have been a part of the preceding line, a semicolon is provided. Consider this:
```let a = number +
   1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6
let b = a + 1```{{execute}}

How can JavaScript tell where the first statement ends and the second one begins? 
 * Look at the first token of line 2: the literal `1`. That can be a continuation of `let a = number +`. No semicolon.
 * Look at the first token of line 3: the `let` keyword. That cannot not be a continuation of `let a = number + 1 * 2 + 2 * 3 + 3 * 4 + 4 * 5 + 5 * 6`. A semicolon is added.
 
 
