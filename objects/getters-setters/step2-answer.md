1. Line 12 calls the `get fullName` method. Line 13 calls the `set fullName` method.
2. When `fred.fullName` is on the left hand side of an assignment, the `set` method is called. When `fred.fullName` occurs anywhere else (on the right hand side of an assignment, or as an operand in an expression or argument to a function call), the `get` method is called. 
3. If you remove the `set`, you have to change the assignment to a method call ```
fred.fullName('Astaire, Fred')
```{{copy}}


