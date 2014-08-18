module.exports = function * blackhole(fn, ignore) {
  var ret;
  try {
    ret = yield fn;
  } catch (err) {
    if (ignore && !ignore.test(err)) {
      throw err;
    }
  }
  return ret;
}
