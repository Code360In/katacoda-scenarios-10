In the browser dev console (Ctrl/⌘ Alt J), look at the value of `body` that holds the output of the `html` tagged template literal. 

It is *not* a string but a data structure that the `render` function uses.

You can find more the details in the lit-html documentation, but that's not why I am showing you this. The take away is this: Tmplate tags can carry out complex parsing and produce arbitrary content. 

