import {html, render} from 'https://unpkg.com/lit-html?module';
import {styleMap} from 'https://unpkg.com/lit-html/directives/style-map.js?module';
let destination = 'Paris'
let styles = { color: 'blue' }
let body = html`<div style=${styleMap(styles)}>Hello, ${destination}!</div>`
console.log({body})
render(body, document.body);
