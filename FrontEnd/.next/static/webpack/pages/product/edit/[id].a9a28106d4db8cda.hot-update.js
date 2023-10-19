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

/***/ "./src/services/product/product.service.js":
/*!*************************************************!*\
  !*** ./src/services/product/product.service.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetAllCountry: function() { return /* binding */ GetAllCountry; },\n/* harmony export */   addProduct: function() { return /* binding */ addProduct; },\n/* harmony export */   getProduct: function() { return /* binding */ getProduct; },\n/* harmony export */   getSingleProduct: function() { return /* binding */ getSingleProduct; },\n/* harmony export */   updateProduct: function() { return /* binding */ updateProduct; }\n/* harmony export */ });\n/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/environment/environment */ \"./src/environment/environment.js\");\n\nasync function getProduct() {\n    const response = await fetch(\"\".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_0__.apiUrl, \"/Product\"));\n    try {\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error fetching data:\", error);\n        throw error;\n    }\n}\nasync function GetAllCountry() {\n    const responce = await fetch(\"\".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_0__.apiUrl, \"/Country\"));\n    try {\n        if (!responce.ok) {\n            return new Error(\"Network responce is not ok\");\n        }\n        return await responce.json();\n    } catch (error) {\n        console.log(\"Error fetching data : \", error);\n        throw error;\n    }\n}\n_c = GetAllCountry;\nasync function addProduct(data) {\n    console.log(data);\n    try {\n        const response = await fetch(\"\".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_0__.apiUrl, \"/Product\"), {\n            method: \"POST\",\n            body: data\n        });\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error fetching data:\", error);\n        throw error;\n    }\n}\nasync function getSingleProduct(id) {\n    try {\n        const response = await fetch(\"\".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_0__.apiUrl, \"/Product/\").concat(id));\n        if (!response.ok) {\n            throw new Error(\"Network response was not ok\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error fetching data:\", error);\n        throw error;\n    }\n}\nasync function updateProduct(id, data) {\n    try {\n        const response = await fetch(\"\".concat(_environment_environment__WEBPACK_IMPORTED_MODULE_0__.apiUrl, \"/Product/\").concat(id), {\n            method: \"PUT\",\n            body: data\n        });\n        if (!response.ok) {\n            const responseBody = response.text();\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error updating data:\", error);\n        throw error;\n    }\n}\n\nvar _c;\n$RefreshReg$(_c, \"GetAllCountry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJvZHVjdC9wcm9kdWN0LnNlcnZpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRS9DLGVBQWVDO0lBQ1gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQVUsT0FBUEgsNERBQU1BLEVBQUM7SUFFdkMsSUFBSTtRQUNGLElBQUksQ0FBQ0UsU0FBU0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtJQUM1QixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsTUFBTUE7SUFDUjtBQUNGO0FBRUEsZUFBZUU7SUFDYixNQUFNQyxXQUFXLE1BQU1QLE1BQU0sR0FBVSxPQUFQSCw0REFBTUEsRUFBQztJQUN2QyxJQUFHO1FBQ0MsSUFBRyxDQUFDVSxTQUFTTixFQUFFLEVBQUM7WUFDWixPQUFPLElBQUlDLE1BQU07UUFDckI7UUFDQSxPQUFPLE1BQU1LLFNBQVNKLElBQUk7SUFDOUIsRUFBQyxPQUFNQyxPQUFNO1FBQ1RDLFFBQVFHLEdBQUcsQ0FBQywwQkFBeUJKO1FBQ3JDLE1BQU1BO0lBQ1Y7QUFDSjtLQVhpQkU7QUFjakIsZUFBZUcsV0FBV0MsSUFBSTtJQUMxQkwsUUFBUUcsR0FBRyxDQUFDRTtJQUNaLElBQUc7UUFDQyxNQUFNWCxXQUFXLE1BQU1DLE1BQU0sR0FBVSxPQUFQSCw0REFBTUEsRUFBQyxhQUFVO1lBQy9DYyxRQUFRO1lBQ1JDLE1BQU9GO1FBQ1Q7UUFFRixJQUFJLENBQUNYLFNBQVNFLEVBQUUsRUFBRTtZQUNWLE1BQU0sSUFBSUMsTUFBTTtRQUNaO1FBRU4sT0FBTyxNQUFNSCxTQUFTSSxJQUFJO0lBQ3JCLEVBQUUsT0FBT0MsT0FBTztRQUNuQkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsTUFBTUE7SUFDUjtBQUVOO0FBRUEsZUFBZVMsaUJBQWlCQyxFQUFFO0lBQ2hDLElBQUk7UUFDQSxNQUFNZixXQUFXLE1BQU1DLE1BQU0sR0FBcUJjLE9BQWxCakIsNERBQU1BLEVBQUMsYUFBYyxPQUFIaUI7UUFDbEQsSUFBSSxDQUFDZixTQUFTRSxFQUFFLEVBQUU7WUFDZCxNQUFNLElBQUlDLE1BQU07UUFDcEI7UUFFQSxPQUFPLE1BQU1ILFNBQVNJLElBQUk7SUFDOUIsRUFBRSxPQUFPQyxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE1BQU1BO0lBQ1Y7QUFDSjtBQUVBLGVBQWVXLGNBQWNELEVBQUUsRUFBRUosSUFBSTtJQUVuQyxJQUFJO1FBQ0EsTUFBTVgsV0FBVyxNQUFNQyxNQUFNLEdBQXFCYyxPQUFsQmpCLDREQUFNQSxFQUFDLGFBQWMsT0FBSGlCLEtBQU07WUFDcERILFFBQVE7WUFDUkMsTUFBTUY7UUFDVjtRQUVBLElBQUksQ0FBQ1gsU0FBU0UsRUFBRSxFQUFFO1lBQ2QsTUFBTWUsZUFBZ0JqQixTQUFTa0IsSUFBSTtRQUV2QztRQUVBLE9BQU8sTUFBTWxCLFNBQVNJLElBQUk7SUFDOUIsRUFBRSxPQUFPQyxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE1BQU1BO0lBQ1Y7QUFDSjtBQVFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZS5qcz8xYTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVVybCB9IGZyb20gXCJAL2Vudmlyb25tZW50L2Vudmlyb25tZW50XCI7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdCgpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vUHJvZHVjdGApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhc3luYyBmdW5jdGlvbiBHZXRBbGxDb3VudHJ5KCl7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L0NvdW50cnlgKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGlmKCFyZXNwb25jZS5vayl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbmNlIGlzIG5vdCBvaycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbmNlLmpzb24oKVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBkYXRhIDogJyxlcnJvcik7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFByb2R1Y3QoZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vUHJvZHVjdGAse1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGJvZHk6ICBkYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2luZ2xlUHJvZHVjdChpZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L1Byb2R1Y3QvJHtpZH1gKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3QoaWQsIGRhdGEpIHtcclxuXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9Qcm9kdWN0LyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQm9keSA9ICByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0e1xyXG4gICAgICAgIGdldFByb2R1Y3QsXHJcbiAgICAgICAgYWRkUHJvZHVjdCxcclxuICAgICAgICBHZXRBbGxDb3VudHJ5LFxyXG4gICAgICAgIGdldFNpbmdsZVByb2R1Y3QsXHJcbiAgICAgICAgdXBkYXRlUHJvZHVjdFxyXG4gICAgfSJdLCJuYW1lcyI6WyJhcGlVcmwiLCJnZXRQcm9kdWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiR2V0QWxsQ291bnRyeSIsInJlc3BvbmNlIiwibG9nIiwiYWRkUHJvZHVjdCIsImRhdGEiLCJtZXRob2QiLCJib2R5IiwiZ2V0U2luZ2xlUHJvZHVjdCIsImlkIiwidXBkYXRlUHJvZHVjdCIsInJlc3BvbnNlQm9keSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/product/product.service.js\n"));

/***/ })

});