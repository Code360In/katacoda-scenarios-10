Finally, there are some less-common variations.

Literal names don't have to be identifiers. They can be arbitrary strings. If they contain spaces or special symbols, you need to enclose them in quotes:

```harry = { name: 'Harry Smith', 'favorite beer': 'IPA' }```{{execute}}

This is not common, but it does happen. 

Now here is a challenge: Change Harry's favorite beer to Lager. Then check your work. (Hint: Review the last part of the preceding step.)

`steps.test4(harry)`{{execute}}

You can dynamically compute the property name. Enclose the expression in brackets:

```let item = 'beer'
{ name: 'Harry Smith', ['favorite ' + item]: 'Pilsener' }
```{{execute}}

That is even less common.
