
# uid

  Generate unique ids of any length.
  
  Internally this implementation uses `Math.random()` to remain small, fast and dependency free. However, `Math.random()` is not actually all that random so if you need a better random number generator, I recommend [uid2](https://github.com/coreh/uid2).

## Installation

### Using node.js:

    $ npm install uid

## Examples

Pass a `number` argument to define the length of the output uid.

```js
 uid(10); // -> 'hbswt489ts'
 uid(); // -> 'rhvtfnt' Default length is 7
```

## License

  MIT
