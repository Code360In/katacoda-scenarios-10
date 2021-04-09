A "template literal" is a string that can contain embedded expressions:

```
let destination = 'world'
let greeting = `Hello, ${destination.toUpperCase()}!` 
```{{evaluate}}

As you can see, the expression `destination.toUpperCase()` inside the `${ }` is evaluated and then spliced in.

Try it yourself: Given the strings

```
let tag = 'li'
let content = 'Buy cat food'
```{{execute}}

make a string that contains: <li>Buy cat food</li>. But if `tag` is the string `'h1'`, the result should be: <h1>Buy cat food</h1>. Use a template literal with embedded variables `${tag}` and `${content}`. 

Another useful feature: Template literals can contain newlines.

```
greeting = `<div>Hello</div>
<div>${destination}</div>
`
```{{execute}}

