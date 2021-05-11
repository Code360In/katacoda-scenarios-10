A template literal can be prefixed with a function name. Such a "tagged" template literal can be processed in many ways. 

One example is the `String.raw` tag. It lets you use backslashes without escaping them:

```
String.raw`C:\Windows\System`
```{{execute}}

More enticingly, libraries provide tags for parsing strings in various ways. One example is [lit-html](https://lit-html.polymer-project.org). Its `html` tag lets you construct HTML on the fly with a convenient syntax:

```
let destination = 'Paris'
let styles = { color: 'blue' }
let body = html`<div style=${styleMap(styles)}>Hello, ${destination}!</div>`
console.log({body})
render(body, document.body)
```

To see this in action, 

1. Click the following commands to exit `node` and start a web server:

    ```.exit```{{execute}}
    ```npx http-server -c-1```{{execute}}
2. Click on the IDE tab and open the file `index.js`
3. Click on the Browser tab to see the result
4. Click again on the IDE tab. In `index.js`, change `blue` to `red`
5. Click on the Browser tab 
6. Click on the Reload icon 🗘 to the *right* of the Browser tab

What does the `html` tag produce? 
