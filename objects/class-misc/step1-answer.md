You can make a static getter:

`static get OVERDRAFT_FEE() { return 30 }`{{copy}}

Try it out. Replace the static field with the getter method. Run the code:

`node Account.js`{{execute}}

The access `Account.OVERDRAFT_FEE` still works.

If you try to set the field, you will get an error. Try it out: Copy this into your code and run again.

`Account.OVERDRAFT_FEE = 0`{{copy}}

`node Account.js`{{execute}}


