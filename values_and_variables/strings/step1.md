Let's get started by firing up Node.js. Click on the black blocks below to execute the two commands.

`node --use-strict`{{execute}}

`const steps = require('./steps.js')`{{execute}}

String literals can be delimited with single quotes or double quotes, `'like this'` or `"like that"`. Declare a variable `name` and set it to the following string: J. R. "Bob" Dobbs

Then check your work:

`steps.test1(name)`{{execute}}

As in many programming languages, you use a backslash to escape special characters in a string literal, including quotes `\' \"`, newlines `\n`, and backslashes `\\`.

Using an escape sequence, declare a variable `item` and set it to the following string: "Bob"'s pipe

Then check your work:

`steps.test2(item)`{{execute}}

Strings can contain arbitrary Unicode characters. Here is an example:

`'Hello 🌐'` {{execute}}

If you must keep your source files in ASCII, use \u{...} for code points:

`'Hello \u{1F310}'` {{execute}}

*Caution:* Unicode code points > U+FFFF require two code units.

```
const greeting = 'Holá 🌐'
greeting[0]
greeting[1]
greeting[2]
greeting[3]
greeting[4]
greeting[5]
greeting[6]
greeting[7]
```{{execute}}

Look carefully. The á character is displayed fine, but 🌐 is encoded with two code units, each of which appears as a "broken" string.




