It is easy enough to find out:

```
for (const value of [1, 2, 3, , , , 'many']) 
   console.log(value)
```{{execute}}

As you can see, each of the holes becomes `undefined`. 

The gaps are not skipped so that the index values are correct:

```
let index = 0
for (const value of [1, 2, 3, , , , 'many']) {
   console.log(`${value} at index ${index}`)
   index++
}
```{{execute}}
