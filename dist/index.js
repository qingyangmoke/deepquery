/*!
 * deepquery
 * Description: 深度拷贝
 * Author: 清扬陌客
 * Version: v0.0.4
 * Github: https://github.com/qingyangmoke/deepquery.git
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.deepQuery=t():e.deepQuery=t()}(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t){"use strict";e.exports=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return r.reduce(function(e,t){return e?e[t]:e},e)},e.exports.default=e.exports}])});