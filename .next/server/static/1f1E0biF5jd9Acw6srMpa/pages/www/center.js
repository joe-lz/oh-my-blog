module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0SYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMenus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMenusList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateMenus; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_lib_defaultMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F2d0");


const createMenus = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建默认菜单
    const menusObject = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object("CMS_Menus");
    menusObject.set("value", src_lib_defaultMenu__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]); // 将对象保存到云端

    menusObject.save().then(todo => {
      resolve(todo);
    }, error => {
      reject(err);
    });
  });
};
const getMenusList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query("CMS_Menus");
    query.descending('createdAt');
    query.first().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const updateMenus = ({
  menuItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map(keyname => {
      menuItem.set(keyname, params[keyname]);
    });
    menuItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMBU");


/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "68mg":
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F2d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handleformatData; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2WPw");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
// import { v4 as uuidv4 } from "uuid";

/* harmony default export */ __webpack_exports__["a"] = ([{
  title: "技术",
  key: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate()
}, {
  title: "摸鱼",
  key: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate()
}]); // 拖拽更新目录

const handleformatData = (info, curMenu) => {
  const dropKey = info.node.props.eventKey;
  const dragKey = info.dragNode.props.eventKey;
  const dropPos = info.node.props.pos.split("-");
  const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

  const loop = (data, key, callback) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].key === key) {
        return callback(data[i], i, data);
      }

      if (data[i].children) {
        loop(data[i].children, key, callback);
      }
    }
  };

  const data = [...curMenu]; // Find dragObject

  let dragObj;
  loop(data, dragKey, (item, index, arr) => {
    arr.splice(index, 1);
    dragObj = item;
  });

  if (!info.dropToGap) {
    // Drop on the content
    loop(data, dropKey, item => {
      item.children = item.children || []; // where to insert 示例添加到尾部，可以是随意位置

      item.children.push(dragObj);
    });
  } else if ((info.node.props.children || []).length > 0 && // Has children
  info.node.props.expanded && // Is expanded
  dropPosition === 1 // On the bottom gap
  ) {
      loop(data, dropKey, item => {
        item.children = item.children || []; // where to insert 示例添加到头部，可以是随意位置

        item.children.unshift(dragObj);
      });
    } else {
    let ar;
    let i;
    loop(data, dropKey, (item, index, arr) => {
      ar = arr;
      i = index;
    });

    if (dropPosition === -1) {
      ar.splice(i, 0, dragObj);
    } else {
      ar.splice(i + 1, 0, dragObj);
    }
  }

  return data;
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Ruh/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateProfile; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

const createProfile = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建默认菜单
    const profileObject = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object("CMS_Profile");
    profileObject.set("logo", "https://static.ccrgt.com/images/42bc258e-d183-49d5-aea4-6eb5914647e3.png");
    profileObject.set("title", "oh my blog");
    profileObject.set("github", "https://github.com/joe-lz/oh-my-blog");
    profileObject.set("copyright", "Copyright © 1998 - 2020 oh my blog. All Rights Reserved");
    profileObject.set("allowAComment", true);
    profileObject.set("allowBComment", true);
    profileObject.set("showBlog", true);
    profileObject.set("blogName", "沸点"); // 将对象保存到云端

    profileObject.save().then(todo => {
      resolve(todo);
    }, error => {
      reject(err);
    });
  });
};
const getProfileList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query("CMS_Profile");
    query.descending("createdAt");
    query.first().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const updateProfile = ({
  profileItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map(keyname => {
      if (keyname === "views" || keyname === "views_uv") {
        profileItem.increment(keyname, params[keyname]);
      } else {
        profileItem.set(keyname, params[keyname]);
      }
    });
    profileItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};

/***/ }),

/***/ "WgGP":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Login_btn__1Xj2W",
	"login": "Login_login__3G9Sa"
};

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cMBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_components_www_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eOYp");
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









function MyComponent() {
  const {
    0: profile,
    1: setprofile
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const {
    0: userinfo,
    1: setuserinfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  return __jsx(src_components_www_Layout__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    onChange: params => {
      setprofile(params.profile);
      setuserinfo(params.userinfo);
    }
  }, __jsx("div", null, "cdsc"));
}

/* harmony default export */ __webpack_exports__["default"] = (MyComponent);

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eOYp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "leancloud-storage"
var external_leancloud_storage_ = __webpack_require__("jhyn");
var external_leancloud_storage_default = /*#__PURE__*/__webpack_require__.n(external_leancloud_storage_);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/service/menu.js
var service_menu = __webpack_require__("0SYe");

// EXTERNAL MODULE: ./src/service/profile.js
var service_profile = __webpack_require__("Ruh/");

// EXTERNAL MODULE: ./src/service/user.js
var service_user = __webpack_require__("mhur");

// EXTERNAL MODULE: ./src/components/www/Layout/index.module.scss
var index_module = __webpack_require__("h1X7");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/www/Nav/index.module.scss
var Nav_index_module = __webpack_require__("o+Q2");
var Nav_index_module_default = /*#__PURE__*/__webpack_require__.n(Nav_index_module);

// EXTERNAL MODULE: external "react-card-flip"
var external_react_card_flip_ = __webpack_require__("68mg");
var external_react_card_flip_default = /*#__PURE__*/__webpack_require__.n(external_react_card_flip_);

// EXTERNAL MODULE: ./src/components/www/Login/index.module.scss
var Login_index_module = __webpack_require__("WgGP");
var Login_index_module_default = /*#__PURE__*/__webpack_require__.n(Login_index_module);

// CONCATENATED MODULE: ./src/components/www/Login/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  }
};
const tailLayout = {
  // wrapperCol: { offset: 5, span: 19 },
  wrapperCol: {
    offset: 0,
    span: 24
  }
};

function Components(props) {
  const {
    0: isFlipped,
    1: setisFlipped
  } = Object(external_react_["useState"])(false);
  const {
    0: modalShow,
    1: setmodalShow
  } = Object(external_react_["useState"])(false);
  const {
    0: isSpin,
    1: setisSpin
  } = Object(external_react_["useState"])(false); // const [username, setusername] = useState("");
  // const [password, setpassword] = useState("");
  // const [repassword, setrepassword] = useState("");

  const onLoginFinish = values => {
    console.log("Success:", values);
    handleLogin(values);
  };

  const onLoginFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const onRegisterFinish = values => {
    console.log("Success:", values);
    handleRegister(values);
  };

  const onRegisterFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = ({
    username,
    password
  }) => {
    if (username && password) {
      setisSpin(true);
      external_leancloud_storage_default.a.User.logIn(username, password).then(user => {
        // 登录成功
        setisSpin(false);
        external_antd_["message"].success("登录成功");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, error => {
        // 登录失败（可能是密码错误）
        setisSpin(false);
        external_antd_["notification"].error({
          message: "登录失败",
          description: leanerrors[error.code] ? leanerrors[error.code].msg : ""
        });
      });
    } else {
      external_antd_["notification"].error({
        message: "登录失败",
        description: "请输入用户名、密码"
      });
    }
  };

  const handleRegister = ({
    username,
    password
  }) => {
    setisSpin(true);
    const user = new external_leancloud_storage_default.a.User();
    user.setUsername(username);
    user.setPassword(password);
    user.signUp().then(user => {
      // 注册成功
      setisSpin(false);
      external_antd_["message"].success("注册成功");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, error => {
      // 注册失败（通常是因为用户名已被使用）
      setisSpin(false);
      external_antd_["notification"].error({
        message: "注册失败",
        description: leanerrors[error.code] ? leanerrors[error.code].msg : ""
      });
    });
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: Login_index_module_default.a.btn,
    onClick: () => {
      setmodalShow(true);
    }
  }, props.children), __jsx(external_antd_["Modal"], {
    title: isFlipped ? "注册" : "登录",
    width: 450,
    visible: modalShow,
    onCancel: () => {
      setmodalShow(false);
    } // onOk={() => {}}
    // okText="保存"
    // cancelText="取消"
    ,
    bodyStyle: {
      padding: 0
    },
    footer: null
  }, __jsx("div", {
    className: Login_index_module_default.a.login
  }, __jsx(external_antd_["Spin"], {
    spinning: isSpin,
    tip: "\u52A0\u8F7D\u4E2D..."
  }, __jsx(external_react_card_flip_default.a, {
    isFlipped: isFlipped,
    flipDirection: "horizontal"
  }, __jsx(external_antd_["Form"], _extends({}, layout, {
    name: "\u767B\u5F55",
    initialValues: {
      remember: true
    },
    onFinish: onLoginFinish,
    onFinishFailed: onLoginFinishFailed
  }), __jsx(external_antd_["Form"].Item, {
    label: "\u7528\u6237\u540D",
    name: "username",
    rules: [{
      required: true,
      message: "请输入用户名"
    }]
  }, __jsx(external_antd_["Input"], null)), __jsx(external_antd_["Form"].Item, {
    label: "\u5BC6\u7801",
    name: "password",
    rules: [{
      required: true,
      message: "请输入密码"
    }]
  }, __jsx(external_antd_["Input"], {
    type: "password"
  })), __jsx(external_antd_["Form"].Item, tailLayout, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    style: {
      width: "100%"
    }
  }, "\u767B\u5F55")), __jsx(external_antd_["Form"].Item, tailLayout, __jsx(external_antd_["Button"], {
    type: "text",
    htmlType: "submit",
    style: {
      width: "100%"
    },
    onClick: () => {
      setisFlipped(true);
    }
  }, "\u8FD8\u6CA1\u6709\u8D26\u6237\uFF1F", __jsx("a", null, "\u7ACB\u5373\u6CE8\u518C")))), __jsx(external_antd_["Form"], _extends({}, layout, {
    name: "\u6CE8\u518C",
    initialValues: {
      remember: true
    },
    onFinish: onRegisterFinish,
    onFinishFailed: onRegisterFinishFailed
  }), __jsx(external_antd_["Form"].Item, {
    label: "\u7528\u6237\u540D",
    name: "username",
    rules: [{
      required: true,
      message: "请输入用户名"
    }]
  }, __jsx(external_antd_["Input"], null)), __jsx(external_antd_["Form"].Item, {
    label: "\u5BC6\u7801",
    name: "password",
    rules: [{
      required: true,
      message: "请输入密码"
    }]
  }, __jsx(external_antd_["Input"], {
    type: "password"
  })), __jsx(external_antd_["Form"].Item, {
    label: "\u786E\u8BA4\u5BC6\u7801",
    name: "repassword",
    dependencies: ["password"],
    hasFeedback: true,
    rules: [{
      required: true,
      message: "请确认密码"
    }, ({
      getFieldValue
    }) => ({
      validator(rule, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }

        return Promise.reject("两次输入的密码不相同!");
      }

    })]
  }, __jsx(external_antd_["Input"], {
    type: "password"
  })), __jsx(external_antd_["Form"].Item, tailLayout, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    style: {
      width: "100%"
    }
  }, "\u6CE8\u518C")), __jsx(external_antd_["Form"].Item, tailLayout, __jsx(external_antd_["Button"], {
    type: "text",
    htmlType: "submit",
    style: {
      width: "100%"
    },
    onClick: () => {
      setisFlipped(false);
    }
  }, "\u5DF2\u6709\u8D26\u6237\uFF1F", __jsx("a", null, "\u7ACB\u5373\u767B\u5F55")))))))));
}

/* harmony default export */ var Login = (Components);
// CONCATENATED MODULE: ./src/components/www/Nav/index.js
var Nav_jsx = external_react_default.a.createElement;









Nav_Components.defaultProps = {
  menus: [],
  profile: null,
  userinfo: null
};

function Nav_Components(props) {
  const {
    userinfo,
    menus,
    profile
  } = props;
  const curUser = external_leancloud_storage_default.a.User.current();
  const {
    0: curMenu,
    1: setcurMenu
  } = Object(external_react_["useState"])(null);

  const menu = Nav_jsx(external_react_default.a.Fragment, null, userinfo && Nav_jsx(external_antd_["Menu"], null, Nav_jsx(external_antd_["Menu"].Item, null, Nav_jsx(link_default.a, {
    href: `/www/user/${userinfo.objectId}`
  }, "\u6211\u7684\u9996\u9875")), Nav_jsx(external_antd_["Menu"].Item, null, Nav_jsx(link_default.a, {
    href: "/www/center"
  }, "\u521B\u4F5C\u4E2D\u5FC3")), Nav_jsx(external_antd_["Menu"].Item, {
    danger: true,
    onClick: () => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  }, "\u9000\u51FA\u767B\u5F55")));

  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (router) {
      menus.map(obj => {
        if (router.query.cate1 === obj.key) {
          setcurMenu(obj);
        }

        return obj;
      });
    }
  }, [router]);
  return Nav_jsx("div", null, Nav_jsx(head_default.a, null, profile && Nav_jsx("title", null, profile.title || "oh my blog", curMenu ? `-${curMenu.title}` : "", router.pathname.includes("www/home") ? "-首页" : "", router.pathname.includes("www/posts") ? `-${profile.blogName}` : "")), Nav_jsx("div", {
    className: Nav_index_module_default.a.nav1
  }, Nav_jsx("div", {
    className: Nav_index_module_default.a.nav
  }, Nav_jsx("img", {
    src: profile.logo,
    alt: "",
    className: Nav_index_module_default.a.nav_logo
  }), Nav_jsx("div", {
    className: Nav_index_module_default.a.nav_link
  }, Nav_jsx(link_default.a, {
    href: "/www/home"
  }, Nav_jsx("div", {
    className: router.pathname.includes("www/home") ? Nav_index_module_default.a.nav_link_item_active : Nav_index_module_default.a.nav_link_item
  }, "\u9996\u9875")), menus.map(obj => {
    const toLink = `/www/alist?cate1=${obj.key}`; // if (obj.children && obj.children.length > 0) {
    //   toLink = `/www/alist?cate1=${obj.key}&cate2=${obj.children[0].key}`
    // }

    return Nav_jsx(link_default.a, {
      href: toLink,
      key: obj.key
    }, Nav_jsx("div", {
      className: router.query.cate1 === obj.key ? Nav_index_module_default.a.nav_link_item_active : Nav_index_module_default.a.nav_link_item,
      key: obj.key
    }, obj.title));
  }), Nav_jsx("div", {
    className: Nav_index_module_default.a.nav_link_item,
    onClick: () => {
      external_antd_["message"].info("开发中，即将开放");
    }
  }, Nav_jsx("i", {
    className: "iconfont icon-message_three_points"
  }), "\u7559\u8A00\u533A")), curUser ? Nav_jsx(external_antd_["Dropdown"], {
    overlay: menu,
    arrow: true,
    placement: "bottomRight"
  }, Nav_jsx("div", {
    className: Nav_index_module_default.a.link_login,
    onClick: e => e.preventDefault()
  }, Nav_jsx("div", {
    className: Nav_index_module_default.a.btn
  }, Nav_jsx("span", null, curUser.attributes.username), Nav_jsx("i", {
    className: "iconfont icon-down",
    style: {
      fontSize: 12
    }
  })))) : Nav_jsx(Login, null, Nav_jsx("p", {
    className: Nav_index_module_default.a.nav_login
  }, "\u767B\u5F55/\u6CE8\u518C")))), curMenu && curMenu.children && Nav_jsx("div", {
    className: Nav_index_module_default.a.nav2
  }, Nav_jsx("div", {
    className: Nav_index_module_default.a.nav_link
  }, Nav_jsx(link_default.a, {
    href: `/www/alist?cate1=${curMenu.key}`
  }, Nav_jsx("div", {
    className: !router.query.cate2 ? Nav_index_module_default.a.nav_link_item_active : Nav_index_module_default.a.nav_link_item
  }, "\u5168\u90E8")), curMenu.children.map(obj => {
    return Nav_jsx(link_default.a, {
      href: `/www/alist?cate1=${curMenu.key}&cate2=${obj.key}`,
      key: obj.key
    }, Nav_jsx("div", {
      className: router.query.cate2 === obj.key ? Nav_index_module_default.a.nav_link_item_active : Nav_index_module_default.a.nav_link_item,
      key: obj.key
    }, obj.title));
  }))));
}

/* harmony default export */ var Nav = (Nav_Components);
// CONCATENATED MODULE: ./src/components/www/Layout/index.js
var Layout_jsx = external_react_default.a.createElement;










Layout_Components.defaultProps = {
  onChange: () => {}
};

function Layout_Components(props) {
  const {
    0: menus,
    1: setmenus
  } = Object(external_react_["useState"])(null);
  const {
    0: profile,
    1: setprofile
  } = Object(external_react_["useState"])(null);
  const {
    0: curUserInfo,
    1: setcurUserInfo
  } = Object(external_react_["useState"])(null);

  const handleInit = async () => {
    try {
      await getData("CMS_Menus", service_menu["b" /* getMenusList */], setmenus);
      await getData("CMS_Profile", service_profile["b" /* getProfileList */], setprofile);
      await getData("CMS_UserInfo", service_user["b" /* getMyUserInfo */], setcurUserInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async (keyname, func, setFunc) => {
    // 获取菜单
    const local_data = sessionStorage.getItem(keyname);

    if (local_data) {
      setFunc(JSON.parse(local_data));

      if (keyname === "CMS_Profile") {
        updateViews({
          profile_id: JSON.parse(local_data).objectId
        });
      }
    } else {
      const res = await func();

      if (res) {
        setFunc(JSON.parse(JSON.stringify(res)));
        sessionStorage.setItem(keyname, JSON.stringify(res));

        if (keyname === "CMS_Profile") {
          updateViews({
            profile_id: JSON.parse(JSON.stringify(res)).objectId
          });
          updateViews_UV({
            profile_id: JSON.parse(JSON.stringify(res)).objectId
          });
        }
      } else {
        // 如果是CMS_UserInfo 则创建userinfo
        if (keyname === "CMS_UserInfo" && external_leancloud_storage_default.a.User.current()) {
          await Object(service_user["a" /* createUserInfo */])();
          await getData("CMS_UserInfo", service_user["b" /* getMyUserInfo */], setcurUserInfo);
        }
      }
    }
  }; // 更新views


  const updateViews = function ({
    profile_id
  }) {
    Object(service_profile["c" /* updateProfile */])({
      profileItem: external_leancloud_storage_default.a.Object.createWithoutData("CMS_Profile", profile_id),
      params: {
        views: 1
      }
    });
  };

  const updateViews_UV = function ({
    profile_id
  }) {
    // 更新views
    Object(service_profile["c" /* updateProfile */])({
      profileItem: external_leancloud_storage_default.a.Object.createWithoutData("CMS_Profile", profile_id),
      params: {
        views_uv: 1
      }
    });
  };

  Object(external_react_["useEffect"])(() => {
    handleInit();
  }, []);
  Object(external_react_["useEffect"])(() => {
    props.onChange && props.onChange({
      menus,
      profile,
      userinfo: curUserInfo
    });
  }, [menus, profile, curUserInfo]);
  return Layout_jsx("div", {
    className: index_module_default.a.container
  }, menus && profile && Layout_jsx(Nav, {
    menus: menus.value,
    profile: profile,
    userinfo: curUserInfo
  }), Layout_jsx("div", {
    className: index_module_default.a.body
  }, props.children), profile && Layout_jsx("footer", {
    className: index_module_default.a.footer
  }, Layout_jsx("div", {
    className: index_module_default.a.footer_content
  }, Layout_jsx("div", {
    className: index_module_default.a.logo // style={{ backgroundImage: `url(${profile.logo})` }}

  }, Layout_jsx("img", {
    src: profile.logo,
    alt: "",
    className: "logo"
  })), profile.github && Layout_jsx("div", {
    className: index_module_default.a.item
  }, "github\uFF1A", Layout_jsx("a", {
    href: profile.github,
    className: "link",
    target: "_blank"
  }, profile.github)), profile.email && Layout_jsx("div", {
    className: index_module_default.a.item
  }, "\u90AE\u7BB1\uFF1A", Layout_jsx("a", {
    href: `mailto:${profile.email}`,
    className: "link"
  }, profile.email)), profile.copyright && Layout_jsx("div", {
    className: index_module_default.a.copyright
  }, profile.copyright), Layout_jsx("div", {
    className: index_module_default.a.copyright
  }, `当前站点总访问量 ${profile.views || "..."} 次，总访客数 ${profile.views_uv || "..."} 人`))));
}

/* harmony default export */ var Layout = __webpack_exports__["a"] = (Layout_Components);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h1X7":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Layout_container__13Gtb",
	"body": "Layout_body__2Iq27",
	"footer": "Layout_footer__1dRJb",
	"footer_content": "Layout_footer_content__2py9W",
	"logo": "Layout_logo__28x2z",
	"item": "Layout_item__1DDCY",
	"copyright": "Layout_copyright__1rens"
};

/***/ }),

/***/ "jhyn":
/***/ (function(module, exports) {

module.exports = require("leancloud-storage");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mhur":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMyUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserInfoById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateUserInfo; });
/* unused harmony export userFollow */
/* unused harmony export userUnFollow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return userFolloweeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return userFolloweeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return userFollowerNumber; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2WPw");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);


const getMyUserInfo = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query("CMS_UserInfo");
    const curUser = leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current();
    query.equalTo("user", curUser);
    query.first().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const createUserInfo = (params = {}) => {
  return new Promise((resolve, reject) => {
    // 创建userinfo
    const curUser = leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current();
    const userinfoObj = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object("CMS_UserInfo");
    userinfoObj.set("user", curUser);
    userinfoObj.set("nickname", curUser.toJSON().username);
    userinfoObj.set("priority", 1); // 权限等级 默认：1 未授权

    userinfoObj.set("shortid", shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate()); // shortid
    // 将对象保存到云端

    userinfoObj.save().then(todo => {
      resolve(todo);
    }, error => {
      // 异常处理
      reeject(error);
    });
  });
};
const getUserInfoById = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query("CMS_UserInfo");
    query.get(params.id).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const updateUserInfo = ({
  userinfoItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    Object.keys(params).map(keyname => {
      userinfoItem.set(keyname, params[keyname]);
    });
    userinfoItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
}; // 关注

const userFollow = ({
  userid
}) => {
  return new Promise((resolve, reject) => {
    var query = leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().followeeQuery(); // query.include('followee')

    query.count().then(number => {
      if (number > 50) {
        reject("超过最大关注人数(50人)");
      } else {
        leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().follow(userid).then(res => {
          resolve(res);
        }, error => {
          // 异常处理
          reject("关注失败");
        });
      }
    });
  });
}; // 取消关注

const userUnFollow = ({
  userid
}) => {
  return new Promise((resolve, reject) => {
    leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().unfollow(userid).then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
}; // 获取我关注的用户列表

const userFolloweeList = () => {
  return new Promise((resolve, reject) => {
    if (!leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current()) {
      reject([]);
    } else {
      var query = leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current().followeeQuery();
      query.include("followee");
      query.find().then(followees => {
        //关注的用户列表 followees
        resolve(followees);
      });
    }
  });
}; // 获取用户关注数

const userFolloweeNumber = ({
  userItem
}) => {
  return new Promise((resolve, reject) => {
    var query = userItem.followeeQuery();
    query.count().then(number => {
      resolve(number);
    });
  });
}; // 获取用户粉丝数

const userFollowerNumber = ({
  userItem
}) => {
  return new Promise((resolve, reject) => {
    var query = userItem.followerQuery();
    query.count().then(number => {
      resolve(number);
    });
  });
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o+Q2":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"nav1": "Nav_nav1__22jHn",
	"nav": "Nav_nav__3F_mD",
	"nav_logo": "Nav_nav_logo__Xsl5Y",
	"nav_login": "Nav_nav_login__bABWK",
	"link_login": "Nav_link_login__3AKdb",
	"nav_link": "Nav_nav_link__2wylr",
	"nav_link_item": "Nav_nav_link_item__3_n0J",
	"nav_link_item_active": "Nav_nav_link_item_active__1_MMb",
	"nav_link_item_active_active": "Nav_nav_link_item_active_active__2cXRV",
	"nav2": "Nav_nav2__1oB07"
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });