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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , core      = __webpack_require__(1)
  , ctx       = __webpack_require__(19)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(20)
  , defined = __webpack_require__(8);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store  = __webpack_require__(27)('wks')
  , uid    = __webpack_require__(28)
  , Symbol = __webpack_require__(5).Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(49);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(59);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var $          = __webpack_require__(0)
  , createDesc = __webpack_require__(11);
module.exports = __webpack_require__(26) ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(0).setDesc
  , has = __webpack_require__(12)
  , TAG = __webpack_require__(4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.default = connect;

var _observer = __webpack_require__(40);

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trigger() {
  this.setState({ _model_: this.model });
}

function createRender(proto, model) {
  var initailRender = proto.render;
  return function () {
    if (!this._run_) {
      if (model instanceof Function) {
        model = new model();
        this._isNewModelInstance_ = true;
      } else {
        this._isNewModelInstance_ = false;
      }
      delete proto.model;
      Object.defineProperty(proto, 'model', {
        enumerable: false,
        get: function get() {
          return model;
        }
      });
      var observer = new _observer2.default(model);
      this._run_ = observer.run(initailRender, trigger, this);
    }
    return this._run_.run();
  };
}

function createUnmount(proto) {
  var initailUnmount = proto.componentWillUnmount;
  return function () {
    var result = null;
    if (initailUnmount) {
      result = initailUnmount.call(this);
    }
    var observer = this.model._observer_;
    if (this._run_) {
      observer.stop(this._run_);
      this._run_ = null;
    }
    if (this._isNewModelInstance_) {
      observer.clearReference();
    }
    return result;
  };
}

function connect(model, component) {
  var proto = component.prototype;
  proto.render = createRender(proto, model);
  proto.componentWillUnmount = createUnmount(proto);
  return component;
}
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2)
  , core    = __webpack_require__(1)
  , fails   = __webpack_require__(6);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(43);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(21);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(9);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(24)
  , $export        = __webpack_require__(2)
  , redefine       = __webpack_require__(25)
  , hide           = __webpack_require__(10)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(13)
  , $iterCreate    = __webpack_require__(54)
  , setToStringTag = __webpack_require__(14)
  , getProto       = __webpack_require__(0).getProto
  , ITERATOR       = __webpack_require__(4)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(67);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(32);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(9);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ntils", [], factory);
	else if(typeof exports === 'object')
		exports["ntils"] = factory();
	else
		root["ntils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _utils = __webpack_require__(2);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = utils;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

exports.__esModule = true;
exports.noop = noop;
exports.toString = toString;
exports.getType = getType;
exports.isNull = isNull;
exports.trim = trim;
exports.replace = replace;
exports.startWith = startWith;
exports.contains = contains;
exports.endWith = endWith;
exports.has = has;
exports.isFunction = isFunction;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isElement = isElement;
exports.isText = isText;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isDate = isDate;
exports.isRegexp = isRegexp;
exports.toArray = toArray;
exports.toDate = toDate;
exports.each = each;
exports.formatDate = formatDate;
exports.copy = copy;
exports.clone = clone;
exports.mix = mix;
exports.final = final;
exports.keys = keys;
exports.create = create;
exports.setPrototypeOf = setPrototypeOf;
exports.getPrototypeOf = getPrototypeOf;
exports.deepEqual = deepEqual;
exports.fromTo = fromTo;
exports.newGuid = newGuid;
exports.map = map;
exports.setByPath = setByPath;
exports.getByPath = getByPath;
exports.unique = unique;
exports.getFunctionArgumentNames = getFunctionArgumentNames;
exports.short = short;
exports.firstUpper = firstUpper;
exports.escapeRegExp = escapeRegExp;
exports.toCamelCase = toCamelCase;
exports.toSplitCase = toSplitCase;
exports.htmlPrefilter = htmlPrefilter;
exports.parseHTML = parseHTML;
/**
 * 空函数
 */
function noop() {};

function toString(obj) {
  return Object.prototype.toString.call(obj);
}

function getType(obj) {
  var str = toString(obj);
  return (/^\[object (.+)\]$/i.exec(str)[1]
  );
}

/**
 * 验证一个对象是否为NULL
 * @method isNull
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isNull(obj) {
  var type = getType(obj);
  return type === 'Undefined' || type === 'Null';
};

/**
 * 除去字符串两端的空格
 * @method trim
 * @param  {String} str 源字符串
 * @return {String}     结果字符串
 * @static
 */
function trim(str) {
  if (isNull(str)) return str;
  if (str.trim) {
    return str.trim();
  } else {
    return str.replace(/(^[\\s]*)|([\\s]*$)/g, "");
  }
};

/**
 * 替换所有
 * @method replace
 * @param {String} str 源字符串
 * @param {String} str1 要替换的字符串
 * @param {String} str2 替换为的字符串
 * @static
 */
function replace(str, str1, str2) {
  if (isNull(str)) return str;
  return str.replace(new RegExp(str1, 'g'), str2);
};

/**
 * 从字符串开头匹配
 * @method startWith
 * @param {String} str1 源字符串
 * @param {String} str2 要匹配的字符串
 * @return {Boolean} 匹配结果
 * @static
 */
function startWith(str1, str2) {
  if (isNull(str1) || isNull(str2)) return false;
  return str1.indexOf(str2) === 0;
};

/**
 * 是否包含
 * @method contains
 * @param {String} str1 源字符串
 * @param {String} str2 检查包括字符串
 * @return {Boolean} 结果
 * @static
 */
function contains(str1, str2) {
  var self = this;
  if (isNull(str1) || isNull(str2)) return false;
  return str1.indexOf(str2) > -1;
};

/**
 * 从字符串结束匹配
 * @method endWidth
 * @param {String} str1 源字符串
 * @param {String} str2 匹配字符串
 * @return {Boolean} 匹配结果
 * @static
 */
function endWith(str1, str2) {
  if (isNull(str1) || isNull(str2)) return false;
  return str1.indexOf(str2) === str1.length - str2.length;
};

/**
 * 是否包含属性
 * @method hasProperty
 * @param  {Object}  obj  对象
 * @param  {String}  name 属性名
 * @return {Boolean}      结果
 * @static
 */
function has(obj, name) {
  if (isNull(obj) || isNull(name)) return false;
  return name in obj || obj.hasOwnProperty(name);
};
var hasProperty = exports.hasProperty = has;

/**
 * 验证一个对象是否为Function
 * @method isFunction
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isFunction(obj) {
  if (isNull(obj)) return false;
  return getType(obj) === "Function";
};

/**
 * 验证一个对象是否为String
 * @method isString
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isString(obj) {
  if (isNull(obj)) return false;
  return getType(obj) === 'String';
};

/**
 * 验证一个对象是否为Number
 * @method isNumber
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isNumber(obj) {
  if (isNull(obj)) return false;
  return getType(obj) === 'Number';
};

/**
 * 验证一个对象是否为Boolean
 * @method isBoolean
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isBoolean(obj) {
  if (isNull(obj)) return false;
  return getType(obj) === 'Boolean';
};

/**
 * 验证一个对象是否为HTML Element
 * @method isElement
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isElement(obj) {
  if (isNull(obj)) return false;
  if (win.Element) {
    return obj instanceof Element;
  } else {
    return obj.tagName && obj.nodeType && obj.nodeName && obj.attributes && obj.ownerDocument;
  }
};

/**
 * 验证一个对象是否为HTML Text Element
 * @method isText
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isText(obj) {
  if (isNull(obj)) return false;
  return obj instanceof Text;
};

/**
 * 验证一个对象是否为Object
 * @method isObject
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isObject(obj) {
  if (isNull(obj)) return false;
  var type = getType(obj);
  return type === 'Object' || type === 'Array';
};

/**
 * 验证一个对象是否为Array或伪Array
 * @method isArray
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isArray(obj) {
  if (isNull(obj)) return false;
  var v1 = getType(obj) === 'Array';
  var v2 = obj instanceof Array;
  var v3 = !isString(obj) && isNumber(obj.length) && isFunction(obj.splice);
  var v4 = !isString(obj) && isNumber(obj.length) && obj[0];
  return v1 || v2 || v3 || v4;
};

/**
 * 验证是不是一个日期对象
 * @method isDate
 * @param {Object} val   要检查的对象
 * @return {Boolean}           结果
 * @static
 */
function isDate(val) {
  if (isNull(val)) return false;
  return val instanceof Date;
};

/**
 * 验证是不是一个正则对象
 * @method isDate
 * @param {Object} val   要检查的对象
 * @return {Boolean}           结果
 * @static
 */
function isRegexp(val) {
  return val instanceof RegExp;
};

/**
 * 转换为数组
 * @method toArray
 * @param {Array|Object} array 伪数组
 * @return {Array} 转换结果数组
 * @static
 */
function toArray(array) {
  if (isNull(array)) return [];
  return Array.prototype.slice.call(array);
};

/**
 * 转为日期格式
 * @method toDate
 * @param {Number|String} val 日期字符串或整型数值
 * @return {Date} 日期对象
 * @static
 */
function toDate(val) {
  var self = this;
  if (self.isNumber(val)) return new Date(val);else if (self.isString(val)) return new Date(self.replace(self.replace(val, '-', '/'), 'T', ' '));else if (self.isDate(val)) return val;else return null;
};

/**
 * 遍历一个对像或数组
 * @method each
 * @param  {Object or Array}   obj  要遍历的数组或对象
 * @param  {Function} fn            处理函数
 * @return {void}                   无返回值
 * @static
 */
function each(list, handler, scope) {
  if (isNull(list) || isNull(handler)) return;
  if (isArray(list)) {
    var listLength = list.length;
    for (var i = 0; i < listLength; i++) {
      var rs = handler.call(scope || list[i], i, list[i]);
      if (!isNull(rs)) return rs;
    }
  } else {
    for (var key in list) {
      var rs = handler.call(scope || list[key], key, list[key]);
      if (!isNull(rs)) return rs;
    }
  }
};

/**
 * 格式化日期
 * @method formatDate
 * @param {Date|String|Number} date 日期
 * @param {String} format 格式化字符串
 * @param {object} dict 反译字典
 * @return {String} 格式化结果
 * @static
 */
function formatDate(date, format, dict) {
  if (isNull(format) || isNull(date)) return date;
  date = toDate(date);
  dict = dict || {};
  var placeholder = {
    "M+": date.getMonth() + 1, //month
    "d+": date.getDate(), //day
    "h+": date.getHours(), //hour
    "m+": date.getMinutes(), //minute
    "s+": date.getSeconds(), //second
    "w+": date.getDay(), //week
    "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
    "S": date.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var key in placeholder) {
    if (new RegExp("(" + key + ")").test(format)) {
      var value = placeholder[key];
      value = dict[value] || value;
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? value : ("00" + value).substr(("" + value).length));
    }
  }
  return format;
};

/**
 * 拷贝对象
 * @method copy
 * @param {Object} src 源对象
 * @param {Object} dst 目标对象
 * @static
 */
function copy(src, dst, igonres) {
  dst = dst || (isArray(src) ? [] : {});
  each(src, function (key) {
    if (igonres && igonres.indexOf(key) > -1) return;
    delete dst[key];
    if (Object.getOwnPropertyDescriptor) {
      try {
        Object.defineProperty(dst, key, Object.getOwnPropertyDescriptor(src, key));
      } catch (ex) {
        dst[key] = src[key];
      }
    } else {
      dst[key] = src[key];
    }
  });
  return dst;
};

/**
 * 深度克隆对象
 * @method clone
 * @param {Object} src 源对象
 * @return {Object} 新对象
 * @static
 */
function clone(src, igonres) {
  if (isNull(src) || isString(src) || isNumber(src) || isBoolean(src) || isDate(src)) {
    return src;
  }
  var objClone = src;
  try {
    objClone = new src.constructor();
  } catch (ex) {}
  each(src, function (key, value) {
    if (objClone[key] != value && !contains(igonres, key)) {
      if (isObject(value)) {
        objClone[key] = clone(value, igonres);
      } else {
        objClone[key] = value;
      }
    }
  }, this);
  ['toString', 'valueOf'].forEach(function (key) {
    if (contains(igonres, key)) return;
    final(objClone, key, src[key]);
  }, this);
  return objClone;
};

/**
 * 合并对象
 * @method mix
 * @return 合并后的对象
 * @param {Object} dst 目标对象
 * @param {Object} src 源对象
 * @param {Array} igonres 忽略的属性名,
 * @param {Number} mode 模式
 */
function mix(dst, src, igonres, mode, igonreNull) {
  //根据模式来判断，默认是Obj to Obj的  
  if (mode) {
    switch (mode) {
      case 1:
        // proto to proto  
        return mix(dst.prototype, src.prototype, igonres, 0);
      case 2:
        // object to object and proto to proto  
        mix(dst.prototype, src.prototype, igonres, 0);
        break; // pass through  
      case 3:
        // proto to static  
        return mix(dst, src.prototype, igonres, 0);
      case 4:
        // static to proto  
        return mix(dst.prototype, src, igonres, 0);
      default: // object to object is what happens below  
    }
  }
  //---
  src = src || {};
  dst = dst || (isArray(src) ? [] : {});
  keys(src).forEach(function (key) {
    if (contains(igonres, key)) return;
    if (igonreNull && isNull(src[key])) return;
    if (isObject(src[key]) && (src[key].constructor == Object || src[key].constructor == Array || src[key].constructor == null)) {
      dst[key] = mix(dst[key], src[key], igonres, 0, igonreNull);
    } else {
      dst[key] = src[key];
    }
  }, this);
  return dst;
};

/**
 * 定义不可遍历的属性
 **/
function final(obj, name, value) {
  if (arguments.length < 1) throw new Error('Parameter missing');
  if (arguments.length < 2) {
    return each(obj, function (name, value) {
      final(obj, name, value);
    });
  }
  if (arguments.length < 3) return final(obj, name, obj[name]);
  try {
    Object.defineProperty(obj, name, {
      get: function get() {
        return value;
      },
      set: function set() {
        throw new Error('Cannot assign to final property:' + name);
      },
      enumerable: false, //不能枚举
      configurable: false //不能重写定义
    });
  } catch (err) {
    obj[name] = value;
  }
};

/**
 * 获取所有 key 
 */
function keys(obj) {
  if (Object.keys) return Object.keys(obj);
  var keys = [];
  each(obj, function (key) {
    keys.push(key);
  });
  return keys;
};

/**
 * 创建一个对象
 */
function create(proto, props) {
  if (Object.create) return Object.create(proto, props);
  function Cotr() {};
  Cotr.prototype = proto;
  var obj = new Cotr();
  if (props) copy(props, obj);
  return obj;
};

/**
 * 设置 proto
 * 在不支持 setPrototypeOf 也不支持 __proto__ 的浏览器
 * 中，会采用 copy 方式
 */
function setPrototypeOf(obj, proto) {
  if (Object.setPrototypeOf) {
    return Object.setPrototypeOf(obj, proto || create(null));
  } else {
    if (!('__proto__' in Object)) copy(proto, obj);
    obj.__proto__ = proto;
  }
};

/**
 * 获取 proto
 */
function getPrototypeOf(obj) {
  if (obj.__proto__) return obj.__proto__;
  if (Object.getPrototypeOf) return Object.getPrototypeOf(obj);
  if (obj.constructor) return obj.constructor.prototype;
};

/**
 * 是否深度相等
 */
function deepEqual(a, b) {
  if (a === b) return true;
  if (!isObject(a) || !isObject(b)) return false;
  var aKeys = keys(a);
  var bKeys = keys(b);
  if (aKeys.length !== bKeys.length) return false;
  var allKeys = aKeys.concat(bKeys);
  var checkedMap = create(null);
  var result = true;
  each(allKeys, function (i, key) {
    if (checkedMap[key]) return;
    if (!deepEqual(a[key], b[key])) result = false;
    checkedMap[key] = true;
  }, this);
  return result;
};

/**
 * 从一个数值循环到别一个数
 * @param {number} fromNum 开始数值
 * @param {Number} toNum 结束数值
 * @param {Number} step 步长值
 * @param {function} handler 执行函数
 * @returns {void} 无返回
 */
function fromTo(fromNum, toNum, step, handler) {
  if (!handler) handler = [step, step = handler][0];
  step = Math.abs(step || 1);
  if (fromNum < toNum) {
    for (var i = fromNum; i <= toNum; i += step) {
      handler(i);
    }
  } else {
    for (var i = fromNum; i >= toNum; i -= step) {
      handler(i);
    }
  }
};

/**
 * 生成一个Guid
 * @method newGuid
 * @return {String} GUID字符串
 * @static
 */
function newGuid() {
  function s4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
};

/**
 * 对象变换
 **/
function map(list, fn) {
  var buffer = isArray(list) ? [] : {};
  each(list, function (name, value) {
    buffer[name] = fn(name, value);
  });
  return buffer;
};

/**
 * 通过路径设置属性值
 */
function setByPath(obj, path, value) {
  if (isNull(obj) || isNull(path) || path === '') {
    return;
  }
  if (!isArray(path)) {
    path = path.replace(/\[/, '.').replace(/\]/, '.').split('.');
  }
  each(path, function (index, name) {
    if (isNull(name) || name.length < 1) return;
    if (index === path.length - 1) {
      obj[name] = value;
    } else {
      obj[name] = obj[name] || {};
      obj = obj[name];
    }
  }, this);
};

/**
 * 通过路径获取属性值
 */
function getByPath(obj, path) {
  if (isNull(obj) || isNull(path) || path === '') {
    return obj;
  }
  if (!isArray(path)) {
    path = path.replace(/\[/, '.').replace(/\]/, '.').split('.');
  }
  each(path, function (index, name) {
    if (isNull(name) || name.length < 1) return;
    if (!isNull(obj)) obj = obj[name];
  }, this);
  return obj;
};

/**
 * 数组去重
 **/
function unique(array) {
  if (isNull(array)) return array;
  var newArray = [];
  each(array, function (i, value) {
    if (newArray.indexOf(value) > -1) return;
    newArray.push(value);
  });
  return newArray;
};

/**
 * 解析 function 的参数列表
 **/
function getFunctionArgumentNames(fn) {
  if (!fn) return [];
  var src = fn.toString();
  var parts = src.split(')')[0].split('=>')[0].split('(');
  return (parts[1] || parts[0]).split(',').map(function (name) {
    return trim(name);
  }).filter(function (name) {
    return name != 'function';
  });
};

/**
 * 缩短字符串
 */
function short(str, maxLength) {
  if (!str) return str;
  maxLength = maxLength || 40;
  var strLength = str.length;
  var trimLength = maxLength / 2;
  return strLength > maxLength ? str.substr(0, trimLength) + '...' + str.substr(strLength - trimLength) : str;
};

/**
 * 首字母大写
 */
function firstUpper(str) {
  if (isNull(str)) return;
  return str.substring(0, 1).toUpperCase() + str.substring(1);
};

/**
 * 编码正则字符串
 */
function escapeRegExp(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

/**
  * 将字符串转成「驼峰」式
  * @param {string} str 原始字符串
  * @param {number} mode 1 大驼峰，0 小驼峰
  * @return {string} 转换后的字符串
  */
function toCamelCase(str, mode) {
  if (str) {
    str = str.replace(/\-[a-z0-9]/g, function ($1) {
      return $1.slice(1).toUpperCase();
    });
    str = str.replace(/^[a-z]/i, function ($1) {
      return mode ? $1.toUpperCase() : $1.toLowerCase();
    });
  }
  return str;
}

/**
 * 将字符串转成分隔形式
 * @param {string} str 原始字符串
 * @return {string} 转换后的字符串
 */
function toSplitCase(str) {
  if (str) {
    str = str.replace(/([A-Z])/g, '-$1');
    if (str[0] == '-') str = str.slice(1);
  }
  return str;
}

function htmlPrefilter(html) {
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
  return html.replace(rxhtmlTag, "<$1></$2>");
}

/**
 * 解析字符串为 dom 
 * @param {string} str 字符串
 * @returns {HTMLNode} 解析后的 DOM 
 */
function parseHTML(str) {
  str = str || ' ';
  var parent = document.createElement('div');
  parent.innerHTML = htmlPrefilter(trim(str));
  var childNodes = toArray(parent.childNodes);
  //先 clone 一份再通过 innerHTML 清空
  //否则 IE9 下，清空时会导不通过返回的 DOM 没有子结点
  // if (firstNode) firstNode = firstNode.cloneNode(true);
  // win._NPH_.innerHTML = '';
  each(childNodes, function (index, childNode) {
    parent.removeChild(childNode);
  });
  return childNodes;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=ntils.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(22);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(31);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InternalError = (_temp = _class = function (_Error) {
  (0, _inherits3.default)(InternalError, _Error);

  function InternalError(message) {
    (0, _classCallCheck3.default)(this, InternalError);

    var prefix = InternalError.prefix;

    for (var _len = arguments.length, other = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      other[_key - 1] = arguments[_key];
    }

    return (0, _possibleConstructorReturn3.default)(this, _Error.call.apply(_Error, [this, prefix ? "[" + prefix + "] " + message : message].concat(other)));
  }

  return InternalError;
}(Error), _class.prefix = null, _temp);
exports.default = InternalError;
module.exports = exports["default"];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _create = __webpack_require__(32);

var _create2 = _interopRequireDefault(_create);

var _extends3 = __webpack_require__(75);

var _extends4 = _interopRequireDefault(_extends3);

var _typeof2 = __webpack_require__(9);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = function (component) {
  var proto = component.prototype;
  var initailRender = proto.render;
  proto.render = function () {
    var element = initailRender.call(this);
    return wrap(element, this.model || this.prop.model);
  };
  return component;
};

var _react = __webpack_require__(79);

var _react2 = _interopRequireDefault(_react);

var _bindable = __webpack_require__(37);

var _bindable2 = _interopRequireDefault(_bindable);

var _expression = __webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compileExpr(expr) {
  return {
    get: (0, _expression.expression)(expr),
    set: (0, _expression.expression)('$scope.' + expr + '=$value')
  };
}

function toArray(children) {
  var result = [];
  _react2.default.Children.forEach(children, function (child) {
    result.push(child);
  });
  return result;
}

function wrap(element, model) {
  var _extends2;

  if (!element || (typeof element === 'undefined' ? 'undefined' : (0, _typeof3.default)(element)) !== 'object') return element;
  var props = element.props || {};
  var initailChildren = toArray(props.children);
  var children = initailChildren.length > 0 ? initailChildren.map(function (child) {
    return wrap(child, model);
  }) : undefined;
  var dataBind = props['data-bind'];
  var bindOpts = dataBind && _bindable2.default.getOptions(element);
  if (!dataBind || !bindOpts) {
    return _react2.default.cloneElement(element, (0, _extends4.default)({}, props, { children: children }));
  }
  var initailChange = props[bindOpts.change];
  var bindExpr = compileExpr(dataBind);
  var setValue = function setValue(value) {
    return bindExpr.set((0, _create2.default)(model, {
      $value: { value: value }
    }));
  };
  var getValue = function getValue() {
    return bindExpr.get(model);
  };
  var context = { getValue: getValue, setValue: setValue };
  var bindEvent = bindOpts.event[0];
  var bindEventHandler = function bindEventHandler(event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var handler = bindOpts.event[1];
    if (handler instanceof Function) {
      handler.apply(undefined, [context, event].concat(args));
    } else if (!handler) {
      var value = 'target' in event ? event.target.value : event;
      setValue(value);
    } else {
      setValue((0, _expression.expression)(String(handler))(event));
    }
    if (initailChange) return initailChange(event);
  };
  var bindProp = bindOpts.prop[0];
  var bindPropHandler = bindOpts.prop[1] || function (ctx) {
    return ctx.getValue();
  };
  return _react2.default.cloneElement(element, (0, _extends4.default)({}, props, (_extends2 = {
    'data-bind': undefined,
    children: children
  }, _extends2[bindProp] = bindPropHandler(context, props), _extends2[bindEvent] = bindEventHandler, _extends2)));
}

module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

exports.bindable = bindable;
exports.getOptions = getOptions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOpts = {
  prop: ['value'],
  event: ['onChange']
};

var checkboxOpts = {
  prop: ['checked', function (ctx, props) {
    var value = ctx.getValue();
    if (value instanceof Array) {
      return value.indexOf(props.value) > -1;
    } else {
      return !!value;
    }
  }],
  event: ['onChange', function (ctx, event) {
    var _event$target = event.target,
        value = _event$target.value,
        checked = _event$target.checked;

    var oldValue = ctx.getValue();
    if (oldValue instanceof Array) {
      if (checked) {
        oldValue.push(value);
      } else {
        var index = oldValue.indexOf(value);
        oldValue.splice(index, 1);
      }
    } else {
      ctx.setValue(value);
    }
  }]
};

var radioOpts = {
  prop: ['checked', function (ctx, props) {
    return ctx.getValue() == props.value;
  }],
  event: ['onChange', function (ctx, event) {
    var _event$target2 = event.target,
        value = _event$target2.value,
        checked = _event$target2.checked;

    if (checked) {
      ctx.setValue(value);
    }
  }]
};

var binltIn = {
  input: function input(element) {
    var type = element.props.type;

    switch (type) {
      case 'checkbox':
        return checkboxOpts;
      case 'radio':
        return radioOpts;
      default:
        return defaultOpts;
    }
  },
  select: defaultOpts,
  textaren: defaultOpts
};

function bindable(opts, component) {
  if (component) {
    return function (component) {
      bindable(opts, component);
    };
  } else {
    component.bindOpts = (0, _assign2.default)({}, opts);
    return component;
  }
}

function getOptions(element) {
  var type = element.type;
  var opts = typeof type === 'string' ? binltIn[type] : type.bindOpts;
  if (opts instanceof Function) opts = opts(element);
  opts = opts || defaultOpts;
  if (opts && typeof opts.event === 'string') {
    opts.event = opts.event.split(',');
  }
  if (opts && typeof opts.prop === 'string') {
    opts.prop = opts.prop.split(',');
  }
  return opts;
}

bindable.getOptions = getOptions;
exports.default = bindable;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.bindable = exports.binding = exports.model = exports.connect = undefined;

var _connect = __webpack_require__(15);

var _connect2 = _interopRequireDefault(_connect);

var _model = __webpack_require__(74);

var _model2 = _interopRequireDefault(_model);

var _binding = __webpack_require__(35);

var _binding2 = _interopRequireDefault(_binding);

var _bindable = __webpack_require__(37);

var _bindable2 = _interopRequireDefault(_bindable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.connect = _connect2.default;
exports.model = _model2.default;
exports.binding = _binding2.default;
exports.bindable = _bindable2.default;
exports.default = { connect: _connect2.default, model: _model2.default, binding: _binding2.default, bindable: _bindable2.default };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _keys = __webpack_require__(16);

var _keys2 = _interopRequireDefault(_keys);

var _getOwnPropertyDescriptor = __webpack_require__(44);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty = __webpack_require__(47);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(22);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(31);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ntils = __webpack_require__(33);

var _events = __webpack_require__(72);

var _events2 = _interopRequireDefault(_events);

var _error = __webpack_require__(34);

var _error2 = _interopRequireDefault(_error);

var _autorun = __webpack_require__(73);

var _autorun2 = _interopRequireDefault(_autorun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OBSERVER_PROP_NAME = '_observer_';
var CHANGE_EVENT_NAME = 'change';
var GET_EVENT_NAME = 'get';
var EVENT_MAX_DISPATCH_LAYER = 10;
var IGNORE_REGEXPS = [/^\_(.*)\_$/, /^\_\_/, /^\$/];

/**
 * 对象观察类，可以监控对象变化
 * 目前方案问题:
 *   对于父子关系和事件冒泡，目前方案如果用 delete 删除一个属性，无关真实删除关系，
 *   即便调用 clearReference 也无法再清除关系，子对象的 parents 中会一直有一个引用，当前方案最高效
 * 其它方法一:
 *   将「关系」放入全局数组中，然后将 ob.parents 变成一个「属性」从全局数组件中 filter 出来，
 *   基本和目前方法类似，但是关系在外部存领教，所以 clearReference 可清除。
 * 其它方案二: 
 *   构造时添加到全局数组，每一个 observer change 时都让放到全局的 observer 遍历自身的，
 *   检果事件源是不是自已的子对象，如果是则触发自身 change 事件，这样 ob 对象本身没有相关引用
 *   clearReference 时只从全局清除掉就行了，并且 delete 操作也不会影响，但效率稍差。
 * 其它方案三: 
 *   给构造函数添加一个 deep 属性，只有 deep 的 ob 对象，才放入到全局数组中，检查时逻辑同方案二
 *   但是因为要检查的对象会少很多，效率会更高一点。
 */

var Observer = function (_EventEmitter) {
  (0, _inherits3.default)(Observer, _EventEmitter);

  /**
   * 通过目标对象构造一个观察对象
   * @param {Object} target 目标对象
   * @param {Object} options 选项
   * @returns {void} 无返回
   */
  function Observer(target, options) {
    (0, _classCallCheck3.default)(this, Observer);

    var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));

    if ((0, _ntils.isNull)(target)) {
      throw new _error2.default('Invalid target');
    }
    options = options || {};
    var observer = target[OBSERVER_PROP_NAME];
    if (observer) {
      var _ret;

      (0, _ntils.copy)(options, observer.options);
      //当时一个组件 A 的为组件 B 的 prop 时，A 更新不会触发 B 更新
      //所在暂注释这里，另一种方法是更新 prop 指令，重写 excute 方法，而不是现在的 update 方法
      // if (observer.options.root) {
      //   observer.parents.length = 0;
      // }
      observer.apply();
      return _ret = observer, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    (0, _ntils.final)(_this, 'options', options);
    (0, _ntils.final)(_this, 'shadow', {});
    (0, _ntils.final)(_this, 'target', target);
    (0, _ntils.final)(_this, 'parents', []);
    (0, _ntils.final)(target, OBSERVER_PROP_NAME, _this);
    _this.apply();
    return _this;
  }

  /**
   * 添加一个属性，动态添中的属性，无法被观察，
   * 但是通过 set 方法添加的属性可能被观察。
   * @param {string} name 名称
   * @param {Object} value 值
   * @returns {void} 无返回
   */


  Observer.prototype.set = function set(name, value) {
    if ((0, _ntils.isFunction)(value) || Observer.isIgnore(name)) {
      return;
    }
    (0, _defineProperty2.default)(this.target, name, {
      get: function get() {
        var observer = this[OBSERVER_PROP_NAME];
        observer.emitGet({ path: name, value: value });
        return observer.shadow[name];
      },
      set: function set(value) {
        var observer = this[OBSERVER_PROP_NAME];
        var oldValue = observer.shadow[name];
        if (oldValue === value) return;
        if ((0, _ntils.isObject)(value)) {
          var childObserver = new Observer(value);
          observer.addChild(childObserver, name);
        }
        //移除旧值的父引用
        //如果用 delete 删除属性将无法移除父子引用
        if (oldValue && oldValue[OBSERVER_PROP_NAME]) {
          observer.removeChild(oldValue[OBSERVER_PROP_NAME], name);
        }
        observer.shadow[name] = value;
        observer.emitChange({ path: name, value: value });
      },

      configurable: true,
      enumerable: true
    });
    this.target[name] = value;
  };

  /**
   * 自动应用所有动态添加的属性
   * @returns {void} 无返回
   */


  Observer.prototype.apply = function apply() {
    if ((0, _ntils.isArray)(this.target)) {
      this._wrapArray(this.target);
    }
    var names = this._getPropertyNames(this.target);
    names.forEach(function (name) {
      var desc = (0, _getOwnPropertyDescriptor2.default)(this.target, name);
      if (!('value' in desc)) return;
      this.set(name, this.target[name]);
    }, this);
  };

  /**
   * 清除所有父子引用
   * @returns {void} 无返回
   */


  Observer.prototype.clearReference = function clearReference() {
    (0, _ntils.each)(this.target, function (name, value) {
      if ((0, _ntils.isNull)(value)) return;
      var child = value[OBSERVER_PROP_NAME];
      if (child) this.removeChild(child);
    }, this);
  };

  /**
   * 派发一个事件，事件会向父级对象冒泡
   * @param {string} eventName 事件名称
   * @param {Object} event 事件对象
   * @returns {void} 无返回
   */


  Observer.prototype.dispatch = function dispatch(eventName, event) {
    if (event._src_ === this) return;
    event._src_ = event._src_ || this;
    event._layer_ = event._layer_ || 0;
    if (event._layer_++ >= EVENT_MAX_DISPATCH_LAYER) return;
    this.emit(eventName, event);
    if (!this.parents || this.parents.length < 1) return;
    this.parents.forEach(function (item) {
      if (!(item.name in item.parent.target)) {
        return item.parent.removeChild(this);
      }
      var parentEvent = (0, _ntils.copy)(event);
      parentEvent.path = (0, _ntils.isNull)(event.path) ? item.name : item.name + '.' + event.path;
      item.parent.dispatch(eventName, parentEvent);
    }, this);
  };

  /**
   * 添子观察者对象
   * @param {Object} child 父对象
   * @param {String} name 属性名
   * @returns {void} 无返回
   */


  Observer.prototype.addChild = function addChild(child, name) {
    if ((0, _ntils.isNull)(child) || (0, _ntils.isNull)(name)) {
      throw new _error2.default('Invalid paramaters');
    }
    if (child.options.root) return;
    child.parents.push({ parent: this, name: name });
  };

  /**
   * 移除子对象
   * @param {Object} child 父对象
   * @param {String} name 属性名
   * @returns {void} 无返回
   */


  Observer.prototype.removeChild = function removeChild(child, name) {
    if ((0, _ntils.isNull)(child)) {
      throw new _error2.default('Invalid paramaters');
    }
    var foundIndex = -1;
    child.parents.forEach(function (item, index) {
      if (item.parent === this && item.name === name) {
        foundIndex = index;
      }
    }, this);
    if (foundIndex > -1) {
      child.parents.splice(foundIndex, 1);
    }
  };

  /**
   * 触发 change 事件
   * @param {Object} event 事件对象
   * @returns {void} 无返回
   */


  Observer.prototype.emitChange = function emitChange(event) {
    this.dispatch(CHANGE_EVENT_NAME, event);
  };

  /**
   * 触发 change 事件
   * @param {Object} event 事件对象
   * @returns {void} 无返回
   */


  Observer.prototype.emitGet = function emitGet(event) {
    this.dispatch(GET_EVENT_NAME, event);
  };

  /**
   * 获取所有成员名称列表
   * @returns {Array} 所有成员名称列表
   */


  Observer.prototype._getPropertyNames = function _getPropertyNames() {
    var names = (0, _ntils.isArray)(this.target) ? this.target.map(function (item, index) {
      return index;
    }) : (0, _keys2.default)(this.target);
    return names.filter(function (name) {
      return name !== OBSERVER_PROP_NAME;
    });
  };

  /**
   * 包裹数组
   * @param {array} array 源数组
   * @returns {array} 处理后的数组
   */


  Observer.prototype._wrapArray = function _wrapArray(array) {
    if (array._wrapped_) return;
    (0, _ntils.final)(array, '_wrapped_', true);
    (0, _ntils.final)(array, 'push', function () {
      var items = [].slice.call(arguments);
      var observer = this[OBSERVER_PROP_NAME];
      items.forEach(function (item) {
        //这里也会触发对应 index 的 change 事件
        observer.set(array.length, item);
      }, this);
      observer.emitChange({ path: 'length', value: this.length });
      observer.emitChange({ value: this.length });
    });
    (0, _ntils.final)(array, 'pop', function () {
      var item = [].pop.apply(this, arguments);
      var observer = this[OBSERVER_PROP_NAME];
      observer.emitChange({ path: this.length, value: item });
      observer.emitChange({ path: 'length', value: this.length });
      observer.emitChange({ value: this.length });
      return item;
    });
    (0, _ntils.final)(array, 'unshift', function () {
      var items = [].slice.call(arguments);
      var observer = this[OBSERVER_PROP_NAME];
      items.forEach(function (item) {
        //这里也会触发对应 index 的 change 事件
        observer.set(0, item);
      }, this);
      observer.emitChange({ path: 'length', value: this.length });
      observer.emitChange({ value: this.length });
    });
    (0, _ntils.final)(array, 'shift', function () {
      var item = [].shift.apply(this, arguments);
      var observer = this[OBSERVER_PROP_NAME];
      observer.emitChange({ path: 0, value: item });
      observer.emitChange({ path: 'length', value: this.length });
      observer.emitChange({ value: this.length });
      return item;
    });
    (0, _ntils.final)(array, 'splice', function () {
      var startIndex = arguments[0];
      var endIndex = (0, _ntils.isNull)(arguments[1]) ? startIndex + arguments[1] : this.length - 1;
      var observer = this[OBSERVER_PROP_NAME];
      var items = [].splice.apply(this, arguments);
      for (var i = startIndex; i <= endIndex; i++) {
        observer.emitChange({ path: i, value: items[i - startIndex] });
      }
      observer.emitChange({ path: 'length', value: this.length });
      observer.emitChange({ value: this.length });
      return items;
    });
    (0, _ntils.final)(array, 'set', function (index, value) {
      var observer = this[OBSERVER_PROP_NAME];
      if (index >= this.length) {
        observer.emitChange({ path: 'length', value: this.length });
        observer.emitChange({ value: this.length });
      }
      observer.set(index, value);
    });
  };

  Observer.prototype.run = function run(exec, trigger, ctx) {
    var ref = new _autorun2.default(exec, trigger, ctx);
    this.on('get', ref.onGet);
    this.on('change', ref.onChange);
    return ref;
  };

  Observer.prototype.stop = function stop(ref) {
    this.off('get', ref.onGet);
    this.off('change', ref.onChange);
  };

  return Observer;
}(_events2.default);

/**
 * 观察一个对象
 * @param {Object} target 目标对象
 * @return {Observer} 观察者对象
 */


Observer.observe = function (target) {
  return new Observer(target);
};

/**
 * 检查是不是忽略的属性名
 * @param {string} word 待检查的字符串
 * @returns {void} 无返回
 */
Observer.isIgnore = function (word) {
  return IGNORE_REGEXPS.some(function (re) {
    return re.test(word);
  });
};

exports.default = Observer;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
module.exports = __webpack_require__(1).Object.keys;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(17);

__webpack_require__(18)('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
__webpack_require__(46);
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(3);

__webpack_require__(18)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51);
__webpack_require__(55);
module.exports = __webpack_require__(4)('iterator');

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(52)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(23)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(53)
  , defined   = __webpack_require__(8);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $              = __webpack_require__(0)
  , descriptor     = __webpack_require__(11)
  , setToStringTag = __webpack_require__(14)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
var Iterators = __webpack_require__(13);
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(57)
  , step             = __webpack_require__(58)
  , Iterators        = __webpack_require__(13)
  , toIObject        = __webpack_require__(3);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(23)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(66);
module.exports = __webpack_require__(1).Symbol;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var $              = __webpack_require__(0)
  , global         = __webpack_require__(5)
  , has            = __webpack_require__(12)
  , DESCRIPTORS    = __webpack_require__(26)
  , $export        = __webpack_require__(2)
  , redefine       = __webpack_require__(25)
  , $fails         = __webpack_require__(6)
  , shared         = __webpack_require__(27)
  , setToStringTag = __webpack_require__(14)
  , uid            = __webpack_require__(28)
  , wks            = __webpack_require__(4)
  , keyOf          = __webpack_require__(62)
  , $names         = __webpack_require__(63)
  , enumKeys       = __webpack_require__(64)
  , isArray        = __webpack_require__(65)
  , anObject       = __webpack_require__(29)
  , toIObject      = __webpack_require__(3)
  , createDesc     = __webpack_require__(11)
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(24)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var $         = __webpack_require__(0)
  , toIObject = __webpack_require__(3);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(3)
  , getNames  = __webpack_require__(0).getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var $ = __webpack_require__(0);
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(21);
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
module.exports = __webpack_require__(1).Object.setPrototypeOf;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(2);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(70).set});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = __webpack_require__(0).getDesc
  , isObject = __webpack_require__(30)
  , anObject = __webpack_require__(29);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(19)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
module.exports = function create(P, D){
  return $.create(P, D);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _ntils = __webpack_require__(33);

var _error = __webpack_require__(34);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 事件触发器基类
 */
var EventEmitter = function () {

  /**
   * 构建一个一个事修的触发器对象
   * @param {object} target 将代理的目标对象可以省略
   * @returns {void} 无返回
   */
  function EventEmitter(target) {
    (0, _classCallCheck3.default)(this, EventEmitter);

    target = target || this;
    var emitter = target._emitter_;
    if (emitter) return emitter;
    (0, _ntils.final)(this, '_target_', target);
    (0, _ntils.final)(target, '_emitter_', this);
    this._isNative_ = this._isNativeObject(this._target_);
    this._listeners_ = this._listeners_ || {};
    this.on = this.$on = this.$addListener = this.addListener;
    this.off = this.$off = this.$removeListener = this.removeListener;
    this.$emit = this.emit;
  }

  /**
   * 检查是否原生支持事件
   * @param {object} obj 对象
   * @returns {void} 检查结果
   */


  EventEmitter.prototype._isNativeObject = function _isNativeObject(obj) {
    return obj.addEventListener && obj.removeEventListener && obj.dispatchEvent;
  };

  /**
   * 添加一个事件监听函数
   * @param {string} name 事件名称
   * @param {function} listener 事件处理函数
   * @param {capture} capture 是否是捕获阶段事件(只在代理 dom 对象时有效)
   * @returns {void} 无返回
   */


  EventEmitter.prototype.addListener = function addListener(name, listener, capture) {
    if (this._isNative_) {
      this._addNativeEventListener(name, listener, capture);
    }
    this._listeners_[name] = this._listeners_[name] || [];
    this._listeners_[name].push(listener);
    if (this._listeners_[name].length > EventEmitter._maxListeners) {
      throw new _error2.default('The `' + name + '` event listener is not more than 10');
    }
  };

  /**
   * 移除「一个/一组/所有」事件监听函数
   * @param {string} name 事件名称
   * @param {function} listener 事件处理函数
   * @param {capture} capture 是否是捕获阶段事件(只在代理 dom 对象时有效)
   * @returns {void} 无返回
   */


  EventEmitter.prototype.removeListener = function removeListener(name, listener, capture) {
    if (name && listener) {
      if (this._isNative_) {
        this._removeNativeEventListener(name, listener, capture);
      }
      if (!this._listeners_[name]) return;
      var index = this._listeners_[name].indexOf(listener);
      this._listeners_[name].splice(index, 1);
    } else if (name) {
      if (this._isNative_ && this._listeners_[name]) {
        this._listeners_[name].forEach(function (_listener) {
          this.removeListener(name, _listener, capture);
        }, this);
      }
      delete this._listeners_[name];
    } else {
      (0, _ntils.each)(this._listeners_, function (name) {
        this.removeListener(name, null, capture);
      }, this);
      this._listeners_ = {};
    }
  };

  /**
   * 触发自身的一个事件
   * @param {string} name 事件名称
   * @param {object} data 传递的对象
   * @param {string} canBubble 能否冒泡(只在代理 dom 对象时有效)
   * @param {object} cancelAble 能否取消(只在代理 dom 对象时有效)
   * @returns {void} 无返回
   */


  EventEmitter.prototype.emit = function emit(name, data, canBubble, cancelAble) {
    if (this._isNative_) {
      return this._emitNativeEvent(name, data, canBubble, cancelAble);
    }
    if (!this._listeners_[name]) return;
    var stopPropagation = false;
    this._listeners_[name].forEach(function (handler) {
      var rs = handler.call(this._target_, data);
      if (rs === false) stopPropagation = true;
    }, this);
    return stopPropagation;
  };

  /**
   * 添加 DOM 元素事件
   * @param {string} name 事件名称
   * @param {function} listener 事件处理函数
   * @param {capture} capture 是否是捕获阶段事件
   * @returns {void} 无返回
   */


  EventEmitter.prototype._addNativeEventListener = function _addNativeEventListener(name, listener, capture) {
    this._target_.addEventListener(name, listener, capture);
    //如果存在已注册的自定义 “组合事件”
    var descriptor = EventEmitter._events[name];
    if (descriptor) {
      descriptor.addListener = descriptor.addListener || descriptor.on;
      descriptor.addListener(this, name, listener, capture);
    }
  };

  /**
   * 移除 DOM 元素事件
   * @param {string} name 事件名称
   * @param {function} listener 事件处理函数
   * @param {capture} capture 是否是捕获阶段事件
   * @returns {void} 无返回
   */


  EventEmitter.prototype._removeNativeEventListener = function _removeNativeEventListener(name, listener, capture) {
    this._target_.removeEventListener(name, listener, capture);
    //如果存在已注册的自定义 “组合事件”
    var descriptor = EventEmitter._events[name];
    if (descriptor) {
      descriptor.removeListener = descriptor.removeListener || descriptor.off;
      descriptor.removeListener(this, name, listener, capture);
    }
  };

  /**
   * 触发 DOM 元素事件
   * @param {string} name 事件名称
   * @param {object} data 传递的对象
   * @param {string} canBubble 能否冒泡
   * @param {object} cancelAble 能否取消
   * @returns {void} 无返回
   */


  EventEmitter.prototype._emitNativeEvent = function _emitNativeEvent(name, data, canBubble, cancelAble) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(name, canBubble, cancelAble);
    (0, _ntils.copy)(data, event, ['data']);
    event.data = data;
    return this._target_.dispatchEvent(event);
  };

  return EventEmitter;
}();

//最多添加多少个 listener


EventEmitter._maxListeners = 100;

//所有自定义事件
EventEmitter._events = [];

/**
 * 注册自定义事件(只在代理 dom 对象时有效)
 * @param {object} descriptor 事件定义
 * @returns {void} 无返回
 */
EventEmitter.register = function (descriptor) {
  var names = descriptor.name;
  if (!names) return;
  if (!(0, _ntils.isArray)(names)) names = names.split(',');
  names.forEach(function (name) {
    this._events[name] = descriptor;
  }, this);
};

exports.default = EventEmitter;
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutoRun = function AutoRun(exec, trigger, ctx) {
  var _this = this;

  (0, _classCallCheck3.default)(this, AutoRun);
  this.deps = null;
  this.runing = false;
  this.ctx = null;

  this.onGet = function (event) {
    if (!_this.runing) return;
    _this.deps[event.path] = true;
  };

  this.onChange = function (event) {
    if (!_this.deps || _this.deps[event.path]) {
      _this.trigger.call(_this.ctx);
    }
  };

  this.run = function () {
    _this.deps = {};
    _this.runing = true;
    var result = _this.exec.call(_this.ctx);
    _this.runing = false;
    return result;
  };

  this.exec = exec;
  this.trigger = trigger || this.run;
  this.ctx = ctx || this;
};

exports.default = AutoRun;
module.exports = exports["default"];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.default = model;

var _connect = __webpack_require__(15);

var _connect2 = _interopRequireDefault(_connect);

var _binding = __webpack_require__(35);

var _binding2 = _interopRequireDefault(_binding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function model(model, isBinding) {
  return function (component) {
    if (isBinding) (0, _binding2.default)(component);
    (0, _connect2.default)(model, component);
  };
}
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
module.exports = __webpack_require__(1).Object.assign;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(2);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(78)});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.1 Object.assign(target, source, ...)
var $        = __webpack_require__(0)
  , toObject = __webpack_require__(17)
  , IObject  = __webpack_require__(20);

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = __webpack_require__(6)(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;

var _keys = __webpack_require__(16);

var _keys2 = _interopRequireDefault(_keys);

exports.expression = expression;
exports.template = template;
exports.compile = compile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VARIABLE_FILTER = /(\(|\[|\{|\+|\-|\*|\/|\>|\<|\=|\!|\,|\;|\?|\:|\&|\|)\s*([a-z\_0-9\$]+)/ig;
var VARIABLE_NAME = /^[a-z\$\_]/i;
var ALLOWED_WORD = /(\$scope|true|false|null|undefined|Date|Number|String|Object|Boolean|Array|RegExp|Math|JSON|parseInt|parseFloat|isNaN|isFinite)/;
var EXPRESSION_BLOCK = /\{\{([\s\S]+?)\}\}/;
var EXPRESSION_CACHE = {};
var TEMPLATE_CACHE = {};

function findVariables(expr) {
  expr = '(' + expr + ')';
  VARIABLE_FILTER.lastIndex = 0;
  var variables = {};
  var info = void 0;
  while (info = VARIABLE_FILTER.exec(expr)) {
    var name = info[2];
    if (VARIABLE_NAME.test(name) && !ALLOWED_WORD.test(name)) {
      variables[name] = true;
    }
  }
  return (0, _keys2.default)(variables);
}

function getValue(scope, name) {
  var value = scope[name];
  return value instanceof Function ? value.bind(scope) : value;
}

function expression(expr) {
  var cacheItem = EXPRESSION_CACHE[expr];
  if (cacheItem) return cacheItem;
  var keys = findVariables(expr);
  var func = new (Function.prototype.bind.apply(Function, [null].concat(['$scope'], keys, ['return(' + expr + ')'])))();
  function exec(scope) {
    var values = keys.map(function (name) {
      return getValue(scope, name);
    });
    return func.apply(undefined, [scope].concat(values));
  }
  EXPRESSION_CACHE[expr] = exec;
  return exec;
}

function template(str) {
  var cacheItem = TEMPLATE_CACHE[str];
  if (cacheItem) return cacheItem;
  var blocks = str.split(EXPRESSION_BLOCK);
  for (var i = 1; i < blocks.length; i += 2) {
    blocks[i] = expression(blocks[i]);
  }
  function exec(scope) {
    var result = '';
    blocks.forEach(function (block) {
      result += block instanceof Function ? block(scope) : block;
    });
    return result;
  }
  TEMPLATE_CACHE[str] = exec;
  return exec;
}

function compile(str, mixed) {
  return mixed ? template(str) : expression(str);
}

exports.default = compile;

/***/ })
/******/ ]);
//# sourceMappingURL=mota.js.map