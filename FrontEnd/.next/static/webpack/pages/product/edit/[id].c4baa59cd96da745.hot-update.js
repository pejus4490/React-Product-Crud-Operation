"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/edit/[id]",{

/***/ "./src/pages/product/edit/[id].js":
/*!****************************************!*\
  !*** ./src/pages/product/edit/[id].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Edit = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [countries, setCountries] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    let count = 0;\n    const id = router.query.id;\n    const [imagePreviewUrl, setImagePreviewUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const selectedState = (e)=>{\n        setCountry(e.target.value);\n    };\n    useEffect(()=>{\n        const getData = async (id)=>{\n            const getAllData = await getSingle(id);\n            setData(getAllData);\n            if (!country && country != getAllData.countryId) {\n                setCountry(getAllData.countryId);\n                const dataState = await getStateByCountry(getAllData.countryId);\n                setStates(dataState);\n            }\n        // if(!state&&state!=getAllData.stateId){\n        //     setState(getAllData.stateId);\n        //     const dataCity = await getCityByState(getAllData.stateId);\n        //     setCities(dataCity);\n        // }\n        // setIsLoading(false);\n        };\n    //   \n    // getData()\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"this is edit page\"\n        }, void 0, false, {\n            fileName: \"G:\\\\Product\\\\FrontEnd\\\\src\\\\pages\\\\product\\\\edit\\\\[id].js\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"G:\\\\Product\\\\FrontEnd\\\\src\\\\pages\\\\product\\\\edit\\\\[id].js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Edit, \"FHoUbpB6W0Djuww2wHiQ7W8imQw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdC9lZGl0L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dDO0FBQ0E7QUFFeEMsTUFBTUcsT0FBTzs7SUFDVCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQTtJQUV0QyxNQUFNVSxTQUFTWixzREFBU0E7SUFDeEIsSUFBSWEsUUFBUTtJQUNaLE1BQU1DLEtBQUtGLE9BQU9HLEtBQUssQ0FBQ0QsRUFBRTtJQUUxQixNQUFNLENBQUNFLGlCQUFpQkMsbUJBQW1CLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU1nQixnQkFBZ0IsQ0FBQ0M7UUFDbkJSLFdBQVdRLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUUzQjtJQUVBQyxVQUFVO1FBQ1IsTUFBTUMsVUFBVSxPQUFPVDtZQUVmLE1BQU1VLGFBQWEsTUFBTUMsVUFBVVg7WUFDbkNULFFBQVFtQjtZQUNSLElBQUcsQ0FBQ2QsV0FBU0EsV0FBU2MsV0FBV0UsU0FBUyxFQUFDO2dCQUN2Q2YsV0FBV2EsV0FBV0UsU0FBUztnQkFDL0IsTUFBTUMsWUFBWSxNQUFNQyxrQkFBa0JKLFdBQVdFLFNBQVM7Z0JBQzlERyxVQUFVRjtZQUNkO1FBQ0EseUNBQXlDO1FBQ3pDLG9DQUFvQztRQUNwQyxpRUFBaUU7UUFDakUsMkJBQTJCO1FBQzNCLElBQUk7UUFDSix1QkFBdUI7UUFFL0I7SUFDQSxLQUFLO0lBRUwsWUFBWTtJQUtoQixHQUFHO1FBQUNiO0tBQUc7SUFHUCxxQkFDSSw4REFBQ2dCO2tCQUNHLDRFQUFDQztzQkFBRzs7Ozs7Ozs7Ozs7QUFHaEI7R0FqRE01Qjs7UUFNYUgsa0RBQVNBOzs7S0FOdEJHO0FBbUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0L2VkaXQvW2lkXS5qcz8yYjE5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEVkaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtjb3VudHJpZXMsIHNldENvdW50cmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBsZXQgY291bnQgPSAwXHJcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICAgXHJcbiAgICBjb25zdCBbaW1hZ2VQcmV2aWV3VXJsLCBzZXRJbWFnZVByZXZpZXdVcmxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Q291bnRyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRBbGxEYXRhID0gYXdhaXQgZ2V0U2luZ2xlKGlkKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoZ2V0QWxsRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZighY291bnRyeSYmY291bnRyeSE9Z2V0QWxsRGF0YS5jb3VudHJ5SWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvdW50cnkoZ2V0QWxsRGF0YS5jb3VudHJ5SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFTdGF0ZSA9IGF3YWl0IGdldFN0YXRlQnlDb3VudHJ5KGdldEFsbERhdGEuY291bnRyeUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZXMoZGF0YVN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmKCFzdGF0ZSYmc3RhdGUhPWdldEFsbERhdGEuc3RhdGVJZCl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2V0U3RhdGUoZ2V0QWxsRGF0YS5zdGF0ZUlkKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBkYXRhQ2l0eSA9IGF3YWl0IGdldENpdHlCeVN0YXRlKGdldEFsbERhdGEuc3RhdGVJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2V0Q2l0aWVzKGRhdGFDaXR5KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gICBcclxuXHJcbiAgICAgICAgLy8gZ2V0RGF0YSgpXHJcblxyXG4gICAgICAgXHJcblxyXG5cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT50aGlzIGlzIGVkaXQgcGFnZTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkVkaXQiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvdW50cmllcyIsInNldENvdW50cmllcyIsImNvdW50cnkiLCJzZXRDb3VudHJ5Iiwicm91dGVyIiwiY291bnQiLCJpZCIsInF1ZXJ5IiwiaW1hZ2VQcmV2aWV3VXJsIiwic2V0SW1hZ2VQcmV2aWV3VXJsIiwic2VsZWN0ZWRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJnZXRBbGxEYXRhIiwiZ2V0U2luZ2xlIiwiY291bnRyeUlkIiwiZGF0YVN0YXRlIiwiZ2V0U3RhdGVCeUNvdW50cnkiLCJzZXRTdGF0ZXMiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/product/edit/[id].js\n"));

/***/ })

});