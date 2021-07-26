/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst buildClient = ({\n  req\n}) => {\n  if (true) {\n    //on server\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n      headers: req.headers\n    });\n  } else {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2UxOTYiXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJyZXEiLCJheGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBVTtBQUM1QixZQUFpQztBQUMvQjtBQUVBLFdBQU9DLG1EQUFBLENBQWE7QUFDbEJDLGFBQU8sRUFBRSxpRUFEUztBQUVsQkMsYUFBTyxFQUFFSCxHQUFHLENBQUNHO0FBRkssS0FBYixDQUFQO0FBSUQsR0FQRCxNQU9LLEVBS0o7QUFDRixDQWREOztBQWdCQSwrREFBZUosV0FBZiIsImZpbGUiOiIuL2FwaS9idWlsZC1jbGllbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGJ1aWxkQ2xpZW50ID0gKHtyZXF9KSA9PntcbiAgaWYodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgIC8vb24gc2VydmVyXG5cbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6ICdodHRwOi8vaW5ncmVzcy1uZ2lueC1jb250cm9sbGVyLmluZ3Jlc3Mtbmdpbnguc3ZjLmNsdXN0ZXIubG9jYWwnLFxuICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnNcbiAgICB9KVxuICB9ZWxzZXtcbiAgICAvL29uIGJyb3dzZXJcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVcmw6ICcvJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRDbGllbnRcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n\nvar _jsxFileName = \"/Users/chriscastellano/Desktop/Microservice_practice2/ticketing/client/pages/index.js\";\n\n\nconst LandingPage = ({\n  currentUser\n}) => {\n  return currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: \"You are signed in\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 25\n  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: \"You are not signed in.\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 56\n  }, undefined);\n};\n\nLandingPage.getInitialProps = async context => {\n  const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_1__.default)(context);\n  const {\n    data\n  } = await client.get('/api/users/currentuser');\n  return data;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxhbmRpbmdQYWdlIiwiY3VycmVudFVzZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiY2xpZW50IiwiYnVpbGRDbGllbnQiLCJkYXRhIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBbUI7QUFDckMsU0FBT0EsV0FBVyxnQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFKLGdCQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFyRDtBQUNELENBRkQ7O0FBSUFELFdBQVcsQ0FBQ0UsZUFBWixHQUE4QixNQUFPQyxPQUFQLElBQWtCO0FBQzlDLFFBQU1DLE1BQU0sR0FBR0MsMERBQVcsQ0FBQ0YsT0FBRCxDQUExQjtBQUNBLFFBQU07QUFBQ0c7QUFBRCxNQUFTLE1BQU1GLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLHdCQUFYLENBQXJCO0FBQ0EsU0FBT0QsSUFBUDtBQUNELENBSkQ7O0FBTUEsK0RBQWVOLFdBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50J1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICh7Y3VycmVudFVzZXJ9KSA9PiB7XG4gIHJldHVybiBjdXJyZW50VXNlciA/ICg8aDE+WW91IGFyZSBzaWduZWQgaW48L2gxPikgOiAoPGgxPllvdSBhcmUgbm90IHNpZ25lZCBpbi48L2gxPilcbn1cblxuTGFuZGluZ1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xuICBjb25zdCBjbGllbnQgPSBidWlsZENsaWVudChjb250ZXh0KVxuICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJylcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();