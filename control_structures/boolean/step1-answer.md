It is easy enough to find out:

`harry === harry2`{{execute}} 

This is `true` because `harry` and `harry2` refer to the exact same object in memory.

`harry === harry3`{{execute}}

This is `false` because `harry3` is a brand-new, different object. It does not matter if it has the same content.

If you wanted to test whether two objects have the same content, you would have to check that they have the same property names and values:

`harry.name === harry3.name && harry.age === harry3.age`{{execute}}
