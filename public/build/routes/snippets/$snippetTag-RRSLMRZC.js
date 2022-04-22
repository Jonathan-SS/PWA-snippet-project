import {
  SearchIcon,
  StarIcon
} from "/build/_shared/chunk-VRJDOAXW.js";
import {
  require_connectDb_server
} from "/build/_shared/chunk-XWYNVLH4.js";
import {
  Form,
  Link2 as Link,
  Outlet,
  React,
  __toESM,
  init_react,
  useActionData,
  useLoaderData,
  useParams
} from "/build/_shared/chunk-GSW2W7OK.js";

// browser-route-module:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/$snippetTag.jsx?browser
init_react();

// app/routes/snippets/$snippetTag.jsx
init_react();

// app/components/SnippetListItem.jsx
init_react();
function SnippetListItem({ snippet, languageTag }) {
  const dateAdded = new Date(snippet.dateAdded);
  const displayDate = `${dateAdded.getDate()}-${dateAdded.getMonth()}-${dateAdded.getFullYear()}`;
  return /* @__PURE__ */ React.createElement("li", {
    className: " min-w-200-px md:w-full  rounded-lg hover:bg-blue-600  bg-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 mb-1 "
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/snippets/${languageTag}/${snippet._id}`
  }, /* @__PURE__ */ React.createElement("h2", {
    className: " text-white text-xl font-semibold"
  }, snippet.title), /* @__PURE__ */ React.createElement("p", {
    className: " text-white  dark:text-gray-400"
  }, snippet.description.substring(0, 30), " ..."), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between mt-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: " text-white dark:text-gray-300"
  }, displayDate), /* @__PURE__ */ React.createElement(StarIcon, {
    fill: snippet.favorite
  }))));
}

// app/routes/snippets/$snippetTag.jsx
var import_connectDb_server = __toESM(require_connectDb_server());
function Index() {
  const snippets = useLoaderData();
  const actionSnippets = useActionData();
  const languageTag = useParams().snippetTag;
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: " h-44 w-full px-3 md:w-30-vw lg:w-25-vw md:h-full fixed md:border-r border-b-slate-400 md:dark:border-gray-700 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md: border-b md:dark:border-gray-700 mb-4 pb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-bold"
  }, languageTag, " Snippets")), /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "flex my-2"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "rounded px-1 border-b-slate-400 dark:border-none dark:text-gray-800 mr-2",
    type: "text",
    name: "searchQuery",
    placeholder: "Search snippets..."
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_action",
    value: "search"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, /* @__PURE__ */ React.createElement(SearchIcon, null))), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("select", {
    name: "sortMethod",
    className: "dark:text-gray-800 rounded-lg"
  }, /* @__PURE__ */ React.createElement("option", {
    value: "updated"
  }, "Last updated"), /* @__PURE__ */ React.createElement("option", {
    value: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("option", {
    value: "favorites"
  }, "Favorites"), /* @__PURE__ */ React.createElement("option", {
    value: "added"
  }, "Date added")), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_action",
    value: "sort"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "ml-3 dark:bg-gray-800 dark:hover:bg-gray-700 px-3 rounded-lg py-1 bg-blue-800 hover:bg-blue-600 text-white ",
    type: "submit"
  }, "Sort"))), /* @__PURE__ */ React.createElement("div", {
    className: " h-44 w-full mt-2 md:mt-2 md:h-4/5 overflow-scroll scrollbar-hide md:pb-10"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: " list-none gap-1 flex flex-shrink-0 flex-nowrap  md:flex-col "
  }, actionSnippets ? actionSnippets.map((snippet) => /* @__PURE__ */ React.createElement(SnippetListItem, {
    key: snippet._id,
    snippet
  })) : snippets.map((snippet) => /* @__PURE__ */ React.createElement(SnippetListItem, {
    key: snippet._id,
    snippet,
    languageTag
  })), !actionSnippets && snippets.length === 0 ? /* @__PURE__ */ React.createElement("h2", null, "No snippets found") : null))), /* @__PURE__ */ React.createElement("div", {
    className: " mt-72 md:ml-3 md:mt-0 fixed overflow-y-scroll"
  }, /* @__PURE__ */ React.createElement(Outlet, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500 font-bold"
  }, error.name, ": ", error.message);
}
export {
  ErrorBoundary,
  Index as default
};
//# sourceMappingURL=/build/routes/snippets/$snippetTag-RRSLMRZC.js.map
