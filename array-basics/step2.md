You obtain the length of a JavaScript array as `a.length`. Unlike in Java, the length of an array is not fixed. If you add elements beyond the end, (simply by assigning to them), the length increases.

Use this fact to produce an array `b` with length 1000. 

Run this code to check your work.

`steps.test2(b)`{{execute}}

Note that an array can have "holes" or missing index keys. The length is always one more than the highest index key (in this case, 999).

