module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yPfa");


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

/***/ "7iv/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCommentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countComments; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

const createComment = params => {
  return new Promise((resolve, reject) => {
    const comments = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object('CMS_Comments');
    comments.set('status', 1);
    comments.set('likes', 0);
    comments.set('likesUser', []);
    comments.set('children', []);
    Object.keys(params).map(keyname => {
      comments.set(keyname, params[keyname]);
    }); // 将对象保存到云端

    comments.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};
const updateComment = ({
  commentItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    if (params.likes) {
      commentItem.increment('likes', params.likes);

      if (params.likes > 0) {
        commentItem.addUnique('likesUser', params.likesUser_id);
      } else {
        commentItem.remove('likesUser', params.likesUser_id);
      }
    } else {
      Object.keys(params).map(keyname => {
        commentItem.set(keyname, params[keyname]);
      });
    }

    commentItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};
const getCommentList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Comments');
    query.descending('createdAt');
    query.include('user');
    query.limit(50);
    Object.keys(params).map(keyname => {
      query.equalTo(keyname, params[keyname]);
    });
    query.find().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const countComments = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Comments');
    query.equalTo('aid', params.article);
    query.count().then(number => {
      resolve(number);
    });
  });
};

/***/ }),

/***/ "9Oib":
/***/ (function(module, exports) {

module.exports = require("highlight.js");

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

/***/ "CAL3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "leancloud-storage"
var external_leancloud_storage_ = __webpack_require__("jhyn");
var external_leancloud_storage_default = /*#__PURE__*/__webpack_require__.n(external_leancloud_storage_);

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/www/Comments/index.module.scss
var index_module = __webpack_require__("gr06");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./src/service/comment.js
var comment = __webpack_require__("7iv/");

// CONCATENATED MODULE: ./src/components/www/Comments/item.js
var __jsx = external_react_default.a.createElement;










__webpack_require__("KiuA");

external_dayjs_default.a.locale("zh-cn");

const relativeTime = __webpack_require__("jYNn");

external_dayjs_default.a.extend(relativeTime);

function Components(props) {
  const {
    0: hasLiked,
    1: sethasLiked
  } = Object(external_react_["useState"])(false);
  const {
    0: likes,
    1: setlikes
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    if (props.item && props.userinfo) {
      const itemNew = JSON.parse(JSON.stringify(props.item));
      const likesUser = itemNew.likesUser || [];
      sethasLiked(likesUser.includes(props.userinfo.objectId));
      setlikes(itemNew.likes || 0);
    }
  }, [props.item, props.userinfo]);
  const author = props.item.attributes.user;
  return __jsx("div", {
    className: index_module_default.a.item
  }, __jsx("a", {
    href: `/www/user/${author.objectId}`,
    target: "_blank"
  }, __jsx("div", {
    className: index_module_default.a.item_top
  }, __jsx("div", {
    className: index_module_default.a.avatar,
    style: {
      backgroundImage: `url(${author.avatar})`
    }
  }), __jsx("p", {
    className: index_module_default.a.nickname
  }, author.nickname), __jsx("p", {
    className: index_module_default.a.about
  }, author.position, author.co_name ? `@${author.co_name}` : ""), __jsx("p", {
    className: index_module_default.a.time
  }, external_dayjs_default()(props.item.createdAt).format("YYYY/MM/DD HH:mm")))), __jsx("p", {
    className: index_module_default.a.content
  }, props.item.attributes.content), __jsx("div", {
    className: index_module_default.a.item_operation
  }, __jsx("div", {
    className: hasLiked ? index_module_default.a.item_operation_btn_active : index_module_default.a.item_operation_btn,
    onClick: async () => {
      if (!external_leancloud_storage_default.a.User.current()) {
        external_antd_["message"].error("请先登录");
        return;
      }

      await Object(comment["d" /* updateComment */])({
        commentItem: props.item,
        params: {
          likes: hasLiked ? -1 : 1,
          likesUser_id: props.userinfo.objectId
        }
      });
      setlikes(likes + (hasLiked ? -1 : 1));
      sethasLiked(!hasLiked);
    }
  }, __jsx("i", {
    className: `iconfont ${hasLiked ? "icon-tubiaozhizuo-" : "icon-z-like"}`
  }), " ", likes ? likes : "")));
}

/* harmony default export */ var item = (Components);
// EXTERNAL MODULE: ./src/service/post.js
var post = __webpack_require__("KcKq");

// CONCATENATED MODULE: ./src/components/www/Comments/index.js
var Comments_jsx = external_react_default.a.createElement;










 // const { TextArea } = Input

__webpack_require__("KiuA");

external_dayjs_default.a.locale('zh-cn');

const Comments_relativeTime = __webpack_require__("jYNn");

external_dayjs_default.a.extend(Comments_relativeTime);

function Comments_Components(props) {
  const {
    0: content,
    1: setcontent
  } = Object(external_react_["useState"])('');
  const {
    0: disabled,
    1: setdisabled
  } = Object(external_react_["useState"])(true);
  const {
    0: list,
    1: setlist
  } = Object(external_react_["useState"])([]);

  const handleSubmit = async () => {
    if (!external_leancloud_storage_default.a.User.current()) {
      external_antd_["message"].error('请先登录');
      return;
    }

    if (!content) {
      external_antd_["message"].error('请输入评论');
      return;
    }

    await Object(comment["b" /* createComment */])(Object.assign({
      type: props.type,
      user: props.userinfo,
      content
    }, props.type === 'article' ? {
      aid: props.id
    } : {
      pid: props.id
    }));
    getlist();
    setcontent('');

    if (props.type === 'post') {
      Object(post["c" /* updatePost */])({
        postItem: props.id,
        params: {
          comments: 1
        }
      });
    }

    if (props.type === 'article') {}
  };

  const getlist = async () => {
    const res = await Object(comment["c" /* getCommentList */])(Object.assign({
      type: props.type
    }, props.type === 'article' ? {
      aid: props.id
    } : {
      pid: props.id
    }));
    setlist(res);
  };

  Object(external_react_["useEffect"])(() => {
    getlist();
  }, []);
  Object(external_react_["useEffect"])(() => {
    setdisabled(false);
  }, [content]);
  return Comments_jsx("div", {
    className: index_module_default.a.comment
  }, Comments_jsx("div", {
    className: index_module_default.a.comment_input
  }, Comments_jsx(external_antd_["Input"], {
    className: index_module_default.a.textarea,
    value: content,
    placeholder: "\u8F93\u5165\u8BC4\u8BBA...",
    maxLength: 140,
    onChange: e => {
      setcontent(e.target.value);
    }
  }), Comments_jsx(external_antd_["Button"], {
    type: "primary",
    className: index_module_default.a.submit,
    disabled: disabled,
    onClick: () => {
      handleSubmit();
    }
  }, "\u53D1\u5E03")), Comments_jsx("div", {
    className: index_module_default.a.comment_list
  }, list.map(obj => {
    return Comments_jsx(item, {
      key: obj.id,
      item: obj,
      userinfo: props.userinfo
    });
  })));
}

/* harmony default export */ var Comments = __webpack_exports__["a"] = (Comments_Components);

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

/***/ "HB4z":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userinfo": "UserInfo_userinfo__1X2ac",
	"userinfo_content": "UserInfo_userinfo_content__31LVq",
	"avatar": "UserInfo_avatar__1d8I-",
	"userinfo_info": "UserInfo_userinfo_info__2N9oD",
	"nickname": "UserInfo_nickname__22Lmb",
	"about": "UserInfo_about__2TP8J",
	"userinfo_follow": "UserInfo_userinfo_follow__I-py6"
};

/***/ }),

/***/ "HWFp":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "KcKq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPostList; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

const createPost = params => {
  return new Promise((resolve, reject) => {
    const post = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object('CMS_Posts');
    post.set('status', 1);
    post.set('likes', 0);
    post.set('likesUser', []);
    post.set('user', leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current());
    Object.keys(params).map(keyname => {
      post.set(keyname, params[keyname]);
    }); // 将对象保存到云端

    post.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};
const updatePost = ({
  postItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    if (params.likes) {
      postItem.increment('likes', params.likes);

      if (params.likes > 0) {
        postItem.addUnique('likesUser', params.likesUser_id);
      } else {
        postItem.remove('likesUser', params.likesUser_id);
      }
    } else if (params.comments) {
      postItem.increment('comments', params.comments);
    } else {
      Object.keys(params).map(keyname => {
        postItem.set(keyname, params[keyname]);
      });
    }

    postItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};
const getPostList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Posts');
    Object.keys(params).map(keyname => {
      query.equalTo(keyname, params[keyname]);
    });
    query.include('userinfo');
    query.include('topic');
    query.descending('createdAt');
    query.limit(50);
    query.find().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

/***/ }),

/***/ "KiuA":
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/zh-cn");

/***/ }),

/***/ "KoFZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("HB4z");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_service_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mhur");
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









Components.defaultProps = {
  followeeList: [],
  userinfo: null,
  time: null,
  views: 0
};

function Components(props) {
  const userinfoNew = JSON.parse(JSON.stringify(props.userinfo)); // const [followeeList, setfolloweeList] = useState([])

  const {
    0: isFollowing,
    1: setisFollowing
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false); // const handleFetchFollowee = async () => {
  //   const list = await userFolloweeList()
  //   if (list) {
  //     setfolloweeList(JSON.parse(JSON.stringify(list)))
  //     localStorage.setItem('My_CMS_FolloweeList', JSON.stringify(list))
  //     localStorage.setItem('My_CMS_FolloweeList_time', Date.now())
  //   }
  // }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {// const fetchData = async () => {
    //   if (
    //     localStorage.getItem('My_CMS_FolloweeList') &&
    //     Number(localStorage.getItem('My_CMS_FolloweeList_time')) + 5 * 60 * 1000 > Date.now()
    //   ) {
    //     const list = JSON.parse(localStorage.getItem('My_CMS_FolloweeList'))
    //     setfolloweeList(list)
    //   } else {
    //     handleFetchFollowee()
    //   }
    // }
    // fetchData()
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    props.followeeList.map(obj => {
      if (obj.objectId === userinfoNew.user.objectId) {
        setisFollowing(true);
      }
    });
  }, [props.followeeList]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, props.userinfo && __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userinfo
  }, __jsx("a", {
    href: `/www/user/${userinfoNew.objectId}`,
    target: "_blank",
    style: {
      display: 'block'
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userinfo_content
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.avatar,
    style: {
      backgroundImage: `url(${userinfoNew.avatar})`
    }
  }), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.userinfo_info
  }, __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.nickname
  }, userinfoNew.nickname), __jsx("p", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.about
  }, userinfoNew.position, userinfoNew.co_name ? `@${userinfoNew.co_name}` : '', userinfoNew.position || userinfoNew.co_name ? '・' : '', props.time ? `${props.time}` : '', props.views ? `・阅读 ${props.views}` : ''))))));
}

/* harmony default export */ __webpack_exports__["a"] = (Components);

/***/ }),

/***/ "MWcx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getArticleById; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

const createArticle = params => {
  return new Promise((resolve, reject) => {
    const articles = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object('CMS_Articles');
    articles.set('status', 1); // articles.set('user', AV.User.current())

    Object.keys(params).map(keyname => {
      articles.set(keyname, params[keyname]);
    }); // 将对象保存到云端

    articles.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};
const updateArticle = ({
  articleItem,
  params
}) => {
  return new Promise((resolve, reject) => {
    // articleItem.set("articleVal", articleVal);
    // articleItem.set("title", articleTitle);
    if (params.views) {
      articleItem.increment('views', params.views);
    } else if (params.collects) {
      articleItem.increment('collects', params.collects);
    } else if (params.likes) {
      articleItem.increment('likes', params.likes);
    } else {
      Object.keys(params).map(keyname => {
        articleItem.set(keyname, params[keyname]);
      });
    }

    articleItem.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};
const getArticleList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Articles');
    query.descending('createdAt');
    query.include('author');
    query.limit(50);
    Object.keys(params).map(keyname => {
      query.equalTo(keyname, params[keyname]);
    });
    query.find().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const getArticleById = ({
  id
}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Articles');
    query.include('author');
    query.get(id).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

/***/ }),

/***/ "N37p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createCollect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteCollect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countCollect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getMyCollect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCollectList; });
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_0__);

const createCollect = (params = {}) => {
  return new Promise((resolve, reject) => {
    const collects = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Object('CMS_Collects');
    collects.set('user', leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current());
    collects.set('article', params.article); // 将对象保存到云端

    collects.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};
const deleteCollect = (params = {}) => {
  return new Promise((resolve, reject) => {
    params.item.destroy().then(() => {
      resolve();
    });
  });
};
const countCollect = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Collects'); // query.equalTo('user', AV.User.current())

    query.equalTo('article', params.article);
    query.count().then(number => {
      resolve(number);
    });
  });
};
const getMyCollect = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Collects');
    query.equalTo('user', leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.User.current());
    query.equalTo('article', params.article);
    query.first().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
const getCollectList = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new leancloud_storage__WEBPACK_IMPORTED_MODULE_0___default.a.Query('CMS_Collects');
    query.equalTo('user', params.user);
    query.include('article');
    query.include('article.author');
    query.find().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Pcll":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"block": "Ad_block__V2ORY"
};

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

/***/ "ZGKr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "adetail_container__1a9LC",
	"actions": "adetail_actions__1YzPo",
	"actions_item": "adetail_actions_item__1cAbc",
	"actions_item_active": "adetail_actions_item_active__3bhEL",
	"actions_item_active_active": "adetail_actions_item_active_active__2KsbF",
	"number": "adetail_number__1bnYr",
	"left": "adetail_left__1vboH",
	"left_content": "adetail_left_content__3BZ8q",
	"title": "adetail_title__3121d",
	"right": "adetail_right__6dEkF",
	"author": "adetail_author__3pFMX",
	"author_title": "adetail_author_title__1Mw0T",
	"author_content": "adetail_author_content__3I1NG"
};

/***/ }),

/***/ "Zt1o":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "CategoryList_container__1YgOz",
	"item": "CategoryList_item__3xqBf",
	"item_mini": "CategoryList_item_mini__dD8Pe",
	"text": "CategoryList_text__1Ipmb",
	"item_mini_mini": "CategoryList_item_mini_mini__3U03k"
};

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

/***/ "gr06":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"comment": "Comments_comment__2Yvc_",
	"comment_input": "Comments_comment_input__17ptn",
	"textarea": "Comments_textarea__3sfAI",
	"item_top": "Comments_item_top__3gEkD",
	"avatar": "Comments_avatar__38D8X",
	"nickname": "Comments_nickname__jMwuA",
	"about": "Comments_about__uL8SE",
	"time": "Comments_time__1d0dB",
	"item": "Comments_item__JjRTp",
	"content": "Comments_content__1JSYU",
	"item_operation": "Comments_item_operation__2U-uk",
	"item_operation_btn": "Comments_item_operation_btn__nOE8g",
	"item_operation_btn_active": "Comments_item_operation_btn_active__3BKBa",
	"item_operation_btn_active_active": "Comments_item_operation_btn_active_active__3NsRz"
};

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

/***/ "jYNn":
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/relativeTime");

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

/***/ "peSn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jhyn");
/* harmony import */ var leancloud_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leancloud_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Pcll");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








function Components(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, props.item.show && __jsx("a", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.block,
    style: {
      backgroundImage: `url(${props.item.imgUrl})`
    },
    href: props.item.adUrl,
    target: "_blank"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Components);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yPfa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "leancloud-storage"
var external_leancloud_storage_ = __webpack_require__("jhyn");
var external_leancloud_storage_default = /*#__PURE__*/__webpack_require__.n(external_leancloud_storage_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__("HWFp");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__("9Oib");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);

// EXTERNAL MODULE: ./src/pages/www/adetail/index.module.scss
var index_module = __webpack_require__("ZGKr");
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);

// EXTERNAL MODULE: ./src/components/www/Layout/index.js + 2 modules
var Layout = __webpack_require__("eOYp");

// EXTERNAL MODULE: ./src/components/www/Comments/index.js + 1 modules
var Comments = __webpack_require__("CAL3");

// EXTERNAL MODULE: ./src/components/www/CategoryList/index.module.scss
var CategoryList_index_module = __webpack_require__("Zt1o");
var CategoryList_index_module_default = /*#__PURE__*/__webpack_require__.n(CategoryList_index_module);

// CONCATENATED MODULE: ./src/components/www/CategoryList/index.js
var __jsx = external_react_default.a.createElement;
 // import Link from 'next/link'




 // import * as Scroll from 'react-scroll'




function Components(props) {
  const {
    0: finalminLevel,
    1: setfinalminLevel
  } = Object(external_react_["useState"])(10);
  const {
    0: scrollTop,
    1: setscrollTop
  } = Object(external_react_["useState"])(10);

  const handleScroll = event => {
    setscrollTop(document.documentElement.scrollTop);
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    const {
      nav
    } = props;
    let minLevel = 10;
    nav.map(obj => {
      if (obj.level < minLevel) {
        minLevel = obj.level;
        return obj;
      }
    });
    setfinalminLevel(minLevel);
  }, [JSON.stringify(props.nav)]);
  const {
    nav
  } = props;
  return __jsx("div", {
    className: "article_category_list",
    style: scrollTop > 400 ? {
      position: 'fixed',
      top: 0
    } : {}
  }, nav && nav.length > 0 && __jsx("div", {
    className: CategoryList_index_module_default.a.container
  }, nav.map((obj, index) => {
    return __jsx(external_react_scroll_["Link"], {
      key: `${index + 1}`,
      spy: true,
      smooth: true // hashSpy={true}
      // offset={50}
      // duration={500}
      // delay={1000}
      // isDynamic={true}
      // ignoreCancelEvents={false}
      ,
      to: obj.id
    }, __jsx("div", {
      className: obj.level > finalminLevel ? CategoryList_index_module_default.a.item_mini : CategoryList_index_module_default.a.item,
      style: obj.level > finalminLevel ? {
        paddingLeft: 15 + 15 * (obj.level - finalminLevel)
      } : {
        fontWeight: 'bold'
      }
    }, __jsx("span", {
      className: CategoryList_index_module_default.a.text
    }, obj.text)));
  })));
}

/* harmony default export */ var CategoryList = (Components);
// EXTERNAL MODULE: ./src/components/www/Ad/index.js
var Ad = __webpack_require__("peSn");

// EXTERNAL MODULE: ./src/components/www/UserInfo/index.js
var UserInfo = __webpack_require__("KoFZ");

// EXTERNAL MODULE: ./src/service/article.js
var service_article = __webpack_require__("MWcx");

// EXTERNAL MODULE: ./src/service/collect.js
var collect = __webpack_require__("N37p");

// CONCATENATED MODULE: ./src/service/likes.js

const createLike = (params = {}) => {
  return new Promise((resolve, reject) => {
    const likes = new external_leancloud_storage_default.a.Object('CMS_Likes');
    likes.set('user', external_leancloud_storage_default.a.User.current());
    likes.set('article', params.article); // 将对象保存到云端

    likes.save().then(res => {
      resolve(res);
    }, error => {
      // 异常处理
      reject(error);
    });
  });
};
const deleteLike = (params = {}) => {
  return new Promise((resolve, reject) => {
    params.item.destroy().then(() => {
      resolve();
    });
  });
};
const countLike = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new external_leancloud_storage_default.a.Query('CMS_Likes'); // query.equalTo('user', AV.User.current())

    query.equalTo('article', params.article);
    query.count().then(number => {
      resolve(number);
    });
  });
};
const getMyLike = (params = {}) => {
  return new Promise((resolve, reject) => {
    const query = new external_leancloud_storage_default.a.Query('CMS_Likes');
    query.equalTo('user', external_leancloud_storage_default.a.User.current());
    query.equalTo('article', params.article);
    query.first().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};
// EXTERNAL MODULE: ./src/service/comment.js
var comment = __webpack_require__("7iv/");

// CONCATENATED MODULE: ./src/pages/www/adetail/[id].js
var _id_jsx = external_react_default.a.createElement;






















__webpack_require__("KiuA");

external_dayjs_default.a.locale('zh-cn');

const relativeTime = __webpack_require__("jYNn");

external_dayjs_default.a.extend(relativeTime);
const _id_nav = [];
const renderer = new external_marked_default.a.Renderer();

renderer.heading = function heading(text, level, raw, slugger) {
  _id_nav.push({
    text,
    level,
    raw,
    slugger,
    id: this.options.headerPrefix + slugger.slug(raw) + '-1'
  });

  if (this.options.headerIds) {
    return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
  } // ignore IDs


  return '<h' + level + '>' + text + '</h' + level + '>\n';
};

external_marked_default.a.setOptions({
  renderer,
  highlight: function (code, language) {
    const hljs = __webpack_require__("9Oib");

    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

function MyComponent() {
  const router = Object(router_["useRouter"])();
  const aid = router.query.id;
  const {
    0: articleObj,
    1: setarticleObj
  } = Object(external_react_["useState"])(null);
  const {
    0: articleObjJSON,
    1: setarticleObjJSON
  } = Object(external_react_["useState"])(null);
  const {
    0: author,
    1: setauthor
  } = Object(external_react_["useState"])(null);
  const {
    0: profile,
    1: setprofile
  } = Object(external_react_["useState"])(null);
  const {
    0: userinfo,
    1: setuserinfo
  } = Object(external_react_["useState"])(null);
  const {
    0: html,
    1: sethtml
  } = Object(external_react_["useState"])(null);
  const {
    0: views,
    1: setviews
  } = Object(external_react_["useState"])(0);
  const {
    0: num_collects,
    1: setnum_collects
  } = Object(external_react_["useState"])(0);
  const {
    0: myCollect,
    1: setmyCollect
  } = Object(external_react_["useState"])(null);
  const {
    0: num_comments,
    1: setnum_comments
  } = Object(external_react_["useState"])(0);
  const {
    0: num_likes,
    1: setnum_likes
  } = Object(external_react_["useState"])(0);
  const {
    0: myLike,
    1: setmyLike
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    async function fetchData() {
      if (aid) {
        const res = await Object(service_article["b" /* getArticleById */])({
          id: aid
        });
        setarticleObj(res);
        setarticleObjJSON(res.toJSON());
        setauthor(res.attributes.author);
        sethtml(external_marked_default()(res.attributes.articleVal)); // 访问数+1

        await Object(service_article["d" /* updateArticle */])({
          articleItem: res,
          params: {
            views: 1
          }
        });
        setviews(res.attributes.views); // 收藏数量

        setnum_collects(await Object(collect["a" /* countCollect */])({
          article: res
        })); // 我是否收藏

        const numCollect = await Object(collect["e" /* getMyCollect */])({
          article: res
        });
        setmyCollect(numCollect); // 收藏数量

        setnum_likes(await countLike({
          article: res
        })); // 我是否收藏

        const numLike = await getMyLike({
          article: res
        });
        setmyLike(numLike); // 评论数量

        const numComments = await Object(comment["a" /* countComments */])({
          article: res
        });
        setnum_comments(numComments);
      }
    }

    fetchData();
  }, [router]);

  const handleCollect = async () => {
    await handleAction({
      actionName: '收藏',
      actionName_en: 'collects',
      myItem: myCollect,
      createFunc: collect["b" /* createCollect */],
      delectMyItemFunc: collect["c" /* deleteCollect */],
      getMyItemFunc: collect["e" /* getMyCollect */],
      countAllFuc: collect["a" /* countCollect */],
      setMyItemFunc: setmyCollect,
      setNumberFunc: setnum_collects,
      article: articleObj
    });
  };

  const handleLike = async () => {
    await handleAction({
      actionName: '点赞',
      actionName_en: 'likes',
      myItem: myLike,
      createFunc: createLike,
      delectMyItemFunc: deleteLike,
      getMyItemFunc: getMyLike,
      countAllFuc: countLike,
      setMyItemFunc: setmyLike,
      setNumberFunc: setnum_likes,
      article: articleObj
    });
  };

  const handleAction = async ({
    actionName,
    actionName_en,
    myItem,
    createFunc,
    delectMyItemFunc,
    getMyItemFunc,
    countAllFuc,
    setMyItemFunc,
    setNumberFunc,
    article
  }) => {
    if (!external_leancloud_storage_default.a.User.current()) {
      external_antd_["message"].error('请先登录');
      return;
    }

    if (myItem) {
      await delectMyItemFunc({
        item: myItem
      });
      setNumberFunc(await countAllFuc({
        article
      }));
      setMyItemFunc(await getMyItemFunc({
        article
      }));
      external_antd_["message"].success(`取消${actionName}`); // 更新article 相关数量字段

      Object(service_article["d" /* updateArticle */])({
        articleItem: article,
        params: {
          [`${actionName_en}`]: -1
        }
      });
    } else {
      await createFunc({
        article
      });
      setNumberFunc(await countAllFuc({
        article
      }));
      setMyItemFunc(await getMyItemFunc({
        article
      }));
      external_antd_["message"].success(`${actionName}成功`); // 更新article 相关数量字段

      Object(service_article["d" /* updateArticle */])({
        articleItem: article,
        params: {
          [`${actionName_en}`]: 1
        }
      });
    }
  };

  return _id_jsx(Layout["a" /* default */], {
    onChange: params => {
      setprofile(params.profile);
      setuserinfo(params.userinfo);
    }
  }, _id_jsx(external_antd_["BackTop"], null), articleObj && articleObjJSON && _id_jsx("div", {
    className: index_module_default.a.container
  }, _id_jsx("div", {
    className: index_module_default.a.left
  }, _id_jsx("div", {
    className: index_module_default.a.left_content
  }, _id_jsx(UserInfo["a" /* default */], {
    userinfo: author,
    time: external_dayjs_default()(articleObj.createdAt).format('YYYY/MM/DD'),
    views: views
  }), _id_jsx("p", {
    className: index_module_default.a.title
  }, articleObjJSON.title), _id_jsx("article", {
    className: "markdown-body",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), _id_jsx("div", {
    className: index_module_default.a.actions
  }, _id_jsx("div", {
    className: myLike ? index_module_default.a.actions_item_active : index_module_default.a.actions_item,
    onClick: handleLike
  }, _id_jsx("i", {
    className: "iconfont icon-tubiaozhizuo-"
  }), num_likes ? _id_jsx("span", {
    className: index_module_default.a.number
  }, num_likes) : ''), _id_jsx("div", {
    className: myCollect ? index_module_default.a.actions_item_active : index_module_default.a.actions_item,
    onClick: handleCollect
  }, _id_jsx("i", {
    className: "iconfont icon-star"
  }), num_collects ? _id_jsx("span", {
    className: index_module_default.a.number
  }, num_collects) : ''), _id_jsx(external_react_scroll_default.a.Link, {
    spy: true,
    smooth: true,
    to: "article-comments"
  }, _id_jsx("div", {
    className: index_module_default.a.actions_item
  }, _id_jsx("i", {
    className: "iconfont icon-message_three_points"
  }), num_comments ? _id_jsx("span", {
    className: index_module_default.a.number
  }, num_comments) : null)))), _id_jsx("div", {
    className: index_module_default.a.left_content,
    id: "article-comments"
  }, _id_jsx(Comments["a" /* default */], {
    type: "article",
    id: articleObj,
    userinfo: userinfo
  }))), _id_jsx("div", {
    className: index_module_default.a.right
  }, profile && profile.ads && _id_jsx(Ad["a" /* default */], {
    item: profile.ads[2]
  }), _id_jsx(CategoryList, {
    nav: _id_nav
  }))));
}

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (MyComponent);

/***/ })

/******/ });