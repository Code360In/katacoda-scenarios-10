By trial and error, you find out that:

`Number.MAX_SAFE_INTEGER + 1`{{execute}}

is one larger than

`Number.MAX_SAFE_INTEGER`{{execute}}

but the same as

`Number.MAX_SAFE_INTEGER + 2`{{execute}}

That's the smallest such value, but we are supposed to find the second-smallest one. Keep on trying

`Number.MAX_SAFE_INTEGER + 3`{{execute}}

That's actually correct.

But

`Number.MAX_SAFE_INTEGER + 4`{{execute}}

is again wrong, so it's our answer.

You then declare the variable as

`let noLongerSafe = Number.MAX_SAFE_INTEGER + 4`{{execute}}

or, if you prefer

`const noLongerSafe = Number.MAX_SAFE_INTEGER + 4`{{execute}}

