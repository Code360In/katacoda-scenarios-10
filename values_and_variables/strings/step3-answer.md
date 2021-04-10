In the browser dev console (Ctrl-Alt-J or Option-Command-J), look at the value of `body` that holds the output of the `html` tagged template literal. 

It is *not* a string but a data structure that the `render` function uses.

The details are not important. The take away is this: Template tags can carry out complex parsing and produce arbitrary content. 

