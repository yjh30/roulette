!function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=e(1),o=r(i),u=e(8),a=r(u);!function(){function t(n){(0,o.default)(this,t),this.init(n)}(0,a.default)(t,[{key:"init",value:function(t){var n=this;this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.img={},this.rafId=null,this.lastMotionDegrees=0,this.starting=!1,this.callback=t.callback||function(){};var e=function(){n.imgLoaded=!0,n.saveImgSize(t.img),n.canvas.width=n.img.width,n.canvas.height=n.img.height,n.drawImg(0),t.img.parentNode.insetBefore(n.canvas,t.img),t.img.parentNode.removeChild(t.img)};this.img.complete?e():t.img.onload=e}},{key:"saveImgSize",value:function(t){var n=window.getComputedStyle(t);this.img.width=parseInt(n.getPropertyValue("width"),10),this.img.height=parseInt(n.getPropertyValue("height"),10),this.img.naturalWidth=t.naturalWidth,this.img.naturalHeight=t.naturalHeight}},{key:"drawImg",value:function(t){var n=Math.PI/180*t;this.clearRect(0,0,this.img.width,this.img.height),this.context.setTransform(1,0,0,1,0,0),this.context.transform(Math.cos(n),Math.sin(n),-Math.sin(n),Math.cos(n),this.img.width/2,this.img.height/2),this.context.drawImage(this.img,0,0,this.img.naturalWidth,this.img.naturalHeight,-this.img.width/2,-this.img.height/2,this.img.width,this.img.height)}},{key:"run",value:function(t,n){var e=this;if(this.imgLoaded&&!this.starting){this.starting=!0,t=t%360+1080;var r=t+this.lastMotionDegrees;this.lastMotionDegrees=t/360;var i=0,o=Date.now(),u=function t(){var u=Date.now()-o,a=u/n-1;if(i=r*(1-a*a*a*a),a>=0)return e.drawImg(i%360),e.starting=!1,void e.callback(e.lastMotionDegrees,r);e.drawImg(i),e.rafId=window.requestAnimationFrame(t)};this.rafId=window.requestAnimationFrame(u)}}},{key:"stop",value:function(){this.imgLoaded&&window.cancelAnimationFrame(this.rafId)}}])}()},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){t.exports=!e(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(12),i=e(17),o=e(19),u=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){"use strict";n.__esModule=!0;var r=e(9),i=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){t.exports={default:e(10),__esModule:!0}},function(t,n,e){e(20);var r=e(4).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(11);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(3),i=e(6).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(6),i=e(4),o=e(13),u=e(16),a=function(t,n,e){var c,f,s,l=t&a.F,h=t&a.G,p=t&a.S,d=t&a.P,g=t&a.B,m=t&a.W,v=h?i:i[n]||(i[n]={}),w=v.prototype,y=h?r:p?r[n]:(r[n]||{}).prototype;h&&(e=n);for(c in e)(f=!l&&y&&void 0!==y[c])&&c in v||(s=f?y[c]:e[c],v[c]=h&&"function"!=typeof y[c]?e[c]:g&&f?o(s,r):m&&y[c]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):d&&"function"==typeof s?o(Function.call,s):s,d&&((v.virtual||(v.virtual={}))[c]=s,t&a.R&&w&&!w[c]&&u(w,c,s)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){var r=e(7),i=e(18);t.exports=e(2)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(2)&&!e(5)(function(){return 7!=Object.defineProperty(e(14)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(15);r(r.S+r.F*!e(2),"Object",{defineProperty:e(7).f})}]);