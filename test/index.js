var should = require('should');
var blackhole = require('..');
var co = require('co');

var VALID_ERROR = /Failure/;

describe('blackhole', function() {

  it('should end successfully with no filter', function(done) {
    var job = function * () {
      throw new Error('Failure!!!');
    };

    co(function * () {
      yield blackhole(job);
      done();
    })();
  });

  it('should end successfully with filter', function(done) {
    var job = function * () {
      throw new Error('Failure!!!');
    };

    co(function * () {
      yield blackhole(job, VALID_ERROR);
      done();
    })();
  });

  it('should throw the error', function(done) {
    var job = function * () {
      throw new Error('Failure!!!');
    };

    co(function * () {
      try {
        yield blackhole(job, /invalid error/);
      } catch (err) {
        should.exist(err);
      }
      done();
    })();
  });

})
