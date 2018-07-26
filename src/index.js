/**
 * 深度查询 deepQuery({},"a","props","c")
 * @param {any} func 要查询的对象
 * @return {boolean} true or false
 */
module.exports = function deepQuery(target, ...args) {
  return args.reduce((obj, props) => {
    if (obj && props) {
      // if (/^\S*\[\d+\]$/.test(props)) {
      //   const key = props.substring(0, props.indexOf('['));
      //   const index = props.substring(props.indexOf('[') + 1, props.length - 1);
      //   const value = obj[key];
      //   if (Object.prototype.toString.call(value) === '[object Array]' && /^\d+$/.test(index)) {
      //     return value[+index];
      //   }
      // }
      return obj[props];
    } else {
      return obj;
    }
  }, target);
}
