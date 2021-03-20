Here is the `get` method:

```
get balance() { return this._balance }
```{{copy}}

For the `set` method, we need to do some error checking:

```
set balance(amount) {
  if (amount >= 0) {
    this._balance = amount
  }
}
```{{copy}}
