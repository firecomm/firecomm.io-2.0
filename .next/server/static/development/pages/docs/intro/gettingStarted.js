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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DocsContent.jsx":
/*!************************************!*\
  !*** ./components/DocsContent.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_HomeLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/HomeLayout */ "./layouts/HomeLayout.jsx");
var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/components/DocsContent.jsx";



const Markdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  /*!
* Agate by Taufik Nurrohman <https://github.com/tovic>
* ----------------------------------------------------
*
* #ade5fc
* #a2fca2
* #c6b4f0
* #d36363
* #fcc28c
* #fc9b9b
* #ffa
* #fff
* #333
* #62c8f3
* #888
*
*/

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #333;
    color: white;
  }

  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-code,
  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-tag {
    color: #62c8f3;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #ade5fc;
  }

  .hljs-string,
  .hljs-bullet {
    color: #a2fca2;
  }

  .hljs-type,
  .hljs-title,
  .hljs-section,
  .hljs-attribute,
  .hljs-quote,
  .hljs-built_in,
  .hljs-builtin-name {
    color: #ffa;
  }

  .hljs-number,
  .hljs-symbol,
  .hljs-bullet {
    color: #d36363;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal {
    color: #fcc28c;
  }

  .hljs-comment,
  .hljs-deletion,
  .hljs-code {
    color: #888;
  }

  .hljs-regexp,
  .hljs-link {
    color: #c6b4f0;
  }

  .hljs-meta {
    color: #fc9b9b;
  }

  .hljs-deletion {
    background-color: #fc9b9b;
    color: #333;
  }

  .hljs-addition {
    background-color: #a2fca2;
    color: #333;
  }

  .hljs a {
    color: inherit;
  }

  .hljs a:focus,
  .hljs a:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

const wrapMarkup = html => ({
  __html: html
});

const DocsContent = ({
  content
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_HomeLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Markdown, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "markdown",
    dangerouslySetInnerHTML: wrapMarkup(content),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DocsContent);

/***/ }),

/***/ "./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/components/Nav.jsx";



const Nav = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navigation-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/docs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Docs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/guides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Guides"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Team"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./layouts/HomeLayout.jsx":
/*!********************************!*\
  !*** ./layouts/HomeLayout.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.jsx");
var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/layouts/HomeLayout.jsx";





const HomeLayout = ({
  children
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "page-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeLayout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

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
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = function createRouter() {
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
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/docs/intro/gettingStarted.jsx":
/*!*********************************************!*\
  !*** ./pages/docs/intro/gettingStarted.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DocsContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/DocsContent */ "./components/DocsContent.jsx");
/* harmony import */ var _static_docs_gettingstarted_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/docs/gettingstarted.md */ "./static/docs/gettingstarted.md");
/* harmony import */ var _static_docs_gettingstarted_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_docs_gettingstarted_md__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/pages/docs/intro/gettingStarted.jsx";




const GettingStarted = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DocsContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: _static_docs_gettingstarted_md__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GettingStarted);

/***/ }),

/***/ "./static/docs/gettingstarted.md":
/*!***************************************!*\
  !*** ./static/docs/gettingstarted.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"getting-started\">Getting Started</h1>\n<h2 id=\"install\">Install</h2>\n<pre><code><pre class=\"hljs\"><code>npm i --save firecomm</code></pre></code></pre><h2 id=\"1-define-a-proto-file\">1. Define a <code>.proto</code> file</h2>\n<p>Let&#39;s begin by creating a file named <code>exampleAPI.proto</code> that will live inside a <code>proto</code> folder. The <code>ProtoBuf</code> we define in this file will define the name of the <code>package</code>, the names of the <code>service</code>s, the <code>rpc</code> methods, what the client <code>Stub</code> sends, what the <code>Server</code> returns, and the structured data that is part of each <code>message</code>.</p>\n<pre><code class=\"language-protobuf\"><span class=\"hljs\"><span class=\"hljs-comment\">// proto/exampleAPI.proto</span>\nsyntax proto3\n\n<span class=\"hljs-keyword\">package</span> exampleAPI\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">service</span> <span class=\"hljs-title\">FileTransfer</span> </span>{\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> ClientToServer (stream File) <span class=\"hljs-keyword\">returns</span> (Confirmation) {}</span>;\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> ServerToClient (Confirmation) <span class=\"hljs-keyword\">returns</span> (stream File) {}</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">service</span> <span class=\"hljs-title\">HeavyMath</span> </span>{\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> UnaryMath (Math) <span class=\"hljs-keyword\">returns</span> (Math) {}</span>;\n  <span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> BidiMath (stream Math) <span class=\"hljs-keyword\">returns</span> (stream Math) {}</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">message</span> <span class=\"hljs-title\">Confirmation</span> </span>{\n  <span class=\"hljs-built_in\">bool</span> status = <span class=\"hljs-number\">1</span>;\n  <span class=\"hljs-built_in\">string</span> comments = <span class=\"hljs-number\">2</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">message</span> <span class=\"hljs-title\">File</span> </span>{\n  <span class=\"hljs-built_in\">bytes</span> fileBuffer = <span class=\"hljs-number\">1</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">message</span> <span class=\"hljs-title\">Math</span> </span>{\n  <span class=\"hljs-built_in\">double</span> num = <span class=\"hljs-number\">1</span>;\n}</span></code></pre>\n<blockquote>\n<p>Each <code>rpc</code> Method clearly defines request/response, client <code>Stub</code> to <code>Server</code> regardless of call type. For example:</p>\n<pre><code class=\"language-protobuf\"><span class=\"hljs\"><span class=\"hljs-comment\">//    MethodName    Stub/request         Server/response</span>\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">rpc</span> ClientToServer (stream File) <span class=\"hljs-keyword\">returns</span> (Confirmation) {}</span>;</span></code></pre>\n</blockquote>\n<h2 id=\"2-lets-build-a-package\">2. Let&#39;s <code>build()</code> a <code>package</code></h2>\n<p>Now that we&#39;ve defined our API in a ProtoBuf, let&#39;s pass an absolute path to our <code>.proto</code> file to build a <code>package</code>. We will create a <code>package.js</code> file which will live in our root folder and <code>export</code> a configured <code>package</code> containing the transpiled <code>service</code>s and <code>rpc</code> methods.</p>\n<p>We will also define our configuration for how our packaged methods will handle different data types.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// package.js</span>\n<span class=\"hljs-keyword\">const</span> { build } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> path = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'path'</span> );\n<span class=\"hljs-keyword\">const</span> PROTO_PATH = path.join( __dirname, <span class=\"hljs-string\">'./proto/exampleAPI.proto'</span> );\n\n<span class=\"hljs-keyword\">const</span> CONFIG_OBJECT = {\n  <span class=\"hljs-attr\">keepCase</span>: <span class=\"hljs-literal\">true</span>, <span class=\"hljs-comment\">// keeps everything camelCased</span>\n  longs: <span class=\"hljs-built_in\">Number</span>, <span class=\"hljs-comment\">// transpiles the enormous `double`s for our HeavyMath into a javascript Number rather than a String</span>\n  bytes: <span class=\"hljs-built_in\">String</span>, <span class=\"hljs-comment\">// helps us manage the FileTransfer bytes as javascript `String`s rather than pure hexadecimal Buffers or uint8Arrays</span>\n}\n<span class=\"hljs-keyword\">const</span> package = build( PROTO_PATH, CONFIG_OBJECT );\n<span class=\"hljs-built_in\">module</span>.exports = package;</span></code></pre>\n<blockquote>\n<p>Advanced Note: whether you&#39;re building a firecomm/gRPC-Node <code>Server</code>, a firecomm/gRPC-Node client with <code>Stub</code>s, or a firecomm/gRPC-Node hybrid client/server, it is important to build a package with configurations that match the API for your distributed system. Every server and client should have the same <code>.proto</code> file regardless of language.</p>\n</blockquote>\n<h2 id=\"3-create-a-server\">3. Create a server</h2>\n<p>Next, we will create a <code>new Server()</code> inside a <code>server.js</code> file which will live in a <code>server</code> folder. </p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /server/server.js</span>\n<span class=\"hljs-keyword\">const</span> { Server } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> server = <span class=\"hljs-keyword\">new</span> Server();</span></code></pre>\n<h2 id=\"4-define-the-server-side-handlers-for-our-filetransfer-service\">4. Define the server-side handlers for our <code>FileTransfer</code> service.</h2>\n<p>Let&#39;s define handler functions for our two <code>FileTransfer</code> <code>rpc</code> methods. Method handler functions will contain the server-side logic for our <code>service</code>s. Let&#39;s create a <code>fileTransferHandlers.js</code> file which will live inside our <code>server</code> folder.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /server/fileTransferHandlers.js</span>\nClientToServerHandler( CALL ) {\n  CALL.send({ <span class=\"hljs-attr\">response</span>: value });\n};\nServerToClientHandler( CALL ) {\n  CALL.on(<span class=\"hljs-string\">'data'</span>, request =&gt; someFunctionality(request));\n  CALL.send({ <span class=\"hljs-attr\">response</span>: value });\n};\n<span class=\"hljs-built_in\">module</span>.exports = { \n    ClientToServerHandler,\n    ServerToClientHandler,\n}</span></code></pre>\n<h2 id=\"5-define-the-server-side-handlers-for-our-heavymath-service\">5. Define the server-side handlers for our <code>HeavyMath</code> service.</h2>\n<p>Let&#39;s define handler functions for our two HeavyMath methods. Let&#39;s continue by defining the handlers for our <code>HeavyMath</code> service in a <code>heavyMathHandlers.js</code> file which will live inside our <code>server</code> folder.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /server/heavyMathHandlers.js</span>\nUnaryMathHandler( CALL ) {\n  CALL.send({ <span class=\"hljs-attr\">response</span>: value });\n};\nBidiMathHandler( CALL ) {\n  CALL.on(<span class=\"hljs-string\">'data'</span>, request =&gt; someFunctionality(request));\n  CALL.send({ <span class=\"hljs-attr\">response</span>: value });\n};\n<span class=\"hljs-built_in\">module</span>.exports = { \n    UnaryMathHandler,\n    BidiMathHandler,\n}</span></code></pre>\n<h2 id=\"6-add-each-service-from-the-package-to-the-server\">6. Add each <code>service</code> from the package to the <code>Server</code></h2>\n<p>Let&#39;s now return to the <code>server.js</code> file and map each <code>service</code> onto our <code>Server</code>. Mirroring the structure of the <code>.proto</code> file we transpiled, the <code>package</code> object we built has both of the <code>service</code>s on it as properties. We use the <code>Server</code> method <code>.addService</code> to add the <code>services</code> one at a time and map each of the <code>rpc</code> methods to the handlers we wrote.  </p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { ClientToServerHandler,\n    ServerToClientHandler } = require ( './fileTransferHandlers.js );\nconst { UnaryMathHandler,\n    BidiMathHandler } = require ( './heavyMathHandlers.js );\n\nconst server = new Server();\nserver.addService( package.FileTransfer,   { \n  ClientToServer: ClientToServerHandler,\n  ServerToClient: ServerToClientHandler,\n });\n server.addService( package.HeavyMath,   { \n  UnaryMath: UnaryMathHandler,\n  BidiMath: BidiMathHandler,\n });</span></code></pre>\n<blockquote>\n<p>Note: The <code>Server.addService()</code> method also allows the mapping of middleware functions or a middleware stack of functions in the form of an <code>array</code> to be passed in order to influence <code>rpc</code> methods before the handler which should come last in the array. For example: </p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">server.addService( package.HeavyMath,   &gt; { \n  <span class=\"hljs-attr\">UnaryMath</span>: [ UnaryMathMiddleware, UnaryMathHandler ],\n  <span class=\"hljs-attr\">BidiMath</span>: ServerToClientHandler,\n}, [ serviceLevelMiddleware1, serviceLevelMiddleware2 ]);</span></code></pre>\n</blockquote>\n<h2 id=\"7-bind-the-server-to-sockets\">7. Bind the server to <code>socket</code>(s)</h2>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { ClientToServerHandler,\n    ServerToClientHandler } = require ( './fileTransferHandlers.js );\nconst { UnaryMathHandler,\n    BidiMathHandler } = require ( './heavyMathHandlers.js );\n\nconst server = new Server();\nserver.addService( package.FileTransfer,   { \n  ClientToServer: ClientToServerHandler,\n  ServerToClient: ServerToClientHandler,\n });\n server.addService( package.HeavyMath,   { \n  UnaryMath: UnaryMathHandler,\n  BidiMath: BidiMathHandler,\n });\nserver.bind('0.0.0.0: 3000');</span></code></pre>\n<blockquote>\n<p>Note: <code>Server</code>s can be passed an array of <code>socket</code>s to bind any number of <code>socket</code>s. For example:</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">server.bind( [ \n  <span class=\"hljs-string\">'0.0.0.0: 3000'</span>, \n  <span class=\"hljs-string\">'0.0.0.0: 2999'</span>, \n] );</span></code></pre>\n</blockquote>\n<h2 id=\"8-start-the-server\">8. Start the server</h2>\n<pre><code class=\"language-javascript\"><span class=\"hljs\">// /server/server.js\nconst { Server } = require( 'firecomm' );\nconst package = require( '../package.js' );\nconst { ClientToServerHandler,\n    ServerToClientHandler } = require ( './fileTransferHandlers.js );\nconst { UnaryMathHandler,\n    BidiMathHandler } = require ( './heavyMathHandlers.js );\n\nconst server = new Server();\nserver.addService( package.FileTransfer,   { \n  ClientToServer: ClientToServerHandler,\n  ServerToClient: ServerToClientHandler,\n });\n server.addService( package.HeavyMath,   { \n  UnaryMath: UnaryMathHandler,\n  BidiMath: BidiMathHandler,\n });\nserver.bind( [ \n  '0.0.0.0: 3000', \n  '0.0.0.0: 2999', \n] );\nserver.start();</span></code></pre>\n<blockquote>\n<p>Run your new firecomm/gRPC-Node server with: <code>node /server/server.js</code>. It may also be worthwhile to map this command to <code>npm start</code> in your <code>package.json</code>.</p>\n</blockquote>\n<h2 id=\"9--create-a-stub-for-the-filetransfer-service\">9.  Create a <code>Stub</code> for the <code>FileTransfer</code> service:</h2>\n<p>Now that the <code>Server</code> is fully fleshed out, let&#39;s move to the client side by creating a client with <code>Stub</code>s for each <code>rpc</code> method on <code>FileTransfer</code>. Let&#39;s create a <code>fileTransferClient.js</code> file which will live inside our <code>clients</code> folder.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /clients/fileTransfer.js</span>\n<span class=\"hljs-keyword\">const</span> { Stub } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> package = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'../package.js'</span> )\n<span class=\"hljs-keyword\">const</span> fileTransferStub = <span class=\"hljs-keyword\">new</span> Stub( \n    package.FileTransfer, \n    <span class=\"hljs-string\">'localhost: 3000'</span>,\n);</span></code></pre>\n<blockquote>\n<p>In a real gRPC distributed system with firecomm/gRPC-Node clients, each client will most likely exist separately for each <code>service</code> defined in the shared <code>.proto</code> file. However, clients can actually have any number of <code>Stubs</code> running on them on either the same <code>socket</code> or multiple <code>sockets</code>. Additionally, duplicate clients running the same service(s) can be used to allow server level load-balancing.</p>\n</blockquote>\n<h2 id=\"10--make-clienttoserver-and-servertoclient-service-requests-from-the-stub\">10.  Make <code>ClientToServer</code> and <code>ServerToClient</code> service requests from the <code>Stub</code></h2>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /clients/fileTransfer.js</span>\n<span class=\"hljs-keyword\">const</span> { Stub } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> package = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'../package.js'</span> )\n<span class=\"hljs-keyword\">const</span> fileTransferStub = <span class=\"hljs-keyword\">new</span> Stub( \n    package.FileTransfer, \n    <span class=\"hljs-string\">'localhost: 3000'</span>,\n);\n<span class=\"hljs-keyword\">const</span> clientStream = \n  fileTransferStub.ClientToServer( MESSAGE );\n  <span class=\"hljs-comment\">// some logic to warrant a streaming response</span>\n  clientStream.write( MESSAGE );\n<span class=\"hljs-keyword\">const</span> serverStream = \n  fileTransferStub.ServerToClient( MESSAGE );\n  <span class=\"hljs-comment\">// listeners for stream from server</span>\n  serverStream.on( <span class=\"hljs-string\">'data'</span>, response =&gt; \n  someFunctionality(request));</span></code></pre>\n<blockquote>\n<p>Run your new firecomm/gRPC-Node client with: <code>node /clients/fileTransfer.js</code>. It may also be worthwhile to map this command to a custom command like <code>npm run transfer</code> in your <code>package.json</code>.</p>\n</blockquote>\n<h2 id=\"11--create-a-stub-for-the-heavymath-service\">11.  Create a <code>Stub</code> for the <code>HeavyMath</code> service:</h2>\n<p>Now that the <code>Server</code> and <code>FileTransfer</code> Stub are fully fleshed out, let&#39;s create another <code>Stub</code> with access to each <code>rpc</code> method on <code>HeavyMath</code>. We&#39;ll create a <code>heavyMath.js</code> file which will live inside our <code>clients</code> folder.</p>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /clients/heavyMath.js</span>\n<span class=\"hljs-keyword\">const</span> { Stub } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> package = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'../package.js'</span> )\n<span class=\"hljs-keyword\">const</span> heavyMathStub = <span class=\"hljs-keyword\">new</span> Stub( \n    package.HeavyMath, \n    <span class=\"hljs-string\">'localhost: 2999'</span>,\n);</span></code></pre>\n<blockquote>\n<p>Note: two different clients <em>can</em> share a single socket on the server, in which case all concurrent requests and responses will be multiplexed. However, in a real gRPC distributed system, this is unlikely for two different services to share a socket.</p>\n</blockquote>\n<h2 id=\"12-make-unarymath-and-bidimath-service-requests-from-the-stub\">12. Make <code>UnaryMath</code> and <code>BidiMath</code> service requests from the <code>Stub</code></h2>\n<pre><code class=\"language-javascript\"><span class=\"hljs\"><span class=\"hljs-comment\">// /clients/heavyMath.js</span>\n<span class=\"hljs-keyword\">const</span> { Stub } = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'firecomm'</span> );\n<span class=\"hljs-keyword\">const</span> package = <span class=\"hljs-built_in\">require</span>( <span class=\"hljs-string\">'../package.js'</span> )\n<span class=\"hljs-keyword\">const</span> heavyMathStub = <span class=\"hljs-keyword\">new</span> Stub( \n    package.HeavyMath, \n    <span class=\"hljs-string\">'localhost: 2999'</span>,\n);\nheavyMathStub.UnaryMath( MESSAGE );\n  <span class=\"hljs-comment\">// some logic to warrant a streaming response</span>\n  clientStream.write( MESSAGE );\n<span class=\"hljs-keyword\">const</span> bidiStream = \n  heavyMathStub.BidiMath( MESSAGE );\n  <span class=\"hljs-comment\">// listeners for stream from server</span>\n  serverStream.on( <span class=\"hljs-string\">'data'</span>, response =&gt; \n  someFunctionality(request));</span></code></pre>\n<blockquote>\n<p>Run your new firecomm/gRPC-Node client with: <code>node /clients/heavyMath.js</code>. It may also be worthwhile to map this command to a custom command like <code>npm run math</code> in your <code>package.json</code>.</p>\n</blockquote>\n";

/***/ }),

/***/ 3:
/*!***************************************************!*\
  !*** multi ./pages/docs/intro/gettingStarted.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/morgancrena/Desktop/Mini Desktop/Codesmith NY12/Production Project/firecomm.io-2.0/pages/docs/intro/gettingStarted.jsx */"./pages/docs/intro/gettingStarted.jsx");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=gettingStarted.js.map