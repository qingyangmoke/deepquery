/*!
 * deepquery
 * Description: 深度拷贝
 * Author: 清扬陌客
 * Version: v0.0.1
 * Github: https://github.com/qingyangmoke/deepquery.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DeepQuery"] = factory();
	else
		root["DeepQuery"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * 深度查询 deepQuery({},"a","props","c")
	 * @param {any} func 要查询的对象
	 * @return {boolean} true or false
	 */
	module.exports = function deepQuery(target) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  return args.reduce(function (obj, props) {
	    if (obj && props) {
	      if (/^\S*\[\d+\]$/.test(props)) {
	        var key = props.substring(0, props.indexOf('['));
	        var index = props.substring(props.indexOf('[') + 1, props.length - 1);
	        var value = obj[key];
	        if (Object.prototype.toString.call(value) === '[object Array]' && /^\d+$/.test(index)) {
	          return value[+index];
	        }
	      }
	      // if()
	      return obj[props];
	    } else {
	      return obj;
	    }
	  }, target);
	};

/***/ })
/******/ ])
});
;