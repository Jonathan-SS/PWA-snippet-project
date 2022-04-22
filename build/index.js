var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ALNATS3I.css";

// app/components/SideBar.jsx
init_react();
var import_react = require("@remix-run/react");
var import_react2 = require("react");

// app/svg/all.jsx
init_react();
function MoonIcon() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6 hover:animate-pulse ",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  }));
}
function CopyIcon() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "#fff",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
  }));
}
function SearchIcon() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }));
}
function StarIcon({ fill }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6 stroke-yellow-500  ",
    fill: fill ? "#eab308" : "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  }));
}
function SunIcon() {
  return /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6 hover:animate-pulse",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  }));
}

// app/components/SideBar.jsx
function SideBar() {
  const [darkMode, setDarkMode] = (0, import_react2.useState)();
  function toggleMode() {
    document.documentElement.classList.toggle("dark");
    darkMode === true ? setDarkMode(false) : setDarkMode(true);
  }
  (0, import_react2.useEffect)(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return /* @__PURE__ */ React.createElement("aside", {
    className: " h-20 md:my-8 md:fixed md:h-full md:w-20-vw border-r dark:border-gray-700 px-3 ",
    "aria-label": "sidebar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " overflow-y-hidden py-4 rounded mb-auto flex md:block"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mr-3",
    onClick: toggleMode
  }, !darkMode ? /* @__PURE__ */ React.createElement(MoonIcon, null) : /* @__PURE__ */ React.createElement(SunIcon, null)), /* @__PURE__ */ React.createElement("ul", {
    className: " flex overflow-x-scroll scrollbar-hide gap-3 md:block md:space-y-2 "
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/snippets/createSnippet\n              ",
    className: " min-w-150-px  flex items-center p-2 text-base font-normal  rounded-lg hover:bg-green-600 bg-green-800 dark:bg-green-800 text-white dark:hover:bg-green-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "Create snippet"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/snippets/all\n              ",
    className: " min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "All snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/snippets/JavaScript\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "JavaScript snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/snippets/PHP\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "PHP snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/snippets/CSS\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "CSS snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/snippets/HTML\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "HTML snippets"))))));
}

// node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark_default = "/build/_assets/atom-one-dark-CAZX52DK.css";

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/root.jsx
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  },
  {
    rel: "stylesheet",
    href: atom_one_dark_default
  }
];
function meta() {
  return {
    charset: "utf-8",
    title: "Remix snippets app",
    viewport: "width=device-width,initial-scale=1"
  };
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "dark:bg-gray-900 dark:text-white font-sans"
  }, /* @__PURE__ */ React.createElement(SideBar, null), /* @__PURE__ */ React.createElement("main", {
    className: "md:ml-20-vw md:py-8"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/createSnippet.jsx
var createSnippet_exports = {};
__export(createSnippet_exports, {
  action: () => action,
  default: () => CreateSnippet
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/db/connectDb.server.js
init_react();
var import_mongoose2 = __toESM(require("mongoose"));

// app/db/models.js
init_react();
var import_mongoose = require("mongoose");
var { Schema } = import_mongoose.mongoose;
var snippetSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, "Too short, minimum 5 characters"]
  },
  languageTag: String,
  snippet: {
    type: String,
    required: [true, "Missing snippet"]
  },
  description: {
    type: String,
    required: [true, "Missing description"]
  },
  favorite: {
    type: Boolean,
    default: false
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  lastModified: {
    type: Date
  }
});
var models = [
  {
    name: "Snippet",
    schema: snippetSchema,
    collection: "snippets"
  }
];

// app/db/connectDb.server.js
var { MONGODB_URL, NODE_ENV } = process.env;
if (!MONGODB_URL) {
  if (NODE_ENV === "production") {
    throw new Error("Please define the MONGODB_URL environment variable \u2014 pointing to your full connection string, including database name.");
  } else {
    throw new Error("Please define the MONGODB_URL environment variable inside an .env file \u2014 pointing to your full connection string, including database name.");
  }
}
async function connectDb() {
  if (import_mongoose2.default.connection.readyState > 0) {
    if (NODE_ENV === "development") {
      for (const model of models) {
        import_mongoose2.default.connection.deleteModel(model.name);
        import_mongoose2.default.connection.model(model.name, model.schema, model.collection);
      }
    }
    return import_mongoose2.default.connection;
  }
  import_mongoose2.default.connection.on("connected", () => {
    console.log("Mongoose connected, NODE_ENV=%s", NODE_ENV);
  });
  import_mongoose2.default.connection.on("disconnected", () => {
    console.log("Mongoose DISCONNECTED, NODE_ENV=%s", NODE_ENV);
  });
  await import_mongoose2.default.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  for (const model of models) {
    import_mongoose2.default.connection.model(model.name, model.schema, model.collection);
  }
  return import_mongoose2.default.connection;
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/createSnippet.jsx
async function action({ request }) {
  const form = await request.formData();
  const title = form.get("title");
  const languageTag = form.get("languageTag");
  const description = form.get("description");
  const snippet = form.get("snippet");
  const db = await connectDb();
  try {
    const newSnippet = await db.models.Snippet.create({
      title,
      languageTag,
      description,
      snippet
    });
    return (0, import_remix3.redirect)(`/snippets/snippet/${newSnippet._id}`);
  } catch (error) {
    return (0, import_remix3.json)({ errors: error.errors, values: Object.fromEntries(form) }, { status: 400 });
  }
}
function CreateSnippet() {
  const actionData = (0, import_remix3.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "  overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw fixed scrollbar-hide "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold mb-2  mr-2"
  }, "Create snippet"), /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title",
    className: "block text-xl font-semibold"
  }, "Title"), (actionData == null ? void 0 : actionData.errors.title) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.title.message), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: actionData == null ? void 0 : actionData.errors.title.value,
    id: "title",
    className: (actionData == null ? void 0 : actionData.errors.title) ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
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
  }, "Description"), (actionData == null ? void 0 : actionData.errors.description) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.description.message), /* @__PURE__ */ React.createElement("textarea", {
    name: "description",
    style: { height: "100px", width: "66%" },
    defaultValue: actionData == null ? void 0 : actionData.errors.description.value,
    id: "description",
    className: (actionData == null ? void 0 : actionData.errors.description) ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "snippet",
    className: "block mt-3 text-xl font-semibold"
  }, "Snippet"), (actionData == null ? void 0 : actionData.errors.snippet) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.snippet.message), /* @__PURE__ */ React.createElement("textarea", {
    name: "snippet",
    defaultValue: actionData == null ? void 0 : actionData.errors.description.value,
    id: "snippet",
    style: { height: "200px", width: "66%" },
    className: (actionData == null ? void 0 : actionData.errors.description) ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
  }, "Save snippet")));
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/$snippetTag.jsx
var snippetTag_exports = {};
__export(snippetTag_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action2,
  default: () => Index,
  loader: () => loader
});
init_react();
var import_react3 = require("@remix-run/react");
var import_remix5 = __toESM(require_remix());

// app/components/SnippetListItem.jsx
init_react();
var import_remix4 = __toESM(require_remix());
function SnippetListItem({ snippet, languageTag }) {
  const dateAdded = new Date(snippet.dateAdded);
  const displayDate = `${dateAdded.getDate()}-${dateAdded.getMonth()}-${dateAdded.getFullYear()}`;
  return /* @__PURE__ */ React.createElement("li", {
    className: " min-w-200-px md:w-full  rounded-lg hover:bg-blue-600  bg-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 mb-1 "
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
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

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/$snippetTag.jsx
async function loader({ params }) {
  const db = await connectDb();
  switch (params.snippetTag) {
    case "all":
      return await db.models.Snippet.find();
    case "JavaScript":
      return await db.models.Snippet.find({ languageTag: "JavaScript" });
    case "TypeScript":
      return await db.models.Snippet.find({ languageTag: "TypeScript" });
    case "PHP":
      return await db.models.Snippet.find({ languageTag: "PHP" });
    case "HTML":
      return await db.models.Snippet.find({ languageTag: "HTML" });
    case "CSS":
      return await db.models.Snippet.find({ languageTag: "CSS" });
    default:
      return await db.models.Snippet.find();
  }
}
async function action2({ request, params }) {
  const language = String(params.snippetTag);
  const form = await request.formData();
  const _action = form.get("_action");
  const db = await connectDb();
  switch (_action) {
    case "search":
      const query = form.get("searchQuery");
      const searchSnippets = await db.models.Snippet.find({
        title: { $regex: new RegExp(query, "i") }
      });
      return searchSnippets;
    case "sort":
      const sortMethod = form.get("sortMethod");
      let snippets = [];
      if (sortMethod === "updated") {
        if (!(language === "all")) {
          snippets = await db.models.Snippet.find({
            languageTag: language
          }).sort({
            lastModified: 1
          });
        } else {
          snippets = await db.models.Snippet.find().sort({
            lastModified: 1
          });
        }
      } else if (sortMethod === "added") {
        if (!(language === "all")) {
          snippets = await db.models.Snippet.find({
            languageTag: language
          }).sort({
            dateAdded: 1
          });
        } else {
          snippets = await db.models.Snippet.find().sort({
            dateAdded: 1
          });
        }
      } else if (sortMethod === "title") {
        if (!(language === "all")) {
          snippets = await db.models.Snippet.find({
            languageTag: language
          }).sort({
            title: 1
          });
        } else {
          snippets = await db.models.Snippet.find().sort({
            title: 1
          });
        }
      } else if (sortMethod === "favorites") {
        if (!(language === "all")) {
          snippets = await db.models.Snippet.find({
            languageTag: language,
            favorite: 1
          });
        } else {
          snippets = await db.models.Snippet.find({ favorite: 1 });
        }
      }
      return snippets;
  }
}
function Index() {
  const snippets = (0, import_remix5.useLoaderData)();
  const actionSnippets = (0, import_react3.useActionData)();
  const languageTag = (0, import_remix5.useParams)().snippetTag;
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
  }, languageTag, " Snippets")), /* @__PURE__ */ React.createElement(import_remix5.Form, {
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
  }, /* @__PURE__ */ React.createElement(SearchIcon, null))), /* @__PURE__ */ React.createElement(import_remix5.Form, {
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
  }, /* @__PURE__ */ React.createElement(import_react3.Outlet, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500 font-bold"
  }, error.name, ": ", error.message);
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/$snippetTag/$snippetId.update.jsx
var snippetId_update_exports = {};
__export(snippetId_update_exports, {
  action: () => action3,
  default: () => CreateSnippet2,
  loader: () => loader2
});
init_react();
var import_remix6 = __toESM(require_remix());
async function loader2({ params }) {
  const db = await connectDb();
  const snippet = await db.models.Snippet.findById(params.snippetId);
  if (!snippet) {
    throw new Response(`Couldn't find book with id ${params.snippetId}`, {
      status: 404
    });
  }
  return (0, import_remix6.json)(snippet);
}
async function action3({ request }) {
  const form = await request.formData();
  const title = form.get("title");
  const languageTag = form.get("languageTag");
  const description = form.get("description");
  const snippet = form.get("snippet");
  const snippetId = form.get("snippetId");
  const db = await connectDb();
  try {
    await db.models.Snippet.findOneAndUpdate({ _id: snippetId }, {
      $set: {
        title,
        languageTag,
        description,
        snippet
      },
      $currentDate: { lastModified: true }
    });
    return (0, import_remix6.redirect)(`/snippets/snippet/${snippetId}`);
  } catch (error) {
    return (0, import_remix6.json)({ errors: error.errors, values: Object.fromEntries(form) }, { status: 400 });
  }
}
function CreateSnippet2() {
  const actionData = (0, import_remix6.useActionData)();
  const snippetToUpdate = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: " w-full md:w-50-vw lg:ml-25-vw md:ml-30-vw md:pr-10 h-96 md:h-full overflow-y-scroll px-4 md:p-0 fixed scrollbar-hide"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold mb-2  mr-2"
  }, "Update snippet"), /* @__PURE__ */ React.createElement(import_remix6.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title",
    className: "block text-xl font-semibold"
  }, "Title"), (actionData == null ? void 0 : actionData.errors.title) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.title.message), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    defaultValue: snippetToUpdate.title,
    style: { width: "66%" },
    id: "title",
    className: (actionData == null ? void 0 : actionData.errors.title) ? "border-2 border-red-500 rounded-lg px-2 bg-blue-600 text-white dark:text-black dark:bg-gray-700" : " rounded-lg px-2 bg-blue-600 text-white   dark:bg-gray-700"
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
    className: (actionData == null ? void 0 : actionData.errors.description) ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white  "
  }), (actionData == null ? void 0 : actionData.description) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.description.message), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "snippet",
    className: "block mt-3 text-xl font-semibold"
  }, "Snippet"), /* @__PURE__ */ React.createElement("textarea", {
    name: "snippet",
    defaultValue: snippetToUpdate.snippet,
    id: "snippet",
    style: { height: "200px", width: "66%" },
    className: (actionData == null ? void 0 : actionData.errors.description) ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 resize-none bg-blue-600 text-white "
  }), (actionData == null ? void 0 : actionData.description) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.description.message), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "snippetId",
    value: snippetToUpdate._id
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold hover:bg-blue-600 bg-blue-800 text-white  "
  }, "Save snippet")));
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/$snippetTag/$snippetId.jsx
var snippetId_exports = {};
__export(snippetId_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action4,
  default: () => BookPage,
  loader: () => loader3
});
init_react();
var import_react_router_dom = require("react-router-dom");
var import_remix7 = __toESM(require_remix());
var import_react_highlight = __toESM(require("react-highlight"));
var import_react4 = require("react");
async function loader3({ params }) {
  const db = await connectDb();
  const snippet = await db.models.Snippet.findById(params.snippetId);
  if (!snippet) {
    throw new Response(`Couldn't find snippets with id ${params.snippetId}`, {
      status: 404
    });
  }
  return (0, import_remix7.json)(snippet);
}
async function action4({ request }) {
  const form = await request.formData();
  const _action = form.get("_action");
  const snippetId = form.get("snippetId");
  const db = await connectDb();
  switch (_action) {
    case "favoriteToggle":
      const isFavortie = form.get("isFavorite");
      if (isFavortie === "true") {
        await db.models.Snippet.updateOne({ _id: snippetId }, {
          $set: { favorite: false }
        });
        return null;
      }
      if (isFavortie === "false") {
        await db.models.Snippet.updateOne({ _id: snippetId }, {
          $set: { favorite: true }
        });
        return null;
      }
    case "delete":
      await db.models.Snippet.deleteOne({ _id: snippetId });
      return (0, import_remix7.redirect)("/snippets/snippet");
  }
}
function BookPage() {
  const snippet = (0, import_remix7.useLoaderData)();
  const dateAdded = new Date(snippet.dateAdded);
  const displayDate = `${dateAdded.getDate()}-${dateAdded.getMonth()}-${dateAdded.getFullYear()}`;
  const [copyState, setCopyState] = (0, import_react4.useState)(false);
  const languageTag = (0, import_remix7.useParams)().snippetTag;
  (0, import_react4.useEffect)(() => {
    setCopyState(true);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-50-vw lg:ml-25-vw md:ml-30-vw md:pr-10  fixed overflow-y-scroll h-4/5 md:h-full md:pb-10 scrollbar-hide"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap  items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold  w-full"
  }, snippet.title), /* @__PURE__ */ React.createElement("div", {
    className: " mb-1 flex gap-5 dark:text-gray-500 w-full"
  }, /* @__PURE__ */ React.createElement("h3", null, "Date: ", displayDate), /* @__PURE__ */ React.createElement("h3", null, "Language: ", snippet.languageTag)), /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post",
    className: " flex items-center h-fit bg-blue-800 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg px-2 py-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "snippetId",
    value: snippet._id
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_action",
    value: "favoriteToggle"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "isFavorite",
    value: snippet.favorite
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, /* @__PURE__ */ React.createElement(StarIcon, {
    fill: snippet.favorite
  }))), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    className: " hover:bg-blue-600 bg-blue-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700 ml-4 rounded-lg px-2 py-1",
    to: `/snippets/${languageTag}/${snippet._id}/update`
  }, "Update Snippet"), /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post",
    className: "bg-red-700 hover:bg-red-500 ml-4 rounded-lg px-2 py-1"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "snippetId",
    value: snippet._id
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_action",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    className: " text-white",
    type: "submit"
  }, "Delete"))), /* @__PURE__ */ React.createElement("h2", {
    className: " mt-2 text-xl font-semibold"
  }, "Description"), /* @__PURE__ */ React.createElement("p", null, snippet.description), /* @__PURE__ */ React.createElement("h2", {
    className: " text-xl font-semibold mt-4 mb-2"
  }, "Snippet"), /* @__PURE__ */ React.createElement("div", {
    className: " relative"
  }, copyState ? /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      navigator.clipboard.writeText(snippet.snippet);
    },
    className: " absolute  right-0 p-3 group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex text-sm items-center "
  }, /* @__PURE__ */ React.createElement("p", {
    className: " hidden group-hover:block text-gray-300 group-active:hidden mr-1 bg-gray-600 rounded-lg px-2 "
  }, "Copy to clipboard"), /* @__PURE__ */ React.createElement(CopyIcon, null))) : null, /* @__PURE__ */ React.createElement(import_react_highlight.default, {
    className: `${snippet.languageTag.toLowerCase()}+ rounded-lg p-10 `
  }, snippet.snippet)));
}
function CatchBoundary() {
  const caught = (0, import_remix7.useCatch)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, caught.status, "\xA0", caught.statusText), /* @__PURE__ */ React.createElement("h2", null, caught.data));
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500 font-bold"
  }, error.name, ": ", error.message);
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/seed.jsx
var seed_exports = {};
__export(seed_exports, {
  action: () => action5,
  default: () => Seed,
  loader: () => loader4
});
init_react();
var import_react_router_dom2 = require("react-router-dom");
var import_remix8 = __toESM(require_remix());

// app/db/seed.json
var seed_default = [
  {
    title: "MonGoose REMIX Loader",
    languageTag: "JavaScript",
    snippet: "export async function loader() {\n  const db = await connectDb();\n  const snippets = await db.models.Snippet.find();\n\n  return snippets;\n}",
    description: "Snippet for loading data using mongoose in remix",
    favorite: true
  },
  {
    title: "monGoose find and update",
    languageTag: "JavaScript",
    snippet: "export async function action({ request }) {\n  const form = await request.formData();\n  const db = await connectDb();\n  try {\n    await db.models.Snippet.findOneAndUpdate(\n      { _id: snippetId },\n      { \n        $set: { title: 'title', },\n        $currentDate: { lastModified: true },\n      }\n    );\n    return null;\n  } catch (error) {\n    console.log(error);\n    return json(\n      { errors: error.errors, values: Object.fromEntries(form) },\n      { status: 400 }\n    );\n  }\n}",
    description: "snippet for finding and update one document using mongoose in REMIX ",
    favorite: false
  },
  {
    title: "PHP test",
    languageTag: "PHP",
    snippet: "$result = $mysqli->query('SELECT * FROM students');\nwhile ($row = $result->fetch_assoc()) {\n	echo $row['name'] . '<br>';\n}",
    description: "PHP test snippet",
    favorite: false
  }
];

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/seed.jsx
async function loader4() {
  const db = await connectDb();
  const count = await db.models.Snippet.countDocuments();
  if (count > 0) {
    return (0, import_remix8.redirect)("/snippets/all");
  }
  return null;
}
async function action5({ request }) {
  const form = await request.formData();
  const db = await connectDb();
  const _action = form.get("_action");
  if (_action === "seed") {
    try {
      await db.models.Snippet.insertMany(seed_default);
      return (0, import_remix8.redirect)("/snippets/all");
    } catch (error) {
      throw error;
    }
  }
}
function Seed() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: " h-64 min-w-200-px bg-blue-700 dark:bg-gray-700 fixed top-1/2 left-1/4 rounded-lg p-9 justify-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl text-white "
  }, "It seems that your database is empty, would you like me to seed some data for you?"), /* @__PURE__ */ React.createElement("div", {
    className: " flex justify-center mt-16 gap-8"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "/snippets/all"
  }, /* @__PURE__ */ React.createElement("button", {
    to: "/snippets/all",
    className: "text-xl text-white bg-red-600 hover:bg-red-800 rounded-lg px-4 py-2"
  }, "No!!\u{1F621}")), /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "_action",
    value: "seed",
    type: "submit",
    className: "text-xl text-white hover:bg-green-800 bg-green-600 rounded-lg px-4 py-2"
  }, "Yes please boss\u{1F607}")))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "433cdecf", "entry": { "module": "/build/entry.client-FX7YU7M5.js", "imports": ["/build/_shared/chunk-GSW2W7OK.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-CYPJHEAN.js", "imports": ["/build/_shared/chunk-VRJDOAXW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/seed": { "id": "routes/seed", "parentId": "root", "path": "seed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/seed-47EJIQHE.js", "imports": ["/build/_shared/chunk-XWYNVLH4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/snippets/$snippetTag": { "id": "routes/snippets/$snippetTag", "parentId": "root", "path": "snippets/:snippetTag", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag-RRSLMRZC.js", "imports": ["/build/_shared/chunk-XWYNVLH4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/snippets/$snippetTag/$snippetId": { "id": "routes/snippets/$snippetTag/$snippetId", "parentId": "routes/snippets/$snippetTag", "path": ":snippetId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag/$snippetId-LONFP6ER.js", "imports": ["/build/_shared/chunk-VRJDOAXW.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/snippets/$snippetTag/$snippetId.update": { "id": "routes/snippets/$snippetTag/$snippetId.update", "parentId": "routes/snippets/$snippetTag", "path": ":snippetId/update", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag/$snippetId.update-G7JO2NS3.js", "imports": ["/build/_shared/chunk-Z7R5JY23.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/snippets/createSnippet": { "id": "routes/snippets/createSnippet", "parentId": "root", "path": "snippets/createSnippet", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/createSnippet-K3UQOVQC.js", "imports": ["/build/_shared/chunk-Z7R5JY23.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-433CDECF.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/snippets/createSnippet": {
    id: "routes/snippets/createSnippet",
    parentId: "root",
    path: "snippets/createSnippet",
    index: void 0,
    caseSensitive: void 0,
    module: createSnippet_exports
  },
  "routes/snippets/$snippetTag": {
    id: "routes/snippets/$snippetTag",
    parentId: "root",
    path: "snippets/:snippetTag",
    index: void 0,
    caseSensitive: void 0,
    module: snippetTag_exports
  },
  "routes/snippets/$snippetTag/$snippetId.update": {
    id: "routes/snippets/$snippetTag/$snippetId.update",
    parentId: "routes/snippets/$snippetTag",
    path: ":snippetId/update",
    index: void 0,
    caseSensitive: void 0,
    module: snippetId_update_exports
  },
  "routes/snippets/$snippetTag/$snippetId": {
    id: "routes/snippets/$snippetTag/$snippetId",
    parentId: "routes/snippets/$snippetTag",
    path: ":snippetId",
    index: void 0,
    caseSensitive: void 0,
    module: snippetId_exports
  },
  "routes/seed": {
    id: "routes/seed",
    parentId: "root",
    path: "seed",
    index: void 0,
    caseSensitive: void 0,
    module: seed_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm9vdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2lkZUJhci5qc3giLCAiLi4vYXBwL3N2Zy9hbGwuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NuaXBwZXRzL2NyZWF0ZVNuaXBwZXQuanN4IiwgIi4uL2FwcC9kYi9jb25uZWN0RGIuc2VydmVyLmpzIiwgIi4uL2FwcC9kYi9tb2RlbHMuanMiLCAicm91dGU6L1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NuaXBwZXRMaXN0SXRlbS5qc3giLCAicm91dGU6L1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGUuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NlZWQuanN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9lbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvc25pcHBldHMvY3JlYXRlU25pcHBldC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvam9uYXRoYW5za292bW9zZS9Eb2N1bWVudHMvR2l0SHViL1BXQS1zbmlwcGV0LXByb2plY3QvYXBwL3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvam9uYXRoYW5za292bW9zZS9Eb2N1bWVudHMvR2l0SHViL1BXQS1zbmlwcGV0LXByb2plY3QvYXBwL3JvdXRlcy9zZWVkLmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc25pcHBldHMvY3JlYXRlU25pcHBldFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc25pcHBldHMvY3JlYXRlU25pcHBldFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzbmlwcGV0cy9jcmVhdGVTbmlwcGV0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZ1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWdcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic25pcHBldHMvOnNuaXBwZXRUYWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkLnVwZGF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnXCIsXG4gICAgICBwYXRoOiBcIjpzbmlwcGV0SWQvdXBkYXRlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWdcIixcbiAgICAgIHBhdGg6IFwiOnNuaXBwZXRJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2VlZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2VlZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzZWVkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZUJhclwiO1xuaW1wb3J0IGhpZ2hTdHlsZXMgZnJvbSBcImhpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtZGFyay5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuICB7XG4gICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICBocmVmOiBzdHlsZXMsXG4gIH0sXG4gIHtcbiAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIGhyZWY6IGhpZ2hTdHlsZXMsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICBjaGFyc2V0OiBcInV0Zi04XCIsXG4gICAgdGl0bGU6IFwiUmVtaXggc25pcHBldHMgYXBwXCIsXG4gICAgdmlld3BvcnQ6IFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJkYXJrOmJnLWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSBmb250LXNhbnNcIj5cbiAgICAgICAgPFNpZGVCYXIgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWQ6bWwtMjAtdncgbWQ6cHktOFwiPlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vb25JY29uLCBTdW5JY29uIH0gZnJvbSBcIn4vc3ZnL2FsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCkge1xuICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKCk7XG4gIGZ1bmN0aW9uIHRvZ2dsZU1vZGUoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xuICAgIGRhcmtNb2RlID09PSB0cnVlID8gc2V0RGFya01vZGUoZmFsc2UpIDogc2V0RGFya01vZGUodHJ1ZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcykge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlXG4gICAgICBjbGFzc05hbWU9XCIgaC0yMCBtZDpteS04IG1kOmZpeGVkIG1kOmgtZnVsbCBtZDp3LTIwLXZ3IGJvcmRlci1yIGRhcms6Ym9yZGVyLWdyYXktNzAwIHB4LTMgXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJzaWRlYmFyXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvdmVyZmxvdy15LWhpZGRlbiBweS00IHJvdW5kZWQgbWItYXV0byBmbGV4IG1kOmJsb2NrXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXItM1wiIG9uQ2xpY2s9e3RvZ2dsZU1vZGV9PlxuICAgICAgICAgIHshZGFya01vZGUgPyA8TW9vbkljb24gLz4gOiA8U3VuSWNvbiAvPn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCIgZmxleCBvdmVyZmxvdy14LXNjcm9sbCBzY3JvbGxiYXItaGlkZSBnYXAtMyBtZDpibG9jayBtZDpzcGFjZS15LTIgXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvY3JlYXRlU25pcHBldFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgbWluLXctMTUwLXB4ICBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWdyZWVuLTYwMCBiZy1ncmVlbi04MDAgZGFyazpiZy1ncmVlbi04MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyZWVuLTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5DcmVhdGUgc25pcHBldDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL2FsbFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgbWluLXctMTUwLXB4IGZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZDptbC0zXCI+QWxsIHNuaXBwZXRzPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvSmF2YVNjcmlwdFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0xNTAtcHggZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5KYXZhU2NyaXB0IHNuaXBwZXRzPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvUEhQXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi13LTE1MC1weCBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIGRhcms6YmctZ3JheS04MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPlBIUCBzbmlwcGV0czwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL0NTU1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0xNTAtcHggZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5DU1Mgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9zbmlwcGV0cy9IVE1MXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi13LTE1MC1weCBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIGRhcms6YmctZ3JheS04MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPkhUTUwgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIE1vb25JY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgaG92ZXI6YW5pbWF0ZS1wdWxzZSBcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICBkPVwiTTIwLjM1NCAxNS4zNTRBOSA5IDAgMDE4LjY0NiAzLjY0NiA5LjAwMyA5LjAwMyAwIDAwMTIgMjFhOS4wMDMgOS4wMDMgMCAwMDguMzU0LTUuNjQ2elwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29weUljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICBkPVwiTTggNUg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMnYtMU04IDVhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk04IDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0wIDBoMmEyIDIgMCAwMTIgMnYzbTIgNEgxMG0wIDBsMy0zbS0zIDNsMyAzXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVzSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICBkPVwiTTEyIDZ2Nm0wIDB2Nm0wLTZoNm0tNiAwSDZcIlxuICAgICAgPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdGFySWNvbih7IGZpbGwgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgc3Ryb2tlLXllbGxvdy01MDAgIFwiXG4gICAgICBmaWxsPXtmaWxsID8gXCIjZWFiMzA4XCIgOiBcIm5vbmVcIn1cbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD1cIk0xMS4wNDkgMi45MjdjLjMtLjkyMSAxLjYwMy0uOTIxIDEuOTAyIDBsMS41MTkgNC42NzRhMSAxIDAgMDAuOTUuNjloNC45MTVjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTMuOTc2IDIuODg4YTEgMSAwIDAwLS4zNjMgMS4xMThsMS41MTggNC42NzRjLjMuOTIyLS43NTUgMS42ODgtMS41MzggMS4xMThsLTMuOTc2LTIuODg4YTEgMSAwIDAwLTEuMTc2IDBsLTMuOTc2IDIuODg4Yy0uNzgzLjU3LTEuODM4LS4xOTctMS41MzgtMS4xMThsMS41MTgtNC42NzRhMSAxIDAgMDAtLjM2My0xLjExOGwtMy45NzYtMi44ODhjLS43ODQtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDQuOTE0YTEgMSAwIDAwLjk1MS0uNjlsMS41MTktNC42NzR6XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdW5JY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgaG92ZXI6YW5pbWF0ZS1wdWxzZVwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9XCJNMTIgM3YxbTAgMTZ2MW05LTloLTFNNCAxMkgzbTE1LjM2NCA2LjM2NGwtLjcwNy0uNzA3TTYuMzQzIDYuMzQzbC0uNzA3LS43MDdtMTIuNzI4IDBsLS43MDcuNzA3TTYuMzQzIDE3LjY1N2wtLjcwNy43MDdNMTYgMTJhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0sIHJlZGlyZWN0LCBqc29uLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIn4vZGIvY29ubmVjdERiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHRpdGxlID0gZm9ybS5nZXQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgbGFuZ3VhZ2VUYWcgPSBmb3JtLmdldChcImxhbmd1YWdlVGFnXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHNuaXBwZXQgPSBmb3JtLmdldChcInNuaXBwZXRcIik7XG4gIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdTbmlwcGV0ID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuY3JlYXRlKHtcbiAgICAgIHRpdGxlLFxuICAgICAgbGFuZ3VhZ2VUYWcsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHNuaXBwZXQsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvc25pcHBldHMvc25pcHBldC8ke25ld1NuaXBwZXQuX2lkfWApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBqc29uKFxuICAgICAgeyBlcnJvcnM6IGVycm9yLmVycm9ycywgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSkgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlU25pcHBldCgpIHtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiICBvdmVyZmxvdy15LXNjcm9sbCBoLTk2IG1kOmgtZnVsbCB3LWZ1bGwgcHgtNCBtZDp3LTUwLXZ3IGZpeGVkIHNjcm9sbGJhci1oaWRlIFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yICBtci0yXCI+Q3JlYXRlIHNuaXBwZXQ8L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgVGl0bGVcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZSAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5lcnJvcnMudGl0bGUudmFsdWV9XG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy50aXRsZVxuICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgXCJcbiAgICAgICAgICAgICAgOiBcIiByb3VuZGVkLWxnICBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSAgIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJsYW5ndWFnZVRhZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgTGFuZ3VhZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVRhZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUeXBlU2NyaXB0XCI+VHlwZVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQSFBcIj5QSFA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NTXCI+Q1NTPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhUTUxcIj5IVE1MPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgPlxuICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwcHhcIiwgd2lkdGg6IFwiNjYlXCIgfX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi52YWx1ZX1cbiAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICBcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNuaXBwZXRcIiBjbGFzc05hbWU9XCJibG9jayBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFNuaXBwZXRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5zbmlwcGV0ICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57YWN0aW9uRGF0YT8uZXJyb3JzLnNuaXBwZXQubWVzc2FnZX08L3A+XG4gICAgICAgICl9XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJzbmlwcGV0XCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi52YWx1ZX1cbiAgICAgICAgICBpZD1cInNuaXBwZXRcIlxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgPyBcImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrIFwiXG4gICAgICAgICAgICAgIDogXCIgcm91bmRlZC1sZyAgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6YmctZ3JheS03MDAgcHgtNyBweS0yIHJvdW5kZWQtbGcgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS04MDAgdGV4dC13aGl0ZSAgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZSBzbmlwcGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCB7IG1vZGVscyB9IGZyb20gXCIuL21vZGVscy5qc1wiO1xuXG5jb25zdCB7IE1PTkdPREJfVVJMLCBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnY7XG5cbmlmICghTU9OR09EQl9VUkwpIHtcbiAgaWYgKE5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkwgZW52aXJvbm1lbnQgdmFyaWFibGUgXHUyMDE0IHBvaW50aW5nIHRvIHlvdXIgZnVsbCBjb25uZWN0aW9uIHN0cmluZywgaW5jbHVkaW5nIGRhdGFiYXNlIG5hbWUuXCJcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkwgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIGFuIC5lbnYgZmlsZSBcdTIwMTQgcG9pbnRpbmcgdG8geW91ciBmdWxsIGNvbm5lY3Rpb24gc3RyaW5nLCBpbmNsdWRpbmcgZGF0YWJhc2UgbmFtZS5cIlxuICAgICk7XG4gIH1cbn1cblxuLy8gV2UgcmV1c2UgYW55IGV4aXN0aW5nIE1vbmdvb3NlIGRiIGNvbm5lY3Rpb24gdG8gYXZvaWQgY3JlYXRpbmcgbXVsdGlwbGVcbi8vIGNvbm5lY3Rpb25zIGluIGRldiBtb2RlIHdoZW4gUmVtaXggXCJwdXJnZXMgdGhlIHJlcXVpcmUgY2FjaGVcIiB3aGVuIHJlbG9hZGluZ1xuLy8gb24gZmlsZSBjaGFuZ2VzLlxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdERiKCkge1xuICAvLyBSZXVzZSB0aGUgZXhpc3RpbmcgTW9uZ29vc2UgY29ubmVjdGlvbiBpZiB3ZSBoYXZlIG9uZS4uLlxuICAvLyBodHRwczovL21vbmdvb3NlanMuY29tL2RvY3MvYXBpL2Nvbm5lY3Rpb24uaHRtbCNjb25uZWN0aW9uX0Nvbm5lY3Rpb24tcmVhZHlTdGF0ZVxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID4gMCkge1xuICAgIC8vIC4uLmJ1dCBvdmVyd3JpdGUgYWxsIG1vZGVscyBpbiBkZXZlbG9wbWVudCB0byBlbnN1cmUgd2UgcGljayB1cCBhbnkgY2hhbmdlcyBtYWRlIGluIHNjaGVtYXNcbiAgICBpZiAoTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgICAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5kZWxldGVNb2RlbChtb2RlbC5uYW1lKTtcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdGlvbi5tb2RlbChtb2RlbC5uYW1lLCBtb2RlbC5zY2hlbWEsIG1vZGVsLmNvbGxlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uO1xuICB9XG5cbiAgLy8gSWYgbm8gY29ubmVjdGlvbiBleGlzdHMgeWV0LCBzZXQgdXAgZXZlbnQgbG9nZ2luZy4uLlxuICBtb25nb29zZS5jb25uZWN0aW9uLm9uKFwiY29ubmVjdGVkXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvb3NlIGNvbm5lY3RlZCwgTk9ERV9FTlY9JXNcIiwgTk9ERV9FTlYpO1xuICB9KTtcblxuICBtb25nb29zZS5jb25uZWN0aW9uLm9uKFwiZGlzY29ubmVjdGVkXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvb3NlIERJU0NPTk5FQ1RFRCwgTk9ERV9FTlY9JXNcIiwgTk9ERV9FTlYpO1xuICB9KTtcblxuICAvLyAuLi5hbmQgY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb246XG4gIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkwsIHtcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB9KTtcblxuICAvLyBcIk1vZGVscyBhcmUgYWx3YXlzIHNjb3BlZCB0byBhIHNpbmdsZSBjb25uZWN0aW9uLlwiXG4gIC8vIGh0dHBzOi8vbW9uZ29vc2Vqcy5jb20vZG9jcy9jb25uZWN0aW9ucy5odG1sI211bHRpcGxlX2Nvbm5lY3Rpb25zXG4gIC8vIFNvIHdlIHNldCB0aGVtIHVwIGhlcmUgdG8gYXZvaWQgb3ZlcndyaXRpbmcgYW5kIGdldHRpbmcgZXJyb3JzIGluIGRldiBtb2RlLlxuICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ubW9kZWwobW9kZWwubmFtZSwgbW9kZWwuc2NoZW1hLCBtb2RlbC5jb2xsZWN0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBtb25nb29zZS5jb25uZWN0aW9uO1xufVxuIiwgImltcG9ydCB7IG1vbmdvb3NlIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuY29uc3Qgc25pcHBldFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB0aXRsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5MZW5ndGg6IFs1LCBcIlRvbyBzaG9ydCwgbWluaW11bSA1IGNoYXJhY3RlcnNcIl0sXG4gIH0sXG4gIGxhbmd1YWdlVGFnOiBTdHJpbmcsXG4gIHNuaXBwZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIk1pc3Npbmcgc25pcHBldFwiXSxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIk1pc3NpbmcgZGVzY3JpcHRpb25cIl0sXG4gIH0sXG4gIGZhdm9yaXRlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZGF0ZUFkZGVkOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgfSxcbiAgbGFzdE1vZGlmaWVkOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbW9kZWxzID0gW1xuICB7XG4gICAgbmFtZTogXCJTbmlwcGV0XCIsXG4gICAgc2NoZW1hOiBzbmlwcGV0U2NoZW1hLFxuICAgIGNvbGxlY3Rpb246IFwic25pcHBldHNcIixcbiAgfSxcbl07XG4iLCAiaW1wb3J0IHsgT3V0bGV0LCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIEZvcm0sIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IFNuaXBwZXRMaXN0SXRlbSBmcm9tIFwifi9jb21wb25lbnRzL1NuaXBwZXRMaXN0SXRlbVwiO1xuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyLmpzXCI7XG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIn4vc3ZnL2FsbFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKTtcbiAgc3dpdGNoIChwYXJhbXMuc25pcHBldFRhZykge1xuICAgIGNhc2UgXCJhbGxcIjpcbiAgICAgIHJldHVybiBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKCk7XG4gICAgY2FzZSBcIkphdmFTY3JpcHRcIjpcbiAgICAgIHJldHVybiBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHsgbGFuZ3VhZ2VUYWc6IFwiSmF2YVNjcmlwdFwiIH0pO1xuXG4gICAgY2FzZSBcIlR5cGVTY3JpcHRcIjpcbiAgICAgIHJldHVybiBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHsgbGFuZ3VhZ2VUYWc6IFwiVHlwZVNjcmlwdFwiIH0pO1xuXG4gICAgY2FzZSBcIlBIUFwiOlxuICAgICAgcmV0dXJuIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoeyBsYW5ndWFnZVRhZzogXCJQSFBcIiB9KTtcblxuICAgIGNhc2UgXCJIVE1MXCI6XG4gICAgICByZXR1cm4gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCh7IGxhbmd1YWdlVGFnOiBcIkhUTUxcIiB9KTtcblxuICAgIGNhc2UgXCJDU1NcIjpcbiAgICAgIHJldHVybiBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHsgbGFuZ3VhZ2VUYWc6IFwiQ1NTXCIgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QsIHBhcmFtcyB9KSB7XG4gIGNvbnN0IGxhbmd1YWdlID0gU3RyaW5nKHBhcmFtcy5zbmlwcGV0VGFnKTtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgX2FjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKTtcbiAgc3dpdGNoIChfYWN0aW9uKSB7XG4gICAgY2FzZSBcInNlYXJjaFwiOlxuICAgICAgY29uc3QgcXVlcnkgPSBmb3JtLmdldChcInNlYXJjaFF1ZXJ5XCIpO1xuICAgICAgY29uc3Qgc2VhcmNoU25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgdGl0bGU6IHsgJHJlZ2V4OiBuZXcgUmVnRXhwKHF1ZXJ5LCBcImlcIikgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VhcmNoU25pcHBldHM7XG5cbiAgICBjYXNlIFwic29ydFwiOlxuICAgICAgY29uc3Qgc29ydE1ldGhvZCA9IGZvcm0uZ2V0KFwic29ydE1ldGhvZFwiKTtcbiAgICAgIGxldCBzbmlwcGV0cyA9IFtdO1xuXG4gICAgICBpZiAoc29ydE1ldGhvZCA9PT0gXCJ1cGRhdGVkXCIpIHtcbiAgICAgICAgaWYgKCEobGFuZ3VhZ2UgPT09IFwiYWxsXCIpKSB7XG4gICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgICAgIGxhbmd1YWdlVGFnOiBsYW5ndWFnZSxcbiAgICAgICAgICB9KS5zb3J0KHtcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZDogMSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKS5zb3J0KHtcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZDogMSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0TWV0aG9kID09PSBcImFkZGVkXCIpIHtcbiAgICAgICAgaWYgKCEobGFuZ3VhZ2UgPT09IFwiYWxsXCIpKSB7XG4gICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgICAgIGxhbmd1YWdlVGFnOiBsYW5ndWFnZSxcbiAgICAgICAgICB9KS5zb3J0KHtcbiAgICAgICAgICAgIGRhdGVBZGRlZDogMSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKS5zb3J0KHtcbiAgICAgICAgICAgIGRhdGVBZGRlZDogMSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0TWV0aG9kID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgaWYgKCEobGFuZ3VhZ2UgPT09IFwiYWxsXCIpKSB7XG4gICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgICAgIGxhbmd1YWdlVGFnOiBsYW5ndWFnZSxcbiAgICAgICAgICB9KS5zb3J0KHtcbiAgICAgICAgICAgIHRpdGxlOiAxLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNuaXBwZXRzID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCgpLnNvcnQoe1xuICAgICAgICAgICAgdGl0bGU6IDEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc29ydE1ldGhvZCA9PT0gXCJmYXZvcml0ZXNcIikge1xuICAgICAgICBpZiAoIShsYW5ndWFnZSA9PT0gXCJhbGxcIikpIHtcbiAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoe1xuICAgICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlLFxuICAgICAgICAgICAgZmF2b3JpdGU6IDEsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHsgZmF2b3JpdGU6IDEgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNuaXBwZXRzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBzbmlwcGV0cyA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgYWN0aW9uU25pcHBldHMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIGNvbnN0IGxhbmd1YWdlVGFnID0gdXNlUGFyYW1zKCkuc25pcHBldFRhZztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLTQ0IHctZnVsbCBweC0zIG1kOnctMzAtdncgbGc6dy0yNS12dyBtZDpoLWZ1bGwgZml4ZWQgbWQ6Ym9yZGVyLXIgYm9yZGVyLWItc2xhdGUtNDAwIG1kOmRhcms6Ym9yZGVyLWdyYXktNzAwIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOiBib3JkZXItYiBtZDpkYXJrOmJvcmRlci1ncmF5LTcwMCBtYi00IHBiLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntsYW5ndWFnZVRhZ30gU25pcHBldHM8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggbXktMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgcHgtMSBib3JkZXItYi1zbGF0ZS00MDAgZGFyazpib3JkZXItbm9uZSBkYXJrOnRleHQtZ3JheS04MDAgbXItMlwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFF1ZXJ5XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggc25pcHBldHMuLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzb3J0TWV0aG9kXCIgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LWdyYXktODAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVwZGF0ZWRcIj5MYXN0IHVwZGF0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhdm9yaXRlc1wiPkZhdm9yaXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRkZWRcIj5EYXRlIGFkZGVkPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cInNvcnRcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBweC0zIHJvdW5kZWQtbGcgcHktMSBiZy1ibHVlLTgwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTb3J0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtNDQgdy1mdWxsIG10LTIgbWQ6bXQtMiBtZDpoLTQvNSBvdmVyZmxvdy1zY3JvbGwgc2Nyb2xsYmFyLWhpZGUgbWQ6cGItMTBcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiIGxpc3Qtbm9uZSBnYXAtMSBmbGV4IGZsZXgtc2hyaW5rLTAgZmxleC1ub3dyYXAgIG1kOmZsZXgtY29sIFwiPlxuICAgICAgICAgICAge2FjdGlvblNuaXBwZXRzXG4gICAgICAgICAgICAgID8gYWN0aW9uU25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U25pcHBldExpc3RJdGVtIGtleT17c25pcHBldC5faWR9IHNuaXBwZXQ9e3NuaXBwZXR9IC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgOiBzbmlwcGV0cy5tYXAoKHNuaXBwZXQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxTbmlwcGV0TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzbmlwcGV0Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgc25pcHBldD17c25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc9e2xhbmd1YWdlVGFnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHshYWN0aW9uU25pcHBldHMgJiYgc25pcHBldHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8aDI+Tm8gc25pcHBldHMgZm91bmQ8L2gyPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTcyIG1kOm1sLTMgbWQ6bXQtMCBmaXhlZCBvdmVyZmxvdy15LXNjcm9sbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9KSB7XG4gIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LWJvbGRcIj5cbiAgICAgIHtlcnJvci5uYW1lfToge2Vycm9yLm1lc3NhZ2V9XG4gICAgPC9oMT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIn4vc3ZnL2FsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbmlwcGV0TGlzdEl0ZW0oeyBzbmlwcGV0LCBsYW5ndWFnZVRhZyB9KSB7XG4gIGNvbnN0IGRhdGVBZGRlZCA9IG5ldyBEYXRlKHNuaXBwZXQuZGF0ZUFkZGVkKTtcbiAgY29uc3QgZGlzcGxheURhdGUgPSBgJHtkYXRlQWRkZWQuZ2V0RGF0ZSgpfS0ke2RhdGVBZGRlZC5nZXRNb250aCgpfS0ke2RhdGVBZGRlZC5nZXRGdWxsWWVhcigpfWA7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIiBtaW4tdy0yMDAtcHggbWQ6dy1mdWxsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwICBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgcC0zIG1iLTEgXCI+XG4gICAgICA8TGluayB0bz17YC9zbmlwcGV0cy8ke2xhbmd1YWdlVGFnfS8ke3NuaXBwZXQuX2lkfWB9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgdGV4dC14bCBmb250LXNlbWlib2xkXCI+e3NuaXBwZXQudGl0bGV9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIHtzbmlwcGV0LmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAzMCl9IC4uLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtMVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ncmF5LTMwMFwiPntkaXNwbGF5RGF0ZX08L3A+XG4gICAgICAgICAgPFN0YXJJY29uIGZpbGw9e3NuaXBwZXQuZmF2b3JpdGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgRm9ybSwgcmVkaXJlY3QsIGpzb24sIHVzZUFjdGlvbkRhdGEsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIn4vZGIvY29ubmVjdERiLnNlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKTtcbiAgY29uc3Qgc25pcHBldCA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmRCeUlkKHBhcmFtcy5zbmlwcGV0SWQpO1xuICBpZiAoIXNuaXBwZXQpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoYENvdWxkbid0IGZpbmQgYm9vayB3aXRoIGlkICR7cGFyYW1zLnNuaXBwZXRJZH1gLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ganNvbihzbmlwcGV0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB0aXRsZSA9IGZvcm0uZ2V0KFwidGl0bGVcIik7XG4gIGNvbnN0IGxhbmd1YWdlVGFnID0gZm9ybS5nZXQoXCJsYW5ndWFnZVRhZ1wiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBzbmlwcGV0ID0gZm9ybS5nZXQoXCJzbmlwcGV0XCIpO1xuICBjb25zdCBzbmlwcGV0SWQgPSBmb3JtLmdldChcInNuaXBwZXRJZFwiKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKTtcblxuICB0cnkge1xuICAgIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7IF9pZDogc25pcHBldElkIH0sXG4gICAgICB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlVGFnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICBzbmlwcGV0OiBzbmlwcGV0LFxuICAgICAgICB9LFxuICAgICAgICAkY3VycmVudERhdGU6IHsgbGFzdE1vZGlmaWVkOiB0cnVlIH0sXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiByZWRpcmVjdChgL3NuaXBwZXRzL3NuaXBwZXQvJHtzbmlwcGV0SWR9YCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGpzb24oXG4gICAgICB7IGVycm9yczogZXJyb3IuZXJyb3JzLCB2YWx1ZXM6IE9iamVjdC5mcm9tRW50cmllcyhmb3JtKSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVTbmlwcGV0KCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuXG4gIGNvbnN0IHNuaXBwZXRUb1VwZGF0ZSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgbWQ6dy01MC12dyBsZzptbC0yNS12dyBtZDptbC0zMC12dyBtZDpwci0xMCBoLTk2IG1kOmgtZnVsbCBvdmVyZmxvdy15LXNjcm9sbCBweC00IG1kOnAtMCBmaXhlZCBzY3JvbGxiYXItaGlkZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yICBtci0yXCI+VXBkYXRlIHNuaXBwZXQ8L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgVGl0bGVcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZSAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzbmlwcGV0VG9VcGRhdGUudGl0bGV9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNjYlXCIgfX1cbiAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLnRpdGxlXG4gICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgZGFyazpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgIDogXCIgcm91bmRlZC1sZyBweC0yIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgICBkYXJrOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgaHRtbEZvcj1cImxhbmd1YWdlVGFnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgID5cbiAgICAgICAgICBMYW5ndWFnZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzbmlwcGV0VG9VcGRhdGUubGFuZ3VhZ2VUYWd9XG4gICAgICAgICAgbmFtZT1cImxhbmd1YWdlVGFnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSAgIGRhcms6YmctZ3JheS03MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkphdmFTY3JpcHRcIj5KYXZhU2NyaXB0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlR5cGVTY3JpcHRcIj5UeXBlU2NyaXB0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBIUFwiPlBIUDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDU1NcIj5DU1M8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSFRNTFwiPkhUTUw8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDBweFwiLCB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgPyBcImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrIFwiXG4gICAgICAgICAgICAgIDogXCIgcm91bmRlZC1sZyAgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICB7YWN0aW9uRGF0YT8uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNuaXBwZXRcIiBjbGFzc05hbWU9XCJibG9jayBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFNuaXBwZXRcbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwic25pcHBldFwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzbmlwcGV0VG9VcGRhdGUuc25pcHBldH1cbiAgICAgICAgICBpZD1cInNuaXBwZXRcIlxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgPyBcImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrIFwiXG4gICAgICAgICAgICAgIDogXCIgcm91bmRlZC1sZyAgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIHthY3Rpb25EYXRhPy5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uLm1lc3NhZ2V9XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic25pcHBldElkXCIgdmFsdWU9e3NuaXBwZXRUb1VwZGF0ZS5faWR9IC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmJnLWdyYXktNzAwIHB4LTcgcHktMiByb3VuZGVkLWxnIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIHRleHQtd2hpdGUgIFwiXG4gICAgICAgID5cbiAgICAgICAgICBTYXZlIHNuaXBwZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VDYXRjaCxcbiAganNvbixcbiAgRm9ybSxcbiAgcmVkaXJlY3QsXG4gIHVzZVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgY29ubmVjdERiIGZyb20gXCJ+L2RiL2Nvbm5lY3REYi5zZXJ2ZXIuanNcIjtcbmltcG9ydCB7IFN0YXJJY29uLCBDb3B5SWNvbiB9IGZyb20gXCJ+L3N2Zy9hbGxcIjtcblxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tIFwicmVhY3QtaGlnaGxpZ2h0XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKCk7XG4gIGNvbnN0IHNuaXBwZXQgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kQnlJZChwYXJhbXMuc25pcHBldElkKTtcbiAgaWYgKCFzbmlwcGV0KSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKGBDb3VsZG4ndCBmaW5kIHNuaXBwZXRzIHdpdGggaWQgJHtwYXJhbXMuc25pcHBldElkfWAsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBqc29uKHNuaXBwZXQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IF9hY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XG4gIGNvbnN0IHNuaXBwZXRJZCA9IGZvcm0uZ2V0KFwic25pcHBldElkXCIpO1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpO1xuXG4gIHN3aXRjaCAoX2FjdGlvbikge1xuICAgIGNhc2UgXCJmYXZvcml0ZVRvZ2dsZVwiOlxuICAgICAgY29uc3QgaXNGYXZvcnRpZSA9IGZvcm0uZ2V0KFwiaXNGYXZvcml0ZVwiKTtcbiAgICAgIGlmIChpc0Zhdm9ydGllID09PSBcInRydWVcIikge1xuICAgICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC51cGRhdGVPbmUoXG4gICAgICAgICAgeyBfaWQ6IHNuaXBwZXRJZCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICRzZXQ6IHsgZmF2b3JpdGU6IGZhbHNlIH0sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGlzRmF2b3J0aWUgPT09IFwiZmFsc2VcIikge1xuICAgICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC51cGRhdGVPbmUoXG4gICAgICAgICAgeyBfaWQ6IHNuaXBwZXRJZCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICRzZXQ6IHsgZmF2b3JpdGU6IHRydWUgfSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZGVsZXRlT25lKHsgX2lkOiBzbmlwcGV0SWQgfSk7XG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvc25pcHBldHMvc25pcHBldFwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rUGFnZSgpIHtcbiAgY29uc3Qgc25pcHBldCA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgZGF0ZUFkZGVkID0gbmV3IERhdGUoc25pcHBldC5kYXRlQWRkZWQpO1xuICBjb25zdCBkaXNwbGF5RGF0ZSA9IGAke2RhdGVBZGRlZC5nZXREYXRlKCl9LSR7ZGF0ZUFkZGVkLmdldE1vbnRoKCl9LSR7ZGF0ZUFkZGVkLmdldEZ1bGxZZWFyKCl9YDtcbiAgY29uc3QgW2NvcHlTdGF0ZSwgc2V0Q29weVN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbGFuZ3VhZ2VUYWcgPSB1c2VQYXJhbXMoKS5zbmlwcGV0VGFnO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29weVN0YXRlKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTUwLXZ3IGxnOm1sLTI1LXZ3IG1kOm1sLTMwLXZ3IG1kOnByLTEwICBmaXhlZCBvdmVyZmxvdy15LXNjcm9sbCBoLTQvNSBtZDpoLWZ1bGwgbWQ6cGItMTAgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkICB3LWZ1bGxcIj57c25pcHBldC50aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtYi0xIGZsZXggZ2FwLTUgZGFyazp0ZXh0LWdyYXktNTAwIHctZnVsbFwiPlxuICAgICAgICAgIDxoMz5EYXRlOiB7ZGlzcGxheURhdGV9PC9oMz5cbiAgICAgICAgICA8aDM+TGFuZ3VhZ2U6IHtzbmlwcGV0Lmxhbmd1YWdlVGFnfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIGgtZml0IGJnLWJsdWUtODAwIGhvdmVyOmJnLWJsdWUtNjAwIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCByb3VuZGVkLWxnIHB4LTIgcHktMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzbmlwcGV0SWRcIiB2YWx1ZT17c25pcHBldC5faWR9IC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2FjdGlvblwiIHZhbHVlPVwiZmF2b3JpdGVUb2dnbGVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlzRmF2b3JpdGVcIiB2YWx1ZT17c25pcHBldC5mYXZvcml0ZX0gLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxTdGFySWNvbiBmaWxsPXtzbmlwcGV0LmZhdm9yaXRlfSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIHRleHQtd2hpdGUgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIG1sLTQgcm91bmRlZC1sZyBweC0yIHB5LTFcIlxuICAgICAgICAgIHRvPXtgL3NuaXBwZXRzLyR7bGFuZ3VhZ2VUYWd9LyR7c25pcHBldC5faWR9L3VwZGF0ZWB9XG4gICAgICAgID5cbiAgICAgICAgICBVcGRhdGUgU25pcHBldFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTcwMCBob3ZlcjpiZy1yZWQtNTAwIG1sLTQgcm91bmRlZC1sZyBweC0yIHB5LTFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic25pcHBldElkXCIgdmFsdWU9e3NuaXBwZXQuX2lkfSAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cImRlbGV0ZVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgyIGNsYXNzTmFtZT1cIiBtdC0yIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPkRlc2NyaXB0aW9uPC9oMj5cbiAgICAgIDxwPntzbmlwcGV0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC14bCBmb250LXNlbWlib2xkIG10LTQgbWItMlwiPlNuaXBwZXQ8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcmVsYXRpdmVcIj5cbiAgICAgICAge2NvcHlTdGF0ZSA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzbmlwcGV0LnNuaXBwZXQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSAgcmlnaHQtMCBwLTMgZ3JvdXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXNtIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGhpZGRlbiBncm91cC1ob3ZlcjpibG9jayB0ZXh0LWdyYXktMzAwIGdyb3VwLWFjdGl2ZTpoaWRkZW4gbXItMSBiZy1ncmF5LTYwMCByb3VuZGVkLWxnIHB4LTIgXCI+XG4gICAgICAgICAgICAgICAgQ29weSB0byBjbGlwYm9hcmRcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Q29weUljb24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8SGlnaGxpZ2h0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzbmlwcGV0Lmxhbmd1YWdlVGFnLnRvTG93ZXJDYXNlKCl9KyByb3VuZGVkLWxnIHAtMTAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzbmlwcGV0LnNuaXBwZXR9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+XG4gICAgICAgIHtjYXVnaHQuc3RhdHVzfVx1MDBBMHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgIDwvaDE+XG4gICAgICA8aDI+e2NhdWdodC5kYXRhfTwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1ib2xkXCI+XG4gICAgICB7ZXJyb3IubmFtZX06IHtlcnJvci5tZXNzYWdlfVxuICAgIDwvaDE+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBGb3JtLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyLmpzXCI7XG5pbXBvcnQgc2VlZERhdGEgZnJvbSBcIn4vZGIvc2VlZC5qc29uXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKCk7XG4gIGNvbnN0IGNvdW50ID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuY291bnREb2N1bWVudHMoKTtcbiAgaWYgKGNvdW50ID4gMCkge1xuICAgIHJldHVybiByZWRpcmVjdChcIi9zbmlwcGV0cy9hbGxcIik7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpO1xuXG4gIGNvbnN0IF9hY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XG4gIGlmIChfYWN0aW9uID09PSBcInNlZWRcIikge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5pbnNlcnRNYW55KHNlZWREYXRhKTtcbiAgICAgIHJldHVybiByZWRpcmVjdChcIi9zbmlwcGV0cy9hbGxcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWVkKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLTY0IG1pbi13LTIwMC1weCBiZy1ibHVlLTcwMCBkYXJrOmJnLWdyYXktNzAwIGZpeGVkIHRvcC0xLzIgbGVmdC0xLzQgcm91bmRlZC1sZyBwLTkganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgXCI+XG4gICAgICAgICAgSXQgc2VlbXMgdGhhdCB5b3VyIGRhdGFiYXNlIGlzIGVtcHR5LCB3b3VsZCB5b3UgbGlrZSBtZSB0byBzZWVkIHNvbWVcbiAgICAgICAgICBkYXRhIGZvciB5b3U/XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTYgZ2FwLThcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9zbmlwcGV0cy9hbGxcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvYWxsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTgwMCByb3VuZGVkLWxnIHB4LTQgcHktMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5vISFcdUQ4M0RcdURFMjFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInNlZWRcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyZWVuLTgwMCBiZy1ncmVlbi02MDAgcm91bmRlZC1sZyBweC00IHB5LTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBZZXMgcGxlYXNlIGJvc3NcdUQ4M0RcdURFMDdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic0MzNjZGVjZicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtRlg3WVU3TTUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdTVzJXN09LLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1DWVBKSEVBTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVlJKRE9BWFcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NlZWQnOnsnaWQnOidyb3V0ZXMvc2VlZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZWVkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NlZWQtNDdFSklRSEUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhXWU5WTEg0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcnOnsnaWQnOidyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc25pcHBldHMvOnNuaXBwZXRUYWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWctUlJTTE1SWkMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhXWU5WTEg0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkJzp7J2lkJzoncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZycsJ3BhdGgnOic6c25pcHBldElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQtTE9ORlA2RVIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVZSSkRPQVhXLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlJzp7J2lkJzoncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlJywncGFyZW50SWQnOidyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcnLCdwYXRoJzonOnNuaXBwZXRJZC91cGRhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGUtRzdKTzJOUzMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVo3UjVKWTIzLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc25pcHBldHMvY3JlYXRlU25pcHBldCc6eydpZCc6J3JvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NuaXBwZXRzL2NyZWF0ZVNuaXBwZXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc25pcHBldHMvY3JlYXRlU25pcHBldC1LM1VRT1ZRQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWjdSNUpZMjMuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTQzM0NERUNGLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxD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
