import {
  require_connectDb_server
} from "/build/_shared/chunk-XWYNVLH4.js";
import {
  Form,
  Link,
  React,
  __toESM,
  init_react,
  init_react_router_dom
} from "/build/_shared/chunk-GSW2W7OK.js";

// browser-route-module:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/seed.jsx?browser
init_react();

// app/routes/seed.jsx
init_react();
init_react_router_dom();
var import_connectDb_server = __toESM(require_connectDb_server());
function Seed() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: " h-64 min-w-200-px bg-blue-700 dark:bg-gray-700 fixed top-1/2 left-1/4 rounded-lg p-9 justify-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl text-white "
  }, "It seems that your database is empty, would you like me to seed some data for you?"), /* @__PURE__ */ React.createElement("div", {
    className: " flex justify-center mt-16 gap-8"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/snippets/all"
  }, /* @__PURE__ */ React.createElement("button", {
    to: "/snippets/all",
    className: "text-xl text-white bg-red-600 hover:bg-red-800 rounded-lg px-4 py-2"
  }, "No!!\u{1F621}")), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "_action",
    value: "seed",
    type: "submit",
    className: "text-xl text-white hover:bg-green-800 bg-green-600 rounded-lg px-4 py-2"
  }, "Yes please boss\u{1F607}")))));
}
export {
  Seed as default
};
//# sourceMappingURL=/build/routes/seed-47EJIQHE.js.map
