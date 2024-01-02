/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(()=> {
    console.log("asdfghjk")
})

chrome.bookmarks.onCreated.addListener(() => {
  console.log("i just booked");
});
/******/ })()
;
//# sourceMappingURL=background.js.map