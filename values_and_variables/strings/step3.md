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

1. Open this file: `index.js`{{open}}
2. Click the following command to start a web server:

    ```
    .exit
    npx http-server
    ```{{execute}}
 
3. Click on the following link to show the page in a new browser window: https://[[HOST_SUBDOMAIN]]-8080-[[KATACODA_HOST]].environments.katacoda.com/
4. In `index.js`, change `blue` to `red` and reload the browser window

What does the `html` tag produce? 
