You saw that Node prints the value of any expression. You type `6 * 7`, and Node prints 42. 

For the statements 

`let number = 6 * 7;` 
`console.log(6 * 7);`

Node prints `undefined`. But for

`while (number > 10) number--;`

Node prints 11. It is not important to know why.

Ok, why? Because that's the value ascribed to the last loop iteration. The value of the last statement `number--;` is 11, the value of `number` before it is decremented to 10. As you can see, this is not particularly useful. 
