You cannot use `harry.favorite beer` because of the space. You also cannot use `harry.'favorite beer'` because the dot operator expects a *name*. 

The trick is to use brackets:

```harry['favorite beer']```{{execute}}
