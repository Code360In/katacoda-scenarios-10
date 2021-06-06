It is easy enough to find out:

```
let arr = [1, 2, 3, , , , 'many']
for (const key of arr) 
   console.log(key)
```{{execute}}


As you can see, the holes are skipped. The array object only has keys `'0'`, `'1'`, `'2'`, and `'6'`. There are no other keys. If you evaluate `arr[3]`, the `undefined` result does *not* indicate that an `undefined` is stored in the array. Arrays always report `undefined` for nonexistent indexes. For example, `arr['name']` is also `undefined`, without causing an exception.
