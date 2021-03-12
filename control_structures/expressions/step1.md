Let's get started by firing up Node.js. Click on the black block below to execute the command.

`node --use-strict`{{execute}}

An *expression* is made up of literals, variables, operators, and function calls. Every expression has a *value*. 

The Node interpreter computes and displays the values of any expressions that you provide. Click on this one and watch out for the value:

`6 * 7`{{execute}}

A *statement* (assignment, branch, loop, and so on) is executed for its *effect*. Statements don't have values. Click on this statement:

`let number = 6 * 7;`{{execute}}

What happens when you run the statement? Of course, `number` is set to the value of the expression on the right hand side of the `=` operator. That's the effect. And then Node feels compelled to display a value. In this case, `undefined`.

This is an oddity of Node. REPLs (read-evaluate-print loops) of other programming languages don't print anything when you enter a statement. Unless, of course, the statement happens to be a print statement.

Let's try that:

`console.log(6 * 7);`{{execute}}

You observe the *side effect* of the statement, followed by a printout of the value that Node ascribes to it. For statements, you can ignore those values. To see why, try this statement:

`while (number > 10) number--;`{{execute}}

What did Node print? Was it useful??? Generally, you can safely ignore what Node displays for statements.

In many languages it is simple to distinguish expressions and statements. Statements always end in semicolons. In JavaScript, it's not as simple, as you will see in the next step. 






