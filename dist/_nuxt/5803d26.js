(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{841:function(t,e,r){"use strict";r.r(e);r(2);var n=r(8);r(51),r(31),r(9),r(25),r(42),r(32),r(27),r(11),r(33),r(37),r(21),r(12),r(13),r(29),r(20),r(30);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var y={props:{ids:{type:Array,required:!0},limit:{type:Number,default:null}},computed:{categories:function(){var t={},e=this.ids;if(!this.ids||this.ids.length<=0)return t;this.limit&&(e=this.ids.slice(0,this.limit));var r,n=l(e);try{for(n.s();!(r=n.n()).done;){var o=r.value,f=this.$store.state.categories.items[o];t[o]=c({id:o},f)}}catch(t){n.e(t)}finally{n.f()}return t}}},d=r(5),component=Object(d.a)(y,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"categories"},[t._t("default",null,{categories:t.categories})],2)}),[],!1,null,null,null);e.default=component.exports}}]);