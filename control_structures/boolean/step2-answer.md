It seems reasonable that `x` or `y` must be 42 in order for `x || y` to be 42. Experimenting in Node.js confirms this:

```42 || 'Hello'```{{execute}}

```false || 42```{{execute}}

In fact, if `x` is 42, the result is always 42, no matter what `y` is.

However, if `y` is 42, there are only six possible values for `x`:

```false || 42```{{execute}}

```0 || 42```{{execute}}

```null || 42```{{execute}}

```undefined || 42```{{execute}}

```'' || 42```{{execute}}

```NaN || 42```{{execute}}

These are the "falsish" values that are automatically converted to `false`. The next section sheds more light on this bizarre behavior. 
