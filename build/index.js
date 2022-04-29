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
  loader: () => loader,
  meta: () => meta
});
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LDCUBTCU.css";

// node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark_default = "/build/_assets/atom-one-dark-CAZX52DK.css";

// app/sessions.server.js
init_react();
var import_remix3 = __toESM(require_remix());

// app/cookies.server.js
init_react();
var import_remix2 = __toESM(require_remix());
var sessionCookie = (0, import_remix2.createCookie)("__session", {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 7,
  secure: true,
  secrets: [process.env.COOKIE_SECRET]
});

// app/sessions.server.js
var { getSession, commitSession, destroySession } = (0, import_remix3.createCookieSessionStorage)({ cookie: sessionCookie });

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/root.jsx
var import_remix4 = __toESM(require_remix());
var import_remix5 = __toESM(require_remix());

// app/components/SideBar.jsx
init_react();
var import_react = require("@remix-run/react");

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
var import_react2 = require("react");
function SideBar({ session }) {
  const [darkMode, setDarkMode] = (0, import_react2.useState)();
  const [isOnLine, setIsOnLine] = (0, import_react2.useState)(false);
  const [loggedIn, setLoggedIn] = (0, import_react2.useState)();
  function toggleMode() {
    document.documentElement.classList.toggle("dark");
    darkMode === true ? setDarkMode(false) : setDarkMode(true);
  }
  (0, import_react2.useEffect)(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
    if (navigator.onLine) {
      setIsOnLine(true);
    } else {
      setIsOnLine(false);
    }
    console.log(session);
    if (session.length > 0) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
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
  }, isOnLine ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/snippets/createSnippet\n              ",
    className: " min-w-150-px  flex items-center p-2 text-base font-normal  rounded-lg hover:bg-green-600 bg-green-800 dark:bg-green-800 text-white dark:hover:bg-green-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "Create snippet"))) : null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react.Link, {
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
  }, "HTML snippets"))), /* @__PURE__ */ React.createElement("li", null, " ", !loggedIn ? /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/login\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "Login")) : /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/logout\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "Logout"))))));
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/root.jsx
async function loader({ request }) {
  return "r";
}
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  },
  {
    rel: "stylesheet",
    href: atom_one_dark_default
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/apple-touch-icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  },
  {
    rel: "manifest",
    href: "/site.webmanifest"
  },
  {
    rel: "mask-icon",
    color: "#742914",
    href: "/safari-pinned-tab.svg"
  },
  {
    rel: "apple-mobile-web-app-title",
    content: "Snippie"
  },
  {
    rel: "application-name",
    content: "Snippie"
  },
  {
    rel: "msapplication-TileColor",
    content: "#742914"
  },
  {
    rel: "theme-color",
    content: "#ffffff"
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
  const session = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix5.Meta, null), /* @__PURE__ */ React.createElement(import_remix5.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "dark:bg-gray-900 dark:text-white font-sans"
  }, /* @__PURE__ */ React.createElement(SideBar, {
    session
  }), /* @__PURE__ */ React.createElement("main", {
    className: "md:ml-20-vw md:py-8"
  }, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null), /* @__PURE__ */ React.createElement(import_remix5.LiveReload, null)));
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/createSnippet.jsx
var createSnippet_exports = {};
__export(createSnippet_exports, {
  action: () => action,
  default: () => CreateSnippet
});
init_react();

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
var userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Gotta have a username"]
  },
  password: {
    type: String,
    required: [true, "Gotta have a password"]
  }
});
var models = [
  {
    name: "Snippet",
    schema: snippetSchema,
    collection: "snippets"
  },
  {
    name: "user",
    schema: userSchema,
    collection: "users"
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
var import_remix6 = __toESM(require_remix());
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
    return (0, import_remix6.redirect)(`/snippets/snippet/${newSnippet._id}`);
  } catch (error2) {
    return (0, import_remix6.json)({ errors: error2.errors, values: Object.fromEntries(form) }, { status: 400 });
  }
}
function CreateSnippet() {
  const actionData = (0, import_remix6.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "  overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw fixed scrollbar-hide "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold mb-2  mr-2"
  }, "Create snippet"), /* @__PURE__ */ React.createElement(import_remix6.Form, {
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
  }, "HTML"), /* @__PURE__ */ React.createElement("option", {
    value: "java"
  }, "Java"), /* @__PURE__ */ React.createElement("option", {
    value: "ruby"
  }, "Ruby"), /* @__PURE__ */ React.createElement("option", {
    value: "haskel"
  }, "Haskel"), /* @__PURE__ */ React.createElement("option", {
    value: "coffeescript"
  }, "CoffeeScript"), /* @__PURE__ */ React.createElement("option", {
    value: "haskell"
  }, "Haskell"), /* @__PURE__ */ React.createElement("option", {
    value: "kotlin"
  }, "Kotlin"), /* @__PURE__ */ React.createElement("option", {
    value: "dart"
  }, "Dart"), /* @__PURE__ */ React.createElement("option", {
    value: "lua"
  }, "Lua"), /* @__PURE__ */ React.createElement("option", {
    value: "go"
  }, "Go"), /* @__PURE__ */ React.createElement("option", {
    value: "shell"
  }, "Shell"), /* @__PURE__ */ React.createElement("option", {
    value: "sql"
  }, "SQL"), /* @__PURE__ */ React.createElement("option", {
    value: "perl"
  }, "Perl"), /* @__PURE__ */ React.createElement("option", {
    value: "swift"
  }, "Swift"), /* @__PURE__ */ React.createElement("option", {
    value: "cs"
  }, "C#"), /* @__PURE__ */ React.createElement("option", {
    value: "c++"
  }, "C++"), /* @__PURE__ */ React.createElement("option", {
    value: "python"
  }, "Python")), /* @__PURE__ */ React.createElement("label", {
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
  loader: () => loader2
});
init_react();
var import_react3 = require("@remix-run/react");

// app/components/SnippetListItem.jsx
init_react();
var import_remix7 = __toESM(require_remix());
function SnippetListItem({ snippet, languageTag }) {
  const dateAdded = new Date(snippet.dateAdded);
  const displayDate = `${dateAdded.getDate()}-${dateAdded.getMonth()}-${dateAdded.getFullYear()}`;
  return /* @__PURE__ */ React.createElement("li", {
    className: " min-w-200-px md:w-full  rounded-lg hover:bg-blue-600  bg-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 mb-1 "
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
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
var import_remix8 = __toESM(require_remix());
async function loader2({ params }) {
  const db = await connectDb();
  if (params.snippetTag === "all") {
    return await db.models.Snippet.find();
  }
  return await db.models.Snippet.find({ languageTag: params.snippetTag });
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
  const snippets = (0, import_remix8.useLoaderData)();
  const actionSnippets = (0, import_react3.useActionData)();
  const languageTag = (0, import_remix8.useParams)().snippetTag;
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
  }, languageTag, " Snippets")), /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
  }, /* @__PURE__ */ React.createElement(SearchIcon, null))), /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
function ErrorBoundary({ error: error2 }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500 font-bold"
  }, error2.name, ": ", error2.message);
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/snippets/$snippetTag/$snippetId.update.jsx
var snippetId_update_exports = {};
__export(snippetId_update_exports, {
  action: () => action3,
  default: () => CreateSnippet2,
  loader: () => loader3
});
init_react();
var import_remix9 = __toESM(require_remix());
async function loader3({ params }) {
  const db = await connectDb();
  const snippet = await db.models.Snippet.findById(params.snippetId);
  if (!snippet) {
    throw new Response(`Couldn't find book with id ${params.snippetId}`, {
      status: 404
    });
  }
  return (0, import_remix9.json)(snippet);
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
    return (0, import_remix9.redirect)(`/snippets/snippet/${snippetId}`);
  } catch (error2) {
    return (0, import_remix9.json)({ errors: error2.errors, values: Object.fromEntries(form) }, { status: 400 });
  }
}
function CreateSnippet2() {
  const actionData = (0, import_remix9.useActionData)();
  const snippetToUpdate = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: " w-full md:w-50-vw lg:ml-25-vw md:ml-30-vw md:pr-10 h-96 md:h-full overflow-y-scroll px-4 md:p-0 fixed scrollbar-hide"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold mb-2  mr-2"
  }, "Update snippet"), /* @__PURE__ */ React.createElement(import_remix9.Form, {
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
  }, "HTML"), /* @__PURE__ */ React.createElement("option", {
    value: "java"
  }, "Java"), /* @__PURE__ */ React.createElement("option", {
    value: "ruby"
  }, "Ruby"), /* @__PURE__ */ React.createElement("option", {
    value: "haskel"
  }, "Haskel"), /* @__PURE__ */ React.createElement("option", {
    value: "coffeescript"
  }, "CoffeeScript"), /* @__PURE__ */ React.createElement("option", {
    value: "haskell"
  }, "Haskell"), /* @__PURE__ */ React.createElement("option", {
    value: "kotlin"
  }, "Kotlin"), /* @__PURE__ */ React.createElement("option", {
    value: "dart"
  }, "Dart"), /* @__PURE__ */ React.createElement("option", {
    value: "lua"
  }, "Lua"), /* @__PURE__ */ React.createElement("option", {
    value: "go"
  }, "Go"), /* @__PURE__ */ React.createElement("option", {
    value: "shell"
  }, "Shell"), /* @__PURE__ */ React.createElement("option", {
    value: "sql"
  }, "SQL"), /* @__PURE__ */ React.createElement("option", {
    value: "perl"
  }, "Perl"), /* @__PURE__ */ React.createElement("option", {
    value: "swift"
  }, "Swift"), /* @__PURE__ */ React.createElement("option", {
    value: "cs"
  }, "C#"), /* @__PURE__ */ React.createElement("option", {
    value: "c++"
  }, "C++"), /* @__PURE__ */ React.createElement("option", {
    value: "python"
  }, "Python")), /* @__PURE__ */ React.createElement("label", {
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
  loader: () => loader4
});
init_react();
var import_react_router_dom = require("react-router-dom");
var import_remix10 = __toESM(require_remix());
var import_react_highlight = __toESM(require("react-highlight"));
var import_react4 = require("react");
async function loader4({ params }) {
  const db = await connectDb();
  const snippet = await db.models.Snippet.findById(params.snippetId);
  if (!snippet) {
    throw new Response(`Couldn't find snippets with id ${params.snippetId}`, {
      status: 404
    });
  }
  return (0, import_remix10.json)(snippet);
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
      return (0, import_remix10.redirect)("/snippets/snippet");
  }
}
function BookPage() {
  const snippet = (0, import_remix10.useLoaderData)();
  const dateAdded = new Date(snippet.dateAdded);
  const displayDate = `${dateAdded.getDate()}-${dateAdded.getMonth()}-${dateAdded.getFullYear()}`;
  const [copyState, setCopyState] = (0, import_react4.useState)(false);
  const languageTag = (0, import_remix10.useParams)().snippetTag;
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
  }, /* @__PURE__ */ React.createElement("h3", null, "Date: ", displayDate), /* @__PURE__ */ React.createElement("h3", null, "Language: ", snippet.languageTag)), /* @__PURE__ */ React.createElement(import_remix10.Form, {
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
  }, "Update Snippet"), /* @__PURE__ */ React.createElement(import_remix10.Form, {
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
  const caught = (0, import_remix10.useCatch)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, caught.status, "\xA0", caught.statusText), /* @__PURE__ */ React.createElement("h2", null, caught.data));
}
function ErrorBoundary2({ error: error2 }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500 font-bold"
  }, error2.name, ": ", error2.message);
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/register.jsx
var register_exports = {};
__export(register_exports, {
  action: () => action5,
  default: () => register
});
init_react();
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_remix11 = __toESM(require_remix());
async function action5({ request }) {
  const form = await request.formData();
  const db = await connectDb();
  const username = form.get("username").trim();
  const password = await import_bcryptjs.default.hash(form.get("password"), 10);
  try {
    const user = await db.models.user.create({
      username,
      password
    });
    console.log(user);
    const session = await getSession(request.headers.get("Cookie"));
    session.set("userId", user.id);
    return (0, import_remix11.redirect)("/snippets/all", {
      headers: {
        status: 200,
        "Set-Cookie": await commitSession(session)
      }
    });
  } catch (error2) {
    console.log(error2);
    return (0, import_remix11.json)({ errors: error2.errors, values: Object.fromEntries(form) }, { status: 400 });
  }
}
function register() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw fixed scrollbar-hide"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold mb-2 mr-2"
  }, "Create User"), /* @__PURE__ */ React.createElement(import_remix11.Form, {
    method: "post",
    reloadDocument: true
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input",
    className: "block text-xl font-semibold"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "username-input",
    name: "username",
    className: "rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input",
    className: "block text-xl font-semibold"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    type: "password",
    className: "rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "createUser",
    className: " dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
  }, "Create User")));
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action6,
  loader: () => loader5
});
init_react();
var import_remix12 = __toESM(require_remix());
async function action6({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  return (0, import_remix12.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}
async function loader5() {
  return (0, import_remix12.redirect)("/login");
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => Login,
  loader: () => loader6
});
init_react();
var import_bcryptjs2 = __toESM(require("bcryptjs"));
var import_remix13 = __toESM(require_remix());
async function loader6({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  return (0, import_remix13.json)({
    userId: session.get("userId")
  });
}
async function action7({ request }) {
  const db = await connectDb();
  const form = await request.formData();
  const username = form.get("username").trim();
  try {
    const user = await db.models.user.findOne({
      username
    });
    if (!user)
      throw new Error();
    const password = form.get("password").trim();
    const isCorrectPassword = await import_bcryptjs2.default.compare(password, user.password);
    if (!isCorrectPassword)
      throw new error("Wrong password");
    const session = await getSession(request.headers.get("Cookie"));
    session.set("userId", user.id);
    return (0, import_remix13.redirect)("/snippets/all", {
      headers: {
        status: 200,
        "Set-Cookie": await commitSession(session)
      }
    });
  } catch (error2) {
    console.log(error2);
    return (0, import_remix13.json)({ errors: error2.errors, values: Object.fromEntries(form) }, { status: 400 });
  }
}
function Login() {
  const [searchParams] = (0, import_remix13.useSearchParams)();
  const actionData = (0, import_remix13.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw fixed scrollbar-hide"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold mb-2 mr-2"
  }, "Login"), /* @__PURE__ */ React.createElement(import_remix13.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input",
    className: "block text-xl font-semibold"
  }, "Username"), (actionData == null ? void 0 : actionData.errors.username) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.username.message), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "username-input",
    name: "username",
    defaultValue: actionData == null ? void 0 : actionData.values.username,
    className: (actionData == null ? void 0 : actionData.errors.username) ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input",
    className: "block text-xl font-semibold"
  }, "Password"), (actionData == null ? void 0 : actionData.errors.password) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.password.message), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    type: "password",
    defaultValue: actionData == null ? void 0 : actionData.values.password,
    className: (actionData == null ? void 0 : actionData.errors.password) ? "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 bg-blue-600 text-white dark:text-black " : " rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "login",
    className: " dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg mt-3 text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
  }, "Login")), /* @__PURE__ */ React.createElement(import_remix13.Form, {
    className: "mt-5",
    action: "/register",
    reloadDocument: true
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input",
    className: "block text-xl font-semibold"
  }, "Don't have a user yet?"), /* @__PURE__ */ React.createElement("button", {
    className: " dark:hover:bg-gray-600 dark:bg-gray-700 px-7 py-2 rounded-lg text-xl font-semibold bg-blue-800 text-white  hover:bg-blue-600"
  }, "Create user here")));
}

// route:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/routes/seed.jsx
var seed_exports = {};
__export(seed_exports, {
  action: () => action8,
  default: () => Seed,
  loader: () => loader7
});
init_react();
var import_react_router_dom2 = require("react-router-dom");
var import_remix14 = __toESM(require_remix());

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
async function loader7() {
  const db = await connectDb();
  const count = await db.models.Snippet.countDocuments();
  if (count > 0) {
    return (0, import_remix14.redirect)("/snippets/all");
  }
  return null;
}
async function action8({ request }) {
  const form = await request.formData();
  const db = await connectDb();
  const _action = form.get("_action");
  if (_action === "seed") {
    try {
      await db.models.Snippet.insertMany(seed_default);
      return (0, import_remix14.redirect)("/snippets/all");
    } catch (error2) {
      throw error2;
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
  }, "No!!\u{1F621}")), /* @__PURE__ */ React.createElement(import_remix14.Form, {
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
var assets_manifest_default = { "version": "768b1f5a", "entry": { "module": "/build/entry.client-77IPSAHX.js", "imports": ["/build/_shared/chunk-SLPJMDL5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-AI23INRJ.js", "imports": ["/build/_shared/chunk-DEODZGUY.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-VK65XRUU.js", "imports": ["/build/_shared/chunk-CRGNOLNJ.js", "/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-PJPG54ZQ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register-OAFGE2UQ.js", "imports": ["/build/_shared/chunk-CRGNOLNJ.js", "/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/seed": { "id": "routes/seed", "parentId": "root", "path": "seed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/seed-27ARD6HZ.js", "imports": ["/build/_shared/chunk-C5XNW6S6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/snippets/$snippetTag": { "id": "routes/snippets/$snippetTag", "parentId": "root", "path": "snippets/:snippetTag", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag-52DU62JH.js", "imports": ["/build/_shared/chunk-C5XNW6S6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/snippets/$snippetTag/$snippetId": { "id": "routes/snippets/$snippetTag/$snippetId", "parentId": "routes/snippets/$snippetTag", "path": ":snippetId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag/$snippetId-G2NL7JWO.js", "imports": ["/build/_shared/chunk-DEODZGUY.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/snippets/$snippetTag/$snippetId.update": { "id": "routes/snippets/$snippetTag/$snippetId.update", "parentId": "routes/snippets/$snippetTag", "path": ":snippetId/update", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag/$snippetId.update-I56JTSTO.js", "imports": ["/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/snippets/createSnippet": { "id": "routes/snippets/createSnippet", "parentId": "root", "path": "snippets/createSnippet", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/createSnippet-GLXK4TJR.js", "imports": ["/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-768B1F5A.js" };

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
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm9vdC5qc3giLCAiLi4vYXBwL3Nlc3Npb25zLnNlcnZlci5qcyIsICIuLi9hcHAvY29va2llcy5zZXJ2ZXIuanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvU2lkZUJhci5qc3giLCAiLi4vYXBwL3N2Zy9hbGwuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NuaXBwZXRzL2NyZWF0ZVNuaXBwZXQuanN4IiwgIi4uL2FwcC9kYi9jb25uZWN0RGIuc2VydmVyLmpzIiwgIi4uL2FwcC9kYi9tb2RlbHMuanMiLCAicm91dGU6L1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NuaXBwZXRMaXN0SXRlbS5qc3giLCAicm91dGU6L1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGUuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3JlZ2lzdGVyLmpzeCIsICJyb3V0ZTovVXNlcnMvam9uYXRoYW5za292bW9zZS9Eb2N1bWVudHMvR2l0SHViL1BXQS1zbmlwcGV0LXByb2plY3QvYXBwL3JvdXRlcy9sb2dvdXQuanN4IiwgInJvdXRlOi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL2xvZ2luLmpzeCIsICJyb3V0ZTovVXNlcnMvam9uYXRoYW5za292bW9zZS9Eb2N1bWVudHMvR2l0SHViL1BXQS1zbmlwcGV0LXByb2plY3QvYXBwL3JvdXRlcy9zZWVkLmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvam9uYXRoYW5za292bW9zZS9Eb2N1bWVudHMvR2l0SHViL1BXQS1zbmlwcGV0LXByb2plY3QvYXBwL3Jvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NuaXBwZXRzL2NyZWF0ZVNuaXBwZXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvam9uYXRoYW5za292bW9zZS9Eb2N1bWVudHMvR2l0SHViL1BXQS1zbmlwcGV0LXByb2plY3QvYXBwL3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkLnVwZGF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvcmVnaXN0ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL2xvZ291dC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL2pvbmF0aGFuc2tvdm1vc2UvRG9jdW1lbnRzL0dpdEh1Yi9QV0Etc25pcHBldC1wcm9qZWN0L2FwcC9yb3V0ZXMvbG9naW4uanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy9qb25hdGhhbnNrb3Ztb3NlL0RvY3VtZW50cy9HaXRIdWIvUFdBLXNuaXBwZXQtcHJvamVjdC9hcHAvcm91dGVzL3NlZWQuanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNuaXBwZXRzL2NyZWF0ZVNuaXBwZXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzbmlwcGV0cy86c25pcHBldFRhZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWdcIixcbiAgICAgIHBhdGg6IFwiOnNuaXBwZXRJZC91cGRhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZ1wiLFxuICAgICAgcGF0aDogXCI6c25pcHBldElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9yZWdpc3RlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVnaXN0ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVnaXN0ZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9zZWVkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZWVkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlZWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3RhaWx3aW5kLmNzc1wiXG5pbXBvcnQgaGlnaFN0eWxlcyBmcm9tIFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzc1wiXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIi4vc2Vzc2lvbnMuc2VydmVyXCJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEsIGpzb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiXG5cbmltcG9ydCBTaWRlQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZUJhclwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyByZXF1ZXN0IH0pIHtcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcbiAgLy8gcmV0dXJuIGpzb24oe1xuICAvLyAgIHVzZXJJZDogc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIiksXG4gIC8vIH0pXG4gIHJldHVybiBcInJcIlxufVxuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG4gIHtcbiAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIGhyZWY6IHN0eWxlcyxcbiAgfSxcbiAge1xuICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgaHJlZjogaGlnaFN0eWxlcyxcbiAgfSxcbiAge1xuICAgIHJlbDogXCJhcHBsZS10b3VjaC1pY29uXCIsXG4gICAgc2l6ZXM6IFwiNzZ4NzZcIixcbiAgICBocmVmOiBcIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiLFxuICB9LFxuICB7XG4gICAgcmVsOiBcImljb25cIixcbiAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIHNpemVzOiBcIjMyeDMyXCIsXG4gICAgaHJlZjogXCIvZmF2aWNvbi0zMngzMi5wbmdcIixcbiAgfSxcbiAge1xuICAgIHJlbDogXCJpY29uXCIsXG4gICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICBzaXplczogXCIxNngxNlwiLFxuICAgIGhyZWY6IFwiL2Zhdmljb24tMTZ4MTYucG5nXCIsXG4gIH0sXG4gIHtcbiAgICByZWw6IFwibWFuaWZlc3RcIixcbiAgICBocmVmOiBcIi9zaXRlLndlYm1hbmlmZXN0XCIsXG4gIH0sXG4gIHtcbiAgICByZWw6IFwibWFzay1pY29uXCIsXG4gICAgY29sb3I6IFwiIzc0MjkxNFwiLFxuICAgIGhyZWY6IFwiL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiLFxuICB9LFxuICB7XG4gICAgcmVsOiBcImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIsXG4gICAgY29udGVudDogXCJTbmlwcGllXCIsXG4gIH0sXG4gIHtcbiAgICByZWw6IFwiYXBwbGljYXRpb24tbmFtZVwiLFxuICAgIGNvbnRlbnQ6IFwiU25pcHBpZVwiLFxuICB9LFxuICB7XG4gICAgcmVsOiBcIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIsXG4gICAgY29udGVudDogXCIjNzQyOTE0XCIsXG4gIH0sXG4gIHtcbiAgICByZWw6IFwidGhlbWUtY29sb3JcIixcbiAgICBjb250ZW50OiBcIiNmZmZmZmZcIixcbiAgfSxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7XG4gICAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICAgIHRpdGxlOiBcIlJlbWl4IHNuaXBwZXRzIGFwcFwiLFxuICAgIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VMb2FkZXJEYXRhKClcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImRhcms6YmctZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2Fuc1wiPlxuICAgICAgICA8U2lkZUJhciBzZXNzaW9uPXtzZXNzaW9ufSAvPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtZDptbC0yMC12dyBtZDpweS04XCI+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiLy8gYXBwL3Nlc3Npb25zLmpzXG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgc2Vzc2lvbkNvb2tpZSB9IGZyb20gXCIuL2Nvb2tpZXMuc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCB7IGdldFNlc3Npb24sIGNvbW1pdFNlc3Npb24sIGRlc3Ryb3lTZXNzaW9uIH0gPVxuICBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7IGNvb2tpZTogc2Vzc2lvbkNvb2tpZSB9KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VyU2Vzc2lvbihyZXF1ZXN0KSB7XG4gIC8vIGdldCB0aGUgc2Vzc2lvblxuICBjb25zdCBjb29raWUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiY29va2llXCIpO1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb29raWUpO1xuXG4gIC8vIHZhbGlkYXRlIHRoZSBzZXNzaW9uLCBgdXNlcklkYCBpcyBqdXN0IGFuIGV4YW1wbGUsIHVzZSB3aGF0ZXZlciB2YWx1ZSB5b3VcbiAgLy8gcHV0IGluIHRoZSBzZXNzaW9uIHdoZW4gdGhlIHVzZXIgYXV0aGVudGljYXRlZFxuICBpZiAoIXNlc3Npb24uaGFzKFwidXNlcklkXCIpKSB7XG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBzZXNzaW9uLCByZWRpcmVjdCB0byBsb2dpblxuICAgIHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlc3Npb247XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uQ29va2llID0gY3JlYXRlQ29va2llKFwiX19zZXNzaW9uXCIsIHtcbiAgaHR0cE9ubHk6IHRydWUsXG4gIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNyxcbiAgc2VjdXJlOiB0cnVlLFxuICBzZWNyZXRzOiBbcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVF0sXG59KTtcbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIlxuaW1wb3J0IHsgTW9vbkljb24sIFN1bkljb24gfSBmcm9tIFwifi9zdmcvYWxsXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKHsgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbaXNPbkxpbmUsIHNldElzT25MaW5lXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKClcblxuICBmdW5jdGlvbiB0b2dnbGVNb2RlKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKVxuICAgIGRhcmtNb2RlID09PSB0cnVlID8gc2V0RGFya01vZGUoZmFsc2UpIDogc2V0RGFya01vZGUodHJ1ZSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICB9XG4gICAgaWYgKG5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgIHNldElzT25MaW5lKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzT25MaW5lKGZhbHNlKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uKVxuICAgIGlmIChzZXNzaW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldExvZ2dlZEluKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldExvZ2dlZEluKGZhbHNlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGVcbiAgICAgIGNsYXNzTmFtZT1cIiBoLTIwIG1kOm15LTggbWQ6Zml4ZWQgbWQ6aC1mdWxsIG1kOnctMjAtdncgYm9yZGVyLXIgZGFyazpib3JkZXItZ3JheS03MDAgcHgtMyBcIlxuICAgICAgYXJpYS1sYWJlbD1cInNpZGViYXJcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG92ZXJmbG93LXktaGlkZGVuIHB5LTQgcm91bmRlZCBtYi1hdXRvIGZsZXggbWQ6YmxvY2tcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci0zXCIgb25DbGljaz17dG9nZ2xlTW9kZX0+XG4gICAgICAgICAgeyFkYXJrTW9kZSA/IDxNb29uSWNvbiAvPiA6IDxTdW5JY29uIC8+fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIiBmbGV4IG92ZXJmbG93LXgtc2Nyb2xsIHNjcm9sbGJhci1oaWRlIGdhcC0zIG1kOmJsb2NrIG1kOnNwYWNlLXktMiBcIj5cbiAgICAgICAgICB7aXNPbkxpbmUgPyAoXG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvY3JlYXRlU25pcHBldFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBtaW4tdy0xNTAtcHggIGZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JlZW4tNjAwIGJnLWdyZWVuLTgwMCBkYXJrOmJnLWdyZWVuLTgwMCB0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JlZW4tNzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5DcmVhdGUgc25pcHBldDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL2FsbFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgbWluLXctMTUwLXB4IGZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZDptbC0zXCI+QWxsIHNuaXBwZXRzPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvSmF2YVNjcmlwdFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0xNTAtcHggZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5KYXZhU2NyaXB0IHNuaXBwZXRzPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvUEhQXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi13LTE1MC1weCBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIGRhcms6YmctZ3JheS04MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPlBIUCBzbmlwcGV0czwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL0NTU1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0xNTAtcHggZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5DU1Mgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9zbmlwcGV0cy9IVE1MXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi13LTE1MC1weCBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIGRhcms6YmctZ3JheS04MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPkhUTUwgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIHshbG9nZ2VkSW4gPyAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvbG9naW5cbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0xNTAtcHggZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZDptbC0zXCI+TG9naW48L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89XCIvbG9nb3V0XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLXctMTUwLXB4IGZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPkxvZ291dDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBNb29uSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGhvdmVyOmFuaW1hdGUtcHVsc2UgXCJcbiAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD1cIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvcHlJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgZD1cIk04IDVINmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJ2LTFNOCA1YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJNOCA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJtMCAwaDJhMiAyIDAgMDEyIDJ2M20yIDRIMTBtMCAwbDMtM20tMyAzbDMgM1wiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGx1c0ljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgZD1cIk0xMiA2djZtMCAwdjZtMC02aDZtLTYgMEg2XCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Rhckljb24oeyBmaWxsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IHN0cm9rZS15ZWxsb3ctNTAwICBcIlxuICAgICAgZmlsbD17ZmlsbCA/IFwiI2VhYjMwOFwiIDogXCJub25lXCJ9XG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgIGQ9XCJNMTEuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuNTE5IDQuNjc0YTEgMSAwIDAwLjk1LjY5aDQuOTE1Yy45NjkgMCAxLjM3MSAxLjI0LjU4OCAxLjgxbC0zLjk3NiAyLjg4OGExIDEgMCAwMC0uMzYzIDEuMTE4bDEuNTE4IDQuNjc0Yy4zLjkyMi0uNzU1IDEuNjg4LTEuNTM4IDEuMTE4bC0zLjk3Ni0yLjg4OGExIDEgMCAwMC0xLjE3NiAwbC0zLjk3NiAyLjg4OGMtLjc4My41Ny0xLjgzOC0uMTk3LTEuNTM4LTEuMTE4bDEuNTE4LTQuNjc0YTEgMSAwIDAwLS4zNjMtMS4xMThsLTMuOTc2LTIuODg4Yy0uNzg0LS41Ny0uMzgtMS44MS41ODgtMS44MWg0LjkxNGExIDEgMCAwMC45NTEtLjY5bDEuNTE5LTQuNjc0elwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3VuSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGhvdmVyOmFuaW1hdGUtcHVsc2VcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICBkPVwiTTEyIDN2MW0wIDE2djFtOS05aC0xTTQgMTJIM20xNS4zNjQgNi4zNjRsLS43MDctLjcwN002LjM0MyA2LjM0M2wtLjcwNy0uNzA3bTEyLjcyOCAwbC0uNzA3LjcwN002LjM0MyAxNy42NTdsLS43MDcuNzA3TTE2IDEyYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgY29ubmVjdERiIGZyb20gXCJ+L2RiL2Nvbm5lY3REYi5zZXJ2ZXJcIlxuaW1wb3J0IHsgRm9ybSwganNvbiwgcmVkaXJlY3QsIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwicmVtaXhcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgY29uc3QgdGl0bGUgPSBmb3JtLmdldChcInRpdGxlXCIpXG4gIGNvbnN0IGxhbmd1YWdlVGFnID0gZm9ybS5nZXQoXCJsYW5ndWFnZVRhZ1wiKVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm0uZ2V0KFwiZGVzY3JpcHRpb25cIilcbiAgY29uc3Qgc25pcHBldCA9IGZvcm0uZ2V0KFwic25pcHBldFwiKVxuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdTbmlwcGV0ID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuY3JlYXRlKHtcbiAgICAgIHRpdGxlLFxuICAgICAgbGFuZ3VhZ2VUYWcsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHNuaXBwZXQsXG4gICAgfSlcbiAgICByZXR1cm4gcmVkaXJlY3QoYC9zbmlwcGV0cy9zbmlwcGV0LyR7bmV3U25pcHBldC5faWR9YClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ganNvbihcbiAgICAgIHsgZXJyb3JzOiBlcnJvci5lcnJvcnMsIHZhbHVlczogT2JqZWN0LmZyb21FbnRyaWVzKGZvcm0pIH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlU25pcHBldCgpIHtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgIG92ZXJmbG93LXktc2Nyb2xsIGgtOTYgbWQ6aC1mdWxsIHctZnVsbCBweC00IG1kOnctNTAtdncgZml4ZWQgc2Nyb2xsYmFyLWhpZGUgXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTIgIG1yLTJcIj5DcmVhdGUgc25pcHBldDwvaDE+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBUaXRsZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnRpdGxlICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57YWN0aW9uRGF0YT8uZXJyb3JzLnRpdGxlLm1lc3NhZ2V9PC9wPlxuICAgICAgICApfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS52YWx1ZX1cbiAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLnRpdGxlXG4gICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICAgXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgaHRtbEZvcj1cImxhbmd1YWdlVGFnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgID5cbiAgICAgICAgICBMYW5ndWFnZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImxhbmd1YWdlVGFnXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkphdmFTY3JpcHRcIj5KYXZhU2NyaXB0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlR5cGVTY3JpcHRcIj5UeXBlU2NyaXB0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBIUFwiPlBIUDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDU1NcIj5DU1M8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSFRNTFwiPkhUTUw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiamF2YVwiPkphdmE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicnVieVwiPlJ1Ynk8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFza2VsXCI+SGFza2VsPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvZmZlZXNjcmlwdFwiPkNvZmZlZVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoYXNrZWxsXCI+SGFza2VsbDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrb3RsaW5cIj5Lb3RsaW48L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFydFwiPkRhcnQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibHVhXCI+THVhPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdvXCI+R288L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hlbGxcIj5TaGVsbDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzcWxcIj5TUUw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVybFwiPlBlcmw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3dpZnRcIj5Td2lmdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjc1wiPkMjPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImMrK1wiPkMrKzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJweXRob25cIj5QeXRob248L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uLm1lc3NhZ2V9XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDBweFwiLCB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uLnZhbHVlfVxuICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgPyBcImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrIFwiXG4gICAgICAgICAgICAgIDogXCIgcm91bmRlZC1sZyAgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic25pcHBldFwiIGNsYXNzTmFtZT1cImJsb2NrIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgU25pcHBldFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnNuaXBwZXQgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPnthY3Rpb25EYXRhPy5lcnJvcnMuc25pcHBldC5tZXNzYWdlfTwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInNuaXBwZXRcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uLnZhbHVlfVxuICAgICAgICAgIGlkPVwic25pcHBldFwiXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjIwMHB4XCIsIHdpZHRoOiBcIjY2JVwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGRhcms6YmctZ3JheS03MDAgcmVzaXplLW5vbmUgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgXCJcbiAgICAgICAgICAgICAgOiBcIiByb3VuZGVkLWxnICBweC0yIGRhcms6YmctZ3JheS03MDAgcmVzaXplLW5vbmUgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSAgXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpiZy1ncmF5LTcwMCBweC03IHB5LTIgcm91bmRlZC1sZyBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlICBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBTYXZlIHNuaXBwZXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBtb2RlbHMgfSBmcm9tIFwiLi9tb2RlbHMuanNcIjtcblxuY29uc3QgeyBNT05HT0RCX1VSTCwgTk9ERV9FTlYgfSA9IHByb2Nlc3MuZW52O1xuXG5pZiAoIU1PTkdPREJfVVJMKSB7XG4gIGlmIChOT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJMIGVudmlyb25tZW50IHZhcmlhYmxlIFx1MjAxNCBwb2ludGluZyB0byB5b3VyIGZ1bGwgY29ubmVjdGlvbiBzdHJpbmcsIGluY2x1ZGluZyBkYXRhYmFzZSBuYW1lLlwiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJMIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSBhbiAuZW52IGZpbGUgXHUyMDE0IHBvaW50aW5nIHRvIHlvdXIgZnVsbCBjb25uZWN0aW9uIHN0cmluZywgaW5jbHVkaW5nIGRhdGFiYXNlIG5hbWUuXCJcbiAgICApO1xuICB9XG59XG5cbi8vIFdlIHJldXNlIGFueSBleGlzdGluZyBNb25nb29zZSBkYiBjb25uZWN0aW9uIHRvIGF2b2lkIGNyZWF0aW5nIG11bHRpcGxlXG4vLyBjb25uZWN0aW9ucyBpbiBkZXYgbW9kZSB3aGVuIFJlbWl4IFwicHVyZ2VzIHRoZSByZXF1aXJlIGNhY2hlXCIgd2hlbiByZWxvYWRpbmdcbi8vIG9uIGZpbGUgY2hhbmdlcy5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYigpIHtcbiAgLy8gUmV1c2UgdGhlIGV4aXN0aW5nIE1vbmdvb3NlIGNvbm5lY3Rpb24gaWYgd2UgaGF2ZSBvbmUuLi5cbiAgLy8gaHR0cHM6Ly9tb25nb29zZWpzLmNvbS9kb2NzL2FwaS9jb25uZWN0aW9uLmh0bWwjY29ubmVjdGlvbl9Db25uZWN0aW9uLXJlYWR5U3RhdGVcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA+IDApIHtcbiAgICAvLyAuLi5idXQgb3ZlcndyaXRlIGFsbCBtb2RlbHMgaW4gZGV2ZWxvcG1lbnQgdG8gZW5zdXJlIHdlIHBpY2sgdXAgYW55IGNoYW5nZXMgbWFkZSBpbiBzY2hlbWFzXG4gICAgaWYgKE5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24uZGVsZXRlTW9kZWwobW9kZWwubmFtZSk7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ubW9kZWwobW9kZWwubmFtZSwgbW9kZWwuc2NoZW1hLCBtb2RlbC5jb2xsZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgfVxuXG4gIC8vIElmIG5vIGNvbm5lY3Rpb24gZXhpc3RzIHlldCwgc2V0IHVwIGV2ZW50IGxvZ2dpbmcuLi5cbiAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImNvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJNb25nb29zZSBjb25uZWN0ZWQsIE5PREVfRU5WPSVzXCIsIE5PREVfRU5WKTtcbiAgfSk7XG5cbiAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImRpc2Nvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJNb25nb29zZSBESVNDT05ORUNURUQsIE5PREVfRU5WPSVzXCIsIE5PREVfRU5WKTtcbiAgfSk7XG5cbiAgLy8gLi4uYW5kIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uOlxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJMLCB7XG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgfSk7XG5cbiAgLy8gXCJNb2RlbHMgYXJlIGFsd2F5cyBzY29wZWQgdG8gYSBzaW5nbGUgY29ubmVjdGlvbi5cIlxuICAvLyBodHRwczovL21vbmdvb3NlanMuY29tL2RvY3MvY29ubmVjdGlvbnMuaHRtbCNtdWx0aXBsZV9jb25uZWN0aW9uc1xuICAvLyBTbyB3ZSBzZXQgdGhlbSB1cCBoZXJlIHRvIGF2b2lkIG92ZXJ3cml0aW5nIGFuZCBnZXR0aW5nIGVycm9ycyBpbiBkZXYgbW9kZS5cbiAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcbiAgICBtb25nb29zZS5jb25uZWN0aW9uLm1vZGVsKG1vZGVsLm5hbWUsIG1vZGVsLnNjaGVtYSwgbW9kZWwuY29sbGVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbjtcbn1cbiIsICJpbXBvcnQgeyBtb25nb29zZSB9IGZyb20gXCJtb25nb29zZVwiXG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZVxuXG5jb25zdCBzbmlwcGV0U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHRpdGxlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1pbkxlbmd0aDogWzUsIFwiVG9vIHNob3J0LCBtaW5pbXVtIDUgY2hhcmFjdGVyc1wiXSxcbiAgfSxcbiAgbGFuZ3VhZ2VUYWc6IFN0cmluZyxcbiAgc25pcHBldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiTWlzc2luZyBzbmlwcGV0XCJdLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiTWlzc2luZyBkZXNjcmlwdGlvblwiXSxcbiAgfSxcbiAgZmF2b3JpdGU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBkYXRlQWRkZWQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxuICBsYXN0TW9kaWZpZWQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICB9LFxufSlcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiR290dGEgaGF2ZSBhIHVzZXJuYW1lXCJdLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiR290dGEgaGF2ZSBhIHBhc3N3b3JkXCJdLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IG1vZGVscyA9IFtcbiAge1xuICAgIG5hbWU6IFwiU25pcHBldFwiLFxuICAgIHNjaGVtYTogc25pcHBldFNjaGVtYSxcbiAgICBjb2xsZWN0aW9uOiBcInNuaXBwZXRzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInVzZXJcIixcbiAgICBzY2hlbWE6IHVzZXJTY2hlbWEsXG4gICAgY29sbGVjdGlvbjogXCJ1c2Vyc1wiLFxuICB9LFxuXVxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCJcbmltcG9ydCBTbmlwcGV0TGlzdEl0ZW0gZnJvbSBcIn4vY29tcG9uZW50cy9TbmlwcGV0TGlzdEl0ZW1cIlxuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyLmpzXCJcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwifi9zdmcvYWxsXCJcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyBwYXJhbXMgfSkge1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG5cbiAgaWYgKHBhcmFtcy5zbmlwcGV0VGFnID09PSBcImFsbFwiKSB7XG4gICAgcmV0dXJuIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKVxuICB9XG5cbiAgcmV0dXJuIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoeyBsYW5ndWFnZVRhZzogcGFyYW1zLnNuaXBwZXRUYWcgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QsIHBhcmFtcyB9KSB7XG4gIGNvbnN0IGxhbmd1YWdlID0gU3RyaW5nKHBhcmFtcy5zbmlwcGV0VGFnKVxuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG4gIGNvbnN0IF9hY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIilcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKVxuICBzd2l0Y2ggKF9hY3Rpb24pIHtcbiAgICBjYXNlIFwic2VhcmNoXCI6XG4gICAgICBjb25zdCBxdWVyeSA9IGZvcm0uZ2V0KFwic2VhcmNoUXVlcnlcIilcbiAgICAgIGNvbnN0IHNlYXJjaFNuaXBwZXRzID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCh7XG4gICAgICAgIHRpdGxlOiB7ICRyZWdleDogbmV3IFJlZ0V4cChxdWVyeSwgXCJpXCIpIH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gc2VhcmNoU25pcHBldHNcblxuICAgIGNhc2UgXCJzb3J0XCI6XG4gICAgICBjb25zdCBzb3J0TWV0aG9kID0gZm9ybS5nZXQoXCJzb3J0TWV0aG9kXCIpXG4gICAgICBsZXQgc25pcHBldHMgPSBbXVxuXG4gICAgICBpZiAoc29ydE1ldGhvZCA9PT0gXCJ1cGRhdGVkXCIpIHtcbiAgICAgICAgaWYgKCEobGFuZ3VhZ2UgPT09IFwiYWxsXCIpKSB7XG4gICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgICAgIGxhbmd1YWdlVGFnOiBsYW5ndWFnZSxcbiAgICAgICAgICB9KS5zb3J0KHtcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZDogMSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNuaXBwZXRzID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCgpLnNvcnQoe1xuICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiAxLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc29ydE1ldGhvZCA9PT0gXCJhZGRlZFwiKSB7XG4gICAgICAgIGlmICghKGxhbmd1YWdlID09PSBcImFsbFwiKSkge1xuICAgICAgICAgIHNuaXBwZXRzID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCh7XG4gICAgICAgICAgICBsYW5ndWFnZVRhZzogbGFuZ3VhZ2UsXG4gICAgICAgICAgfSkuc29ydCh7XG4gICAgICAgICAgICBkYXRlQWRkZWQ6IDEsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKS5zb3J0KHtcbiAgICAgICAgICAgIGRhdGVBZGRlZDogMSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNvcnRNZXRob2QgPT09IFwidGl0bGVcIikge1xuICAgICAgICBpZiAoIShsYW5ndWFnZSA9PT0gXCJhbGxcIikpIHtcbiAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoe1xuICAgICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlLFxuICAgICAgICAgIH0pLnNvcnQoe1xuICAgICAgICAgICAgdGl0bGU6IDEsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKS5zb3J0KHtcbiAgICAgICAgICAgIHRpdGxlOiAxLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc29ydE1ldGhvZCA9PT0gXCJmYXZvcml0ZXNcIikge1xuICAgICAgICBpZiAoIShsYW5ndWFnZSA9PT0gXCJhbGxcIikpIHtcbiAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoe1xuICAgICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlLFxuICAgICAgICAgICAgZmF2b3JpdGU6IDEsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoeyBmYXZvcml0ZTogMSB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzbmlwcGV0c1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBzbmlwcGV0cyA9IHVzZUxvYWRlckRhdGEoKVxuICBjb25zdCBhY3Rpb25TbmlwcGV0cyA9IHVzZUFjdGlvbkRhdGEoKVxuICBjb25zdCBsYW5ndWFnZVRhZyA9IHVzZVBhcmFtcygpLnNuaXBwZXRUYWdcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLTQ0IHctZnVsbCBweC0zIG1kOnctMzAtdncgbGc6dy0yNS12dyBtZDpoLWZ1bGwgZml4ZWQgbWQ6Ym9yZGVyLXIgYm9yZGVyLWItc2xhdGUtNDAwIG1kOmRhcms6Ym9yZGVyLWdyYXktNzAwIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOiBib3JkZXItYiBtZDpkYXJrOmJvcmRlci1ncmF5LTcwMCBtYi00IHBiLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntsYW5ndWFnZVRhZ30gU25pcHBldHM8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggbXktMlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgcHgtMSBib3JkZXItYi1zbGF0ZS00MDAgZGFyazpib3JkZXItbm9uZSBkYXJrOnRleHQtZ3JheS04MDAgbXItMlwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFF1ZXJ5XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggc25pcHBldHMuLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzb3J0TWV0aG9kXCIgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LWdyYXktODAwIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVwZGF0ZWRcIj5MYXN0IHVwZGF0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhdm9yaXRlc1wiPkZhdm9yaXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRkZWRcIj5EYXRlIGFkZGVkPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cInNvcnRcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBweC0zIHJvdW5kZWQtbGcgcHktMSBiZy1ibHVlLTgwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTb3J0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtNDQgdy1mdWxsIG10LTIgbWQ6bXQtMiBtZDpoLTQvNSBvdmVyZmxvdy1zY3JvbGwgc2Nyb2xsYmFyLWhpZGUgbWQ6cGItMTBcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiIGxpc3Qtbm9uZSBnYXAtMSBmbGV4IGZsZXgtc2hyaW5rLTAgZmxleC1ub3dyYXAgIG1kOmZsZXgtY29sIFwiPlxuICAgICAgICAgICAge2FjdGlvblNuaXBwZXRzXG4gICAgICAgICAgICAgID8gYWN0aW9uU25pcHBldHMubWFwKChzbmlwcGV0KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U25pcHBldExpc3RJdGVtIGtleT17c25pcHBldC5faWR9IHNuaXBwZXQ9e3NuaXBwZXR9IC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgOiBzbmlwcGV0cy5tYXAoKHNuaXBwZXQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxTbmlwcGV0TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtzbmlwcGV0Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgc25pcHBldD17c25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc9e2xhbmd1YWdlVGFnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIHshYWN0aW9uU25pcHBldHMgJiYgc25pcHBldHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8aDI+Tm8gc25pcHBldHMgZm91bmQ8L2gyPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTcyIG1kOm1sLTMgbWQ6bXQtMCBmaXhlZCBvdmVyZmxvdy15LXNjcm9sbFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZvbnQtYm9sZFwiPlxuICAgICAge2Vycm9yLm5hbWV9OiB7ZXJyb3IubWVzc2FnZX1cbiAgICA8L2gxPlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gXCJ+L3N2Zy9hbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU25pcHBldExpc3RJdGVtKHsgc25pcHBldCwgbGFuZ3VhZ2VUYWcgfSkge1xuICBjb25zdCBkYXRlQWRkZWQgPSBuZXcgRGF0ZShzbmlwcGV0LmRhdGVBZGRlZCk7XG4gIGNvbnN0IGRpc3BsYXlEYXRlID0gYCR7ZGF0ZUFkZGVkLmdldERhdGUoKX0tJHtkYXRlQWRkZWQuZ2V0TW9udGgoKX0tJHtkYXRlQWRkZWQuZ2V0RnVsbFllYXIoKX1gO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCIgbWluLXctMjAwLXB4IG1kOnctZnVsbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIHAtMyBtYi0xIFwiPlxuICAgICAgPExpbmsgdG89e2Avc25pcHBldHMvJHtsYW5ndWFnZVRhZ30vJHtzbmlwcGV0Ll9pZH1gfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPntzbmlwcGV0LnRpdGxlfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlICBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICB7c25pcHBldC5kZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgMzApfSAuLi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTFcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS0zMDBcIj57ZGlzcGxheURhdGV9PC9wPlxuICAgICAgICAgIDxTdGFySWNvbiBmaWxsPXtzbmlwcGV0LmZhdm9yaXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApO1xufVxuIiwgImltcG9ydCBjb25uZWN0RGIgZnJvbSBcIn4vZGIvY29ubmVjdERiLnNlcnZlclwiXG5pbXBvcnQgeyBGb3JtLCBqc29uLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyBwYXJhbXMgfSkge1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG4gIGNvbnN0IHNuaXBwZXQgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kQnlJZChwYXJhbXMuc25pcHBldElkKVxuICBpZiAoIXNuaXBwZXQpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoYENvdWxkbid0IGZpbmQgYm9vayB3aXRoIGlkICR7cGFyYW1zLnNuaXBwZXRJZH1gLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KVxuICB9XG4gIHJldHVybiBqc29uKHNuaXBwZXQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICBjb25zdCB0aXRsZSA9IGZvcm0uZ2V0KFwidGl0bGVcIilcbiAgY29uc3QgbGFuZ3VhZ2VUYWcgPSBmb3JtLmdldChcImxhbmd1YWdlVGFnXCIpXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICBjb25zdCBzbmlwcGV0ID0gZm9ybS5nZXQoXCJzbmlwcGV0XCIpXG4gIGNvbnN0IHNuaXBwZXRJZCA9IGZvcm0uZ2V0KFwic25pcHBldElkXCIpXG4gIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKClcblxuICB0cnkge1xuICAgIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7IF9pZDogc25pcHBldElkIH0sXG4gICAgICB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlVGFnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICBzbmlwcGV0OiBzbmlwcGV0LFxuICAgICAgICB9LFxuICAgICAgICAkY3VycmVudERhdGU6IHsgbGFzdE1vZGlmaWVkOiB0cnVlIH0sXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvc25pcHBldHMvc25pcHBldC8ke3NuaXBwZXRJZH1gKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBqc29uKFxuICAgICAgeyBlcnJvcnM6IGVycm9yLmVycm9ycywgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSkgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVTbmlwcGV0KCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpXG5cbiAgY29uc3Qgc25pcHBldFRvVXBkYXRlID0gdXNlTG9hZGVyRGF0YSgpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIG1kOnctNTAtdncgbGc6bWwtMjUtdncgbWQ6bWwtMzAtdncgbWQ6cHItMTAgaC05NiBtZDpoLWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGwgcHgtNCBtZDpwLTAgZml4ZWQgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMiAgbXItMlwiPlVwZGF0ZSBzbmlwcGV0PC9oMT5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFRpdGxlXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMudGl0bGUgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPnthY3Rpb25EYXRhPy5lcnJvcnMudGl0bGUubWVzc2FnZX08L3A+XG4gICAgICAgICl9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLnRpdGxlfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjY2JVwiIH19XG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy50aXRsZVxuICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrIGRhcms6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgcHgtMiBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICAgZGFyazpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJsYW5ndWFnZVRhZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgTGFuZ3VhZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLmxhbmd1YWdlVGFnfVxuICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVRhZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgICBkYXJrOmJnLWdyYXktNzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUeXBlU2NyaXB0XCI+VHlwZVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQSFBcIj5QSFA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NTXCI+Q1NTPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhUTUxcIj5IVE1MPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImphdmFcIj5KYXZhPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1YnlcIj5SdWJ5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhhc2tlbFwiPkhhc2tlbDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb2ZmZWVzY3JpcHRcIj5Db2ZmZWVTY3JpcHQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFza2VsbFwiPkhhc2tlbGw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia290bGluXCI+S290bGluPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcnRcIj5EYXJ0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImx1YVwiPkx1YTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnb1wiPkdvPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNoZWxsXCI+U2hlbGw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3FsXCI+U1FMPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcmxcIj5QZXJsPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN3aWZ0XCI+U3dpZnQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3NcIj5DIzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjKytcIj5DKys8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHl0aG9uXCI+UHl0aG9uPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgPlxuICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwcHhcIiwgd2lkdGg6IFwiNjYlXCIgfX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NuaXBwZXRUb1VwZGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICBcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAge2FjdGlvbkRhdGE/LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24ubWVzc2FnZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzbmlwcGV0XCIgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBTbmlwcGV0XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInNuaXBwZXRcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLnNuaXBwZXR9XG4gICAgICAgICAgaWQ9XCJzbmlwcGV0XCJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiNjYlXCIgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICB7YWN0aW9uRGF0YT8uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNuaXBwZXRJZFwiIHZhbHVlPXtzbmlwcGV0VG9VcGRhdGUuX2lkfSAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpiZy1ncmF5LTcwMCBweC03IHB5LTIgcm91bmRlZC1sZyBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlICBcIlxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZSBzbmlwcGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VDYXRjaCxcbiAganNvbixcbiAgRm9ybSxcbiAgcmVkaXJlY3QsXG4gIHVzZVBhcmFtcyxcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgY29ubmVjdERiIGZyb20gXCJ+L2RiL2Nvbm5lY3REYi5zZXJ2ZXIuanNcIjtcbmltcG9ydCB7IFN0YXJJY29uLCBDb3B5SWNvbiB9IGZyb20gXCJ+L3N2Zy9hbGxcIjtcblxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tIFwicmVhY3QtaGlnaGxpZ2h0XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKCk7XG4gIGNvbnN0IHNuaXBwZXQgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kQnlJZChwYXJhbXMuc25pcHBldElkKTtcbiAgaWYgKCFzbmlwcGV0KSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKGBDb3VsZG4ndCBmaW5kIHNuaXBwZXRzIHdpdGggaWQgJHtwYXJhbXMuc25pcHBldElkfWAsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBqc29uKHNuaXBwZXQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IF9hY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XG4gIGNvbnN0IHNuaXBwZXRJZCA9IGZvcm0uZ2V0KFwic25pcHBldElkXCIpO1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpO1xuXG4gIHN3aXRjaCAoX2FjdGlvbikge1xuICAgIGNhc2UgXCJmYXZvcml0ZVRvZ2dsZVwiOlxuICAgICAgY29uc3QgaXNGYXZvcnRpZSA9IGZvcm0uZ2V0KFwiaXNGYXZvcml0ZVwiKTtcbiAgICAgIGlmIChpc0Zhdm9ydGllID09PSBcInRydWVcIikge1xuICAgICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC51cGRhdGVPbmUoXG4gICAgICAgICAgeyBfaWQ6IHNuaXBwZXRJZCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICRzZXQ6IHsgZmF2b3JpdGU6IGZhbHNlIH0sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGlzRmF2b3J0aWUgPT09IFwiZmFsc2VcIikge1xuICAgICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC51cGRhdGVPbmUoXG4gICAgICAgICAgeyBfaWQ6IHNuaXBwZXRJZCB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICRzZXQ6IHsgZmF2b3JpdGU6IHRydWUgfSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZGVsZXRlT25lKHsgX2lkOiBzbmlwcGV0SWQgfSk7XG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvc25pcHBldHMvc25pcHBldFwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rUGFnZSgpIHtcbiAgY29uc3Qgc25pcHBldCA9IHVzZUxvYWRlckRhdGEoKTtcbiAgY29uc3QgZGF0ZUFkZGVkID0gbmV3IERhdGUoc25pcHBldC5kYXRlQWRkZWQpO1xuICBjb25zdCBkaXNwbGF5RGF0ZSA9IGAke2RhdGVBZGRlZC5nZXREYXRlKCl9LSR7ZGF0ZUFkZGVkLmdldE1vbnRoKCl9LSR7ZGF0ZUFkZGVkLmdldEZ1bGxZZWFyKCl9YDtcbiAgY29uc3QgW2NvcHlTdGF0ZSwgc2V0Q29weVN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbGFuZ3VhZ2VUYWcgPSB1c2VQYXJhbXMoKS5zbmlwcGV0VGFnO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29weVN0YXRlKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTUwLXZ3IGxnOm1sLTI1LXZ3IG1kOm1sLTMwLXZ3IG1kOnByLTEwICBmaXhlZCBvdmVyZmxvdy15LXNjcm9sbCBoLTQvNSBtZDpoLWZ1bGwgbWQ6cGItMTAgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkICB3LWZ1bGxcIj57c25pcHBldC50aXRsZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtYi0xIGZsZXggZ2FwLTUgZGFyazp0ZXh0LWdyYXktNTAwIHctZnVsbFwiPlxuICAgICAgICAgIDxoMz5EYXRlOiB7ZGlzcGxheURhdGV9PC9oMz5cbiAgICAgICAgICA8aDM+TGFuZ3VhZ2U6IHtzbmlwcGV0Lmxhbmd1YWdlVGFnfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIGgtZml0IGJnLWJsdWUtODAwIGhvdmVyOmJnLWJsdWUtNjAwIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCByb3VuZGVkLWxnIHB4LTIgcHktMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzbmlwcGV0SWRcIiB2YWx1ZT17c25pcHBldC5faWR9IC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2FjdGlvblwiIHZhbHVlPVwiZmF2b3JpdGVUb2dnbGVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlzRmF2b3JpdGVcIiB2YWx1ZT17c25pcHBldC5mYXZvcml0ZX0gLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxTdGFySWNvbiBmaWxsPXtzbmlwcGV0LmZhdm9yaXRlfSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIHRleHQtd2hpdGUgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIG1sLTQgcm91bmRlZC1sZyBweC0yIHB5LTFcIlxuICAgICAgICAgIHRvPXtgL3NuaXBwZXRzLyR7bGFuZ3VhZ2VUYWd9LyR7c25pcHBldC5faWR9L3VwZGF0ZWB9XG4gICAgICAgID5cbiAgICAgICAgICBVcGRhdGUgU25pcHBldFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTcwMCBob3ZlcjpiZy1yZWQtNTAwIG1sLTQgcm91bmRlZC1sZyBweC0yIHB5LTFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic25pcHBldElkXCIgdmFsdWU9e3NuaXBwZXQuX2lkfSAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cImRlbGV0ZVwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgyIGNsYXNzTmFtZT1cIiBtdC0yIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPkRlc2NyaXB0aW9uPC9oMj5cbiAgICAgIDxwPntzbmlwcGV0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC14bCBmb250LXNlbWlib2xkIG10LTQgbWItMlwiPlNuaXBwZXQ8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcmVsYXRpdmVcIj5cbiAgICAgICAge2NvcHlTdGF0ZSA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzbmlwcGV0LnNuaXBwZXQpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSAgcmlnaHQtMCBwLTMgZ3JvdXBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXNtIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGhpZGRlbiBncm91cC1ob3ZlcjpibG9jayB0ZXh0LWdyYXktMzAwIGdyb3VwLWFjdGl2ZTpoaWRkZW4gbXItMSBiZy1ncmF5LTYwMCByb3VuZGVkLWxnIHB4LTIgXCI+XG4gICAgICAgICAgICAgICAgQ29weSB0byBjbGlwYm9hcmRcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Q29weUljb24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8SGlnaGxpZ2h0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzbmlwcGV0Lmxhbmd1YWdlVGFnLnRvTG93ZXJDYXNlKCl9KyByb3VuZGVkLWxnIHAtMTAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzbmlwcGV0LnNuaXBwZXR9XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+XG4gICAgICAgIHtjYXVnaHQuc3RhdHVzfVx1MDBBMHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgIDwvaDE+XG4gICAgICA8aDI+e2NhdWdodC5kYXRhfTwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfSkge1xuICByZXR1cm4gKFxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1ib2xkXCI+XG4gICAgICB7ZXJyb3IubmFtZX06IHtlcnJvci5tZXNzYWdlfVxuICAgIDwvaDE+XG4gICk7XG59XG4iLCAiaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyXCJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCJcbmltcG9ydCB7IEZvcm0sIGpzb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCJcblxuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuLi9zZXNzaW9ucy5zZXJ2ZXIuanNcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKVxuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIikudHJpbSgpXG4gIGNvbnN0IHBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goZm9ybS5nZXQoXCJwYXNzd29yZFwiKSwgMTApXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLm1vZGVscy51c2VyLmNyZWF0ZSh7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICAgIHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXIuaWQpXG5cbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvc25pcHBldHMvYWxsXCIsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgICAgfSxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIHJldHVybiBqc29uKFxuICAgICAgeyBlcnJvcnM6IGVycm9yLmVycm9ycywgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSkgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktc2Nyb2xsIGgtOTYgbWQ6aC1mdWxsIHctZnVsbCBweC00IG1kOnctNTAtdncgZml4ZWQgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMiBtci0yXCI+Q3JlYXRlIFVzZXI8L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlbG9hZERvY3VtZW50PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdFRvXCIgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgbmFtZT1cImNyZWF0ZVVzZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6YmctZ3JheS03MDAgcHgtNyBweS0yIHJvdW5kZWQtbGcgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS04MDAgdGV4dC13aGl0ZSAgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgQ3JlYXRlIFVzZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5cbmltcG9ydCB7IGRlc3Ryb3lTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIi4uL3Nlc3Npb25zLnNlcnZlclwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvbG9naW5cIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICByZXR1cm4gcmVkaXJlY3QoXCIvbG9naW5cIilcbn1cbiIsICJpbXBvcnQgY29ubmVjdERiIGZyb20gXCJ+L2RiL2Nvbm5lY3REYi5zZXJ2ZXJcIlxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIlxuaW1wb3J0IHsgRm9ybSwganNvbiwgcmVkaXJlY3QsIHVzZUFjdGlvbkRhdGEsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJyZW1peFwiXG5cbmltcG9ydCB7IGNvbW1pdFNlc3Npb24sIGdldFNlc3Npb24gfSBmcm9tIFwiLi4vc2Vzc2lvbnMuc2VydmVyLmpzXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICByZXR1cm4ganNvbih7XG4gICAgdXNlcklkOiBzZXNzaW9uLmdldChcInVzZXJJZFwiKSxcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpLnRyaW0oKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLm1vZGVscy51c2VyLmZpbmRPbmUoe1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgIH0pXG5cbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcigpXG5cbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIikudHJpbSgpXG4gICAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZClcbiAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB0aHJvdyBuZXcgZXJyb3IoXCJXcm9uZyBwYXNzd29yZFwiKVxuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcbiAgICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VyLmlkKVxuXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL3NuaXBwZXRzL2FsbFwiLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICAgIH0sXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICByZXR1cm4ganNvbihcbiAgICAgIHsgZXJyb3JzOiBlcnJvci5lcnJvcnMsIHZhbHVlczogT2JqZWN0LmZyb21FbnRyaWVzKGZvcm0pIH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1zY3JvbGwgaC05NiBtZDpoLWZ1bGwgdy1mdWxsIHB4LTQgbWQ6dy01MC12dyBmaXhlZCBzY3JvbGxiYXItaGlkZVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yIG1yLTJcIj5Mb2dpbjwvaDE+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdFRvXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVXNlcm5hbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMudXNlcm5hbWUgJiYgKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMudXNlcm5hbWUubWVzc2FnZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy52YWx1ZXMudXNlcm5hbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMudXNlcm5hbWVcbiAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgXCJcbiAgICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICAgXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnBhc3N3b3JkICYmIChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy5wYXNzd29yZFxuICAgICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICAgIDogXCIgcm91bmRlZC1sZyAgcHgtMiBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgICBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgbmFtZT1cImxvZ2luXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmJnLWdyYXktNzAwIHB4LTcgcHktMiByb3VuZGVkLWxnIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkIGJnLWJsdWUtODAwIHRleHQtd2hpdGUgIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIExvZ2luXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJtdC01XCIgYWN0aW9uPVwiL3JlZ2lzdGVyXCIgcmVsb2FkRG9jdW1lbnQ+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWUtaW5wdXRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBEb24ndCBoYXZlIGEgdXNlciB5ZXQ/XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpiZy1ncmF5LTcwMCBweC03IHB5LTIgcm91bmRlZC1sZyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS04MDAgdGV4dC13aGl0ZSAgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICBDcmVhdGUgdXNlciBoZXJlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBGb3JtLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyLmpzXCI7XG5pbXBvcnQgc2VlZERhdGEgZnJvbSBcIn4vZGIvc2VlZC5qc29uXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKCk7XG4gIGNvbnN0IGNvdW50ID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuY291bnREb2N1bWVudHMoKTtcbiAgaWYgKGNvdW50ID4gMCkge1xuICAgIHJldHVybiByZWRpcmVjdChcIi9zbmlwcGV0cy9hbGxcIik7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpO1xuXG4gIGNvbnN0IF9hY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XG4gIGlmIChfYWN0aW9uID09PSBcInNlZWRcIikge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5pbnNlcnRNYW55KHNlZWREYXRhKTtcbiAgICAgIHJldHVybiByZWRpcmVjdChcIi9zbmlwcGV0cy9hbGxcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWVkKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLTY0IG1pbi13LTIwMC1weCBiZy1ibHVlLTcwMCBkYXJrOmJnLWdyYXktNzAwIGZpeGVkIHRvcC0xLzIgbGVmdC0xLzQgcm91bmRlZC1sZyBwLTkganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgXCI+XG4gICAgICAgICAgSXQgc2VlbXMgdGhhdCB5b3VyIGRhdGFiYXNlIGlzIGVtcHR5LCB3b3VsZCB5b3UgbGlrZSBtZSB0byBzZWVkIHNvbWVcbiAgICAgICAgICBkYXRhIGZvciB5b3U/XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTYgZ2FwLThcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9zbmlwcGV0cy9hbGxcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvYWxsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlIGJnLXJlZC02MDAgaG92ZXI6YmctcmVkLTgwMCByb3VuZGVkLWxnIHB4LTQgcHktMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5vISFcdUQ4M0RcdURFMjFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInNlZWRcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyZWVuLTgwMCBiZy1ncmVlbi02MDAgcm91bmRlZC1sZyBweC00IHB5LTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBZZXMgcGxlYXNlIGJvc3NcdUQ4M0RcdURFMDdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic3NjhiMWY1YScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtNzdJUFNBSFguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNMUEpNREw1LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1BSTIzSU5SSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREVPRFpHVVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tVks2NVhSVVUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUNSR05PTE5KLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTUw1SVUzTjcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dvdXQtUEpQRzU0WlEuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVnaXN0ZXInOnsnaWQnOidyb3V0ZXMvcmVnaXN0ZXInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVnaXN0ZXInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVnaXN0ZXItT0FGR0UyVVEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUNSR05PTE5KLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTUw1SVUzTjcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2VlZCc6eydpZCc6J3JvdXRlcy9zZWVkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NlZWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2VlZC0yN0FSRDZIWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQzVYTlc2UzYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZyc6eydpZCc6J3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzbmlwcGV0cy86c25pcHBldFRhZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy01MkRVNjJKSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQzVYTlc2UzYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQnOnsnaWQnOidyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZCcsJ3BhcmVudElkJzoncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnJywncGF0aCc6JzpzbmlwcGV0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC1HMk5MN0pXTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREVPRFpHVVkuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGUnOnsnaWQnOidyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGUnLCdwYXJlbnRJZCc6J3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZycsJ3BhdGgnOic6c25pcHBldElkL3VwZGF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkLnVwZGF0ZS1JNTZKVFNUTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTUw1SVUzTjcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0Jzp7J2lkJzoncm91dGVzL3NuaXBwZXRzL2NyZWF0ZVNuaXBwZXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc25pcHBldHMvY3JlYXRlU25pcHBldCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0LUdMWEs0VEpSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NTDVJVTNONy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNzY4QjFGNUEuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRzFDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG9CQUFvQjtBQUFBLE1BQ2pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUN0T2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFFYix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxNQUFJLFNBQVMsa0NBQ1gsb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNqQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFDQSxvQkFBcUQ7OztBQ0RyRDtBQUFBLG9CQUE2QjtBQUV0QixJQUFNLGdCQUFnQixnQ0FBYSxhQUFhO0FBQUEsRUFDckQsVUFBVTtBQUFBLEVBQ1YsUUFBUSxLQUFLLEtBQUssS0FBSztBQUFBLEVBQ3ZCLFFBQVE7QUFBQSxFQUNSLFNBQVMsQ0FBQyxRQUFRLElBQUk7QUFBQTs7O0FERGpCLElBQU0sRUFBRSxZQUFZLGVBQWUsbUJBQ3hDLDhDQUEyQixFQUFFLFFBQVE7OztBREh2QyxvQkFBb0M7QUFDcEMsb0JBT087OztBR1hQO0FBQUEsbUJBQW9DOzs7QUNBcEM7QUFBTyxvQkFBb0I7QUFDekIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsR0FBRTtBQUFBO0FBQUE7QUFNSCxvQkFBb0I7QUFDekIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxlQUFjO0FBQUEsSUFDZCxnQkFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsR0FBRTtBQUFBO0FBQUE7QUF5Qkgsc0JBQXNCO0FBQzNCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLEdBQUU7QUFBQTtBQUFBO0FBTUgsa0JBQWtCLEVBQUUsUUFBUTtBQUNqQyxTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLE1BQU0sT0FBTyxZQUFZO0FBQUEsSUFDekIsUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLEdBQUU7QUFBQTtBQUFBO0FBTUgsbUJBQW1CO0FBQ3hCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLElBQ0wsUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsZUFBYztBQUFBLElBQ2QsZ0JBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLEdBQUU7QUFBQTtBQUFBOzs7QUQxR1Ysb0JBQW9DO0FBRXJCLGlCQUFpQixFQUFFLFdBQVc7QUFDM0MsUUFBTSxDQUFDLFVBQVUsZUFBZTtBQUNoQyxRQUFNLENBQUMsVUFBVSxlQUFlLDRCQUFTO0FBQ3pDLFFBQU0sQ0FBQyxVQUFVLGVBQWU7QUFFaEMsd0JBQXNCO0FBQ3BCLGFBQVMsZ0JBQWdCLFVBQVUsT0FBTztBQUMxQyxpQkFBYSxPQUFPLFlBQVksU0FBUyxZQUFZO0FBQUE7QUFHdkQsK0JBQVUsTUFBTTtBQUNkLFFBQUksT0FBTyxXQUFXLGdDQUFnQyxTQUFTO0FBQzdELGVBQVMsZ0JBQWdCLFVBQVUsSUFBSTtBQUFBO0FBRXpDLFFBQUksVUFBVSxRQUFRO0FBQ3BCLGtCQUFZO0FBQUEsV0FDUDtBQUNMLGtCQUFZO0FBQUE7QUFFZCxZQUFRLElBQUk7QUFDWixRQUFJLFFBQVEsU0FBUyxHQUFHO0FBQ3RCLGtCQUFZO0FBQUEsV0FDUDtBQUNMLGtCQUFZO0FBQUE7QUFBQSxLQUViO0FBRUgsU0FDRSxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixjQUFXO0FBQUEsS0FFWCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsSUFBTyxTQUFTO0FBQUEsS0FDL0IsQ0FBQyxXQUFXLG9DQUFDLFVBQUQsUUFBZSxvQ0FBQyxTQUFELFFBRTlCLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNYLFdBQ0Msb0NBQUMsTUFBRCxNQUNFLG9DQUFDLG1CQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFFSCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBVSxzQkFHNUIsTUFFSixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsbUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUVILFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFVLG1CQUc5QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsbUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUVILFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFVLDBCQUc5QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsbUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUVILFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFVLG1CQUc5QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsbUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUVILFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFVLG1CQUc5QixvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsbUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUVILFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFVLG9CQUk5QixvQ0FBQyxNQUFELE1BQ0csS0FDQSxDQUFDLFdBQ0Esb0NBQUMsbUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUVILFdBQVU7QUFBQSxLQUVWLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFVLFlBRzVCLG9DQUFDLG1CQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFFSCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBVTtBQUFBOzs7QUhwRzFDLHNCQUE2QixFQUFFLFdBQVc7QUFLeEMsU0FBTztBQUFBO0FBR0YsSUFBTSxRQUFRLE1BQU07QUFBQSxFQUN6QjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsRUFFUjtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBO0FBQUEsRUFFWDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBO0FBQUEsRUFFWDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBO0FBQUEsRUFFWDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsU0FBUztBQUFBO0FBQUE7QUFJTixnQkFBZ0I7QUFDckIsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsVUFBVTtBQUFBO0FBQUE7QUFJQyxlQUFlO0FBQzVCLFFBQU0sVUFBVTtBQUNoQixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNULG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELFFBRUYsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsU0FBRDtBQUFBLElBQVM7QUFBQSxNQUNULG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLHNCQUFELFFBR0Ysb0NBQUMsaUNBQUQsT0FDQSxvQ0FBQyx1QkFBRCxPQUNBLG9DQUFDLDBCQUFEO0FBQUE7OztBS3BHUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUEsdUJBQXFCOzs7QUNBckI7QUFBQSxzQkFBeUI7QUFFekIsSUFBTSxFQUFFLFdBQVc7QUFFbkIsSUFBTSxnQkFBZ0IsSUFBSSxPQUFPO0FBQUEsRUFDL0IsT0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLElBQ1YsV0FBVyxDQUFDLEdBQUc7QUFBQTtBQUFBLEVBRWpCLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFVBQVUsQ0FBQyxNQUFNO0FBQUE7QUFBQSxFQUVuQixhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUEsSUFDTixVQUFVLENBQUMsTUFBTTtBQUFBO0FBQUEsRUFFbkIsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBO0FBQUEsRUFFWCxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTLEtBQUs7QUFBQTtBQUFBLEVBRWhCLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQTtBQUFBO0FBSVYsSUFBTSxhQUFhLElBQUksT0FBTztBQUFBLEVBQzVCLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVUsQ0FBQyxNQUFNO0FBQUE7QUFBQSxFQUVuQixVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixVQUFVLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFJZCxJQUFNLFNBQVM7QUFBQSxFQUNwQjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBO0FBQUEsRUFFZDtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBO0FBQUE7OztBRGpEaEIsSUFBTSxFQUFFLGFBQWEsYUFBYSxRQUFRO0FBRTFDLElBQUksQ0FBQyxhQUFhO0FBQ2hCLE1BQUksYUFBYSxjQUFjO0FBQzdCLFVBQU0sSUFBSSxNQUNSO0FBQUEsU0FFRztBQUNMLFVBQU0sSUFBSSxNQUNSO0FBQUE7QUFBQTtBQVFOLDJCQUEwQztBQUd4QyxNQUFJLHlCQUFTLFdBQVcsYUFBYSxHQUFHO0FBRXRDLFFBQUksYUFBYSxlQUFlO0FBQzlCLGlCQUFXLFNBQVMsUUFBUTtBQUMxQixpQ0FBUyxXQUFXLFlBQVksTUFBTTtBQUN0QyxpQ0FBUyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sUUFBUSxNQUFNO0FBQUE7QUFBQTtBQUk5RCxXQUFPLHlCQUFTO0FBQUE7QUFJbEIsMkJBQVMsV0FBVyxHQUFHLGFBQWEsTUFBTTtBQUN4QyxZQUFRLElBQUksbUNBQW1DO0FBQUE7QUFHakQsMkJBQVMsV0FBVyxHQUFHLGdCQUFnQixNQUFNO0FBQzNDLFlBQVEsSUFBSSxzQ0FBc0M7QUFBQTtBQUlwRCxRQUFNLHlCQUFTLFFBQVEsYUFBYTtBQUFBLElBQ2xDLG9CQUFvQjtBQUFBLElBQ3BCLGlCQUFpQjtBQUFBO0FBTW5CLGFBQVcsU0FBUyxRQUFRO0FBQzFCLDZCQUFTLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxRQUFRLE1BQU07QUFBQTtBQUc1RCxTQUFPLHlCQUFTO0FBQUE7OztBRHhEbEIsb0JBQW9EO0FBRXBELHNCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixRQUFNLFFBQVEsS0FBSyxJQUFJO0FBQ3ZCLFFBQU0sY0FBYyxLQUFLLElBQUk7QUFDN0IsUUFBTSxjQUFjLEtBQUssSUFBSTtBQUM3QixRQUFNLFVBQVUsS0FBSyxJQUFJO0FBQ3pCLFFBQU0sS0FBSyxNQUFNO0FBRWpCLE1BQUk7QUFDRixVQUFNLGFBQWEsTUFBTSxHQUFHLE9BQU8sUUFBUSxPQUFPO0FBQUEsTUFDaEQ7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQUVGLFdBQU8sNEJBQVMscUJBQXFCLFdBQVc7QUFBQSxXQUN6QyxRQUFQO0FBQ0EsV0FBTyx3QkFDTCxFQUFFLFFBQVEsT0FBTSxRQUFRLFFBQVEsT0FBTyxZQUFZLFNBQ25ELEVBQUUsUUFBUTtBQUFBO0FBQUE7QUFLRCx5QkFBeUI7QUFDdEMsUUFBTSxhQUFhO0FBRW5CLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQWdDLG1CQUM5QyxvQ0FBQyxvQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLEtBQ1gsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQThCLFVBRzlELDBDQUFZLE9BQU8sVUFDbEIsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWdCLHlDQUFZLE9BQU8sTUFBTSxVQUV4RCxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxjQUFjLHlDQUFZLE9BQU8sTUFBTTtBQUFBLElBQ3ZDLElBQUc7QUFBQSxJQUNILFdBQ0UsMENBQVksT0FBTyxTQUNmLHFHQUNBO0FBQUEsTUFJUixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixXQUFVO0FBQUEsS0FDWCxhQUdELG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUVWLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFhLGVBQzNCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFhLGVBQzNCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFNLFFBQ3BCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFNLFFBQ3BCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFPLFNBQ3JCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFPLFNBQ3JCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFPLFNBQ3JCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFTLFdBQ3ZCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFlLGlCQUM3QixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBVSxZQUN4QixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBUyxXQUN2QixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBTyxTQUNyQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBTSxRQUNwQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBSyxPQUNuQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBUSxVQUN0QixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBTSxRQUNwQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBTyxTQUNyQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBUSxVQUN0QixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBSyxPQUNuQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBTSxRQUNwQixvQ0FBQyxVQUFEO0FBQUEsSUFBUSxPQUFNO0FBQUEsS0FBUyxZQUV6QixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixXQUFVO0FBQUEsS0FDWCxnQkFHQSwwQ0FBWSxPQUFPLGdCQUNsQixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDVix5Q0FBWSxPQUFPLFlBQVksVUFHcEMsb0NBQUMsWUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsT0FBTyxFQUFFLFFBQVEsU0FBUyxPQUFPO0FBQUEsSUFDakMsY0FBYyx5Q0FBWSxPQUFPLFlBQVk7QUFBQSxJQUM3QyxJQUFHO0FBQUEsSUFDSCxXQUNFLDBDQUFZLE9BQU8sZUFDZixpSEFDQTtBQUFBLE1BSVIsb0NBQUMsU0FBRDtBQUFBLElBQU8sU0FBUTtBQUFBLElBQVUsV0FBVTtBQUFBLEtBQW1DLFlBR3JFLDBDQUFZLE9BQU8sWUFDbEIsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWdCLHlDQUFZLE9BQU8sUUFBUSxVQUUxRCxvQ0FBQyxZQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxjQUFjLHlDQUFZLE9BQU8sWUFBWTtBQUFBLElBQzdDLElBQUc7QUFBQSxJQUNILE9BQU8sRUFBRSxRQUFRLFNBQVMsT0FBTztBQUFBLElBQ2pDLFdBQ0UsMENBQVksT0FBTyxlQUNmLGlIQUNBO0FBQUEsTUFHUixvQ0FBQyxNQUFELE9BQ0Esb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1g7QUFBQTs7O0FHaElUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBc0M7OztBQ0F0QztBQUFBLG9CQUFxQjtBQUlOLHlCQUF5QixFQUFFLFNBQVMsZUFBZTtBQUNoRSxRQUFNLFlBQVksSUFBSSxLQUFLLFFBQVE7QUFDbkMsUUFBTSxjQUFjLEdBQUcsVUFBVSxhQUFhLFVBQVUsY0FBYyxVQUFVO0FBQ2hGLFNBQ0Usb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQ1osb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUksYUFBYSxlQUFlLFFBQVE7QUFBQSxLQUM1QyxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBcUMsUUFBUSxRQUMzRCxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FDVixRQUFRLFlBQVksVUFBVSxHQUFHLEtBQUksU0FFeEMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQWtDLGNBQy9DLG9DQUFDLFVBQUQ7QUFBQSxJQUFVLE1BQU0sUUFBUTtBQUFBO0FBQUE7OztBRFpsQyxvQkFBK0M7QUFFL0MsdUJBQTZCLEVBQUUsVUFBVTtBQUN2QyxRQUFNLEtBQUssTUFBTTtBQUVqQixNQUFJLE9BQU8sZUFBZSxPQUFPO0FBQy9CLFdBQU8sTUFBTSxHQUFHLE9BQU8sUUFBUTtBQUFBO0FBR2pDLFNBQU8sTUFBTSxHQUFHLE9BQU8sUUFBUSxLQUFLLEVBQUUsYUFBYSxPQUFPO0FBQUE7QUFHNUQsdUJBQTZCLEVBQUUsU0FBUyxVQUFVO0FBQ2hELFFBQU0sV0FBVyxPQUFPLE9BQU87QUFDL0IsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixRQUFNLFVBQVUsS0FBSyxJQUFJO0FBQ3pCLFFBQU0sS0FBSyxNQUFNO0FBQ2pCLFVBQVE7QUFBQSxTQUNEO0FBQ0gsWUFBTSxRQUFRLEtBQUssSUFBSTtBQUN2QixZQUFNLGlCQUFpQixNQUFNLEdBQUcsT0FBTyxRQUFRLEtBQUs7QUFBQSxRQUNsRCxPQUFPLEVBQUUsUUFBUSxJQUFJLE9BQU8sT0FBTztBQUFBO0FBR3JDLGFBQU87QUFBQSxTQUVKO0FBQ0gsWUFBTSxhQUFhLEtBQUssSUFBSTtBQUM1QixVQUFJLFdBQVc7QUFFZixVQUFJLGVBQWUsV0FBVztBQUM1QixZQUFJLENBQUUsY0FBYSxRQUFRO0FBQ3pCLHFCQUFXLE1BQU0sR0FBRyxPQUFPLFFBQVEsS0FBSztBQUFBLFlBQ3RDLGFBQWE7QUFBQSxhQUNaLEtBQUs7QUFBQSxZQUNOLGNBQWM7QUFBQTtBQUFBLGVBRVg7QUFDTCxxQkFBVyxNQUFNLEdBQUcsT0FBTyxRQUFRLE9BQU8sS0FBSztBQUFBLFlBQzdDLGNBQWM7QUFBQTtBQUFBO0FBQUEsaUJBR1QsZUFBZSxTQUFTO0FBQ2pDLFlBQUksQ0FBRSxjQUFhLFFBQVE7QUFDekIscUJBQVcsTUFBTSxHQUFHLE9BQU8sUUFBUSxLQUFLO0FBQUEsWUFDdEMsYUFBYTtBQUFBLGFBQ1osS0FBSztBQUFBLFlBQ04sV0FBVztBQUFBO0FBQUEsZUFFUjtBQUNMLHFCQUFXLE1BQU0sR0FBRyxPQUFPLFFBQVEsT0FBTyxLQUFLO0FBQUEsWUFDN0MsV0FBVztBQUFBO0FBQUE7QUFBQSxpQkFHTixlQUFlLFNBQVM7QUFDakMsWUFBSSxDQUFFLGNBQWEsUUFBUTtBQUN6QixxQkFBVyxNQUFNLEdBQUcsT0FBTyxRQUFRLEtBQUs7QUFBQSxZQUN0QyxhQUFhO0FBQUEsYUFDWixLQUFLO0FBQUEsWUFDTixPQUFPO0FBQUE7QUFBQSxlQUVKO0FBQ0wscUJBQVcsTUFBTSxHQUFHLE9BQU8sUUFBUSxPQUFPLEtBQUs7QUFBQSxZQUM3QyxPQUFPO0FBQUE7QUFBQTtBQUFBLGlCQUdGLGVBQWUsYUFBYTtBQUNyQyxZQUFJLENBQUUsY0FBYSxRQUFRO0FBQ3pCLHFCQUFXLE1BQU0sR0FBRyxPQUFPLFFBQVEsS0FBSztBQUFBLFlBQ3RDLGFBQWE7QUFBQSxZQUNiLFVBQVU7QUFBQTtBQUFBLGVBRVA7QUFDTCxxQkFBVyxNQUFNLEdBQUcsT0FBTyxRQUFRLEtBQUssRUFBRSxVQUFVO0FBQUE7QUFBQTtBQUl4RCxhQUFPO0FBQUE7QUFBQTtBQUlFLGlCQUFpQjtBQUM5QixRQUFNLFdBQVc7QUFDakIsUUFBTSxpQkFBaUI7QUFDdkIsUUFBTSxjQUFjLCtCQUFZO0FBRWhDLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXNCLGFBQVksZUFHbEQsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFPLFdBQVU7QUFBQSxLQUM1QixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxhQUFZO0FBQUEsTUFFZCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBVSxPQUFNO0FBQUEsTUFDMUMsb0NBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLEtBQ1gsb0NBQUMsWUFBRCxTQUdKLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsS0FDWCxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxNQUFLO0FBQUEsSUFBYSxXQUFVO0FBQUEsS0FDbEMsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQVUsaUJBQ3hCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFRLFVBQ3RCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFZLGNBQzFCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFRLGdCQUV4QixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBVSxPQUFNO0FBQUEsTUFDMUMsb0NBQUMsVUFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsTUFBSztBQUFBLEtBQ04sV0FNTCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWCxpQkFDRyxlQUFlLElBQUksQ0FBQyxZQUNsQixvQ0FBQyxpQkFBRDtBQUFBLElBQWlCLEtBQUssUUFBUTtBQUFBLElBQUs7QUFBQSxRQUVyQyxTQUFTLElBQUksQ0FBQyxZQUNaLG9DQUFDLGlCQUFEO0FBQUEsSUFDRSxLQUFLLFFBQVE7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE9BR1AsQ0FBQyxrQkFBa0IsU0FBUyxXQUFXLElBQ3RDLG9DQUFDLE1BQUQsTUFBSSx1QkFDRixTQUlWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLHNCQUFEO0FBQUE7QUFNRCx1QkFBdUIsRUFBRSxpQkFBUztBQUN2QyxTQUNFLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNYLE9BQU0sTUFBSyxNQUFHLE9BQU07QUFBQTs7O0FFNUozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUFtRTtBQUVuRSx1QkFBNkIsRUFBRSxVQUFVO0FBQ3ZDLFFBQU0sS0FBSyxNQUFNO0FBQ2pCLFFBQU0sVUFBVSxNQUFNLEdBQUcsT0FBTyxRQUFRLFNBQVMsT0FBTztBQUN4RCxNQUFJLENBQUMsU0FBUztBQUNaLFVBQU0sSUFBSSxTQUFTLDhCQUE4QixPQUFPLGFBQWE7QUFBQSxNQUNuRSxRQUFRO0FBQUE7QUFBQTtBQUdaLFNBQU8sd0JBQUs7QUFBQTtBQUdkLHVCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixRQUFNLFFBQVEsS0FBSyxJQUFJO0FBQ3ZCLFFBQU0sY0FBYyxLQUFLLElBQUk7QUFDN0IsUUFBTSxjQUFjLEtBQUssSUFBSTtBQUM3QixRQUFNLFVBQVUsS0FBSyxJQUFJO0FBQ3pCLFFBQU0sWUFBWSxLQUFLLElBQUk7QUFDM0IsUUFBTSxLQUFLLE1BQU07QUFFakIsTUFBSTtBQUNGLFVBQU0sR0FBRyxPQUFPLFFBQVEsaUJBQ3RCLEVBQUUsS0FBSyxhQUNQO0FBQUEsTUFDRSxNQUFNO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFFRixjQUFjLEVBQUUsY0FBYztBQUFBO0FBSWxDLFdBQU8sNEJBQVMscUJBQXFCO0FBQUEsV0FDOUIsUUFBUDtBQUNBLFdBQU8sd0JBQ0wsRUFBRSxRQUFRLE9BQU0sUUFBUSxRQUFRLE9BQU8sWUFBWSxTQUNuRCxFQUFFLFFBQVE7QUFBQTtBQUFBO0FBS0QsMEJBQXlCO0FBQ3RDLFFBQU0sYUFBYTtBQUVuQixRQUFNLGtCQUFrQjtBQUN4QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUFnQyxtQkFDOUMsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNYLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVE7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUE4QixVQUc5RCwwQ0FBWSxPQUFPLFVBQ2xCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFnQix5Q0FBWSxPQUFPLE1BQU0sVUFFeEQsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsY0FBYyxnQkFBZ0I7QUFBQSxJQUM5QixPQUFPLEVBQUUsT0FBTztBQUFBLElBQ2hCLElBQUc7QUFBQSxJQUNILFdBQ0UsMENBQVksT0FBTyxTQUNmLG9HQUNBO0FBQUEsTUFJUixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixXQUFVO0FBQUEsS0FDWCxhQUdELG9DQUFDLFVBQUQ7QUFBQSxJQUNFLGNBQWMsZ0JBQWdCO0FBQUEsSUFDOUIsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBRVYsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQWEsZUFDM0Isb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQWEsZUFDM0Isb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQU0sUUFDcEIsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQU0sUUFDcEIsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQU8sU0FDckIsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQU8sU0FDckIsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQU8sU0FDckIsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQVMsV0FDdkIsb0NBQUMsVUFBRDtBQUFBLElBQVEsT0FBTTtBQUFBLEtBQWUsaUJBQzdCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFVLFlBQ3hCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFTLFdBQ3ZCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFPLFNBQ3JCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFNLFFBQ3BCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFLLE9BQ25CLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFRLFVBQ3RCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFNLFFBQ3BCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFPLFNBQ3JCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFRLFVBQ3RCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFLLE9BQ25CLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFNLFFBQ3BCLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE9BQU07QUFBQSxLQUFTLFlBRXpCLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxLQUNYLGdCQUlELG9DQUFDLFlBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE9BQU8sRUFBRSxRQUFRLFNBQVMsT0FBTztBQUFBLElBQ2pDLGNBQWMsZ0JBQWdCO0FBQUEsSUFDOUIsSUFBRztBQUFBLElBQ0gsV0FDRSwwQ0FBWSxPQUFPLGVBQ2YsaUhBQ0E7QUFBQSxNQUdQLDBDQUFZLGdCQUNYLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNWLHlDQUFZLE9BQU8sWUFBWSxVQUlwQyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBVSxXQUFVO0FBQUEsS0FBbUMsWUFJdEUsb0NBQUMsWUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsY0FBYyxnQkFBZ0I7QUFBQSxJQUM5QixJQUFHO0FBQUEsSUFDSCxPQUFPLEVBQUUsUUFBUSxTQUFTLE9BQU87QUFBQSxJQUNqQyxXQUNFLDBDQUFZLE9BQU8sZUFDZixpSEFDQTtBQUFBLE1BR1AsMENBQVksZ0JBQ1gsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1YseUNBQVksT0FBTyxZQUFZLFVBR3BDLG9DQUFDLE1BQUQsT0FDQSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBWSxPQUFPLGdCQUFnQjtBQUFBLE1BQzdELG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNYO0FBQUE7OztBQzNKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBcUI7QUFDckIscUJBT087QUFJUCw2QkFBc0I7QUFFdEIsb0JBQW9DO0FBRXBDLHVCQUE2QixFQUFFLFVBQVU7QUFDdkMsUUFBTSxLQUFLLE1BQU07QUFDakIsUUFBTSxVQUFVLE1BQU0sR0FBRyxPQUFPLFFBQVEsU0FBUyxPQUFPO0FBQ3hELE1BQUksQ0FBQyxTQUFTO0FBQ1osVUFBTSxJQUFJLFNBQVMsa0NBQWtDLE9BQU8sYUFBYTtBQUFBLE1BQ3ZFLFFBQVE7QUFBQTtBQUFBO0FBR1osU0FBTyx5QkFBSztBQUFBO0FBR2QsdUJBQTZCLEVBQUUsV0FBVztBQUN4QyxRQUFNLE9BQU8sTUFBTSxRQUFRO0FBQzNCLFFBQU0sVUFBVSxLQUFLLElBQUk7QUFDekIsUUFBTSxZQUFZLEtBQUssSUFBSTtBQUMzQixRQUFNLEtBQUssTUFBTTtBQUVqQixVQUFRO0FBQUEsU0FDRDtBQUNILFlBQU0sYUFBYSxLQUFLLElBQUk7QUFDNUIsVUFBSSxlQUFlLFFBQVE7QUFDekIsY0FBTSxHQUFHLE9BQU8sUUFBUSxVQUN0QixFQUFFLEtBQUssYUFDUDtBQUFBLFVBQ0UsTUFBTSxFQUFFLFVBQVU7QUFBQTtBQUl0QixlQUFPO0FBQUE7QUFFVCxVQUFJLGVBQWUsU0FBUztBQUMxQixjQUFNLEdBQUcsT0FBTyxRQUFRLFVBQ3RCLEVBQUUsS0FBSyxhQUNQO0FBQUEsVUFDRSxNQUFNLEVBQUUsVUFBVTtBQUFBO0FBSXRCLGVBQU87QUFBQTtBQUFBLFNBRU47QUFDSCxZQUFNLEdBQUcsT0FBTyxRQUFRLFVBQVUsRUFBRSxLQUFLO0FBQ3pDLGFBQU8sNkJBQVM7QUFBQTtBQUFBO0FBSVAsb0JBQW9CO0FBQ2pDLFFBQU0sVUFBVTtBQUNoQixRQUFNLFlBQVksSUFBSSxLQUFLLFFBQVE7QUFDbkMsUUFBTSxjQUFjLEdBQUcsVUFBVSxhQUFhLFVBQVUsY0FBYyxVQUFVO0FBQ2hGLFFBQU0sQ0FBQyxXQUFXLGdCQUFnQiw0QkFBUztBQUMzQyxRQUFNLGNBQWMsZ0NBQVk7QUFFaEMsK0JBQVUsTUFBTTtBQUNkLGlCQUFhO0FBQUEsS0FDWjtBQUVILFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQThCLFFBQVEsUUFDcEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRCxNQUFJLFVBQU8sY0FDWCxvQ0FBQyxNQUFELE1BQUksY0FBVyxRQUFRLGVBR3pCLG9DQUFDLHFCQUFEO0FBQUEsSUFDRSxRQUFPO0FBQUEsSUFDUCxXQUFVO0FBQUEsS0FFVixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBWSxPQUFPLFFBQVE7QUFBQSxNQUNyRCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBVSxPQUFNO0FBQUEsTUFDMUMsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQWEsT0FBTyxRQUFRO0FBQUEsTUFDdEQsb0NBQUMsVUFBRDtBQUFBLElBQVEsTUFBSztBQUFBLEtBQ1gsb0NBQUMsVUFBRDtBQUFBLElBQVUsTUFBTSxRQUFRO0FBQUEsUUFHNUIsb0NBQUMsOEJBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLElBQUksYUFBYSxlQUFlLFFBQVE7QUFBQSxLQUN6QyxtQkFHRCxvQ0FBQyxxQkFBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsV0FBVTtBQUFBLEtBRVYsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVksT0FBTyxRQUFRO0FBQUEsTUFDckQsb0NBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQVUsT0FBTTtBQUFBLE1BQzFDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxJQUFjLE1BQUs7QUFBQSxLQUFTLGFBTWxELG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUE4QixnQkFDNUMsb0NBQUMsS0FBRCxNQUFJLFFBQVEsY0FDWixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBbUMsWUFDakQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ1osWUFDQyxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxTQUFTLENBQUMsTUFBTTtBQUNkLGdCQUFVLFVBQVUsVUFBVSxRQUFRO0FBQUE7QUFBQSxJQUV4QyxXQUFVO0FBQUEsS0FFVixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBZ0csc0JBRzdHLG9DQUFDLFVBQUQsVUFHRixNQUVKLG9DQUFDLGdDQUFEO0FBQUEsSUFDRSxXQUFXLEdBQUcsUUFBUSxZQUFZO0FBQUEsS0FFakMsUUFBUTtBQUFBO0FBT1oseUJBQXlCO0FBQzlCLFFBQU0sU0FBUztBQUNmLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE1BQUQsTUFDRyxPQUFPLFFBQU8sUUFBRSxPQUFPLGFBRTFCLG9DQUFDLE1BQUQsTUFBSyxPQUFPO0FBQUE7QUFLWCx3QkFBdUIsRUFBRSxpQkFBUztBQUN2QyxTQUNFLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNYLE9BQU0sTUFBSyxNQUFHLE9BQU07QUFBQTs7O0FDNUozQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxzQkFBbUI7QUFDbkIscUJBQXFDO0FBSXJDLHVCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixRQUFNLEtBQUssTUFBTTtBQUNqQixRQUFNLFdBQVcsS0FBSyxJQUFJLFlBQVk7QUFDdEMsUUFBTSxXQUFXLE1BQU0sd0JBQU8sS0FBSyxLQUFLLElBQUksYUFBYTtBQUN6RCxNQUFJO0FBQ0YsVUFBTSxPQUFPLE1BQU0sR0FBRyxPQUFPLEtBQUssT0FBTztBQUFBLE1BQ3ZDO0FBQUEsTUFDQTtBQUFBO0FBRUYsWUFBUSxJQUFJO0FBQ1osVUFBTSxVQUFVLE1BQU0sV0FBVyxRQUFRLFFBQVEsSUFBSTtBQUNyRCxZQUFRLElBQUksVUFBVSxLQUFLO0FBRTNCLFdBQU8sNkJBQVMsaUJBQWlCO0FBQUEsTUFDL0IsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsY0FBYyxNQUFNLGNBQWM7QUFBQTtBQUFBO0FBQUEsV0FHL0IsUUFBUDtBQUNBLFlBQVEsSUFBSTtBQUNaLFdBQU8seUJBQ0wsRUFBRSxRQUFRLE9BQU0sUUFBUSxRQUFRLE9BQU8sWUFBWSxTQUNuRCxFQUFFLFFBQVE7QUFBQTtBQUFBO0FBS0Qsb0JBQW9CO0FBQ2pDLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQStCLGdCQUM3QyxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLElBQU8sZ0JBQWM7QUFBQSxLQUNoQyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsTUFDMUIsb0NBQUMsT0FBRCxNQUNFLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxLQUNYLGFBR0Qsb0NBQUMsU0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLE9BR2Qsb0NBQUMsT0FBRCxNQUNFLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxLQUNYLGFBR0Qsb0NBQUMsU0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLE9BR2Qsb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1g7QUFBQTs7O0FDekVUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF5QjtBQUl6Qix1QkFBNkIsRUFBRSxXQUFXO0FBQ3hDLFFBQU0sVUFBVSxNQUFNLFdBQVcsUUFBUSxRQUFRLElBQUk7QUFFckQsU0FBTyw2QkFBUyxVQUFVO0FBQUEsSUFDeEIsU0FBUztBQUFBLE1BQ1AsY0FBYyxNQUFNLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFLekMseUJBQStCO0FBQzdCLFNBQU8sNkJBQVM7QUFBQTs7O0FDZmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsdUJBQW1CO0FBQ25CLHFCQUFxRTtBQUlyRSx1QkFBNkIsRUFBRSxXQUFXO0FBQ3hDLFFBQU0sVUFBVSxNQUFNLFdBQVcsUUFBUSxRQUFRLElBQUk7QUFDckQsU0FBTyx5QkFBSztBQUFBLElBQ1YsUUFBUSxRQUFRLElBQUk7QUFBQTtBQUFBO0FBSXhCLHVCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxLQUFLLE1BQU07QUFDakIsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixRQUFNLFdBQVcsS0FBSyxJQUFJLFlBQVk7QUFFdEMsTUFBSTtBQUNGLFVBQU0sT0FBTyxNQUFNLEdBQUcsT0FBTyxLQUFLLFFBQVE7QUFBQSxNQUN4QztBQUFBO0FBR0YsUUFBSSxDQUFDO0FBQU0sWUFBTSxJQUFJO0FBRXJCLFVBQU0sV0FBVyxLQUFLLElBQUksWUFBWTtBQUN0QyxVQUFNLG9CQUFvQixNQUFNLHlCQUFPLFFBQVEsVUFBVSxLQUFLO0FBQzlELFFBQUksQ0FBQztBQUFtQixZQUFNLElBQUksTUFBTTtBQUV4QyxVQUFNLFVBQVUsTUFBTSxXQUFXLFFBQVEsUUFBUSxJQUFJO0FBQ3JELFlBQVEsSUFBSSxVQUFVLEtBQUs7QUFFM0IsV0FBTyw2QkFBUyxpQkFBaUI7QUFBQSxNQUMvQixTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixjQUFjLE1BQU0sY0FBYztBQUFBO0FBQUE7QUFBQSxXQUcvQixRQUFQO0FBQ0EsWUFBUSxJQUFJO0FBQ1osV0FBTyx5QkFDTCxFQUFFLFFBQVEsT0FBTSxRQUFRLFFBQVEsT0FBTyxZQUFZLFNBQ25ELEVBQUUsUUFBUTtBQUFBO0FBQUE7QUFLRCxpQkFBaUI7QUFDOUIsUUFBTSxDQUFDLGdCQUFnQjtBQUN2QixRQUFNLGFBQWE7QUFDbkIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBK0IsVUFDN0Msb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNYLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE1BQUs7QUFBQSxJQUNMLE9BQU8sYUFBYSxJQUFJLGlCQUFpQjtBQUFBLE1BRTNDLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixXQUFVO0FBQUEsS0FDWCxhQUdBLDBDQUFZLE9BQU8sYUFDbEIsb0NBQUMsS0FBRDtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ1YseUNBQVksT0FBTyxTQUFTLFVBR2pDLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLElBQUc7QUFBQSxJQUNILE1BQUs7QUFBQSxJQUNMLGNBQWMseUNBQVksT0FBTztBQUFBLElBQ2pDLFdBQ0UsMENBQVksT0FBTyxZQUNmLHFHQUNBO0FBQUEsT0FJVixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsU0FBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLEtBQ1gsYUFHQSwwQ0FBWSxPQUFPLGFBQ2xCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNWLHlDQUFZLE9BQU8sU0FBUyxVQUdqQyxvQ0FBQyxTQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxNQUFLO0FBQUEsSUFDTCxNQUFLO0FBQUEsSUFDTCxjQUFjLHlDQUFZLE9BQU87QUFBQSxJQUNqQyxXQUNFLDBDQUFZLE9BQU8sWUFDZixxR0FDQTtBQUFBLE9BSVYsb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1gsV0FLSCxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLElBQU8sUUFBTztBQUFBLElBQVksZ0JBQWM7QUFBQSxLQUN0RCxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsSUFBaUIsV0FBVTtBQUFBLEtBQThCLDJCQUd4RSxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxXQUFVO0FBQUEsS0FBZ0k7QUFBQTs7O0FDeEgxSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUFxQjtBQUNyQixxQkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0IseUJBQStCO0FBQzdCLFFBQU0sS0FBSyxNQUFNO0FBQ2pCLFFBQU0sUUFBUSxNQUFNLEdBQUcsT0FBTyxRQUFRO0FBQ3RDLE1BQUksUUFBUSxHQUFHO0FBQ2IsV0FBTyw2QkFBUztBQUFBO0FBR2xCLFNBQU87QUFBQTtBQUdULHVCQUE2QixFQUFFLFdBQVc7QUFDeEMsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixRQUFNLEtBQUssTUFBTTtBQUVqQixRQUFNLFVBQVUsS0FBSyxJQUFJO0FBQ3pCLE1BQUksWUFBWSxRQUFRO0FBQ3RCLFFBQUk7QUFDRixZQUFNLEdBQUcsT0FBTyxRQUFRLFdBQVc7QUFDbkMsYUFBTyw2QkFBUztBQUFBLGFBQ1QsUUFBUDtBQUNBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFLRyxnQkFBZ0I7QUFDN0IsU0FDRSwwREFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBdUIsdUZBSXJDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLCtCQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FDUCxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FDWCxtQkFLSCxvQ0FBQyxxQkFBRDtBQUFBLElBQU0sUUFBTztBQUFBLEtBQ1gsb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1g7QUFBQTs7O0FDdERiO0FBQUEsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLHVDQUFxQyxVQUFTLEVBQUMsUUFBTyxFQUFDLE1BQUssUUFBTyxZQUFXLFFBQVUsUUFBTyxJQUFHLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJCQUEwQixXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxRQUFVLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sbUJBQWtCLEVBQUMsTUFBSyxtQkFBa0IsWUFBVyxRQUFPLFFBQU8sWUFBVyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxzQ0FBcUMsV0FBVSxDQUFDLG9DQUFtQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxlQUFjLEVBQUMsTUFBSyxlQUFjLFlBQVcsUUFBTyxRQUFPLFFBQU8sU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsa0NBQWlDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTywrQkFBOEIsRUFBQyxNQUFLLCtCQUE4QixZQUFXLFFBQU8sUUFBTyx3QkFBdUIsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsa0RBQWlELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsUUFBTSwwQ0FBeUMsRUFBQyxNQUFLLDBDQUF5QyxZQUFXLCtCQUE4QixRQUFPLGNBQWEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsNkRBQTRELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsTUFBSyxvQkFBbUIsUUFBTSxpREFBZ0QsRUFBQyxNQUFLLGlEQUFnRCxZQUFXLCtCQUE4QixRQUFPLHFCQUFvQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvRUFBbUUsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGlDQUFnQyxFQUFDLE1BQUssaUNBQWdDLFlBQVcsUUFBTyxRQUFPLDBCQUF5QixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvREFBbUQsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBbEJZOWpHLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQ0FBaUM7QUFBQSxJQUM3QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLCtCQUErQjtBQUFBLElBQzNCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaURBQWlEO0FBQUEsSUFDN0MsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiwwQ0FBMEM7QUFBQSxJQUN0QyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1CQUFtQjtBQUFBLElBQ2YsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixpQkFBaUI7QUFBQSxJQUNiLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGVBQWU7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
