/**
 * 深度查询 deepQuery({},"a","props","c")
 * @param {any} func 要查询的对象
 * @return {boolean} true or false
 */
module.exports = function deepQuery(target, ...args) {
  return args.reduce((obj, props) => (obj ? obj[props] : obj), target);
};

module.exports.default = module.exports;
