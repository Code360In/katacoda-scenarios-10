JavaScript has four comparison operators: `<`, `<=`, `>`, `>=`. Use them to compare numbers with numbers or strings with strings:

`42 > 6 * 7`{{execute}}

`'Hello' <= 'Hi'`{{execute}}

*Do not* use comparisons if the operands have different types:

`42 < {}`{{execute}}

`'42' < {}`{{execute}}

You do not want to know why this is so. (If you have morbid curiosity, here is the reason: The empty object `{}` is either converted to `NaN` or `'[object Object]'`. The first comparison is `false` since all comparisons against `NaN` are `false`. The second comparison is `true` because `4` comes before the `[` character in Unicode. Neither results are useful.)

As with other languages derived from the C language, JavaScript has Boolean operators `&&` (and), `||` (or), and `!` (not).

Unlike those other languages, the operands don't have to be Boolean. You can combine `42 && {}` and get a result. I *do not* recommend this.

Nevertheless, as an exercise, try out all possible values `x` and `y` so that `x || y` is 42.
