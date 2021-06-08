It used to be troublesome to define classes, constructors, and methods in JavaScript. Nowadays, it is simple. You use the `class` syntax and classes look pretty much like in any other object-oriented programming language.

You see an example in the `Employee.js` file. Check it out with the text editor!

To run it, first exit the Node REPL:

`exit`{{execute}}

Then run

`node Employee.js`{{execute}}

Look carefully at the constructor and the method. 

Note that you *must* use `this` to access the object's fields in a constructor or method.

In a class declaration, you do not use commas.

In JavaScript, a class can only have one constructor. It is, not unreasonably, named `constructor`. 

The `class` syntax creates a constructor function `Employee` that is very similar to the one of the preceding step. Its body is the code inside `constructor`. Printing `typeof Employee` shows that this is function. 

The other service that a `class` provides is the setting of the methods. They are placed in a *prototype* object to which each class instance is linked. The details are not important for working with classes. The last line of the `Employee.js` file demonstrates that all objects share the same methods. 

Now it's your turn.  Complete the `Account.js` file so that the code at the bottom can execute. What property does each object need?What methods are invoked? What constructor is required? 

Run your code when you are done:

`node Account.js`{{execute}}

As an aside, we don't add the `--use-strict` flag here because code inside classes is always in strict mode. 
