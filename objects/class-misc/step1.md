In the editor to the right, click on Account.js. You see a static method

```
static percentOf(amount, rate) { return amount * rate / 100 }
```

This method does not act on account instances. It just calculates a percentage. 

See how the method is called in the `addInterest` method. You use the class name `Account` as a prefix instead of `this`. 

Static fields are a "stage 3" feature as I write this scenario. Here is one:

```
static OVERDRAFT_FEE = 30
```

See how the field is used in the `withdraw` method, again with the class prefix: `Account.OVERDRAFT_FEE`. 

Run the code and confirm the calculations for the interest and the overdraft fee:

`node Account.js`{{execute}}

Can you assign to the `Account.OVERDRAFT_FEE` field outside the class? Try it out!

How can you fix this?
