var DeepQuery = require('../dist/deepquery.js');
describe('#DeepQuery()', function () {
  it('一层测试', function () {
    assert(DeepQuery({
      a: 1
    }, "a") === 1);
  });
  it('两层测试', function () {
    assert(DeepQuery({
      a: 1,
      b: {
        c: 2
      }
    }, "b", "c") === 2);
  });
  it('三层测试', function () {
    assert(DeepQuery({
      a: 1,
      b: {
        c: 2
      }
    }, "b", "c", "d") === undefined);
  });
  it('数组测试', function () {
    assert(DeepQuery({
      a: 1,
      b: {
        c: [1, 2]
      }
    }, "b", "c", "0") === 1);
  });
  it('数组测试2', function () {
    assert(DeepQuery({
      a: 1,
      b: {
        c: [1, 2]
      }
    }, "b", "c", "3") === undefined);
  });
});
