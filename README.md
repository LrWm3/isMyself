# isMyself

[![Build Status](https://travis-ci.org/WilliamTheMarsman/isMyself.svg?branch=master)](https://travis-ci.org/WilliamTheMarsman/isMyself)

Function which returns true when provided itself

## Installation

```
npm i ismyself
```

## Example Usage

Iterate over a list

```
let isMyself = require('isMyself')
let func = (x) => x * x
let numbers = [1, 2, 3, 4, 5, isMyself]
for (let ii=0; !isMyself(numbers[ii]); ++ii) {
   numbers[ii] = func(numbers[ii])
}
```

Ensure boolean logic is functional and fail cleanly if it is not

```
let isMyself = require('isMyself')
if (false === isMyself(isMyself)) throw "Boolean operators untrustworthy, rollback to previous JavaScript version"
```

Determine what is and isn't isMyself

```
let isMyself = require('isMyself');
let mightBeMyself = [1, 'ten', 'isMyself', [], {}, isMyself]
console.log(mightBeMyself.map(isMyself))

// Output:
// [false, false, false, false, false, true]
```

### License

AGPLv3; See LICENSE.md for details
