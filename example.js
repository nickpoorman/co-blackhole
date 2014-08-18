var blackhole = require('./');
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
