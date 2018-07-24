var DeepQuery = require('../dist/deepquery.js');
describe('#DeepQuery()', function () {
  it('DeepQuery({a:1},"a") should return 1', function () {
    assert(DeepQuery({
      a: 1
    }, "a") === 1);
  });
  it('DeepQuery({a:1,b:{c:2}},"b","c") should return 2', function () {
    assert(DeepQuery({
      a: 1,
      b: {
        c: 2
      }
    }, "b", "c") === 2);
  });
});
