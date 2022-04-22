import {
  require_connectDb
} from "/build/_shared/chunk-Z7R5JY23.js";
import {
  Form,
  React,
  __toESM,
  init_react,
  useActionData
} from "/build/_shared/chunk-GSW2W7OK.js";

// browser-route-module:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/createSnippet.jsx?browser
init_react();

// app/routes/snippets/createSnippet.jsx
init_react();
var import_connectDb = __toESM(require_connectDb());
function CreateSnippet() {
  const actionData = useActionData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "  overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw fixed scrollbar-hide "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold mb-2  mr-2"
  }, "Create snippet"), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title",
    className: "block text-xl font-semibold"
  }, "Title"), actionData?.errors.title && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData?.errors.title.message), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: actionData?.errors.title.value,
    id: "title",
    className: actionData?.errors.title ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "languageTag",
    className: "block mt-3 text-xl font-semibold"
  }, "Language"), /* @__PURE__ */ React.createElement("select", {
    name: "languageTag",
    className: "text-white dark:bg-gray-700 bg-blue-600   "
  }, /* @__PURE__ */ React.createElement("option", {
    value: "JavaScript"
  }, "JavaScript"), /* @__PURE__ */ React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /* @__PURE__ */ React.createElement("option", {
    value: "PHP"
  }, "PHP"), /* @__PURE__ */ React.createElement("option", {
    value: "CSS"
  }, "CSS"), /* @__PURE__ */ React.createElement("option", {
    value: "HTML"
  }, "HTML")), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description",
    className: "block mt-3 text-xl font-semibold"
  }, "Description"), actionData?.errors.description && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData?.errors.description.message), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    style: { height: "100px", width: "66%" },
    defaultValue: actionData?.errors.description.value,
    id: "description",
    className: actionData?.errors.description ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "snippet",
    className: "block mt-3 text-xl font-semibold"
  }, "Snippet"), actionData?.errors.snippet && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData?.errors.snippet.message), /* @__PURE__ */ React.createElement("textarea", {
    name: "snippet",
    defaultValue: actionData?.errors.description.value,
    id: "snippet",
    style: { height: "200px", width: "66%" },
    className: actionData?.errors.description ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
  }, "Save snippet")));
}
export {
  CreateSnippet as default
};
//# sourceMappingURL=/build/routes/snippets/createSnippet-K3UQOVQC.js.map
