A template literal can be prefixed with a function name. Such a "tagged" template literal can be processed in many ways. 

One example is the `String.raw` tag. It lets you use backslashes without escaping them:

```
String.raw`C:\Windows\System`
```{{execute}}

Whatever. More usefully, libraries can provide tags for parsing strings in various ways. One example is [lit-html](https://lit-html.polymer-project.org). Its `html` tag lets you construct HTML on the fly with a convenient syntax:

```
let destination = 'Paris'
let styles = { color: 'blue' }
let body = html`<div style=${styleMap(styles)}>Hello, ${destination!}</div>`
render(body, document.body)
```

`server/public/index.js`{{open}}




Click the following command to start a web server:

```
cd server
npm install && npm run dev
```{{execute}}

Click on the following link to show the page: https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com/

