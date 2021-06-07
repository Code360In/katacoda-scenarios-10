Check out this function:

```
const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>` 
enclose('li', 'Spam')
```{{execute}}

Now suppose we have many items:

```
const items = ['Eggs', 'Spam', 'Hash browns', ' ', 'Salsa']
items.map(i =>  enclose('li', i))

```{{execute}}

Actually, we should remove blank items:

```
items.filter(i => i.trim() !== '')
  .map(i => enclose('li', i))
```{{execute}}

Now put everything in an `ul` element:

```
enclose('ul',
  items.filter(i => i.trim() !== '')
    .map(i => enclose('li', i))
    .join(''))
```{{execute}} 

No loops! We just say what we want:

* Throw away blanks
* Enclose each item in `li`
* Join the items
* Enclose the whole thing in `ul`

That is the power of functional thinking. Your code shows the "what", not the "how". 

Check out the example in the browser tab! Then see in the editor how it was produced. The document in `index.html` is empty. `index.js` builds the list dynamically.

But, as you can see, list items produced by an evil opponent can interfere with the generated HTML. Fix this problem by calling the `sanitize` function on each item. Of course without a loop.

Refresh the browser so see your change.
