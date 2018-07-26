/*!
 * deepquery
 * Description: 深度拷贝
 * Author: 清扬陌客
 * Version: v0.0.1
 * Github: https://github.com/qingyangmoke/deepquery.git
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DeepQuery=t():e.DeepQuery=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t){"use strict";e.exports=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.reduce(function(e,t){if(e&&t){if(/^\S*\[\d+\]$/.test(t)){var r=t.substring(0,t.indexOf("[")),n=t.substring(t.indexOf("[")+1,t.length-1),o=e[r];if("[object Array]"===Object.prototype.toString.call(o)&&/^\d+$/.test(n))return o[+n]}return e[t]}return e},e)}}])});