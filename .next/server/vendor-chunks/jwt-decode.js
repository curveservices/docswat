"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jwt-decode";
exports.ids = ["vendor-chunks/jwt-decode"];
exports.modules = {

/***/ "(rsc)/./node_modules/jwt-decode/build/jwt-decode.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidTokenError: () => (/* binding */ n),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction e(e){this.message=e}e.prototype=new Error,e.prototype.name=\"InvalidCharacterError\";var r=\"undefined\"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,\"\");if(t.length%4==1)throw new e(\"'atob' failed: The string to be decoded is not correctly encoded.\");for(var n,o,a=0,i=0,c=\"\";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\".indexOf(o);return c};function t(e){var t=e.replace(/-/g,\"+\").replace(/_/g,\"/\");switch(t.length%4){case 0:break;case 2:t+=\"==\";break;case 3:t+=\"=\";break;default:throw\"Illegal base64url string!\"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t=\"0\"+t),\"%\"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if(\"string\"!=typeof e)throw new n(\"Invalid token specified\");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(\".\")[o]))}catch(e){throw new n(\"Invalid token specified: \"+e.message)}}n.prototype=new Error,n.prototype.name=\"InvalidTokenError\";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);\n//# sourceMappingURL=jwt-decode.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGNBQWMsZUFBZSwrREFBK0QscUZBQXFGLGtDQUFrQyxrR0FBa0cseUJBQXlCLGdCQUFnQixzSkFBc0osVUFBVSxjQUFjLDRDQUE0QyxtQkFBbUIsYUFBYSxlQUFlLE1BQU0sY0FBYyxNQUFNLHlDQUF5QyxJQUFJLG1CQUFtQiw2REFBNkQsaURBQWlELG1DQUFtQyxJQUFJLElBQUksU0FBUyxhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsNkRBQTZELG1CQUFtQixhQUFhLElBQUksc0NBQXNDLFNBQVMsb0RBQW9ELDJEQUEyRCxpRUFBZSxDQUFDLEVBQWdDO0FBQzVzQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3N3YXQvLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmVzbS5qcz9jM2EzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGUoZSl7dGhpcy5tZXNzYWdlPWV9ZS5wcm90b3R5cGU9bmV3IEVycm9yLGUucHJvdG90eXBlLm5hbWU9XCJJbnZhbGlkQ2hhcmFjdGVyRXJyb3JcIjt2YXIgcj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuYXRvYiYmd2luZG93LmF0b2IuYmluZCh3aW5kb3cpfHxmdW5jdGlvbihyKXt2YXIgdD1TdHJpbmcocikucmVwbGFjZSgvPSskLyxcIlwiKTtpZih0Lmxlbmd0aCU0PT0xKXRocm93IG5ldyBlKFwiJ2F0b2InIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5cIik7Zm9yKHZhciBuLG8sYT0wLGk9MCxjPVwiXCI7bz10LmNoYXJBdChpKyspO35vJiYobj1hJTQ/NjQqbitvOm8sYSsrJTQpP2MrPVN0cmluZy5mcm9tQ2hhckNvZGUoMjU1Jm4+PigtMiphJjYpKTowKW89XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLmluZGV4T2Yobyk7cmV0dXJuIGN9O2Z1bmN0aW9uIHQoZSl7dmFyIHQ9ZS5yZXBsYWNlKC8tL2csXCIrXCIpLnJlcGxhY2UoL18vZyxcIi9cIik7c3dpdGNoKHQubGVuZ3RoJTQpe2Nhc2UgMDpicmVhaztjYXNlIDI6dCs9XCI9PVwiO2JyZWFrO2Nhc2UgMzp0Kz1cIj1cIjticmVhaztkZWZhdWx0OnRocm93XCJJbGxlZ2FsIGJhc2U2NHVybCBzdHJpbmchXCJ9dHJ5e3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHIoZSkucmVwbGFjZSgvKC4pL2csKGZ1bmN0aW9uKGUscil7dmFyIHQ9ci5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO3JldHVybiB0Lmxlbmd0aDwyJiYodD1cIjBcIit0KSxcIiVcIit0fSkpKX0odCl9Y2F0Y2goZSl7cmV0dXJuIHIodCl9fWZ1bmN0aW9uIG4oZSl7dGhpcy5tZXNzYWdlPWV9ZnVuY3Rpb24gbyhlLHIpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBuKFwiSW52YWxpZCB0b2tlbiBzcGVjaWZpZWRcIik7dmFyIG89ITA9PT0ocj1yfHx7fSkuaGVhZGVyPzA6MTt0cnl7cmV0dXJuIEpTT04ucGFyc2UodChlLnNwbGl0KFwiLlwiKVtvXSkpfWNhdGNoKGUpe3Rocm93IG5ldyBuKFwiSW52YWxpZCB0b2tlbiBzcGVjaWZpZWQ6IFwiK2UubWVzc2FnZSl9fW4ucHJvdG90eXBlPW5ldyBFcnJvcixuLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZFRva2VuRXJyb3JcIjtleHBvcnQgZGVmYXVsdCBvO2V4cG9ydHtuIGFzIEludmFsaWRUb2tlbkVycm9yfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWp3dC1kZWNvZGUuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/jwt-decode/build/jwt-decode.esm.js\n");

/***/ })

};
;