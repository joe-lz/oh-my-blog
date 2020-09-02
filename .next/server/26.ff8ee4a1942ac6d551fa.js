exports.ids = [26];
exports.modules = {

/***/ "1zla":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Nav_header__2RrFq",
	"logo": "Nav_logo__3aU_I",
	"logoimg": "Nav_logoimg__2Q1uN",
	"right": "Nav_right__KFFEr",
	"divider": "Nav_divider__14CFM",
	"priority": "Nav_priority__2TgOz",
	"link": "Nav_link__DhRUX",
	"link_active": "Nav_link_active__8W5_l",
	"btn": "Nav_btn__1Fwgs"
};

/***/ }),

/***/ "CMjv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  value: 1,
  label: "未授权",
  desc: "无任何权限"
}, {
  value: 98,
  label: "普通用户",
  desc: "仅投稿权限，且稿件需要审核"
}, {
  value: 99,
  label: "普通管理员",
  desc: "除了用户管理外全部权限"
}, {
  value: 100,
  label: "超级管理员",
  desc: '所有权限'
}]);

/***/ }),

/***/ "vwdz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1zla");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_lib_priority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CMjv");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






Components.defaultProps = {
  curUser: null,
  //pointer
  userinfo: null,
  // pointer
  profile: null // pointer

};

function Components(props) {
  let {
    curUser,
    userinfo,
    profile
  } = props;
  let priorityLabel = "";
  src_lib_priority__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].map(obj => {
    if (userinfo && obj.value == userinfo.attributes.priority) {
      priorityLabel = obj.label;
    }
  });

  const menu = __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, userinfo && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/www/home"
  }, "\u9996\u9875"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    danger: true,
    onClick: () => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.reload();
    }
  }, "\u9000\u51FA\u767B\u5F55")));

  return __jsx("header", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header
  }, __jsx("nav", null, profile && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/admin/home"
  }, __jsx("img", {
    src: profile.toJSON().logo,
    alt: "",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.logo
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.right
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.priority
  }, __jsx("span", null, priorityLabel)), userinfo && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.divider
  }, "|"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu,
    arrow: true,
    placement: "bottomRight"
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,
    onClick: e => e.preventDefault()
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.btn
  }, __jsx("span", null, userinfo.attributes.nickname), __jsx("i", {
    className: "iconfont icon-down",
    style: {
      fontSize: 12
    }
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Components);

/***/ })

};;