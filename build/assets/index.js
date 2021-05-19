
    (function (global) {
      try {
        var ls = global.localStorage
        var scrollPos = ls.getItem('slater-scroll')

        if (scrollPos) global.scrollTo(0, scrollPos)

        const socketio = document.createElement('script')
        socketio.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.slim.js'
        socketio.onload = function init () {
          var disconnected = false
          var socket = io('https://localhost:4000', {
            reconnectionAttempts: 1
          })
          socket.on('connect', function connect () {
            console.log('slater connected')
          })
          socket.on('refresh', function refresh () {
            ls.setItem('slater-scroll', global.scrollY)
            global.location.reload()
          })
          socket.on('disconnect', function disconnect () {
            disconnected = true
          })
          socket.on('reconnect_failed', function reconnectFailed (e) {
            if (disconnected) return
            console.group("slater - %cconnection to server at 4000 failed", "color: red")
            console.info("try visiting https://localhost:4000 and creating a security exception")
            console.log("for more info see https://github.com/the-couch/slater#live-reloading--https")
            console.groupEnd()
          })
        }
        document.head.appendChild(socketio)
      } catch (e) {}
    })(this);
  
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@arr/every/index.js":
/*!******************************************!*\
  !*** ./node_modules/@arr/every/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (arr, cb) {
	var i=0, len=arr.length;

	for (; i < len; i++) {
		if (!cb(arr[i], i, arr)) {
			return false;
		}
	}

	return true;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/lazim/dist/lazim.es.js":
/*!*********************************************!*\
  !*** ./node_modules/lazim/dist/lazim.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vsbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vsbl */ "./node_modules/vsbl/dist/vsbl.es.js");
/* harmony default export */ __webpack_exports__["default"] = (function(e){return void 0===e&&(e="data-src"),function(){for(var o=document.querySelectorAll("["+e+"]"),i=function(i){var n=o[i],a="IMG"===n.nodeName?n:n.getElementsByTagName("img")[0],r=n.getAttribute(e);a.onload=function(){n.classList.add("is-loaded")},n.removeAttribute(e),Object(vsbl__WEBPACK_IMPORTED_MODULE_0__["default"])(n)(function(){n.classList.add("is-visible"),a.src=r}).update()},n=0;n<o.length;n++)i(n)}});
//# sourceMappingURL=lazim.es.js.map


/***/ }),

/***/ "./node_modules/matchit/lib/matchit.mjs":
/*!**********************************************!*\
  !*** ./node_modules/matchit/lib/matchit.mjs ***!
  \**********************************************/
/*! exports provided: match, parse, exec */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exec", function() { return exec; });
/* harmony import */ var _arr_every__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @arr/every */ "./node_modules/@arr/every/index.js");




const SEP = '/';
// Types ~> static, param, any, optional
const STYPE=0, PTYPE=1, ATYPE=2, OTYPE=3;
// Char Codes ~> / : *
const SLASH=47, COLON=58, ASTER=42, QMARK=63;

function strip(str) {
	if (str === SEP) return str;
	(str.charCodeAt(0) === SLASH) && (str=str.substring(1));
	var len = str.length - 1;
	return str.charCodeAt(len) === SLASH ? str.substring(0, len) : str;
}

function split(str) {
	return (str=strip(str)) === SEP ? [SEP] : str.split(SEP);
}

function isMatch(arr, obj, idx) {
	idx = arr[idx];
	return (obj.val === idx && obj.type === STYPE) || (idx === SEP ? obj.type > PTYPE : obj.type !== STYPE && (idx || '').endsWith(obj.end));
}

function match(str, all) {
	var i=0, tmp, segs=split(str), len=segs.length, l;
	var fn = isMatch.bind(isMatch, segs);

	for (; i < all.length; i++) {
		tmp = all[i];
		if ((l=tmp.length) === len || (l < len && tmp[l-1].type === ATYPE) || (l > len && tmp[l-1].type === OTYPE)) {
			if (_arr_every__WEBPACK_IMPORTED_MODULE_0__(tmp, fn)) return tmp;
		}
	}

	return [];
}

function parse(str) {
	if (str === SEP) {
		return [{ old:str, type:STYPE, val:str, end:'' }];
	}

	var c, x, t, sfx, nxt=strip(str), i=-1, j=0, len=nxt.length, out=[];

	while (++i < len) {
		c = nxt.charCodeAt(i);

		if (c === COLON) {
			j = i + 1; // begining of param
			t = PTYPE; // set type
			x = 0; // reset mark
			sfx = '';

			while (i < len && nxt.charCodeAt(i) !== SLASH) {
				c = nxt.charCodeAt(i);
				if (c === QMARK) {
					x=i; t=OTYPE;
				} else if (c === 46 && sfx.length === 0) {
					sfx = nxt.substring(x=i);
				}
				i++; // move on
			}

			out.push({
				old: str,
				type: t,
				val: nxt.substring(j, x||i),
				end: sfx
			});

			// shorten string & update pointers
			nxt=nxt.substring(i); len-=i; i=0;

			continue; // loop
		} else if (c === ASTER) {
			out.push({
				old: str,
				type: ATYPE,
				val: nxt.substring(i),
				end: ''
			});
			continue; // loop
		} else {
			j = i;
			while (i < len && nxt.charCodeAt(i) !== SLASH) {
				++i; // skip to next slash
			}
			out.push({
				old: str,
				type: STYPE,
				val: nxt.substring(j, i),
				end: ''
			});
			// shorten string & update pointers
			nxt=nxt.substring(i); len-=i; i=j=0;
		}
	}

	return out;
}

function exec(str, arr) {
	var i=0, x, y, segs=split(str), out={};
	for (; i < arr.length; i++) {
		x=segs[i]; y=arr[i];
		if (x === SEP) continue;
		if (x !== void 0 && y.type | 2 === OTYPE) {
			out[ y.val ] = x.replace(y.end, '');
		}
	}
	return out;
}


/***/ }),

/***/ "./node_modules/operator/dist/operator.es.js":
/*!***************************************************!*\
  !*** ./node_modules/operator/dist/operator.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var matchit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matchit */ "./node_modules/matchit/lib/matchit.mjs");
var r=new Map;function a(n){return n.replace(window.location.origin,"")}function o(n,r){var a="",o="",i=n.split(/#|\?/),c=i[0],u=i.slice(1);c=(c=c.replace(/\/$/g,""))||"/";for(var l=0;l<u.length;l++){var f=n.split(u[l])[0];"?"===f[f.length-1]&&(o=u[l]),"#"===f[f.length-1]&&(a=u[l])}var h=Object(matchit__WEBPACK_IMPORTED_MODULE_0__["match"])(c,r.map(function(n){return n.matcher})),s=r.filter(function(n){return n.path===h[0].old})[0];return h[0]?Object.assign({},s,{params:Object(matchit__WEBPACK_IMPORTED_MODULE_0__["exec"])(c,h),hash:a,search:o,pathname:c,location:n}):null}/* harmony default export */ __webpack_exports__["default"] = (function(t,e){void 0===e&&(e=["*"]);var i,c=document.querySelector(t),u=[],l={};e=e.concat(e.indexOf("*")<0?"*":[]).reduce(function(n,t){return"function"==typeof t?(u.push(t),n):n.concat(t)},[]).map(function(t){return t.path?Object.assign({},t,{matcher:Object(matchit__WEBPACK_IMPORTED_MODULE_0__["parse"])(t.path)}):{path:t,matcher:Object(matchit__WEBPACK_IMPORTED_MODULE_0__["parse"])(t)}});var f=o(a(window.location.href),e),h=Object.assign({previousDocument:null},f);function s(n){return l[n]?l[n].map(function(n){return n(h)}):[]}function p(n,t,e,r){h.previousDocument=n.cloneNode(!0),Promise.all(u.concat(e.handler||[]).map(function(n){return n(h)})).then(function(){requestAnimationFrame(function(){c.innerHTML=t,s("after"),e.hash&&s("hash")})})}function d(n,e,a){if(!e)return window.location.href=n;fetch(n,{credentials:"include"}).then(function(n){return n.text()}).then(function(o){var i=(new window.DOMParser).parseFromString(o,"text/html"),c=[i,i.querySelector(t).innerHTML];r.set(n,c),a&&a(c[0],c[1],e)})}function m(n,t,e){i=function(){var e=r.get(n);e&&!1!==t.cache?p(e[0],e[1],t):d(n,t,p)},Object.assign(h,t),Promise.all(s("before")).then(i)}function v(n){var t=a(n);return[t,o(t,e)]}return document.body.addEventListener("click",function(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.defaultPrevented)){for(var t=n.target;t&&(!t.href||"A"!==t.nodeName);)t=t.parentNode;if(!t)return n;var e=v(t.href),r=e[0],a=e[1];return a.ignore?n:h.pathname===a.pathname&&a.hash?(n.preventDefault(),Object.assign(h,a),s("hash"),n):window.location.origin!==t.origin||t.hasAttribute("download")||"_blank"===t.target||/^(?:mailto|tel):/.test(t.href)||t.classList.contains("no-ajax")?n:(n.preventDefault(),h.location!==r&&m(r,a),s("navigate"),!1)}}),window.addEventListener("popstate",function(n){if(n.target.location.pathname!==h.pathname)return m.apply(void 0,v(n.target.location.href).concat([!0])),!1}),{get state(){return h},go:function(n){i=null,m.apply(void 0,v(n).concat([!1]))},load:function(n,t){return d.apply(void 0,v(n).concat([t]))},on:function(n,t){return l[n]=l[n]?l[n].concat(t):[t],function(){return l[n].slice(l[n].indexOf(t),1)}}}});
//# sourceMappingURL=operator.es.js.map


/***/ }),

/***/ "./node_modules/picoapp/dist/picoapp.es.js":
/*!*************************************************!*\
  !*** ./node_modules/picoapp/dist/picoapp.es.js ***!
  \*************************************************/
/*! exports provided: component, picoapp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "picoapp", function() { return c; });
var n=function(n){if("object"!=typeof(t=n)||Array.isArray(t))throw"state should be an object";var t},t=function(n,t,r,e){return(o=n,o.reduce(function(n,t,r){return n.indexOf(t)>-1?n:n.concat(t)},[])).reduce(function(n,r){return n.concat(t[r]||[])},[]).map(function(n){return n(r,e)});var o};function r(r){void 0===r&&(r={});var e={};return{getState:function(){return Object.assign({},r)},hydrate:function(o){return n(o),Object.assign(r,o),function(){var n=["*"].concat(Object.keys(o));t(n,e,r)}},on:function(n,t){return(n=[].concat(n)).map(function(n){return e[n]=(e[n]||[]).concat(t)}),function(){return n.map(function(n){return e[n].splice(e[n].indexOf(t),1)})}},emit:function(o,u,c){var i=("*"===o?[]:["*"]).concat(o);(u="function"==typeof u?u(r):u)&&(n(u),Object.assign(r,u),i=i.concat(Object.keys(u))),t(i,e,r,c)}}}r();var e=function(n){return"object"==typeof n&&!Array.isArray(n)},o=function(n){return"function"==typeof n};function u(n){return function(t,r){var e=[];return{subs:e,unmount:n(t,Object.assign({},r,{on:function(n,t){var o=r.on(n,t);return e.push(o),o}})),node:t}}}function c(n,t,u){void 0===n&&(n={}),void 0===t&&(t={}),void 0===u&&(u=[]);var c=r(t),i=[];return{on:c.on,emit:c.emit,getState:function(){return c.getState()},add:function(t){if(!e(t))throw"components should be an object";Object.assign(n,t)},use:function(n){if(!o(n))throw"plugins should be a function";u.push(n)},hydrate:function(n){return c.hydrate(n)},mount:function(t){void 0===t&&(t="data-component"),t=[].concat(t);for(var r=0;r<t.length;r++){for(var a=t[r],f=[].slice.call(document.querySelectorAll("["+a+"]")),s=function(){for(var t=f.pop(),r=t.getAttribute(a).split(/\s/),s=0;s<r.length;s++){var v=n[r[s]];if(v){t.removeAttribute(a);try{var d=u.reduce(function(n,r){var o=r(t,c);return e(o)?Object.assign(n,o):n},{}),m=v(t,Object.assign({},d,c));o(m.unmount)&&i.push(m)}catch(n){console.error(n),c.emit("error",{error:n}),c.hydrate({error:void 0})}}}};f.length;)s();c.emit("mount")}},unmount:function(){for(var n=i.length-1;n>-1;n--){var t=i[n],r=t.subs;(0,t.unmount)(t.node),r.map(function(n){return n()}),i.splice(n,1)}c.emit("unmount")}}}
//# sourceMappingURL=picoapp.es.js.map


/***/ }),

/***/ "./node_modules/sliced/index.js":
/*!**************************************!*\
  !*** ./node_modules/sliced/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}



/***/ }),

/***/ "./node_modules/srraf/dist/srraf.es.js":
/*!*********************************************!*\
  !*** ./node_modules/srraf/dist/srraf.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var n,e,i,o,t,r,f,d,p,u=[];function w(n,a){return e=window.pageXOffset,o=window.pageYOffset,r=window.innerHeight,d=window.innerWidth,void 0===i&&(i=e),void 0===t&&(t=o),void 0===p&&(p=d),void 0===f&&(f=r),(a||o!==t||e!==i||r!==f||d!==p)&&(!function(n){for(var w=0;w<u.length;w++)u[w]({x:e,y:o,px:i,py:t,vh:r,pvh:f,vw:d,pvw:p},n)}(n),i=e,t=o,f=r,p=d),requestAnimationFrame(w)}/* harmony default export */ __webpack_exports__["default"] = (function(e){return u.indexOf(e)<0&&u.push(e),n=n||w(performance.now()),{update:function(){return w(performance.now(),!0),this},destroy:function(){u.splice(u.indexOf(e),1)}}});
//# sourceMappingURL=srraf.es.js.map


/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.module.js":
/*!*****************************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.module.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.module.js.map


/***/ }),

/***/ "./node_modules/vsbl/dist/vsbl.es.js":
/*!*******************************************!*\
  !*** ./node_modules/vsbl/dist/vsbl.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var srraf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! srraf */ "./node_modules/srraf/dist/srraf.es.js");
/* harmony default export */ __webpack_exports__["default"] = (function(r,o){return void 0===o&&(o={}),function(e,n){var a=!1,i=parseFloat(r.getAttribute("data-threshold")||o.threshold||0);return Object(srraf__WEBPACK_IMPORTED_MODULE_0__["default"])(function(){for(var t=[],o=arguments.length;o--;)t[o]=arguments[o];var d=t[0],h=d.y,l=d.vh,p=r.getBoundingClientRect(),u=p.top+h,f=i>=.5?i:i*l,v=u+p.height-f>=h&&u+f<=h+l;v&&!a?(a=!0,e&&e.apply(void 0,t)):!v&&a&&(a=!1,n&&n.apply(void 0,t))})}});
//# sourceMappingURL=vsbl.es.js.map


/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _components_slater_welcome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/slater-welcome.js */ "./src/scripts/components/slater-welcome.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/header.js */ "./src/scripts/components/header.js");
/* harmony import */ var _components_product_selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/product-selection.js */ "./src/scripts/components/product-selection.js");
/* harmony import */ var _components_cartDrawer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/cartDrawer.js */ "./src/scripts/components/cartDrawer.js");
/* harmony import */ var _components_cartDrawerItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/cartDrawerItem.js */ "./src/scripts/components/cartDrawerItem.js");
/* harmony import */ var _components_accountLogin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/accountLogin.js */ "./src/scripts/components/accountLogin.js");
/* harmony import */ var _components_product_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/product.js */ "./src/scripts/components/product.js");
/* harmony import */ var _components_product_counter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/product-counter.js */ "./src/scripts/components/product-counter.js");









var state = {
  cartOpen: false
};
var components = {
  slaterWelcome: _components_slater_welcome_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  accountLogin: _components_accountLogin_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  header: _components_header_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  productSelection: _components_product_selection_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  cartDrawer: _components_cartDrawer_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  cartDrawerItem: _components_cartDrawerItem_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  product: _components_product_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  productCounter: _components_product_counter_js__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["picoapp"])(components, state));

/***/ }),

/***/ "./src/scripts/components/accountLogin.js":
/*!************************************************!*\
  !*** ./src/scripts/components/accountLogin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var login = node.querySelector('.js-login-dialog');
  var recover = node.querySelector('.js-recover-dialog');
  var recoverLink = node.querySelector('.js-recover-trigger');
  var cancelRecoverLink = node.querySelector('.js-recover-cancel');
  /* eslint-disable */

  var recoverIsTarget = window.location.hash.match(/\#recover/) ? true : false;
  /* eslint-enable */

  var successMessage = node.querySelector('.js-recover-success') !== null;

  if (recoverIsTarget || successMessage) {
    login.style.display = 'none';
    recover.style.display = 'block';
  } else {
    login.style.display = 'block';
  }

  recoverLink.addEventListener('click', function (e) {
    e.preventDefault();
    login.style.display = 'none';
    recover.style.display = 'block';
  });
  cancelRecoverLink.addEventListener('click', function (e) {
    e.preventDefault();
    recover.style.display = 'none';
    login.style.display = 'block';
  });
}));

/***/ }),

/***/ "./src/scripts/components/cartDrawer.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/cartDrawer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/images.js */ "./src/scripts/lib/images.js");
/* harmony import */ var _lib_currency_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/currency.js */ "./src/scripts/lib/currency.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app.js */ "./src/scripts/app.js");





var X = "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentcolor\" stroke-width=\"3\" style=\"display:inline-block;vertical-align:middle;overflow:visible;\"><path d=\"M1.0606601717798212 1.0606601717798212 L14.939339828220179 14.939339828220179\"></path><path d=\"M14.939339828220179 1.0606601717798212 L1.0606601717798212 14.939339828220179\"></path></svg>";

function createItem(_ref) {
  var id = _ref.variant_id,
      title = _ref.product_title,
      price = _ref.line_price,
      color = _ref.variant_title,
      image = _ref.image,
      url = _ref.url,
      quantity = _ref.quantity,
      item = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["variant_id", "product_title", "line_price", "variant_title", "image", "url", "quantity"]);

  var img = image ? Object(_lib_images_js__WEBPACK_IMPORTED_MODULE_2__["getSizedImageUrl"])(image.replace('.' + Object(_lib_images_js__WEBPACK_IMPORTED_MODULE_2__["imageSize"])(image), ''), '200x' // TODO hacky af
  ) : 'https://source.unsplash.com/R9OS29xJb-8/2000x1333';
  return "\n<div class='cart-drawer__item' data-component='cartDrawerItem' data-id=".concat(id, ">\n  <div class='f aic w-100'>\n    <a href='").concat(url, "'>\n      <img src='").concat(img, "' />\n    </a>\n    <div class='__content pl1 f y ais jcb w-100'>\n      <div class='w-100'>\n        <a href='").concat(url, "' class='serif mv0 p mv0'>").concat(title, "</a>\n        ").concat(color ? "<div class='xsmall sans caps track cm mv025 book'>".concat(color.split(':')[0], "</div>") : "", "\n        <div class='cart-settings'>\n          <div class='f aic'>\n            <div class='cart-quantity js-remove-single px05'>-</div>\n            <input class='js-single-quantity input-qty asdasd' type=\"number\"\n            value=\"").concat(quantity, "\"\n            min=\"0\">\n            <div class='cart-quantity js-add-single px05'>+</div>\n          </div>\n          <div class='small sans track mt025 mb05 book'>").concat(Object(_lib_currency_js__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(price), "</div>\n        </div>\n      </div>\n\n      <button class='button--reset js-remove-item'>").concat(X, "</button>\n    </div>\n  </div>\n</div>\n");
}

function renderItems(items) {
  return items.length > 0 ? items.reduce(function (markup, item) {
    markup += createItem(item);
    return markup;
  }, '') : "<div class='pv1'><p class='pv1 mv05 sans small cm i ac'>Your cart is empty</p></div>";
}

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_1__["component"])(function (node, ctx) {
  var overlay = node.querySelector('.js-overlay');
  var closeButton = node.querySelector('.js-close');
  var subtotal = node.querySelector('.js-subtotal');
  var itemsRoot = node.querySelector('.js-items');
  var loading = itemsRoot.innerHTML;

  var render = function render(cart) {
    itemsRoot.innerHTML = renderItems(cart.items);
    subtotal.innerHTML = Object(_lib_currency_js__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(cart.total_price);
  };

  var open = function open(cart) {
    node.classList.add('is-active');
    itemsRoot.innerHTML = loading;
    setTimeout(function () {
      node.classList.add('is-visible');
      setTimeout(render(cart), 10);
      _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].mount();
    }, 50);
  };

  var close = function close() {
    node.classList.remove('is-visible');
    setTimeout(function () {
      node.classList.remove('is-active');
      _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].hydrate({
        cartOpen: false
      });
    }, 400);
  };

  render(ctx.getState().cart);
  overlay.addEventListener('click', close);
  closeButton.addEventListener('click', close);
  ctx.on('cart:toggle', function (_ref2) {
    var cart = _ref2.cart,
        cartOpen = _ref2.cartOpen;
    cartOpen && open(cart);
  });
  ctx.on('cart:updated', function () {
    render(ctx.getState().cart);
    _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].mount();
  });
}));

/***/ }),

/***/ "./src/scripts/components/cartDrawerItem.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/cartDrawerItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/cart.js */ "./src/scripts/lib/cart.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var button = node.querySelector('.js-remove-item');
  var decrease = node.querySelector('.js-remove-single');
  var increase = node.querySelector('.js-add-single'); // const currentQty = node.querySelector('.js-single-quantity').innerHTML

  var inputQty = node.querySelector('.input-qty');
  var id = node.getAttribute('data-id');
  button.addEventListener('click', function (e) {
    e.preventDefault();
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["removeAddon"])(id);
  });
  decrease.addEventListener('click', function (e) {
    e.preventDefault();
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["updateAddon"])(id, parseInt(inputQty) - 1);
  });
  increase.addEventListener('click', function (e) {
    e.preventDefault();
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["updateAddon"])(id, parseInt(inputQty) + 1);
  }); //update cart oninput

  inputQty.addEventListener('input', function (e) {
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["updateAddon"])(id, parseInt(e.target.value) + 1);
    location.reload();
  });
}));

/***/ }),

/***/ "./src/scripts/components/header.js":
/*!******************************************!*\
  !*** ./src/scripts/components/header.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var cartCount = node.querySelector('.js-cart-count');
  var cartToggles = node.querySelectorAll('.js-cart-drawer-toggle');

  for (var i = 0; i < cartToggles.length; i++) {
    cartToggles[i].addEventListener('click', function (e) {
      e.preventDefault();
      ctx.emit('cart:toggle', function (state) {
        return {
          cartOpen: !state.cartOpen
        };
      });
    });
  }

  ctx.on('cart:updated', function (state) {
    cartCount.innerHTML = state.cart.item_count;
  });
  cartCount.innerHTML = ctx.getState().cart.item_count;
}));

/***/ }),

/***/ "./src/scripts/components/product-counter.js":
/*!***************************************************!*\
  !*** ./src/scripts/components/product-counter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var decrease = node.querySelector('.js-counter-remove');
  var increase = node.querySelector('.js-counter-add');
  var quantity = node.querySelector('.js-counter-quantity');
  var min = parseInt(quantity.attributes.min.value);
  var max = parseInt(quantity.attributes.max.value);
  var count = parseInt(quantity.value);

  var set = function set(i) {
    count = Math.max(min, Math.min(i, max || 10000));
    quantity.value = count;
  };

  decrease.addEventListener('click', function (e) {
    e.preventDefault();
    set(--count);
  });
  increase.addEventListener('click', function (e) {
    e.preventDefault();
    set(++count);
  });
}));

/***/ }),

/***/ "./src/scripts/components/product-selection.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/product-selection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/cart.js */ "./src/scripts/lib/cart.js");
/* harmony import */ var _lib_radio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/radio.js */ "./src/scripts/lib/radio.js");
/* harmony import */ var _lib_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/options.js */ "./src/scripts/lib/options.js");
/* harmony import */ var _lib_getProductJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/getProductJson.js */ "./src/scripts/lib/getProductJson.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (_ref) {
  var node = _ref.node;
  var opts = Object(_lib_options_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node); // cache

  Object(_lib_getProductJson_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  opts.onUpdate(function (state) {
    Object(_lib_getProductJson_js__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (json) {
      var variant = json.variants.filter(function (v) {
        return v.id == state.id;
      })[0];
    });
  });
}));

/***/ }),

/***/ "./src/scripts/components/product.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/product.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");
/* harmony import */ var _lib_cart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/cart.js */ "./src/scripts/lib/cart.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  var json = JSON.parse(node.querySelector('.js-product-json').innerHTML);
  var form = node.querySelector('form');
  var selectedOrFirstAvailableVariant = json.selectedOrFirstAvailableVariant,
      product = json.product;
  var currentVariant = product.variants.filter(function (v) {
    return v.id === selectedOrFirstAvailableVariant;
  })[0];
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    currentVariant = product.variants.filter(function (v) {
      return v.id === parseInt(form.elements.id.value);
    })[0];
    Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_1__["addVariant"])(currentVariant, form.elements.quantity.value);
    console.log(json);
  });
}));

/***/ }),

/***/ "./src/scripts/components/slater-welcome.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/slater-welcome.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ "./node_modules/picoapp/dist/picoapp.es.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(picoapp__WEBPACK_IMPORTED_MODULE_0__["component"])(function (node, ctx) {
  console.log('slater-welcome mounted');
  return function (node) {
    console.log('slater-welcome unmounted');
  };
}));

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_select_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/select.js */ "./src/scripts/lib/select.js");
/* harmony import */ var lazim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazim */ "./node_modules/lazim/dist/lazim.es.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app.js */ "./src/scripts/app.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/router.js */ "./src/scripts/router.js");
/* harmony import */ var _lib_cart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/cart.js */ "./src/scripts/lib/cart.js");







/**
 * store binding fn
 */

var images = Object(lazim__WEBPACK_IMPORTED_MODULE_3__["default"])();
/**
 * bind on page load
 */

images();
_router_js__WEBPACK_IMPORTED_MODULE_5__["default"].on('after', function () {
  _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].unmount();
  _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].mount();
  /**
   * bind new images
   */

  images();
});
/**
 * load any data that your site needs on fist load
 */

Promise.all([Object(_lib_cart_js__WEBPACK_IMPORTED_MODULE_6__["fetchCart"])()]).then(function (_ref) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 1),
      cart = _ref2[0];

  /**
   * add the cart data to the picoapp instance
   */
  _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].hydrate({
    cart: cart
  });
  /**
   * mount any components defined on the page
   */

  _app_js__WEBPACK_IMPORTED_MODULE_4__["default"].mount();
});

/***/ }),

/***/ "./src/scripts/lib/cart.js":
/*!*********************************!*\
  !*** ./src/scripts/lib/cart.js ***!
  \*********************************/
/*! exports provided: addVariant, updateAddon, removeAddon, addItemById, fetchCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVariant", function() { return addVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddon", function() { return updateAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAddon", function() { return removeAddon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemById", function() { return addItemById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.module.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app.js */ "./src/scripts/app.js");


function addVariant(variant, quantity) {
  var numAvailable = variant.inventory_policy === 'deny' && variant.inventory_management === 'shopify' ? variant.inventory_quantity : null; // null means they can add as many as they want

  return fetchCart().then(function (_ref) {
    var items = _ref.items;
    var existing = items.filter(function (item) {
      return item.id === variant.id;
    })[0] || {};
    var numRequested = (existing.quantity || 0) + quantity;

    if (numAvailable !== null && numRequested > numAvailable) {
      var err = "There are only ".concat(numAvailable, " of that product available, requested ").concat(numRequested, ".");
      _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('error', err);
      throw new Error(err);
    } else {
      return addItemById(variant.id, quantity);
    }
  });
}
function updateAddon(id, quantity) {
  return fetchCart().then(function (_ref2) {
    var items = _ref2.items;

    for (var i = 0; i < items.length; i++) {
      if (items[i].variant_id === parseInt(id)) {
        return changeAddon(i + 1, quantity); // shopify cart is a 1-based index
      }
    }
  });
}
function removeAddon(id) {
  return updateAddon(id, 0);
}

function changeAddon(line, quantity) {
  _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updating');
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      line: line,
      quantity: quantity
    })
  }).then(function (res) {
    return res.json();
  }).then(function (cart) {
    _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].hydrate({
      cart: cart
    });
    _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updated', {
      cart: cart
    });
    return cart;
  });
}
/**
 * Warning: this does not check available products first
 */


function addItemById(id, quantity) {
  _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updating');
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart/add.js', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: id,
      quantity: quantity
    })
  }).then(function (r) {
    return r.json();
  }).then(function (item) {
    return fetchCart().then(function (cart) {
      _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].hydrate({
        cart: cart
      });
      _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:updated');
      _app_js__WEBPACK_IMPORTED_MODULE_1__["default"].emit('cart:toggle', function (state) {
        return {
          cartOpen: !state.cartOpen
        };
      }); // app.emit('updated', { item, cart })

      return {
        item: item,
        cart: cart
      };
    });
  });
}
function fetchCart() {
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_0__["default"])('/cart.js', {
    method: 'GET',
    credentials: 'include'
  }).then(function (res) {
    return res.json();
  });
}

/***/ }),

/***/ "./src/scripts/lib/currency.js":
/*!*************************************!*\
  !*** ./src/scripts/lib/currency.js ***!
  \*************************************/
/*! exports provided: formatMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */

/* eslint-disable */
function formatMoney(cents) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '${{amount}}';

  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = precision || 2;
    thousands = thousands || ',';
    decimal = decimal || '.';

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);
    var parts = number.split('.');
    var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    var centsAmount = parts[1] ? decimal + parts[1] : '';
    return dollarsAmount + centsAmount;
  }

  switch (format.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;

    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;

    case 'amount_with_space_separator':
      value = formatWithDelimiters(cents, 2, ' ', '.');
      break;

    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, ',', '.');
      break;

    case 'amount_no_decimals_with_space_separator':
      value = formatWithDelimiters(cents, 0, ' ');
      break;
  }

  return format.replace(placeholderRegex, value);
}

/***/ }),

/***/ "./src/scripts/lib/getProductJson.js":
/*!*******************************************!*\
  !*** ./src/scripts/lib/getProductJson.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getProductJson; });
var cache = {};
function getProductJson() {
  var slug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.pathname.split('/').reverse()[0];
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (cache[slug] && !opts.refetch) return Promise.resolve(cache[slug]);
  return fetch(window.location.origin + '/products/' + slug + '.json').then(function (res) {
    return res.json();
  }).then(function (_ref) {
    var product = _ref.product;
    cache[slug] = product;
    return product;
  });
}

/***/ }),

/***/ "./src/scripts/lib/images.js":
/*!***********************************!*\
  !*** ./src/scripts/lib/images.js ***!
  \***********************************/
/*! exports provided: preload, loadImage, imageSize, getSizedImageUrl, removeProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageSize", function() { return imageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizedImageUrl", function() { return getSizedImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProtocol", function() { return removeProtocol; });
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */
function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}
/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */

function loadImage(path) {
  /* eslint-disable */
  new Image().src = path;
  /* eslint-enable */
}
/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */

function imageSize(src) {
  /* eslint-disable */
  var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
  /* esling-enable */

  if (match) {
    return match[1];
  } else {
    return null;
  }
}
/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */

function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    var prefix = src.split(match[0]);
    var suffix = match[0];
    return removeProtocol(prefix[0] + '_' + size + suffix);
  } else {
    return null;
  }
}
function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}

/***/ }),

/***/ "./src/scripts/lib/options.js":
/*!************************************!*\
  !*** ./src/scripts/lib/options.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productSelection; });
/* harmony import */ var _lib_radio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/radio.js */ "./src/scripts/lib/radio.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function productSelection(node, opts) {
  opts = Object.assign({
    select: '[data-option-select]',
    radio: '[data-option-radio]',
    main: '[data-option-main]'
  }, opts);
  var listeners = [];
  var state = {
    id: null,
    options: []
  };
  var selects = slater.qsa(opts.select);
  var radios = slater.qsa(opts.radio);
  var main = slater.qs(opts.main);
  if (!main || !main.length) throw 'data-option-main is missing';
  if (radios.length > 3) throw 'you have more than three radio groups';
  if (selects.length > 3) throw 'you have more than three select inputs';
  var variants = [].slice.call(main.children).reduce(function (variants, child) {
    variants[child.innerHTML] = child.value;
    return variants;
  }, {});
  selects.forEach(function (select) {
    if (select.nodeName !== 'SELECT') throw 'data-option-select should be defined on the individual option selectors';
    var index = parseInt(select.getAttribute('data-index')); // set initial value

    state.options[index] = select.value;
    select.addEventListener('change', function (e) {
      state.options[index] = e.target.value;
      updateSelection();
    });
  });
  radios.forEach(function (r) {
    if (r.nodeName === 'INPUT') throw 'data-option-radio should be defined on a parent of the radio group, not the inputs themselves';
    var index = parseInt(r.getAttribute('data-index'));
    var inputs = [].slice.call(r.getElementsByTagName('input')); // set initial value

    inputs.forEach(function (r) {
      if (r.checked) state.options[index] = r.value;
    });
    Object(_lib_radio_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputs, function (value) {
      state.options[index] = value;
      updateSelection();
    });
  });
  updateSelection();

  function updateSelection() {
    state.id = variants[state.options.join(' / ')];
    main.value = state.id;

    var _iterator = _createForOfIteratorHelper(listeners),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var fn = _step.value;
        fn(state);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return {
    get state() {
      return state;
    },

    onUpdate: function onUpdate(fn) {
      listeners.indexOf(fn) < 0 && listeners.push(fn);
      return function () {
        return listeners.splice(listeners.indexOf(fn), 1);
      };
    }
  };
}

/***/ }),

/***/ "./src/scripts/lib/radio.js":
/*!**********************************!*\
  !*** ./src/scripts/lib/radio.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return radio; });
function radio(radios, cb) {
  radios.map(function (r) {
    return r.onclick = function (e) {
      return cb(e.target.value);
    };
  });
}

/***/ }),

/***/ "./src/scripts/lib/select.js":
/*!***********************************!*\
  !*** ./src/scripts/lib/select.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sliced__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sliced */ "./node_modules/sliced/index.js");
/* harmony import */ var sliced__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sliced__WEBPACK_IMPORTED_MODULE_0__);

window.slater = Object.assign(window.slater || {}, {
  qs: function qs(q, ctx) {
    return (ctx || document).querySelector(q);
  },
  qsa: function qsa(q, ctx) {
    return sliced__WEBPACK_IMPORTED_MODULE_0___default()((ctx || document).querySelectorAll(q));
  },
  gebtn: function gebtn(q, ctx) {
    return sliced__WEBPACK_IMPORTED_MODULE_0___default()((ctx || document).getElementsByTagName(q));
  },
  gebi: function gebi(q) {
    return document.getElementById(q);
  }
});

/***/ }),

/***/ "./src/scripts/router.js":
/*!*******************************!*\
  !*** ./src/scripts/router.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! operator */ "./node_modules/operator/dist/operator.es.js");

/**
 * operator is a tiny "PJAX" library, please have a look at the docs for
 * more info
 *
 * @see https://github.com/estrattonbailey/operator
 */

var router = Object(operator__WEBPACK_IMPORTED_MODULE_0__["default"])('#root', [
/**
 * creates a page transition
 * @see https://github.com/estrattonbailey/operator#transition-animation
 */
function () {
  return new Promise(function (res) {
    document.body.classList.add('is-transitioning');
    setTimeout(res, 200);
    setTimeout(function () {
      return document.body.classList.remove('is-transitioning');
    }, 300);
  });
}]);
router.on('after', function (_ref) {
  var title = _ref.title,
      pathname = _ref.pathname;
  document.title = title;
  window.history.pushState({}, '', pathname);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcnIvZXZlcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXppbS9kaXN0L2xhemltLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRjaGl0L2xpYi9tYXRjaGl0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3BlcmF0b3IvZGlzdC9vcGVyYXRvci5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGljb2FwcC9kaXN0L3BpY29hcHAuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaWNlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3JyYWYvZGlzdC9zcnJhZi5lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9kaXN0L3VuZmV0Y2gubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92c2JsL2Rpc3QvdnNibC5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9hY2NvdW50TG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9jYXJ0RHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY2FydERyYXdlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0LWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0LXNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zbGF0ZXItd2VsY29tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9saWIvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9saWIvY3VycmVuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGliL2dldFByb2R1Y3RKc29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xpYi9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGliL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGliL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xpYi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyciwgY2IpIHtcblx0dmFyIGk9MCwgbGVuPWFyci5sZW5ndGg7XG5cblx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdGlmICghY2IoYXJyW2ldLCBpLCBhcnIpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCB0IGZyb21cInZzYmxcIjtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9XCJkYXRhLXNyY1wiKSxmdW5jdGlvbigpe2Zvcih2YXIgbz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiK2UrXCJdXCIpLGk9ZnVuY3Rpb24oaSl7dmFyIG49b1tpXSxhPVwiSU1HXCI9PT1uLm5vZGVOYW1lP246bi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXSxyPW4uZ2V0QXR0cmlidXRlKGUpO2Eub25sb2FkPWZ1bmN0aW9uKCl7bi5jbGFzc0xpc3QuYWRkKFwiaXMtbG9hZGVkXCIpfSxuLnJlbW92ZUF0dHJpYnV0ZShlKSx0KG4pKGZ1bmN0aW9uKCl7bi5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKSxhLnNyYz1yfSkudXBkYXRlKCl9LG49MDtuPG8ubGVuZ3RoO24rKylpKG4pfX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxhemltLmVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZXZlcnkgZnJvbSAnQGFyci9ldmVyeSc7XG5cbmNvbnN0IFNFUCA9ICcvJztcbi8vIFR5cGVzIH4+IHN0YXRpYywgcGFyYW0sIGFueSwgb3B0aW9uYWxcbmNvbnN0IFNUWVBFPTAsIFBUWVBFPTEsIEFUWVBFPTIsIE9UWVBFPTM7XG4vLyBDaGFyIENvZGVzIH4+IC8gOiAqXG5jb25zdCBTTEFTSD00NywgQ09MT049NTgsIEFTVEVSPTQyLCBRTUFSSz02MztcblxuZnVuY3Rpb24gc3RyaXAoc3RyKSB7XG5cdGlmIChzdHIgPT09IFNFUCkgcmV0dXJuIHN0cjtcblx0KHN0ci5jaGFyQ29kZUF0KDApID09PSBTTEFTSCkgJiYgKHN0cj1zdHIuc3Vic3RyaW5nKDEpKTtcblx0dmFyIGxlbiA9IHN0ci5sZW5ndGggLSAxO1xuXHRyZXR1cm4gc3RyLmNoYXJDb2RlQXQobGVuKSA9PT0gU0xBU0ggPyBzdHIuc3Vic3RyaW5nKDAsIGxlbikgOiBzdHI7XG59XG5cbmZ1bmN0aW9uIHNwbGl0KHN0cikge1xuXHRyZXR1cm4gKHN0cj1zdHJpcChzdHIpKSA9PT0gU0VQID8gW1NFUF0gOiBzdHIuc3BsaXQoU0VQKTtcbn1cblxuZnVuY3Rpb24gaXNNYXRjaChhcnIsIG9iaiwgaWR4KSB7XG5cdGlkeCA9IGFycltpZHhdO1xuXHRyZXR1cm4gKG9iai52YWwgPT09IGlkeCAmJiBvYmoudHlwZSA9PT0gU1RZUEUpIHx8IChpZHggPT09IFNFUCA/IG9iai50eXBlID4gUFRZUEUgOiBvYmoudHlwZSAhPT0gU1RZUEUgJiYgKGlkeCB8fCAnJykuZW5kc1dpdGgob2JqLmVuZCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2goc3RyLCBhbGwpIHtcblx0dmFyIGk9MCwgdG1wLCBzZWdzPXNwbGl0KHN0ciksIGxlbj1zZWdzLmxlbmd0aCwgbDtcblx0dmFyIGZuID0gaXNNYXRjaC5iaW5kKGlzTWF0Y2gsIHNlZ3MpO1xuXG5cdGZvciAoOyBpIDwgYWxsLmxlbmd0aDsgaSsrKSB7XG5cdFx0dG1wID0gYWxsW2ldO1xuXHRcdGlmICgobD10bXAubGVuZ3RoKSA9PT0gbGVuIHx8IChsIDwgbGVuICYmIHRtcFtsLTFdLnR5cGUgPT09IEFUWVBFKSB8fCAobCA+IGxlbiAmJiB0bXBbbC0xXS50eXBlID09PSBPVFlQRSkpIHtcblx0XHRcdGlmIChldmVyeSh0bXAsIGZuKSkgcmV0dXJuIHRtcDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShzdHIpIHtcblx0aWYgKHN0ciA9PT0gU0VQKSB7XG5cdFx0cmV0dXJuIFt7IG9sZDpzdHIsIHR5cGU6U1RZUEUsIHZhbDpzdHIsIGVuZDonJyB9XTtcblx0fVxuXG5cdHZhciBjLCB4LCB0LCBzZngsIG54dD1zdHJpcChzdHIpLCBpPS0xLCBqPTAsIGxlbj1ueHQubGVuZ3RoLCBvdXQ9W107XG5cblx0d2hpbGUgKCsraSA8IGxlbikge1xuXHRcdGMgPSBueHQuY2hhckNvZGVBdChpKTtcblxuXHRcdGlmIChjID09PSBDT0xPTikge1xuXHRcdFx0aiA9IGkgKyAxOyAvLyBiZWdpbmluZyBvZiBwYXJhbVxuXHRcdFx0dCA9IFBUWVBFOyAvLyBzZXQgdHlwZVxuXHRcdFx0eCA9IDA7IC8vIHJlc2V0IG1hcmtcblx0XHRcdHNmeCA9ICcnO1xuXG5cdFx0XHR3aGlsZSAoaSA8IGxlbiAmJiBueHQuY2hhckNvZGVBdChpKSAhPT0gU0xBU0gpIHtcblx0XHRcdFx0YyA9IG54dC5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0XHRpZiAoYyA9PT0gUU1BUkspIHtcblx0XHRcdFx0XHR4PWk7IHQ9T1RZUEU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYyA9PT0gNDYgJiYgc2Z4Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHNmeCA9IG54dC5zdWJzdHJpbmcoeD1pKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpKys7IC8vIG1vdmUgb25cblx0XHRcdH1cblxuXHRcdFx0b3V0LnB1c2goe1xuXHRcdFx0XHRvbGQ6IHN0cixcblx0XHRcdFx0dHlwZTogdCxcblx0XHRcdFx0dmFsOiBueHQuc3Vic3RyaW5nKGosIHh8fGkpLFxuXHRcdFx0XHRlbmQ6IHNmeFxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHNob3J0ZW4gc3RyaW5nICYgdXBkYXRlIHBvaW50ZXJzXG5cdFx0XHRueHQ9bnh0LnN1YnN0cmluZyhpKTsgbGVuLT1pOyBpPTA7XG5cblx0XHRcdGNvbnRpbnVlOyAvLyBsb29wXG5cdFx0fSBlbHNlIGlmIChjID09PSBBU1RFUikge1xuXHRcdFx0b3V0LnB1c2goe1xuXHRcdFx0XHRvbGQ6IHN0cixcblx0XHRcdFx0dHlwZTogQVRZUEUsXG5cdFx0XHRcdHZhbDogbnh0LnN1YnN0cmluZyhpKSxcblx0XHRcdFx0ZW5kOiAnJ1xuXHRcdFx0fSk7XG5cdFx0XHRjb250aW51ZTsgLy8gbG9vcFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRqID0gaTtcblx0XHRcdHdoaWxlIChpIDwgbGVuICYmIG54dC5jaGFyQ29kZUF0KGkpICE9PSBTTEFTSCkge1xuXHRcdFx0XHQrK2k7IC8vIHNraXAgdG8gbmV4dCBzbGFzaFxuXHRcdFx0fVxuXHRcdFx0b3V0LnB1c2goe1xuXHRcdFx0XHRvbGQ6IHN0cixcblx0XHRcdFx0dHlwZTogU1RZUEUsXG5cdFx0XHRcdHZhbDogbnh0LnN1YnN0cmluZyhqLCBpKSxcblx0XHRcdFx0ZW5kOiAnJ1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBzaG9ydGVuIHN0cmluZyAmIHVwZGF0ZSBwb2ludGVyc1xuXHRcdFx0bnh0PW54dC5zdWJzdHJpbmcoaSk7IGxlbi09aTsgaT1qPTA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWMoc3RyLCBhcnIpIHtcblx0dmFyIGk9MCwgeCwgeSwgc2Vncz1zcGxpdChzdHIpLCBvdXQ9e307XG5cdGZvciAoOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0eD1zZWdzW2ldOyB5PWFycltpXTtcblx0XHRpZiAoeCA9PT0gU0VQKSBjb250aW51ZTtcblx0XHRpZiAoeCAhPT0gdm9pZCAwICYmIHkudHlwZSB8IDIgPT09IE9UWVBFKSB7XG5cdFx0XHRvdXRbIHkudmFsIF0gPSB4LnJlcGxhY2UoeS5lbmQsICcnKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cbiIsImltcG9ydHtwYXJzZSBhcyBuLGV4ZWMgYXMgdCxtYXRjaCBhcyBlfWZyb21cIm1hdGNoaXRcIjt2YXIgcj1uZXcgTWFwO2Z1bmN0aW9uIGEobil7cmV0dXJuIG4ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luLFwiXCIpfWZ1bmN0aW9uIG8obixyKXt2YXIgYT1cIlwiLG89XCJcIixpPW4uc3BsaXQoLyN8XFw/LyksYz1pWzBdLHU9aS5zbGljZSgxKTtjPShjPWMucmVwbGFjZSgvXFwvJC9nLFwiXCIpKXx8XCIvXCI7Zm9yKHZhciBsPTA7bDx1Lmxlbmd0aDtsKyspe3ZhciBmPW4uc3BsaXQodVtsXSlbMF07XCI/XCI9PT1mW2YubGVuZ3RoLTFdJiYobz11W2xdKSxcIiNcIj09PWZbZi5sZW5ndGgtMV0mJihhPXVbbF0pfXZhciBoPWUoYyxyLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gbi5tYXRjaGVyfSkpLHM9ci5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIG4ucGF0aD09PWhbMF0ub2xkfSlbMF07cmV0dXJuIGhbMF0/T2JqZWN0LmFzc2lnbih7fSxzLHtwYXJhbXM6dChjLGgpLGhhc2g6YSxzZWFyY2g6byxwYXRobmFtZTpjLGxvY2F0aW9uOm59KTpudWxsfWV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09ZSYmKGU9W1wiKlwiXSk7dmFyIGksYz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpLHU9W10sbD17fTtlPWUuY29uY2F0KGUuaW5kZXhPZihcIipcIik8MD9cIipcIjpbXSkucmVkdWNlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD8odS5wdXNoKHQpLG4pOm4uY29uY2F0KHQpfSxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnBhdGg/T2JqZWN0LmFzc2lnbih7fSx0LHttYXRjaGVyOm4odC5wYXRoKX0pOntwYXRoOnQsbWF0Y2hlcjpuKHQpfX0pO3ZhciBmPW8oYSh3aW5kb3cubG9jYXRpb24uaHJlZiksZSksaD1PYmplY3QuYXNzaWduKHtwcmV2aW91c0RvY3VtZW50Om51bGx9LGYpO2Z1bmN0aW9uIHMobil7cmV0dXJuIGxbbl0/bFtuXS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG4oaCl9KTpbXX1mdW5jdGlvbiBwKG4sdCxlLHIpe2gucHJldmlvdXNEb2N1bWVudD1uLmNsb25lTm9kZSghMCksUHJvbWlzZS5hbGwodS5jb25jYXQoZS5oYW5kbGVyfHxbXSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuKGgpfSkpLnRoZW4oZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtjLmlubmVySFRNTD10LHMoXCJhZnRlclwiKSxlLmhhc2gmJnMoXCJoYXNoXCIpfSl9KX1mdW5jdGlvbiBkKG4sZSxhKXtpZighZSlyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY9bjtmZXRjaChuLHtjcmVkZW50aWFsczpcImluY2x1ZGVcIn0pLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIG4udGV4dCgpfSkudGhlbihmdW5jdGlvbihvKXt2YXIgaT0obmV3IHdpbmRvdy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhvLFwidGV4dC9odG1sXCIpLGM9W2ksaS5xdWVyeVNlbGVjdG9yKHQpLmlubmVySFRNTF07ci5zZXQobixjKSxhJiZhKGNbMF0sY1sxXSxlKX0pfWZ1bmN0aW9uIG0obix0LGUpe2k9ZnVuY3Rpb24oKXt2YXIgZT1yLmdldChuKTtlJiYhMSE9PXQuY2FjaGU/cChlWzBdLGVbMV0sdCk6ZChuLHQscCl9LE9iamVjdC5hc3NpZ24oaCx0KSxQcm9taXNlLmFsbChzKFwiYmVmb3JlXCIpKS50aGVuKGkpfWZ1bmN0aW9uIHYobil7dmFyIHQ9YShuKTtyZXR1cm5bdCxvKHQsZSldfXJldHVybiBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKG4pe2lmKCEobi5jdHJsS2V5fHxuLm1ldGFLZXl8fG4uYWx0S2V5fHxuLnNoaWZ0S2V5fHxuLmRlZmF1bHRQcmV2ZW50ZWQpKXtmb3IodmFyIHQ9bi50YXJnZXQ7dCYmKCF0LmhyZWZ8fFwiQVwiIT09dC5ub2RlTmFtZSk7KXQ9dC5wYXJlbnROb2RlO2lmKCF0KXJldHVybiBuO3ZhciBlPXYodC5ocmVmKSxyPWVbMF0sYT1lWzFdO3JldHVybiBhLmlnbm9yZT9uOmgucGF0aG5hbWU9PT1hLnBhdGhuYW1lJiZhLmhhc2g/KG4ucHJldmVudERlZmF1bHQoKSxPYmplY3QuYXNzaWduKGgsYSkscyhcImhhc2hcIiksbik6d2luZG93LmxvY2F0aW9uLm9yaWdpbiE9PXQub3JpZ2lufHx0Lmhhc0F0dHJpYnV0ZShcImRvd25sb2FkXCIpfHxcIl9ibGFua1wiPT09dC50YXJnZXR8fC9eKD86bWFpbHRvfHRlbCk6Ly50ZXN0KHQuaHJlZil8fHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tYWpheFwiKT9uOihuLnByZXZlbnREZWZhdWx0KCksaC5sb2NhdGlvbiE9PXImJm0ocixhKSxzKFwibmF2aWdhdGVcIiksITEpfX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIixmdW5jdGlvbihuKXtpZihuLnRhcmdldC5sb2NhdGlvbi5wYXRobmFtZSE9PWgucGF0aG5hbWUpcmV0dXJuIG0uYXBwbHkodm9pZCAwLHYobi50YXJnZXQubG9jYXRpb24uaHJlZikuY29uY2F0KFshMF0pKSwhMX0pLHtnZXQgc3RhdGUoKXtyZXR1cm4gaH0sZ286ZnVuY3Rpb24obil7aT1udWxsLG0uYXBwbHkodm9pZCAwLHYobikuY29uY2F0KFshMV0pKX0sbG9hZDpmdW5jdGlvbihuLHQpe3JldHVybiBkLmFwcGx5KHZvaWQgMCx2KG4pLmNvbmNhdChbdF0pKX0sb246ZnVuY3Rpb24obix0KXtyZXR1cm4gbFtuXT1sW25dP2xbbl0uY29uY2F0KHQpOlt0XSxmdW5jdGlvbigpe3JldHVybiBsW25dLnNsaWNlKGxbbl0uaW5kZXhPZih0KSwxKX19fX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9wZXJhdG9yLmVzLmpzLm1hcFxuIiwidmFyIG49ZnVuY3Rpb24obil7aWYoXCJvYmplY3RcIiE9dHlwZW9mKHQ9bil8fEFycmF5LmlzQXJyYXkodCkpdGhyb3dcInN0YXRlIHNob3VsZCBiZSBhbiBvYmplY3RcIjt2YXIgdH0sdD1mdW5jdGlvbihuLHQscixlKXtyZXR1cm4obz1uLG8ucmVkdWNlKGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbi5pbmRleE9mKHQpPi0xP246bi5jb25jYXQodCl9LFtdKSkucmVkdWNlKGZ1bmN0aW9uKG4scil7cmV0dXJuIG4uY29uY2F0KHRbcl18fFtdKX0sW10pLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gbihyLGUpfSk7dmFyIG99O2Z1bmN0aW9uIHIocil7dm9pZCAwPT09ciYmKHI9e30pO3ZhciBlPXt9O3JldHVybntnZXRTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBPYmplY3QuYXNzaWduKHt9LHIpfSxoeWRyYXRlOmZ1bmN0aW9uKG8pe3JldHVybiBuKG8pLE9iamVjdC5hc3NpZ24ocixvKSxmdW5jdGlvbigpe3ZhciBuPVtcIipcIl0uY29uY2F0KE9iamVjdC5rZXlzKG8pKTt0KG4sZSxyKX19LG9uOmZ1bmN0aW9uKG4sdCl7cmV0dXJuKG49W10uY29uY2F0KG4pKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIGVbbl09KGVbbl18fFtdKS5jb25jYXQodCl9KSxmdW5jdGlvbigpe3JldHVybiBuLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gZVtuXS5zcGxpY2UoZVtuXS5pbmRleE9mKHQpLDEpfSl9fSxlbWl0OmZ1bmN0aW9uKG8sdSxjKXt2YXIgaT0oXCIqXCI9PT1vP1tdOltcIipcIl0pLmNvbmNhdChvKTsodT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB1P3Uocik6dSkmJihuKHUpLE9iamVjdC5hc3NpZ24ocix1KSxpPWkuY29uY2F0KE9iamVjdC5rZXlzKHUpKSksdChpLGUscixjKX19fXIoKTt2YXIgZT1mdW5jdGlvbihuKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgbiYmIUFycmF5LmlzQXJyYXkobil9LG89ZnVuY3Rpb24obil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbn07ZnVuY3Rpb24gdShuKXtyZXR1cm4gZnVuY3Rpb24odCxyKXt2YXIgZT1bXTtyZXR1cm57c3ViczplLHVubW91bnQ6bih0LE9iamVjdC5hc3NpZ24oe30scix7b246ZnVuY3Rpb24obix0KXt2YXIgbz1yLm9uKG4sdCk7cmV0dXJuIGUucHVzaChvKSxvfX0pKSxub2RlOnR9fX1mdW5jdGlvbiBjKG4sdCx1KXt2b2lkIDA9PT1uJiYobj17fSksdm9pZCAwPT09dCYmKHQ9e30pLHZvaWQgMD09PXUmJih1PVtdKTt2YXIgYz1yKHQpLGk9W107cmV0dXJue29uOmMub24sZW1pdDpjLmVtaXQsZ2V0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gYy5nZXRTdGF0ZSgpfSxhZGQ6ZnVuY3Rpb24odCl7aWYoIWUodCkpdGhyb3dcImNvbXBvbmVudHMgc2hvdWxkIGJlIGFuIG9iamVjdFwiO09iamVjdC5hc3NpZ24obix0KX0sdXNlOmZ1bmN0aW9uKG4pe2lmKCFvKG4pKXRocm93XCJwbHVnaW5zIHNob3VsZCBiZSBhIGZ1bmN0aW9uXCI7dS5wdXNoKG4pfSxoeWRyYXRlOmZ1bmN0aW9uKG4pe3JldHVybiBjLmh5ZHJhdGUobil9LG1vdW50OmZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiZGF0YS1jb21wb25lbnRcIiksdD1bXS5jb25jYXQodCk7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe2Zvcih2YXIgYT10W3JdLGY9W10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW1wiK2ErXCJdXCIpKSxzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PWYucG9wKCkscj10LmdldEF0dHJpYnV0ZShhKS5zcGxpdCgvXFxzLykscz0wO3M8ci5sZW5ndGg7cysrKXt2YXIgdj1uW3Jbc11dO2lmKHYpe3QucmVtb3ZlQXR0cmlidXRlKGEpO3RyeXt2YXIgZD11LnJlZHVjZShmdW5jdGlvbihuLHIpe3ZhciBvPXIodCxjKTtyZXR1cm4gZShvKT9PYmplY3QuYXNzaWduKG4sbyk6bn0se30pLG09dih0LE9iamVjdC5hc3NpZ24oe30sZCxjKSk7byhtLnVubW91bnQpJiZpLnB1c2gobSl9Y2F0Y2gobil7Y29uc29sZS5lcnJvcihuKSxjLmVtaXQoXCJlcnJvclwiLHtlcnJvcjpufSksYy5oeWRyYXRlKHtlcnJvcjp2b2lkIDB9KX19fX07Zi5sZW5ndGg7KXMoKTtjLmVtaXQoXCJtb3VudFwiKX19LHVubW91bnQ6ZnVuY3Rpb24oKXtmb3IodmFyIG49aS5sZW5ndGgtMTtuPi0xO24tLSl7dmFyIHQ9aVtuXSxyPXQuc3ViczsoMCx0LnVubW91bnQpKHQubm9kZSksci5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG4oKX0pLGkuc3BsaWNlKG4sMSl9Yy5lbWl0KFwidW5tb3VudFwiKX19fWV4cG9ydHt1IGFzIGNvbXBvbmVudCxjIGFzIHBpY29hcHB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGljb2FwcC5lcy5qcy5tYXBcbiIsIlxuLyoqXG4gKiBBbiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpIGFsdGVybmF0aXZlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3Mgc29tZXRoaW5nIHdpdGggYSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzbGljZVxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlRW5kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3MsIHNsaWNlLCBzbGljZUVuZCkge1xuICB2YXIgcmV0ID0gW107XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcblxuICBpZiAoMCA9PT0gbGVuKSByZXR1cm4gcmV0O1xuXG4gIHZhciBzdGFydCA9IHNsaWNlIDwgMFxuICAgID8gTWF0aC5tYXgoMCwgc2xpY2UgKyBsZW4pXG4gICAgOiBzbGljZSB8fCAwO1xuXG4gIGlmIChzbGljZUVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuID0gc2xpY2VFbmQgPCAwXG4gICAgICA/IHNsaWNlRW5kICsgbGVuXG4gICAgICA6IHNsaWNlRW5kXG4gIH1cblxuICB3aGlsZSAobGVuLS0gPiBzdGFydCkge1xuICAgIHJldFtsZW4gLSBzdGFydF0gPSBhcmdzW2xlbl07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4iLCJ2YXIgbixlLGksbyx0LHIsZixkLHAsdT1bXTtmdW5jdGlvbiB3KG4sYSl7cmV0dXJuIGU9d2luZG93LnBhZ2VYT2Zmc2V0LG89d2luZG93LnBhZ2VZT2Zmc2V0LHI9d2luZG93LmlubmVySGVpZ2h0LGQ9d2luZG93LmlubmVyV2lkdGgsdm9pZCAwPT09aSYmKGk9ZSksdm9pZCAwPT09dCYmKHQ9byksdm9pZCAwPT09cCYmKHA9ZCksdm9pZCAwPT09ZiYmKGY9ciksKGF8fG8hPT10fHxlIT09aXx8ciE9PWZ8fGQhPT1wKSYmKCFmdW5jdGlvbihuKXtmb3IodmFyIHc9MDt3PHUubGVuZ3RoO3crKyl1W3ddKHt4OmUseTpvLHB4OmkscHk6dCx2aDpyLHB2aDpmLHZ3OmQscHZ3OnB9LG4pfShuKSxpPWUsdD1vLGY9cixwPWQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSh3KX1leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlKXtyZXR1cm4gdS5pbmRleE9mKGUpPDAmJnUucHVzaChlKSxuPW58fHcocGVyZm9ybWFuY2Uubm93KCkpLHt1cGRhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gdyhwZXJmb3JtYW5jZS5ub3coKSwhMCksdGhpc30sZGVzdHJveTpmdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihlKSwxKX19fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3JyYWYuZXMuanMubWFwXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlLG4pe3JldHVybiBuPW58fHt9LG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0LG89W10sdT1bXSxpPXt9LGE9ZnVuY3Rpb24oKXtyZXR1cm57b2s6Mj09KHMuc3RhdHVzLzEwMHwwKSxzdGF0dXNUZXh0OnMuc3RhdHVzVGV4dCxzdGF0dXM6cy5zdGF0dXMsdXJsOnMucmVzcG9uc2VVUkwsdGV4dDpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpfSxqc29uOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCkudGhlbihKU09OLnBhcnNlKX0sYmxvYjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3MucmVzcG9uc2VdKSl9LGNsb25lOmEsaGVhZGVyczp7a2V5czpmdW5jdGlvbigpe3JldHVybiBvfSxlbnRyaWVzOmZ1bmN0aW9uKCl7cmV0dXJuIHV9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gaVtlLnRvTG93ZXJDYXNlKCldfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKWluIGl9fX19O2Zvcih2YXIgbCBpbiBzLm9wZW4obi5tZXRob2R8fFwiZ2V0XCIsZSwhMCkscy5vbmxvYWQ9ZnVuY3Rpb24oKXtzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSxmdW5jdGlvbihlLG4sdCl7by5wdXNoKG49bi50b0xvd2VyQ2FzZSgpKSx1LnB1c2goW24sdF0pLGlbbl09aVtuXT9pW25dK1wiLFwiK3Q6dH0pLHQoYSgpKX0scy5vbmVycm9yPXIscy53aXRoQ3JlZGVudGlhbHM9XCJpbmNsdWRlXCI9PW4uY3JlZGVudGlhbHMsbi5oZWFkZXJzKXMuc2V0UmVxdWVzdEhlYWRlcihsLG4uaGVhZGVyc1tsXSk7cy5zZW5kKG4uYm9keXx8bnVsbCl9KX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2gubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHQgZnJvbVwic3JyYWZcIjtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyLG8pe3JldHVybiB2b2lkIDA9PT1vJiYobz17fSksZnVuY3Rpb24oZSxuKXt2YXIgYT0hMSxpPXBhcnNlRmxvYXQoci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRocmVzaG9sZFwiKXx8by50aHJlc2hvbGR8fDApO3JldHVybiB0KGZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLG89YXJndW1lbnRzLmxlbmd0aDtvLS07KXRbb109YXJndW1lbnRzW29dO3ZhciBkPXRbMF0saD1kLnksbD1kLnZoLHA9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSx1PXAudG9wK2gsZj1pPj0uNT9pOmkqbCx2PXUrcC5oZWlnaHQtZj49aCYmdStmPD1oK2w7diYmIWE/KGE9ITAsZSYmZS5hcHBseSh2b2lkIDAsdCkpOiF2JiZhJiYoYT0hMSxuJiZuLmFwcGx5KHZvaWQgMCx0KSl9KX19XG4vLyMgc291cmNlTWFwcGluZ1VSTD12c2JsLmVzLmpzLm1hcFxuIiwiaW1wb3J0IHsgcGljb2FwcCB9IGZyb20gJ3BpY29hcHAnXG5cbmltcG9ydCBzbGF0ZXJXZWxjb21lIGZyb20gJ0AvY29tcG9uZW50cy9zbGF0ZXItd2VsY29tZS5qcydcblxuaW1wb3J0IGhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvaGVhZGVyLmpzJ1xuaW1wb3J0IHByb2R1Y3RTZWxlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3Qtc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IGNhcnREcmF3ZXIgZnJvbSAnQC9jb21wb25lbnRzL2NhcnREcmF3ZXIuanMnXG5pbXBvcnQgY2FydERyYXdlckl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL2NhcnREcmF3ZXJJdGVtLmpzJ1xuaW1wb3J0IGFjY291bnRMb2dpbiBmcm9tICdAL2NvbXBvbmVudHMvYWNjb3VudExvZ2luLmpzJ1xuaW1wb3J0IHByb2R1Y3QgZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3QuanMnXG5pbXBvcnQgcHJvZHVjdENvdW50ZXIgZnJvbSAnQC9jb21wb25lbnRzL3Byb2R1Y3QtY291bnRlci5qcydcblxuY29uc3Qgc3RhdGUgPSB7XG4gIGNhcnRPcGVuOiBmYWxzZVxufVxuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBzbGF0ZXJXZWxjb21lLFxuICBhY2NvdW50TG9naW4sXG4gIGhlYWRlcixcbiAgcHJvZHVjdFNlbGVjdGlvbixcbiAgY2FydERyYXdlcixcbiAgY2FydERyYXdlckl0ZW0sXG4gIHByb2R1Y3QsXG4gIHByb2R1Y3RDb3VudGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBpY29hcHAoY29tcG9uZW50cywgc3RhdGUpXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBsb2dpbiA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWxvZ2luLWRpYWxvZycpXG4gIGNvbnN0IHJlY292ZXIgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLWRpYWxvZycpXG4gIGNvbnN0IHJlY292ZXJMaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjb3Zlci10cmlnZ2VyJylcbiAgY29uc3QgY2FuY2VsUmVjb3ZlckxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZWNvdmVyLWNhbmNlbCcpXG5cbiAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgY29uc3QgcmVjb3ZlcklzVGFyZ2V0ID0gd2luZG93LmxvY2F0aW9uLmhhc2gubWF0Y2goL1xcI3JlY292ZXIvKSA/IHRydWUgOiBmYWxzZVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG4gIGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVjb3Zlci1zdWNjZXNzJykgIT09IG51bGxcblxuICBpZiAocmVjb3ZlcklzVGFyZ2V0IHx8IHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgbG9naW4uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHJlY292ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfSBlbHNlIHtcbiAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICB9XG5cbiAgcmVjb3ZlckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICByZWNvdmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH0pXG5cbiAgY2FuY2VsUmVjb3ZlckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJlY292ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH0pXG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcbmltcG9ydCB7IGdldFNpemVkSW1hZ2VVcmwsIGltYWdlU2l6ZSB9IGZyb20gJ0AvbGliL2ltYWdlcy5qcydcbmltcG9ydCB7IGZvcm1hdE1vbmV5IH0gZnJvbSAnQC9saWIvY3VycmVuY3kuanMnXG5pbXBvcnQgYXBwIGZyb20gJ0AvYXBwLmpzJ1xuXG5jb25zdCBYID0gYDxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudGNvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiM1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO292ZXJmbG93OnZpc2libGU7XCI+PHBhdGggZD1cIk0xLjA2MDY2MDE3MTc3OTgyMTIgMS4wNjA2NjAxNzE3Nzk4MjEyIEwxNC45MzkzMzk4MjgyMjAxNzkgMTQuOTM5MzM5ODI4MjIwMTc5XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTQuOTM5MzM5ODI4MjIwMTc5IDEuMDYwNjYwMTcxNzc5ODIxMiBMMS4wNjA2NjAxNzE3Nzk4MjEyIDE0LjkzOTMzOTgyODIyMDE3OVwiPjwvcGF0aD48L3N2Zz5gXG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0gKHtcbiAgdmFyaWFudF9pZDogaWQsXG4gIHByb2R1Y3RfdGl0bGU6IHRpdGxlLFxuICBsaW5lX3ByaWNlOiBwcmljZSxcbiAgdmFyaWFudF90aXRsZTogY29sb3IsXG4gIGltYWdlLFxuICB1cmwsXG4gIHF1YW50aXR5LFxuICAuLi5pdGVtXG59KSB7XG4gIGNvbnN0IGltZyA9IGltYWdlID8gZ2V0U2l6ZWRJbWFnZVVybChcbiAgICBpbWFnZS5yZXBsYWNlKCcuJyArIGltYWdlU2l6ZShpbWFnZSksICcnKSwgJzIwMHgnIC8vIFRPRE8gaGFja3kgYWZcbiAgKSA6ICdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vUjlPUzI5eEpiLTgvMjAwMHgxMzMzJ1xuXG4gIHJldHVybiBgXG48ZGl2IGNsYXNzPSdjYXJ0LWRyYXdlcl9faXRlbScgZGF0YS1jb21wb25lbnQ9J2NhcnREcmF3ZXJJdGVtJyBkYXRhLWlkPSR7aWR9PlxuICA8ZGl2IGNsYXNzPSdmIGFpYyB3LTEwMCc+XG4gICAgPGEgaHJlZj0nJHt1cmx9Jz5cbiAgICAgIDxpbWcgc3JjPScke2ltZ30nIC8+XG4gICAgPC9hPlxuICAgIDxkaXYgY2xhc3M9J19fY29udGVudCBwbDEgZiB5IGFpcyBqY2Igdy0xMDAnPlxuICAgICAgPGRpdiBjbGFzcz0ndy0xMDAnPlxuICAgICAgICA8YSBocmVmPScke3VybH0nIGNsYXNzPSdzZXJpZiBtdjAgcCBtdjAnPiR7dGl0bGV9PC9hPlxuICAgICAgICAke2NvbG9yID8gYDxkaXYgY2xhc3M9J3hzbWFsbCBzYW5zIGNhcHMgdHJhY2sgY20gbXYwMjUgYm9vayc+JHtjb2xvci5zcGxpdCgnOicpWzBdfTwvZGl2PmAgOiBgYH1cbiAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1zZXR0aW5ncyc+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nZiBhaWMnPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY2FydC1xdWFudGl0eSBqcy1yZW1vdmUtc2luZ2xlIHB4MDUnPi08L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz0nanMtc2luZ2xlLXF1YW50aXR5IGlucHV0LXF0eSBhc2Rhc2QnIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9XCIke3F1YW50aXR5fVwiXG4gICAgICAgICAgICBtaW49XCIwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJ0LXF1YW50aXR5IGpzLWFkZC1zaW5nbGUgcHgwNSc+KzwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3NtYWxsIHNhbnMgdHJhY2sgbXQwMjUgbWIwNSBib29rJz4ke2Zvcm1hdE1vbmV5KHByaWNlKX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uLS1yZXNldCBqcy1yZW1vdmUtaXRlbSc+JHtYfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYFxufVxuXG5mdW5jdGlvbiByZW5kZXJJdGVtcyAoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgaXRlbXMucmVkdWNlKChtYXJrdXAsIGl0ZW0pID0+IHtcbiAgICAgIG1hcmt1cCArPSBjcmVhdGVJdGVtKGl0ZW0pXG4gICAgICByZXR1cm4gbWFya3VwXG4gICAgfSwgJycpXG4gICkgOiAoXG4gICAgYDxkaXYgY2xhc3M9J3B2MSc+PHAgY2xhc3M9J3B2MSBtdjA1IHNhbnMgc21hbGwgY20gaSBhYyc+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPjwvZGl2PmBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBvdmVybGF5ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtb3ZlcmxheScpXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtY2xvc2UnKVxuICBjb25zdCBzdWJ0b3RhbCA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLXN1YnRvdGFsJylcbiAgY29uc3QgaXRlbXNSb290ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtaXRlbXMnKVxuICBjb25zdCBsb2FkaW5nID0gaXRlbXNSb290LmlubmVySFRNTFxuXG4gIGNvbnN0IHJlbmRlciA9IChjYXJ0KSA9PiB7XG4gICAgaXRlbXNSb290LmlubmVySFRNTCA9IHJlbmRlckl0ZW1zKGNhcnQuaXRlbXMpXG4gICAgc3VidG90YWwuaW5uZXJIVE1MID0gZm9ybWF0TW9uZXkoY2FydC50b3RhbF9wcmljZSlcbiAgfVxuXG4gIGNvbnN0IG9wZW4gPSAoY2FydCkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICBpdGVtc1Jvb3QuaW5uZXJIVE1MID0gbG9hZGluZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJylcbiAgICAgIHNldFRpbWVvdXQocmVuZGVyKGNhcnQpLCAxMClcbiAgICAgIGFwcC5tb3VudCgpXG4gICAgfSwgNTApXG4gIH1cblxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxuICAgICAgYXBwLmh5ZHJhdGUoe2NhcnRPcGVuOiBmYWxzZX0pXG4gICAgfSwgNDAwKVxuICB9XG5cbiAgcmVuZGVyKGN0eC5nZXRTdGF0ZSgpLmNhcnQpXG5cbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKVxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKVxuXG4gIGN0eC5vbignY2FydDp0b2dnbGUnLCAoeyBjYXJ0LCBjYXJ0T3BlbiB9KSA9PiB7XG4gICAgY2FydE9wZW4gJiYgb3BlbihjYXJ0KVxuICB9KVxuICBjdHgub24oJ2NhcnQ6dXBkYXRlZCcsICgpID0+IHtcbiAgICByZW5kZXIoY3R4LmdldFN0YXRlKCkuY2FydClcbiAgICBhcHAubW91bnQoKVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyByZW1vdmVBZGRvbiwgdXBkYXRlQWRkb24gfSBmcm9tICdAL2xpYi9jYXJ0LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZW1vdmUtaXRlbScpXG4gIGNvbnN0IGRlY3JlYXNlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVtb3ZlLXNpbmdsZScpXG4gIGNvbnN0IGluY3JlYXNlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtYWRkLXNpbmdsZScpXG4gIC8vIGNvbnN0IGN1cnJlbnRRdHkgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zaW5nbGUtcXVhbnRpdHknKS5pbm5lckhUTUxcbiAgY29uc3QgaW5wdXRRdHkgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1xdHknKVxuICBjb25zdCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZW1vdmVBZGRvbihpZClcbiAgfSlcblxuICBkZWNyZWFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHVwZGF0ZUFkZG9uKGlkLCBwYXJzZUludChpbnB1dFF0eSkgLSAxKVxuICB9KVxuXG4gIGluY3JlYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlQWRkb24oaWQsIHBhcnNlSW50KGlucHV0UXR5KSArIDEpXG4gIH0pXG5cbiAgLy91cGRhdGUgY2FydCBvbmlucHV0XG4gIGlucHV0UXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgIGUgPT4ge1xuICAgIHVwZGF0ZUFkZG9uKGlkLCBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgKyAxKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbn0pXG4iLCJpbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICdwaWNvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQoKG5vZGUsIGN0eCkgPT4ge1xuICBjb25zdCBjYXJ0Q291bnQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jYXJ0LWNvdW50JylcbiAgY29uc3QgY2FydFRvZ2dsZXMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1jYXJ0LWRyYXdlci10b2dnbGUnKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydFRvZ2dsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYXJ0VG9nZ2xlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIGN0eC5lbWl0KCdjYXJ0OnRvZ2dsZScsIHN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0T3BlbjogIXN0YXRlLmNhcnRPcGVuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGN0eC5vbignY2FydDp1cGRhdGVkJywgc3RhdGUgPT4ge1xuICAgIGNhcnRDb3VudC5pbm5lckhUTUwgPSBzdGF0ZS5jYXJ0Lml0ZW1fY291bnRcbiAgfSlcblxuICBjYXJ0Q291bnQuaW5uZXJIVE1MID0gY3R4LmdldFN0YXRlKCkuY2FydC5pdGVtX2NvdW50XG59KVxuIiwiaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAncGljb2FwcCdcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcblxuICBjb25zdCBkZWNyZWFzZSA9IG5vZGUucXVlcnlTZWxlY3RvcignLmpzLWNvdW50ZXItcmVtb3ZlJylcbiAgY29uc3QgaW5jcmVhc2UgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb3VudGVyLWFkZCcpXG4gIGNvbnN0IHF1YW50aXR5ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtY291bnRlci1xdWFudGl0eScpXG5cbiAgY29uc3QgbWluID0gcGFyc2VJbnQocXVhbnRpdHkuYXR0cmlidXRlcy5taW4udmFsdWUpXG4gIGNvbnN0IG1heCA9IHBhcnNlSW50KHF1YW50aXR5LmF0dHJpYnV0ZXMubWF4LnZhbHVlKVxuXG4gIGxldCBjb3VudCA9IHBhcnNlSW50KHF1YW50aXR5LnZhbHVlKVxuXG4gIGNvbnN0IHNldCA9IChpKSA9PiB7XG4gICAgY291bnQgPSBNYXRoLm1heChtaW4sIE1hdGgubWluKGksIG1heCB8fCAxMDAwMCkpXG4gICAgcXVhbnRpdHkudmFsdWUgPSBjb3VudFxuICB9XG5cbiAgZGVjcmVhc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXQoLS1jb3VudClcbiAgfSlcblxuICBpbmNyZWFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldCgrK2NvdW50KVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBhZGRWYXJpYW50IH0gZnJvbSAnQC9saWIvY2FydC5qcydcbmltcG9ydCByYWRpbyBmcm9tICdAL2xpYi9yYWRpby5qcydcbmltcG9ydCBvcHRpb25zIGZyb20gJ0AvbGliL29wdGlvbnMuanMnXG5pbXBvcnQgZ2V0UHJvZHVjdEpzb24gZnJvbSAnQC9saWIvZ2V0UHJvZHVjdEpzb24uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgoeyBub2RlIH0pID0+IHtcbiAgY29uc3Qgb3B0cyA9IG9wdGlvbnMobm9kZSlcblxuICAvLyBjYWNoZVxuICBnZXRQcm9kdWN0SnNvbigpXG5cbiAgb3B0cy5vblVwZGF0ZShzdGF0ZSA9PiB7XG4gICAgZ2V0UHJvZHVjdEpzb24oKS50aGVuKGpzb24gPT4ge1xuICAgICAgY29uc3QgdmFyaWFudCA9IGpzb24udmFyaWFudHMuZmlsdGVyKHYgPT4gdi5pZCA9PSBzdGF0ZS5pZClbMF1cbiAgICB9KVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5pbXBvcnQgeyBhZGRWYXJpYW50IH0gZnJvbSAnQC9saWIvY2FydC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50KChub2RlLCBjdHgpID0+IHtcbiAgY29uc3QganNvbiA9IEpTT04ucGFyc2Uobm9kZS5xdWVyeVNlbGVjdG9yKCcuanMtcHJvZHVjdC1qc29uJykuaW5uZXJIVE1MKVxuICBjb25zdCBmb3JtID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdmb3JtJylcblxuICBjb25zdCB7IHNlbGVjdGVkT3JGaXJzdEF2YWlsYWJsZVZhcmlhbnQsIHByb2R1Y3QgfSA9IGpzb25cbiAgbGV0IGN1cnJlbnRWYXJpYW50ID0gcHJvZHVjdC52YXJpYW50cy5maWx0ZXIodiA9PiB2LmlkID09PSBzZWxlY3RlZE9yRmlyc3RBdmFpbGFibGVWYXJpYW50KVswXVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY3VycmVudFZhcmlhbnQgPSBwcm9kdWN0LnZhcmlhbnRzLmZpbHRlcih2ID0+IHYuaWQgPT09IHBhcnNlSW50KGZvcm0uZWxlbWVudHMuaWQudmFsdWUpKVswXVxuXG4gICAgYWRkVmFyaWFudChjdXJyZW50VmFyaWFudCwgZm9ybS5lbGVtZW50cy5xdWFudGl0eS52YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhqc29uKVxuICB9KVxufSlcbiIsImltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ3BpY29hcHAnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCgobm9kZSwgY3R4KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzbGF0ZXItd2VsY29tZSBtb3VudGVkJylcblxuICByZXR1cm4gbm9kZSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NsYXRlci13ZWxjb21lIHVubW91bnRlZCcpXG4gIH1cbn0pXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcydcbmltcG9ydCAnQC9saWIvc2VsZWN0LmpzJ1xuaW1wb3J0IGxhemltIGZyb20gJ2xhemltJ1xuaW1wb3J0IGFwcCBmcm9tICdAL2FwcC5qcydcbmltcG9ydCByb3V0ZXIgZnJvbSAnQC9yb3V0ZXIuanMnXG5pbXBvcnQgeyBmZXRjaENhcnQgfSBmcm9tICdAL2xpYi9jYXJ0LmpzJ1xuXG4vKipcbiAqIHN0b3JlIGJpbmRpbmcgZm5cbiAqL1xuY29uc3QgaW1hZ2VzID0gbGF6aW0oKVxuXG4vKipcbiAqIGJpbmQgb24gcGFnZSBsb2FkXG4gKi9cbmltYWdlcygpXG5cbnJvdXRlci5vbignYWZ0ZXInLCAoKSA9PiB7XG4gIGFwcC51bm1vdW50KClcbiAgYXBwLm1vdW50KClcblxuICAvKipcbiAgICogYmluZCBuZXcgaW1hZ2VzXG4gICAqL1xuICBpbWFnZXMoKVxufSlcblxuLyoqXG4gKiBsb2FkIGFueSBkYXRhIHRoYXQgeW91ciBzaXRlIG5lZWRzIG9uIGZpc3QgbG9hZFxuICovXG5Qcm9taXNlLmFsbChbXG4gIGZldGNoQ2FydCgpXG5dKS50aGVuKChbIGNhcnQgXSkgPT4ge1xuICAvKipcbiAgICogYWRkIHRoZSBjYXJ0IGRhdGEgdG8gdGhlIHBpY29hcHAgaW5zdGFuY2VcbiAgICovXG4gIGFwcC5oeWRyYXRlKHsgY2FydCB9KVxuXG4gIC8qKlxuICAgKiBtb3VudCBhbnkgY29tcG9uZW50cyBkZWZpbmVkIG9uIHRoZSBwYWdlXG4gICAqL1xuICBhcHAubW91bnQoKVxufSlcbiIsImltcG9ydCBmZXRjaCBmcm9tICd1bmZldGNoJ1xuaW1wb3J0IGFwcCBmcm9tICdAL2FwcC5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFZhcmlhbnQgKHZhcmlhbnQsIHF1YW50aXR5KSB7XG4gIGNvbnN0IG51bUF2YWlsYWJsZSA9IHZhcmlhbnQuaW52ZW50b3J5X3BvbGljeSA9PT0gJ2RlbnknICYmIHZhcmlhbnQuaW52ZW50b3J5X21hbmFnZW1lbnQgPT09ICdzaG9waWZ5JyA/IChcbiAgICB2YXJpYW50LmludmVudG9yeV9xdWFudGl0eVxuICApIDogbnVsbCAvLyBudWxsIG1lYW5zIHRoZXkgY2FuIGFkZCBhcyBtYW55IGFzIHRoZXkgd2FudFxuXG4gIHJldHVybiBmZXRjaENhcnQoKS50aGVuKCh7IGl0ZW1zIH0pID0+IHtcbiAgICBjb25zdCBleGlzdGluZyA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHZhcmlhbnQuaWQpWzBdIHx8IHt9XG4gICAgY29uc3QgbnVtUmVxdWVzdGVkID0gKGV4aXN0aW5nLnF1YW50aXR5IHx8IDApICsgcXVhbnRpdHlcblxuICAgIGlmIChudW1BdmFpbGFibGUgIT09IG51bGwgJiYgbnVtUmVxdWVzdGVkID4gbnVtQXZhaWxhYmxlKSB7XG4gICAgICBjb25zdCBlcnIgPSBgVGhlcmUgYXJlIG9ubHkgJHtudW1BdmFpbGFibGV9IG9mIHRoYXQgcHJvZHVjdCBhdmFpbGFibGUsIHJlcXVlc3RlZCAke251bVJlcXVlc3RlZH0uYFxuICAgICAgYXBwLmVtaXQoJ2Vycm9yJywgZXJyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFkZEl0ZW1CeUlkKHZhcmlhbnQuaWQsIHF1YW50aXR5KVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFkZG9uIChpZCwgcXVhbnRpdHkpIHtcbiAgcmV0dXJuIGZldGNoQ2FydCgpLnRoZW4oKHsgaXRlbXMgfSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpdGVtc1tpXS52YXJpYW50X2lkID09PSBwYXJzZUludChpZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZUFkZG9uKGkgKyAxLCBxdWFudGl0eSkgLy8gc2hvcGlmeSBjYXJ0IGlzIGEgMS1iYXNlZCBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFkZG9uIChpZCkge1xuICByZXR1cm4gdXBkYXRlQWRkb24oaWQsIDApXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUFkZG9uIChsaW5lLCBxdWFudGl0eSkge1xuICBhcHAuZW1pdCgnY2FydDp1cGRhdGluZycpXG5cbiAgcmV0dXJuIGZldGNoKCcvY2FydC9jaGFuZ2UuanMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxpbmUsIHF1YW50aXR5IH0pXG4gIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oY2FydCA9PiB7XG4gICAgYXBwLmh5ZHJhdGUoeyBjYXJ0OiBjYXJ0IH0pXG4gICAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRlZCcsIHsgY2FydDogY2FydCB9KVxuICAgIHJldHVybiBjYXJ0XG4gIH0pXG59XG5cbi8qKlxuICogV2FybmluZzogdGhpcyBkb2VzIG5vdCBjaGVjayBhdmFpbGFibGUgcHJvZHVjdHMgZmlyc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1CeUlkIChpZCwgcXVhbnRpdHkpIHtcbiAgYXBwLmVtaXQoJ2NhcnQ6dXBkYXRpbmcnKVxuXG4gIHJldHVybiBmZXRjaCgnL2NhcnQvYWRkLmpzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCwgcXVhbnRpdHkgfSlcbiAgfSkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGl0ZW0gPT4ge1xuICAgIHJldHVybiBmZXRjaENhcnQoKS50aGVuKGNhcnQgPT4ge1xuICAgICAgYXBwLmh5ZHJhdGUoeyBjYXJ0OiBjYXJ0IH0pXG4gICAgICBhcHAuZW1pdCgnY2FydDp1cGRhdGVkJylcbiAgICAgIGFwcC5lbWl0KCdjYXJ0OnRvZ2dsZScsIHN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjYXJ0T3BlbjogIXN0YXRlLmNhcnRPcGVuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBhcHAuZW1pdCgndXBkYXRlZCcsIHsgaXRlbSwgY2FydCB9KVxuICAgICAgcmV0dXJuIHsgaXRlbSwgY2FydCB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQ2FydCAoKSB7XG4gIHJldHVybiBmZXRjaCgnL2NhcnQuanMnLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG59XG4iLCIvKipcbiAqIEN1cnJlbmN5IEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBIGNvbGxlY3Rpb24gb2YgdXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGhlbHAgd2l0aCBjdXJyZW5jeSBmb3JtYXR0aW5nXG4gKlxuICogQ3VycmVudCBjb250ZW50c1xuICogLSBmb3JtYXRNb25leSAtIFRha2VzIGFuIGFtb3VudCBpbiBjZW50cyBhbmQgcmV0dXJucyBpdCBhcyBhIGZvcm1hdHRlZCBkb2xsYXIgdmFsdWUuXG4gKlxuICovXG5cbi8qKlxuICogRm9ybWF0IG1vbmV5IHZhbHVlcyBiYXNlZCBvbiB5b3VyIHNob3AgY3VycmVuY3kgc2V0dGluZ3NcbiAqIEBwYXJhbSAge051bWJlcnxzdHJpbmd9IGNlbnRzIC0gdmFsdWUgaW4gY2VudHMgb3IgZG9sbGFyIGFtb3VudCBlLmcuIDMwMCBjZW50c1xuICogb3IgMy4wMCBkb2xsYXJzXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGZvcm1hdCAtIHNob3AgbW9uZXlfZm9ybWF0IHNldHRpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gdmFsdWUgLSBmb3JtYXR0ZWQgdmFsdWVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9uZXkgKGNlbnRzLCBmb3JtYXQgPSAnJHt7YW1vdW50fX0nKSB7XG4gIGlmICh0eXBlb2YgY2VudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgY2VudHMgPSBjZW50cy5yZXBsYWNlKCcuJywgJycpXG4gIH1cblxuICBsZXQgdmFsdWUgPSAnJ1xuICBjb25zdCBwbGFjZWhvbGRlclJlZ2V4ID0gL1xce1xce1xccyooXFx3KylcXHMqXFx9XFx9L1xuXG4gIGZ1bmN0aW9uIGZvcm1hdFdpdGhEZWxpbWl0ZXJzIChudW1iZXIsIHByZWNpc2lvbiwgdGhvdXNhbmRzLCBkZWNpbWFsKSB7XG4gICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDJcbiAgICB0aG91c2FuZHMgPSB0aG91c2FuZHMgfHwgJywnXG4gICAgZGVjaW1hbCA9IGRlY2ltYWwgfHwgJy4nXG5cbiAgICBpZiAoaXNOYU4obnVtYmVyKSB8fCBudW1iZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBudW1iZXIgPSAobnVtYmVyIC8gMTAwLjApLnRvRml4ZWQocHJlY2lzaW9uKVxuXG4gICAgY29uc3QgcGFydHMgPSBudW1iZXIuc3BsaXQoJy4nKVxuICAgIGNvbnN0IGRvbGxhcnNBbW91bnQgPSBwYXJ0c1swXS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMScgKyB0aG91c2FuZHMpXG4gICAgY29uc3QgY2VudHNBbW91bnQgPSBwYXJ0c1sxXSA/IChkZWNpbWFsICsgcGFydHNbMV0pIDogJydcblxuICAgIHJldHVybiBkb2xsYXJzQW1vdW50ICsgY2VudHNBbW91bnRcbiAgfVxuXG4gIHN3aXRjaCAoZm9ybWF0Lm1hdGNoKHBsYWNlaG9sZGVyUmVnZXgpWzFdKSB7XG4gICAgY2FzZSAnYW1vdW50JzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFscyc6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhbW91bnRfd2l0aF9zcGFjZV9zZXBhcmF0b3InOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMiwgJyAnLCAnLicpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Ftb3VudF9ub19kZWNpbWFsc193aXRoX2NvbW1hX3NlcGFyYXRvcic6XG4gICAgICB2YWx1ZSA9IGZvcm1hdFdpdGhEZWxpbWl0ZXJzKGNlbnRzLCAwLCAnLCcsICcuJylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYW1vdW50X25vX2RlY2ltYWxzX3dpdGhfc3BhY2Vfc2VwYXJhdG9yJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDAsICcgJylcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gZm9ybWF0LnJlcGxhY2UocGxhY2Vob2xkZXJSZWdleCwgdmFsdWUpXG59XG4iLCJjb25zdCBjYWNoZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFByb2R1Y3RKc29uIChcbiAgc2x1ZyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLnJldmVyc2UoKVswXSxcbiAgb3B0cyA9IHt9XG4pIHtcbiAgaWYgKGNhY2hlW3NsdWddICYmICFvcHRzLnJlZmV0Y2gpIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVbc2x1Z10pXG5cbiAgcmV0dXJuIGZldGNoKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL3Byb2R1Y3RzLycgKyBzbHVnICsgJy5qc29uJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoeyBwcm9kdWN0IH0pID0+IHtcbiAgICAgIGNhY2hlW3NsdWddID0gcHJvZHVjdFxuICAgICAgcmV0dXJuIHByb2R1Y3RcbiAgICB9KVxufVxuIiwiLyoqXG4gKiBJbWFnZSBIZWxwZXIgRnVuY3Rpb25zXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQSBjb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyB0aGF0IGhlbHAgd2l0aCBiYXNpYyBpbWFnZSBvcGVyYXRpb25zLlxuICpcbiAqL1xuXG4vKipcbiAqIFByZWxvYWRzIGFuIGltYWdlIGluIG1lbW9yeSBhbmQgdXNlcyB0aGUgYnJvd3NlcnMgY2FjaGUgdG8gc3RvcmUgaXQgdW50aWwgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGltYWdlcyAtIEEgbGlzdCBvZiBpbWFnZSB1cmxzXG4gKiBAcGFyYW0ge1N0cmluZ30gc2l6ZSAtIEEgc2hvcGlmeSBpbWFnZSBzaXplIGF0dHJpYnV0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlbG9hZCAoaW1hZ2VzLCBzaXplKSB7XG4gIGlmICh0eXBlb2YgaW1hZ2VzID09PSAnc3RyaW5nJykge1xuICAgIGltYWdlcyA9IFtpbWFnZXNdXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbWFnZSA9IGltYWdlc1tpXVxuICAgIGxvYWRJbWFnZShnZXRTaXplZEltYWdlVXJsKGltYWdlLCBzaXplKSlcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGFuZCBjYWNoZXMgYW4gaW1hZ2UgaW4gdGhlIGJyb3dzZXJzIGNhY2hlLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBBbiBpbWFnZSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZSAocGF0aCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBuZXcgSW1hZ2UoKS5zcmMgPSBwYXRoXG4gIC8qIGVzbGludC1lbmFibGUgKi9cbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBTaG9waWZ5IGltYWdlIGF0dHJpYnV0ZSBzaXplXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNyY1xuICogQHJldHVybnMge251bGx9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbWFnZVNpemUgKHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICB2YXIgbWF0Y2ggPSBzcmMubWF0Y2goLy4rXygoPzpwaWNvfGljb258dGh1bWJ8c21hbGx8Y29tcGFjdHxtZWRpdW18bGFyZ2V8Z3JhbmRlKXxcXGR7MSw0fXhcXGR7MCw0fXx4XFxkezEsNH0pW19cXC5AXS8pXG4gIC8qIGVzbGluZy1lbmFibGUgKi9cblxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2hbMV1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIFNob3BpZnkgc2l6ZSBhdHRyaWJ1dGUgdG8gYSBVUkxcbiAqXG4gKiBAcGFyYW0gc3JjXG4gKiBAcGFyYW0gc2l6ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplZEltYWdlVXJsIChzcmMsIHNpemUpIHtcbiAgaWYgKHNpemUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gc3JjXG4gIH1cblxuICBpZiAoc2l6ZSA9PT0gJ21hc3RlcicpIHtcbiAgICByZXR1cm4gcmVtb3ZlUHJvdG9jb2woc3JjKVxuICB9XG5cbiAgdmFyIG1hdGNoID0gc3JjLm1hdGNoKC9cXC4oanBnfGpwZWd8Z2lmfHBuZ3xibXB8Yml0bWFwfHRpZmZ8dGlmKShcXD92PVxcZCspPyQvaSlcblxuICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgcHJlZml4ID0gc3JjLnNwbGl0KG1hdGNoWzBdKVxuICAgIHZhciBzdWZmaXggPSBtYXRjaFswXVxuXG4gICAgcmV0dXJuIHJlbW92ZVByb3RvY29sKHByZWZpeFswXSArICdfJyArIHNpemUgKyBzdWZmaXgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvdG9jb2wgKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvaHR0cChzKT86LywgJycpXG59XG4iLCJpbXBvcnQgcmFkaW8gZnJvbSAnQC9saWIvcmFkaW8uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RTZWxlY3Rpb24gKG5vZGUsIG9wdHMpIHtcbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHNlbGVjdDogJ1tkYXRhLW9wdGlvbi1zZWxlY3RdJyxcbiAgICByYWRpbzogJ1tkYXRhLW9wdGlvbi1yYWRpb10nLFxuICAgIG1haW46ICdbZGF0YS1vcHRpb24tbWFpbl0nLFxuICB9LCBvcHRzKVxuXG4gIGNvbnN0IGxpc3RlbmVycyA9IFtdXG5cbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgb3B0aW9uczogW11cbiAgfVxuXG4gIGNvbnN0IHNlbGVjdHMgPSBzbGF0ZXIucXNhKG9wdHMuc2VsZWN0KVxuICBjb25zdCByYWRpb3MgPSBzbGF0ZXIucXNhKG9wdHMucmFkaW8pXG4gIGNvbnN0IG1haW4gPSBzbGF0ZXIucXMob3B0cy5tYWluKVxuXG4gIGlmICghbWFpbiB8fCAhbWFpbi5sZW5ndGgpIHRocm93ICdkYXRhLW9wdGlvbi1tYWluIGlzIG1pc3NpbmcnXG4gIGlmIChyYWRpb3MubGVuZ3RoID4gMykgdGhyb3cgJ3lvdSBoYXZlIG1vcmUgdGhhbiB0aHJlZSByYWRpbyBncm91cHMnXG4gIGlmIChzZWxlY3RzLmxlbmd0aCA+IDMpIHRocm93ICd5b3UgaGF2ZSBtb3JlIHRoYW4gdGhyZWUgc2VsZWN0IGlucHV0cydcblxuICBjb25zdCB2YXJpYW50cyA9IFtdLnNsaWNlLmNhbGwobWFpbi5jaGlsZHJlbikucmVkdWNlKCh2YXJpYW50cywgY2hpbGQpID0+IHtcbiAgICB2YXJpYW50c1tjaGlsZC5pbm5lckhUTUxdID0gY2hpbGQudmFsdWVcbiAgICByZXR1cm4gdmFyaWFudHNcbiAgfSwge30pXG5cbiAgc2VsZWN0cy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgaWYgKHNlbGVjdC5ub2RlTmFtZSAhPT0gJ1NFTEVDVCcpIHRocm93ICdkYXRhLW9wdGlvbi1zZWxlY3Qgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGluZGl2aWR1YWwgb3B0aW9uIHNlbGVjdG9ycydcblxuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoc2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWVcbiAgICBzdGF0ZS5vcHRpb25zW2luZGV4XSA9IHNlbGVjdC52YWx1ZVxuXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgc3RhdGUub3B0aW9uc1tpbmRleF0gPSBlLnRhcmdldC52YWx1ZVxuICAgICAgdXBkYXRlU2VsZWN0aW9uKClcbiAgICB9KVxuICB9KVxuXG4gIHJhZGlvcy5mb3JFYWNoKHIgPT4ge1xuICAgIGlmIChyLm5vZGVOYW1lID09PSAnSU5QVVQnKSB0aHJvdyAnZGF0YS1vcHRpb24tcmFkaW8gc2hvdWxkIGJlIGRlZmluZWQgb24gYSBwYXJlbnQgb2YgdGhlIHJhZGlvIGdyb3VwLCBub3QgdGhlIGlucHV0cyB0aGVtc2VsdmVzJ1xuXG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChyLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuICAgIGNvbnN0IGlucHV0cyA9IFtdLnNsaWNlLmNhbGwoci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSlcblxuICAgIC8vIHNldCBpbml0aWFsIHZhbHVlXG4gICAgaW5wdXRzLmZvckVhY2gociA9PiB7XG4gICAgICBpZiAoci5jaGVja2VkKSBzdGF0ZS5vcHRpb25zW2luZGV4XSA9IHIudmFsdWVcbiAgICB9KVxuXG4gICAgcmFkaW8oaW5wdXRzLCB2YWx1ZSA9PiB7XG4gICAgICBzdGF0ZS5vcHRpb25zW2luZGV4XSA9IHZhbHVlXG4gICAgICB1cGRhdGVTZWxlY3Rpb24oKVxuICAgIH0pXG4gIH0pXG5cbiAgdXBkYXRlU2VsZWN0aW9uKClcblxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3Rpb24gKCkge1xuICAgIHN0YXRlLmlkID0gdmFyaWFudHNbc3RhdGUub3B0aW9ucy5qb2luKCcgLyAnKV1cbiAgICBtYWluLnZhbHVlID0gc3RhdGUuaWRcbiAgICBmb3IgKGxldCBmbiBvZiBsaXN0ZW5lcnMpIGZuKHN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgc3RhdGUgKCkge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfSxcbiAgICBvblVwZGF0ZSAoZm4pIHtcbiAgICAgIGxpc3RlbmVycy5pbmRleE9mKGZuKSA8IDAgJiYgbGlzdGVuZXJzLnB1c2goZm4pXG4gICAgICByZXR1cm4gKCkgPT4gbGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lcnMuaW5kZXhPZihmbiksIDEpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYWRpbyAocmFkaW9zLCBjYikge1xuICByYWRpb3MubWFwKHIgPT4gci5vbmNsaWNrID0gZSA9PiBjYihlLnRhcmdldC52YWx1ZSkpXG59XG4iLCJpbXBvcnQgc2xpY2VkIGZyb20gJ3NsaWNlZCdcblxud2luZG93LnNsYXRlciA9IE9iamVjdC5hc3NpZ24od2luZG93LnNsYXRlciB8fCB7fSwge1xuICBxcyAocSwgY3R4KSB7XG4gICAgcmV0dXJuIChjdHggfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3IocSlcbiAgfSxcbiAgcXNhIChxLCBjdHgpIHtcbiAgICByZXR1cm4gc2xpY2VkKChjdHggfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocSkpXG4gIH0sXG4gIGdlYnRuIChxLCBjdHgpIHtcbiAgICByZXR1cm4gc2xpY2VkKChjdHggfHwgZG9jdW1lbnQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKHEpKVxuICB9LFxuICBnZWJpIChxKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHEpXG4gIH1cbn0pXG4iLCJpbXBvcnQgb3BlcmF0b3IgZnJvbSAnb3BlcmF0b3InXG5cbi8qKlxuICogb3BlcmF0b3IgaXMgYSB0aW55IFwiUEpBWFwiIGxpYnJhcnksIHBsZWFzZSBoYXZlIGEgbG9vayBhdCB0aGUgZG9jcyBmb3JcbiAqIG1vcmUgaW5mb1xuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzdHJhdHRvbmJhaWxleS9vcGVyYXRvclxuICovXG5jb25zdCByb3V0ZXIgPSBvcGVyYXRvcignI3Jvb3QnLCBbXG4gIC8qKlxuICAgKiBjcmVhdGVzIGEgcGFnZSB0cmFuc2l0aW9uXG4gICAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzdHJhdHRvbmJhaWxleS9vcGVyYXRvciN0cmFuc2l0aW9uLWFuaW1hdGlvblxuICAgKi9cbiAgKCkgPT4gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLXRyYW5zaXRpb25pbmcnKVxuICAgIHNldFRpbWVvdXQocmVzLCAyMDApXG4gICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXRyYW5zaXRpb25pbmcnKSwgMzAwKVxuICB9KVxuXSlcblxucm91dGVyLm9uKCdhZnRlcicsICh7IHRpdGxlLCBwYXRobmFtZSB9KSA9PiB7XG4gIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgcGF0aG5hbWUpXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBZkE7QUFDQTtBQWlCQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFTQTs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==