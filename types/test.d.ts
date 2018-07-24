
declare function before(func: Function): void;
declare function after(func: Function): void;
declare function describe(name: string, func: Function): void;
declare function it(name: string, func: Function): void;

declare function assert(name: any): void;
declare namespace assert {
	function notEqual(name: any): void;
}