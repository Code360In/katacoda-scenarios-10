In the call `average(numbers)`, the function is called with a single argument: an array of numbers. 

The `rest` parameter is now an array with a single element--the array of the numbers. 

The `average` function then computes 0 + that array, which is a useless string. Finally, the division of that string by 1 yields a `NaN`. 

The details aren't important. The real issue is how we can pass the values in the array. You need to unpack them with the *spread operator*:

`average(...numbers)`

If you retry with the `...` in front of `numbers`, you will get the correct result. Do it now:

`node --use-strict average2.js`{{execute}}
