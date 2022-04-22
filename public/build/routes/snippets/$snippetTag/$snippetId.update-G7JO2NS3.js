import {
  require_connectDb
} from "/build/_shared/chunk-Z7R5JY23.js";
import {
  Form,
  React,
  __toESM,
  init_react,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-GSW2W7OK.js";

// browser-route-module:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/$snippetTag/$snippetId.update.jsx?browser
init_react();

// app/routes/snippets/$snippetTag/$snippetId.update.jsx
init_react();
var import_connectDb = __toESM(require_connectDb());
function CreateSnippet() {
  const actionData = useActionData();
  const snippetToUpdate = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: " w-full md:w-50-vw lg:ml-25-vw md:ml-30-vw md:pr-10 h-96 md:h-full overflow-y-scroll px-4 md:p-0 fixed scrollbar-hide"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold mb-2  mr-2"
  }, "Update snippet"), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title",
    className: "block text-xl font-semibold"
  }, "Title"), actionData?.errors.title && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData?.errors.title.message), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: snippetToUpdate.title,
    style: { width: "66%" },
    id: "title",
    className: actionData?.errors.title ? "border-2 border-red-500 rounded-lg px-2 bg-blue-600 text-white dark:text-black dark:bg-gray-700" : " rounded-lg px-2 bg-blue-600 text-white   dark:bg-gray-700"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "languageTag",
    className: "block mt-3 text-xl font-semibold"
  }, "Language"), /* @__PURE__ */ React.createElement("select", {
    defaultValue: snippetToUpdate.languageTag,
    name: "languageTag",
    className: " bg-blue-600 text-white   dark:bg-gray-700"
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
  }, "Description"), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    style: { height: "100px", width: "66%" },
    defaultValue: snippetToUpdate.description,
    id: "description",
    className: actionData?.errors.description ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
  }), actionData?.description && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData?.errors.description.message), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "snippet",
    className: "block mt-3 text-xl font-semibold"
  }, "Snippet"), /* @__PURE__ */ React.createElement("textarea", {
    name: "snippet",
    defaultValue: snippetToUpdate.snippet,
    id: "snippet",
    style: { height: "200px", width: "66%" },
    className: actionData?.errors.description ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white "
  }), actionData?.description && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData?.errors.description.message), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "snippetId",
    value: snippetToUpdate._id
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold hover:bg-blue-600 bg-blue-800 text-white  "
  }, "Save snippet")));
}
export {
  CreateSnippet as default
};
//# sourceMappingURL=/build/routes/snippets/$snippetTag/$snippetId.update-G7JO2NS3.js.map
