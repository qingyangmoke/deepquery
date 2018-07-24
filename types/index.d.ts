/// <reference types="node" />
/// <reference path="./types/chalk.d.ts" />
/// <reference path="./types/copy.d.ts" />
/// <reference path="./types/test.d.ts" />

declare interface PackageJson {
	name: String;
	version: String;
	author: String;
	description: String;
	keywords: Array<String>,
	repository: {
		type?: String
		url?: String
	},
	main: String,
	scripts: Object,
	license: String,
	devDependencies: Object,
	bugs: {
		url: String
	},
	homepage: String
}

declare module '*.json' {
	const jsonObject: PackageJson | Object | any;
	export = jsonObject;
}
