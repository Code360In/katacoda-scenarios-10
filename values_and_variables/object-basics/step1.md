Let's get started by firing up Node.js. Click on the black blocks below to start `node` and load the file for checking your work.

`node --use-strict`{{execute}}

`const steps = require('./steps.js')`{{execute}}

A JavaScript object is nothing like an object in an OO language such as C++ or Java. It is simply a set of properties, each with a name and value:

```const harry = { name: 'Harry', age: 42 }```{{execute}}

There is no encapsulation. Anyone can change the property values. Go ahead, make Harry younger. Use the dot notation `harry.age` to access the `age` property value.

Now check your work:

`steps.test1(harry)`{{execute}}

You can add new properties. Go ahead and give Harry a `salary` property.

Now check your work:

`steps.test2(harry)`{{execute}}

You can delete a property with the `delete` operator:

```
delete harry.age
harry
```{{execute}}

What happens if you try to access a non-existent property? Try it out!

Finally, property names can be computed from arbitrary expressions. Then you use brackets `[]`, not a dot, to access the property:

```
const field = 'NAME'
harry[field.toLowerCase()]
```{{execute}}








