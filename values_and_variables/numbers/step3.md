JavaScript has the usual `+ - * /` operators that you know from other programming languages.

In JavaScript, `/` is always floating-point division (because there are no integers!)

`42 / 10`{{execute}}

The `**` operator raises to a power:

`10 ** 9`{{execute}}

*CAUTION*: You can combine values of any type with operators, and the result is something: 

`'3' - true`{{execute}}

This is frowned upon in modern JavaScript. Use `+ - * /` only with numbers.

Finally, *big integers* can have arbitrarily many digits:

`122333444455555666666n * 777777788888888999999999n`{{execute}}

Declare a variable `googol` that holds one Googol; that is, a 1 followed by one hundred zeroes. 

Check your work:

`steps.test3(googol)`{{execute}}
