declare module 'copy' {
  // declare interface ICopy {
  // 	(patterns: String | Object | Array<any>, dir: String, options: Object | Function, cb?: Function): void;
  // }
  declare type CopyCallback = (patterns: String | Object | Array<any>, dir: String, options: Object | Function, cb?: Function) => void;
  const copy: CopyCallback;
  export = copy;
}