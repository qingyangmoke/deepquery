declare module 'deepquery' {
  /**
  * 深度查询 deepQuery({},"a","b","c")
  * @param {any} obj - 要查询的对象
  * @example
  * deepQuery({ a: { b: { c: 1 } } },"a","b","c");
  * @return {any} 查询到的对象 如果查询不到则返回 undefined
  */
  function deepQuery(obj, ...args);  
  export = deepQuery;
}
