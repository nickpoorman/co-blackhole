# co-blackhole

Sends non-filtered errors to a blackhole.

[![build status](https://secure.travis-ci.org/nickpoorman/co-blackhole.png)](http://travis-ci.org/nickpoorman/co-blackhole)

# usage
## blackhole(fn, regex)

Supply a generator function `fn`, and an optional `regex` used to ignore errors. If no `regex` is passed, all errors will be ignored.

# example

```
var blackhole = require('co-blackhole');
var co = require('co');

var VALID_ERROR = /Failure/;

var job = function *() {
  console.log('Doing something...');
  throw new Error('Failure!!!');
};

co(function *(){
  yield blackhole(job, VALID_ERROR);
  console.log('Success!');
})();
```


# License

(The MIT License)

Copyright (c) 2014 Nick Poorman <mail@nickpoorman.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
