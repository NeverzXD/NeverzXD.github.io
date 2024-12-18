var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/ws/browser.js
var require_browser = __commonJS((exports, module) => {
  module.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
  };
});

// index.js
var import_ws = __toESM(require_browser(), 1);
function createWebSocketClient(url) {
  const ws = new import_ws.default(url);
  ws.on("open", () => {
    console.log("WebSocket connected");
  });
  ws.on("message", (message) => {
    console.log("Received:", message);
  });
  return ws;
}
export {
  createWebSocketClient
};
