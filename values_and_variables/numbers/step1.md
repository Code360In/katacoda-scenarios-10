Let's get started by firing up Node.js. Click on the black block below to execute the command.

`node --use-strict`{{execute}}

`const steps = require('./steps.js')`{{execute}}

Now on with the program. 

All numbers in JavaScript are floating-point numbers (like `double` in Java or C++). Yikes--no integers!

That sounds bad. Everyone knows that floating-point number computations are prone to roundoff. Try the following:

`0.1 + 0.2`{{execute}}

Scary, huh? Where did that extra 0.0000000000000004 come from? In the processor, the fractional parts are in binary (0.5, 0.25, 0.125, etc.) instead of decimal (0.1, 0.01, 0.001, etc.) There is no exact binary representation of 1/10 in binary, just like there is no exact representation of 1/3 in decimal. So, roundoff is unavoidable. In JavaScript, it's no different from Java or C++.

But with integers, there is actually not a problem. Try:

`10 + 20`{{execute}}

No roundoff. There will never be a roundoff as long as you stay in the "safe" zone between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`. 

Check out how large these numbers are:

```
Number.MIN_SAFE_INTEGER
Number.MAX_SAFE_INTEGER
```{{execute}}

That is a 54-bit range, quite a bit larger than your typical 32-bit integers.

What happens when you get out of the safe range? Declare a variable `noLongerSafe` that holds `Number.MAX_SAFE_INTEGER` + a small integer. Try out a few, then pick the *second-smallest* integer where the computation is mathematically incorrect.

When you are done, check your result. Click on the black block below:

`steps.test1(noLongerSafe)`{{execute}}







