A "template literal" is a string that can contain embedded expressions:

```
let destination = 'world'
`Hello, ${destination.toUpperCase()}!` 
```{{execute}}

As you can see, the expression `destination.toUpperCase()` inside the `${ }` is evaluated and then spliced in.

Try it yourself: Given the strings

```
let tag = 'li'
let animal = 'cat'
```{{execute}}

make a string that contains: `<li>Buy cat food</li>`. Use a template literal with embedded variables `${tag}` and `${animal}`. 

Do it now in the terminal window! Just enter the template literal without defining a variable.

Katacoda can't check if you did it right, but you can. Execute 

```
tag = 'h1'
animal = 'dog'
```{{execute}}

Hit the ↑ arrow key three times to get your template literal back, and hit Enter ↵

The result should be: `<h1>Buy dog food</h1>`. 

Another useful feature: Template literals can contain newlines.

```
greeting = `<div>Hello</div>
<div>${destination}</div>
`
```{{execute}}

