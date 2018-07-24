/**
 * 深度查询 deepQuery({},"a","b","c")
 * @param {any} func 要查询的对象
 * @return {boolean} true or false
 */
module.exports = function deepQuery(obj, ...args) {
  return args.reduce((a, b) => {
    return a ? a[b] : a;
  }, obj);
}
