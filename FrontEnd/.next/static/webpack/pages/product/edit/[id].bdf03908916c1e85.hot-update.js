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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/product/product.service */ \"./src/services/product/product.service.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Edit = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [countries, setCountries] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let count = 0;\n    const id = router.query.id;\n    const [imagePreviewUrl, setImagePreviewUrl] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const selectedState = (e)=>{\n        setCountry(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getData = async (id)=>{\n            const getAllData = await (0,_services_product_product_service__WEBPACK_IMPORTED_MODULE_1__.getSingleProduct)(id);\n            setData(getAllData);\n        // if(!country&&country!=getAllData.countryId){\n        //     setCountry(getAllData.countryId);\n        //     const dataState = await getStateByCountry(getAllData.countryId);\n        //     setStates(dataState);\n        // }\n        // if(!state&&state!=getAllData.stateId){\n        //     setState(getAllData.stateId);\n        //     const dataCity = await getCityByState(getAllData.stateId);\n        //     setCities(dataCity);\n        // }\n        // setIsLoading(false);\n        };\n        if (id !== undefined) {\n            getData(id);\n        }\n    //   \n    // getData()\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"this is edit page\"\n        }, void 0, false, {\n            fileName: \"G:\\\\Product\\\\FrontEnd\\\\src\\\\pages\\\\product\\\\edit\\\\[id].js\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"G:\\\\Product\\\\FrontEnd\\\\src\\\\pages\\\\product\\\\edit\\\\[id].js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Edit, \"FHoUbpB6W0Djuww2wHiQ7W8imQw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdC9lZGl0L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzRTtBQUM5QjtBQUNXO0FBRW5ELE1BQU1LLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUE7SUFFdEMsTUFBTVUsU0FBU2Isc0RBQVNBO0lBQ3hCLElBQUljLFFBQVE7SUFDWixNQUFNQyxLQUFLRixPQUFPRyxLQUFLLENBQUNELEVBQUU7SUFFMUIsTUFBTSxDQUFDRSxpQkFBaUJDLG1CQUFtQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNZ0IsZ0JBQWdCLENBQUNDO1FBQ25CUixXQUFXUSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFFM0I7SUFFQXBCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXFCLFVBQVUsT0FBT1I7WUFFZixNQUFNUyxhQUFhLE1BQU16QixtRkFBZ0JBLENBQUNnQjtZQUMxQ1QsUUFBUWtCO1FBQ1IsK0NBQStDO1FBQy9DLHdDQUF3QztRQUN4Qyx1RUFBdUU7UUFDdkUsNEJBQTRCO1FBQzVCLElBQUk7UUFDSix5Q0FBeUM7UUFDekMsb0NBQW9DO1FBQ3BDLGlFQUFpRTtRQUNqRSwyQkFBMkI7UUFDM0IsSUFBSTtRQUNKLHVCQUF1QjtRQUUvQjtRQUNBLElBQUlULE9BQU9VLFdBQVc7WUFDbEJGLFFBQVFSO1FBQ1o7SUFDQSxLQUFLO0lBRUwsWUFBWTtJQUtoQixHQUFHO1FBQUNBO0tBQUc7SUFHUCxxQkFDSSw4REFBQ1c7a0JBQ0csNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQUdoQjtHQXBETXZCOztRQU1hSixrREFBU0E7OztLQU50Qkk7QUFzRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3QvZWRpdC9baWRdLmpzPzJiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGdldFNpbmdsZVByb2R1Y3QgfSBmcm9tICdAL3NlcnZpY2VzL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEVkaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtjb3VudHJpZXMsIHNldENvdW50cmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBsZXQgY291bnQgPSAwXHJcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICAgXHJcbiAgICBjb25zdCBbaW1hZ2VQcmV2aWV3VXJsLCBzZXRJbWFnZVByZXZpZXdVcmxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRTdGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Q291bnRyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRBbGxEYXRhID0gYXdhaXQgZ2V0U2luZ2xlUHJvZHVjdChpZCk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKGdldEFsbERhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYoIWNvdW50cnkmJmNvdW50cnkhPWdldEFsbERhdGEuY291bnRyeUlkKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzZXRDb3VudHJ5KGdldEFsbERhdGEuY291bnRyeUlkKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBkYXRhU3RhdGUgPSBhd2FpdCBnZXRTdGF0ZUJ5Q291bnRyeShnZXRBbGxEYXRhLmNvdW50cnlJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgc2V0U3RhdGVzKGRhdGFTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZighc3RhdGUmJnN0YXRlIT1nZXRBbGxEYXRhLnN0YXRlSWQpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNldFN0YXRlKGdldEFsbERhdGEuc3RhdGVJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc3QgZGF0YUNpdHkgPSBhd2FpdCBnZXRDaXR5QnlTdGF0ZShnZXRBbGxEYXRhLnN0YXRlSWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNldENpdGllcyhkYXRhQ2l0eSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGdldERhdGEoaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAgIFxyXG5cclxuICAgICAgICAvLyBnZXREYXRhKClcclxuXHJcbiAgICAgICBcclxuXHJcblxyXG4gICAgfSwgW2lkXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPnRoaXMgaXMgZWRpdCBwYWdlPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0OyJdLCJuYW1lcyI6WyJnZXRTaW5nbGVQcm9kdWN0IiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkVkaXQiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvdW50cmllcyIsInNldENvdW50cmllcyIsImNvdW50cnkiLCJzZXRDb3VudHJ5Iiwicm91dGVyIiwiY291bnQiLCJpZCIsInF1ZXJ5IiwiaW1hZ2VQcmV2aWV3VXJsIiwic2V0SW1hZ2VQcmV2aWV3VXJsIiwic2VsZWN0ZWRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldERhdGEiLCJnZXRBbGxEYXRhIiwidW5kZWZpbmVkIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product/edit/[id].js\n"));

/***/ })

});