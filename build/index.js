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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-YEFFLP7H.css";

// node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark_default = "/build/_assets/atom-one-dark-CAZX52DK.css";

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\root.jsx
var import_remix5 = __toESM(require_remix());

// app/components/SideBar.jsx
init_react();
var import_react2 = require("@remix-run/react");
var import_react3 = require("react");

// app/components/DarkmodeButton.tsx
init_react();

// app/components/Icons/CopyIcon.tsx
init_react();
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

// app/components/Icons/MoonIcon.tsx
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

// app/components/Icons/SearchIcon.tsx
init_react();
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

// app/components/Icons/StarIcon.tsx
init_react();
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

// app/components/Icons/SunIcon.tsx
init_react();
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

// app/components/DarkmodeButton.tsx
var import_react = __toESM(require("react"));
function DarkmodeButton() {
  const [darkMode, setDarkMode] = import_react.default.useState(true);
  function toggleMode() {
    document.documentElement.classList.toggle("dark");
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  return /* @__PURE__ */ import_react.default.createElement("button", {
    className: "mr-3",
    onClick: toggleMode
  }, !darkMode ? /* @__PURE__ */ import_react.default.createElement(MoonIcon, null) : /* @__PURE__ */ import_react.default.createElement(SunIcon, null));
}

// app/components/LoginButton.tsx
init_react();
var import_remix2 = __toESM(require_remix());
function LoginButton() {
  const loggedIn = true;
  if (loggedIn) {
    return /* @__PURE__ */ React.createElement(import_remix2.Link, {
      to: "/logout",
      className: "p-2 text-base font-normal  rounded-lg hover:bg-blue-600 text-white dark:hover:bg-gray-700"
    }, "Logout");
  }
  return /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/login",
    className: "p-2 text-base font-normal  rounded-lg hover:bg-blue-600 text-white dark:hover:bg-gray-700"
  }, "Login");
}

// app/components/SideBar.jsx
function SideBar() {
  const [isOnLine, setIsOnLine] = (0, import_react3.useState)(false);
  React.useEffect(() => {
    setIsOnLine(navigator.onLine);
  }, []);
  (0, import_react3.useEffect)(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return /* @__PURE__ */ React.createElement("aside", {
    className: " h-20 md:my-8 md:fixed md:h-full md:w-20-vw border-r dark:border-gray-700 px-3 ",
    "aria-label": "sidebar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " overflow-y-hidden py-4 rounded mb-auto flex md:block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between my-4"
  }, /* @__PURE__ */ React.createElement(DarkmodeButton, null), /* @__PURE__ */ React.createElement(LoginButton, null)), /* @__PURE__ */ React.createElement("ul", {
    className: " flex overflow-x-scroll scrollbar-hide gap-3 md:block md:space-y-2 "
  }, isOnLine ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/createSnippet\n              ",
    className: " min-w-150-px  flex items-center p-2 text-base font-normal  rounded-lg hover:bg-green-600 bg-green-800 dark:bg-green-800 text-white dark:hover:bg-green-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "Create snippet"))) : null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/all\n              ",
    className: " min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "All snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/JavaScript\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "JavaScript snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/PHP\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "PHP snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/CSS\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "CSS snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/HTML\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "HTML snippets"))))));
}

// app/sessions.server.js
init_react();
var import_remix4 = __toESM(require_remix());

// app/cookies.server.js
init_react();
var import_remix3 = __toESM(require_remix());
var sessionCookie = (0, import_remix3.createCookie)("__session", {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 7,
  secure: true,
  secrets: [process.env.COOKIE_SECRET]
});

// app/sessions.server.js
var { getSession, commitSession, destroySession } = (0, import_remix4.createCookieSessionStorage)({ cookie: sessionCookie });

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\root.jsx
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
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "dark"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix5.Meta, null), /* @__PURE__ */ React.createElement(import_remix5.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "dark:bg-gray-900 dark:text-white font-sans grid grid-flow-col"
  }, /* @__PURE__ */ React.createElement(SideBar, null), /* @__PURE__ */ React.createElement("main", {
    className: "md:ml-20-vw md:py-8"
  }, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null), /* @__PURE__ */ React.createElement(import_remix5.LiveReload, null)));
}

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\snippets\createSnippet.jsx
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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\snippets\createSnippet.jsx
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
  } catch (error) {
    return (0, import_remix6.json)({ errors: error.errors, values: Object.fromEntries(form) }, { status: 400 });
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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\snippets\$snippetTag.jsx
var snippetTag_exports = {};
__export(snippetTag_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action2,
  default: () => Index,
  loader: () => loader2
});
init_react();
var import_react4 = require("@remix-run/react");

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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\snippets\$snippetTag.jsx
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
  const actionSnippets = (0, import_react4.useActionData)();
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
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500 font-bold"
  }, error.name, ": ", error.message);
}

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\snippets\$snippetTag\$snippetId.update.jsx
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
  } catch (error) {
    return (0, import_remix9.json)({ errors: error.errors, values: Object.fromEntries(form) }, { status: 400 });
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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\snippets\$snippetTag\$snippetId.jsx
var snippetId_exports = {};
__export(snippetId_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action4,
  default: () => BookPage,
  loader: () => loader4
});
init_react();
var import_react5 = require("react");
var import_react_highlight = __toESM(require("react-highlight"));
var import_react_router_dom = require("react-router-dom");
var import_remix10 = __toESM(require_remix());
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
  const [copyState, setCopyState] = (0, import_react5.useState)(false);
  const languageTag = (0, import_remix10.useParams)().snippetTag;
  (0, import_react5.useEffect)(() => {
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
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500 font-bold"
  }, error.name, ": ", error.message);
}

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\register.jsx
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
  } catch (error) {
    console.log(error);
    return (0, import_remix11.json)({ errors: error.errors, values: Object.fromEntries(form) }, { status: 400 });
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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\logout.jsx
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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => Login
});
init_react();
var import_bcryptjs2 = __toESM(require("bcryptjs"));
var import_remix13 = __toESM(require_remix());
async function action7({ request }) {
  const db = await connectDb();
  const form = await request.formData();
  const username = form.get("username").trim();
  try {
    const user = await db.models.user.findOne({
      username
    });
    if (!user) {
      return (0, import_remix13.json)({ errors: { username: "User not found" } }, { status: 400 });
    }
    const password = form.get("password").trim();
    const isCorrectPassword = await import_bcryptjs2.default.compare(password, user.password);
    if (!isCorrectPassword) {
      return (0, import_remix13.json)({ errors: { password: "Wrong password" } }, { status: 400 });
    }
    const session = await getSession(request.headers.get("auth-token"));
    session.set("auth-token", user._id);
    console.log("session: ", session.get("auth-token"));
    return (0, import_remix13.redirect)("/snippets/all", {
      headers: {
        status: 200,
        "Set-Cookie": `auth-token=${user._id}`
      }
    });
  } catch (error) {
    console.log(error);
    return (0, import_remix13.json)({ errors: error.errors, values: Object.fromEntries(form) }, { status: 400 });
  }
}
var inputErrorStyles = "border-2 border-red-500 rounded-lg px-2 dark:bg-gray-700 bg-blue-600 dark:text-rose-400 ";
function Login() {
  var _a, _b;
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
    defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.username,
    className: (actionData == null ? void 0 : actionData.errors.username) ? inputErrorStyles : "rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input",
    className: "block text-xl font-semibold"
  }, "Password"), (actionData == null ? void 0 : actionData.errors.password) && /* @__PURE__ */ React.createElement("p", {
    className: "text-red-500"
  }, actionData == null ? void 0 : actionData.errors.password.message), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    name: "password",
    type: "password",
    required: true,
    defaultValue: (_b = actionData == null ? void 0 : actionData.values) == null ? void 0 : _b.password,
    className: (actionData == null ? void 0 : actionData.errors.password) ? inputErrorStyles : " rounded-lg  px-2 dark:bg-gray-700 bg-blue-600 text-white   "
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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\seed.jsx
var seed_exports = {};
__export(seed_exports, {
  action: () => action8,
  default: () => Seed,
  loader: () => loader6
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

// route:C:\Users\lasse\Desktop\PWA-snippet-project\app\routes\seed.jsx
async function loader6() {
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
var assets_manifest_default = { "version": "f53ca19a", "entry": { "module": "/build/entry.client-77IPSAHX.js", "imports": ["/build/_shared/chunk-SLPJMDL5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-DWPSP4K5.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-A42RLXZC.js", "imports": ["/build/_shared/chunk-CRGNOLNJ.js", "/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-KFOCYZIL.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register-XANVROUW.js", "imports": ["/build/_shared/chunk-CRGNOLNJ.js", "/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/seed": { "id": "routes/seed", "parentId": "root", "path": "seed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/seed-JU3QG5YJ.js", "imports": ["/build/_shared/chunk-C5XNW6S6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/snippets/$snippetTag": { "id": "routes/snippets/$snippetTag", "parentId": "root", "path": "snippets/:snippetTag", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag-M7NAWPW2.js", "imports": ["/build/_shared/chunk-7WZKKOYJ.js", "/build/_shared/chunk-C5XNW6S6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/snippets/$snippetTag/$snippetId": { "id": "routes/snippets/$snippetTag/$snippetId", "parentId": "routes/snippets/$snippetTag", "path": ":snippetId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag/$snippetId-Z4UTDWEH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/snippets/$snippetTag/$snippetId.update": { "id": "routes/snippets/$snippetTag/$snippetId.update", "parentId": "routes/snippets/$snippetTag", "path": ":snippetId/update", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag/$snippetId.update-3ADNB5BB.js", "imports": ["/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/snippets/createSnippet": { "id": "routes/snippets/createSnippet", "parentId": "root", "path": "snippets/createSnippet", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/createSnippet-4WBVLHPA.js", "imports": ["/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F53CA19A.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcbGFzc2VcXERlc2t0b3BcXFBXQS1zbmlwcGV0LXByb2plY3RcXGFwcFxccm9vdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2lkZUJhci5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRGFya21vZGVCdXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb25zL0NvcHlJY29uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29ucy9Nb29uSWNvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbnMvU2VhcmNoSWNvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbnMvU3Rhckljb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb25zL1N1bkljb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xvZ2luQnV0dG9uLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMuc2VydmVyLmpzIiwgIi4uL2FwcC9jb29raWVzLnNlcnZlci5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXGxhc3NlXFxEZXNrdG9wXFxQV0Etc25pcHBldC1wcm9qZWN0XFxhcHBcXHJvdXRlc1xcc25pcHBldHNcXGNyZWF0ZVNuaXBwZXQuanN4IiwgIi4uL2FwcC9kYi9jb25uZWN0RGIuc2VydmVyLmpzIiwgIi4uL2FwcC9kYi9tb2RlbHMuanMiLCAicm91dGU6QzpcXFVzZXJzXFxsYXNzZVxcRGVza3RvcFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcYXBwXFxyb3V0ZXNcXHNuaXBwZXRzXFwkc25pcHBldFRhZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU25pcHBldExpc3RJdGVtLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGxhc3NlXFxEZXNrdG9wXFxQV0Etc25pcHBldC1wcm9qZWN0XFxhcHBcXHJvdXRlc1xcc25pcHBldHNcXCRzbmlwcGV0VGFnXFwkc25pcHBldElkLnVwZGF0ZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxsYXNzZVxcRGVza3RvcFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcYXBwXFxyb3V0ZXNcXHNuaXBwZXRzXFwkc25pcHBldFRhZ1xcJHNuaXBwZXRJZC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxsYXNzZVxcRGVza3RvcFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcYXBwXFxyb3V0ZXNcXHJlZ2lzdGVyLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGxhc3NlXFxEZXNrdG9wXFxQV0Etc25pcHBldC1wcm9qZWN0XFxhcHBcXHJvdXRlc1xcbG9nb3V0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGxhc3NlXFxEZXNrdG9wXFxQV0Etc25pcHBldC1wcm9qZWN0XFxhcHBcXHJvdXRlc1xcbG9naW4uanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcbGFzc2VcXERlc2t0b3BcXFBXQS1zbmlwcGV0LXByb2plY3RcXGFwcFxccm91dGVzXFxzZWVkLmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxcZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxsYXNzZVxcXFxEZXNrdG9wXFxcXFBXQS1zbmlwcGV0LXByb2plY3RcXFxcYXBwXFxcXHJvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxccm91dGVzXFxcXHNuaXBwZXRzXFxcXGNyZWF0ZVNuaXBwZXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxccm91dGVzXFxcXHNuaXBwZXRzXFxcXCRzbmlwcGV0VGFnLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxsYXNzZVxcXFxEZXNrdG9wXFxcXFBXQS1zbmlwcGV0LXByb2plY3RcXFxcYXBwXFxcXHJvdXRlc1xcXFxzbmlwcGV0c1xcXFwkc25pcHBldFRhZ1xcXFwkc25pcHBldElkLnVwZGF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbGFzc2VcXFxcRGVza3RvcFxcXFxQV0Etc25pcHBldC1wcm9qZWN0XFxcXGFwcFxcXFxyb3V0ZXNcXFxcc25pcHBldHNcXFxcJHNuaXBwZXRUYWdcXFxcJHNuaXBwZXRJZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbGFzc2VcXFxcRGVza3RvcFxcXFxQV0Etc25pcHBldC1wcm9qZWN0XFxcXGFwcFxcXFxyb3V0ZXNcXFxccmVnaXN0ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxccm91dGVzXFxcXGxvZ291dC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbGFzc2VcXFxcRGVza3RvcFxcXFxQV0Etc25pcHBldC1wcm9qZWN0XFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9naW4uanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxccm91dGVzXFxcXHNlZWQuanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNuaXBwZXRzL2NyZWF0ZVNuaXBwZXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzbmlwcGV0cy86c25pcHBldFRhZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWdcIixcbiAgICAgIHBhdGg6IFwiOnNuaXBwZXRJZC91cGRhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZ1wiLFxuICAgICAgcGF0aDogXCI6c25pcHBldElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9yZWdpc3RlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVnaXN0ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVnaXN0ZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9zZWVkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZWVkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlZWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3RhaWx3aW5kLmNzc1wiXG5pbXBvcnQgaGlnaFN0eWxlcyBmcm9tIFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzc1wiXG5pbXBvcnQgeyBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7XG4gICAgTGlua3MsXG4gICAgTGl2ZVJlbG9hZCxcbiAgICBNZXRhLFxuICAgIE91dGxldCxcbiAgICBTY3JpcHRzLFxuICAgIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIlxuXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9jb21wb25lbnRzL1NpZGVCYXJcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuL3Nlc3Npb25zLnNlcnZlclwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyByZXF1ZXN0IH0pIHtcbiAgICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICAgIC8vIHJldHVybiBqc29uKHtcbiAgICAvLyAgIHVzZXJJZDogc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIiksXG4gICAgLy8gfSlcbiAgICByZXR1cm4gXCJyXCJcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogc3R5bGVzLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBoaWdoU3R5bGVzLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICBzaXplczogXCI3Nng3NlwiLFxuICAgICAgICBocmVmOiBcIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICBzaXplczogXCIzMngzMlwiLFxuICAgICAgICBocmVmOiBcIi9mYXZpY29uLTMyeDMyLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICBzaXplczogXCIxNngxNlwiLFxuICAgICAgICBocmVmOiBcIi9mYXZpY29uLTE2eDE2LnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwibWFuaWZlc3RcIixcbiAgICAgICAgaHJlZjogXCIvc2l0ZS53ZWJtYW5pZmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwibWFzay1pY29uXCIsXG4gICAgICAgIGNvbG9yOiBcIiM3NDI5MTRcIixcbiAgICAgICAgaHJlZjogXCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlbDogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiLFxuICAgICAgICBjb250ZW50OiBcIlNuaXBwaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVsOiBcImFwcGxpY2F0aW9uLW5hbWVcIixcbiAgICAgICAgY29udGVudDogXCJTbmlwcGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlbDogXCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiLFxuICAgICAgICBjb250ZW50OiBcIiM3NDI5MTRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVsOiBcInRoZW1lLWNvbG9yXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiI2ZmZmZmZlwiLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgICAgICAgdGl0bGU6IFwiUmVtaXggc25pcHBldHMgYXBwXCIsXG4gICAgICAgIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAvLyBjb25zdCBzZXNzaW9uID0gdXNlTG9hZGVyRGF0YSgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgY2xhc3NOYW1lPVwiZGFya1wiPlxuICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgIDxib2R5IGNsYXNzTmFtZT1cImRhcms6YmctZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2FucyBncmlkIGdyaWQtZmxvdy1jb2xcIj5cbiAgICAgICAgICAgICAgICA8U2lkZUJhciAvPlxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1kOm1sLTIwLXZ3IG1kOnB5LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBEYXJrbW9kZUJ1dHRvbiBmcm9tIFwiLi9EYXJrbW9kZUJ1dHRvblwiXG5pbXBvcnQgTG9naW5CdXR0b24gZnJvbSBcIi4vTG9naW5CdXR0b25cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlQmFyKCkge1xuICAgIGNvbnN0IFtpc09uTGluZSwgc2V0SXNPbkxpbmVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgLy8gY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZSgpXG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJc09uTGluZShuYXZpZ2F0b3Iub25MaW5lKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlc3Npb24pXG4gICAgICAgIC8vIGlmIChzZXNzaW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIHNldExvZ2dlZEluKHRydWUpXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBzZXRMb2dnZWRJbihmYWxzZSlcbiAgICAgICAgLy8gfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFzaWRlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgaC0yMCBtZDpteS04IG1kOmZpeGVkIG1kOmgtZnVsbCBtZDp3LTIwLXZ3IGJvcmRlci1yIGRhcms6Ym9yZGVyLWdyYXktNzAwIHB4LTMgXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaWRlYmFyXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgb3ZlcmZsb3cteS1oaWRkZW4gcHktNCByb3VuZGVkIG1iLWF1dG8gZmxleCBtZDpibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8RGFya21vZGVCdXR0b24gLz5cbiAgICAgICAgICAgICAgICAgICAgPExvZ2luQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIiBmbGV4IG92ZXJmbG93LXgtc2Nyb2xsIHNjcm9sbGJhci1oaWRlIGdhcC0zIG1kOmJsb2NrIG1kOnNwYWNlLXktMiBcIj5cbiAgICAgICAgICAgICAgICAgICAge2lzT25MaW5lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL2NyZWF0ZVNuaXBwZXRcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG1pbi13LTE1MC1weCAgZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ncmVlbi02MDAgYmctZ3JlZW4tODAwIGRhcms6YmctZ3JlZW4tODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPkNyZWF0ZSBzbmlwcGV0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvYWxsXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG1pbi13LTE1MC1weCBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIGRhcms6YmctZ3JheS04MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZDptbC0zXCI+QWxsIHNuaXBwZXRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL0phdmFTY3JpcHRcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0xNTAtcHggZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPkphdmFTY3JpcHQgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvUEhQXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLXctMTUwLXB4IGZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5QSFAgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvQ1NTXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLXctMTUwLXB4IGZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5DU1Mgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvSFRNTFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi13LTE1MC1weCBmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIGRhcms6YmctZ3JheS04MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZDptbC0zXCI+SFRNTCBzbmlwcGV0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IE1vb25JY29uLCBTdW5JY29uIH0gZnJvbSBcIn4vY29tcG9uZW50cy9JY29uc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFya21vZGVCdXR0b24oKSB7XG4gICAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTW9kZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpXG4gICAgICAgIGRhcmtNb2RlID8gc2V0RGFya01vZGUoZmFsc2UpIDogc2V0RGFya01vZGUodHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci0zXCIgb25DbGljaz17dG9nZ2xlTW9kZX0+XG4gICAgICAgICAgICB7IWRhcmtNb2RlID8gPE1vb25JY29uIC8+IDogPFN1bkljb24gLz59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gQ29weUljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTggNUg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMnYtMU04IDVhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk04IDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0wIDBoMmEyIDIgMCAwMTIgMnYzbTIgNEgxMG0wIDBsMy0zbS0zIDNsMyAzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gTW9vbkljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBob3ZlcjphbmltYXRlLXB1bHNlIFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgIGQ9XCJNMjAuMzU0IDE1LjM1NEE5IDkgMCAwMTguNjQ2IDMuNjQ2IDkuMDAzIDkuMDAzIDAgMDAxMiAyMWE5LjAwMyA5LjAwMyAwIDAwOC4zNTQtNS42NDZ6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gU2VhcmNoSWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgZD1cIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBTdGFySWNvbih7IGZpbGwgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgc3Ryb2tlLXllbGxvdy01MDAgIFwiXG4gICAgICAgICAgICBmaWxsPXtmaWxsID8gXCIjZWFiMzA4XCIgOiBcIm5vbmVcIn1cbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgZD1cIk0xMS4wNDkgMi45MjdjLjMtLjkyMSAxLjYwMy0uOTIxIDEuOTAyIDBsMS41MTkgNC42NzRhMSAxIDAgMDAuOTUuNjloNC45MTVjLjk2OSAwIDEuMzcxIDEuMjQuNTg4IDEuODFsLTMuOTc2IDIuODg4YTEgMSAwIDAwLS4zNjMgMS4xMThsMS41MTggNC42NzRjLjMuOTIyLS43NTUgMS42ODgtMS41MzggMS4xMThsLTMuOTc2LTIuODg4YTEgMSAwIDAwLTEuMTc2IDBsLTMuOTc2IDIuODg4Yy0uNzgzLjU3LTEuODM4LS4xOTctMS41MzgtMS4xMThsMS41MTgtNC42NzRhMSAxIDAgMDAtLjM2My0xLjExOGwtMy45NzYtMi44ODhjLS43ODQtLjU3LS4zOC0xLjgxLjU4OC0xLjgxaDQuOTE0YTEgMSAwIDAwLjk1MS0uNjlsMS41MTktNC42NzR6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gU3VuSWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGhvdmVyOmFuaW1hdGUtcHVsc2VcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTEyIDN2MW0wIDE2djFtOS05aC0xTTQgMTJIM20xNS4zNjQgNi4zNjRsLS43MDctLjcwN002LjM0MyA2LjM0M2wtLjcwNy0uNzA3bTEyLjcyOCAwbC0uNzA3LjcwN002LjM0MyAxNy42NTdsLS43MDcuNzA3TTE2IDEyYTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkJ1dHRvbigpIHtcbiAgICBjb25zdCBsb2dnZWRJbiA9IHRydWVcblxuICAgIGlmIChsb2dnZWRJbikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9sb2dvdXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz1cIi9sb2dpblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG4iLCAiLy8gYXBwL3Nlc3Npb25zLmpzXG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIlxuXG5pbXBvcnQgeyBzZXNzaW9uQ29va2llIH0gZnJvbSBcIi4vY29va2llcy5zZXJ2ZXJcIlxuXG5leHBvcnQgY29uc3QgeyBnZXRTZXNzaW9uLCBjb21taXRTZXNzaW9uLCBkZXN0cm95U2Vzc2lvbiB9ID1cbiAgICBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7IGNvb2tpZTogc2Vzc2lvbkNvb2tpZSB9KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVVzZXJTZXNzaW9uKHJlcXVlc3QpIHtcbiAgICAvLyBnZXQgdGhlIHNlc3Npb25cbiAgICBjb25zdCBjb29raWUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29va2llKVxuXG4gICAgLy8gdmFsaWRhdGUgdGhlIHNlc3Npb24sIGB1c2VySWRgIGlzIGp1c3QgYW4gZXhhbXBsZSwgdXNlIHdoYXRldmVyIHZhbHVlIHlvdVxuICAgIC8vIHB1dCBpbiB0aGUgc2Vzc2lvbiB3aGVuIHRoZSB1c2VyIGF1dGhlbnRpY2F0ZWRcbiAgICBpZiAoIXNlc3Npb24uaGFzKFwidXNlcklkXCIpKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgc2Vzc2lvbiwgcmVkaXJlY3QgdG8gbG9naW5cbiAgICAgICAgdGhyb3cgcmVkaXJlY3QoXCIvbG9naW5cIilcbiAgICB9XG5cbiAgICByZXR1cm4gc2Vzc2lvblxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZSB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkNvb2tpZSA9IGNyZWF0ZUNvb2tpZShcIl9fc2Vzc2lvblwiLCB7XG4gIGh0dHBPbmx5OiB0cnVlLFxuICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDcsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgc2VjcmV0czogW3Byb2Nlc3MuZW52LkNPT0tJRV9TRUNSRVRdLFxufSk7XG4iLCAiaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyXCJcbmltcG9ydCB7IEZvcm0sIGpzb24sIHJlZGlyZWN0LCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG4gIGNvbnN0IHRpdGxlID0gZm9ybS5nZXQoXCJ0aXRsZVwiKVxuICBjb25zdCBsYW5ndWFnZVRhZyA9IGZvcm0uZ2V0KFwibGFuZ3VhZ2VUYWdcIilcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtLmdldChcImRlc2NyaXB0aW9uXCIpXG4gIGNvbnN0IHNuaXBwZXQgPSBmb3JtLmdldChcInNuaXBwZXRcIilcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgbmV3U25pcHBldCA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmNyZWF0ZSh7XG4gICAgICB0aXRsZSxcbiAgICAgIGxhbmd1YWdlVGFnLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBzbmlwcGV0LFxuICAgIH0pXG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvc25pcHBldHMvc25pcHBldC8ke25ld1NuaXBwZXQuX2lkfWApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGpzb24oXG4gICAgICB7IGVycm9yczogZXJyb3IuZXJyb3JzLCB2YWx1ZXM6IE9iamVjdC5mcm9tRW50cmllcyhmb3JtKSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVNuaXBwZXQoKSB7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiICBvdmVyZmxvdy15LXNjcm9sbCBoLTk2IG1kOmgtZnVsbCB3LWZ1bGwgcHgtNCBtZDp3LTUwLXZ3IGZpeGVkIHNjcm9sbGJhci1oaWRlIFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yICBtci0yXCI+Q3JlYXRlIHNuaXBwZXQ8L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgVGl0bGVcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZSAmJiAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5lcnJvcnMudGl0bGUudmFsdWV9XG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy50aXRsZVxuICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgXCJcbiAgICAgICAgICAgICAgOiBcIiByb3VuZGVkLWxnICBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSAgIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJsYW5ndWFnZVRhZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgTGFuZ3VhZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVRhZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUeXBlU2NyaXB0XCI+VHlwZVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQSFBcIj5QSFA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NTXCI+Q1NTPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhUTUxcIj5IVE1MPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImphdmFcIj5KYXZhPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1YnlcIj5SdWJ5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhhc2tlbFwiPkhhc2tlbDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb2ZmZWVzY3JpcHRcIj5Db2ZmZWVTY3JpcHQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFza2VsbFwiPkhhc2tlbGw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia290bGluXCI+S290bGluPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcnRcIj5EYXJ0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImx1YVwiPkx1YTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnb1wiPkdvPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNoZWxsXCI+U2hlbGw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3FsXCI+U1FMPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcmxcIj5QZXJsPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN3aWZ0XCI+U3dpZnQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3NcIj5DIzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjKytcIj5DKys8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHl0aG9uXCI+UHl0aG9uPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgPlxuICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwcHhcIiwgd2lkdGg6IFwiNjYlXCIgfX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi52YWx1ZX1cbiAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICBcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNuaXBwZXRcIiBjbGFzc05hbWU9XCJibG9jayBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFNuaXBwZXRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5zbmlwcGV0ICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57YWN0aW9uRGF0YT8uZXJyb3JzLnNuaXBwZXQubWVzc2FnZX08L3A+XG4gICAgICAgICl9XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIG5hbWU9XCJzbmlwcGV0XCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi52YWx1ZX1cbiAgICAgICAgICBpZD1cInNuaXBwZXRcIlxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgPyBcImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrIFwiXG4gICAgICAgICAgICAgIDogXCIgcm91bmRlZC1sZyAgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6YmctZ3JheS03MDAgcHgtNyBweS0yIHJvdW5kZWQtbGcgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS04MDAgdGV4dC13aGl0ZSAgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZSBzbmlwcGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHsgbW9kZWxzIH0gZnJvbSBcIi4vbW9kZWxzLmpzXCI7XG5cbmNvbnN0IHsgTU9OR09EQl9VUkwsIE5PREVfRU5WIH0gPSBwcm9jZXNzLmVudjtcblxuaWYgKCFNT05HT0RCX1VSTCkge1xuICBpZiAoTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSTCBlbnZpcm9ubWVudCB2YXJpYWJsZSBcdTIwMTQgcG9pbnRpbmcgdG8geW91ciBmdWxsIGNvbm5lY3Rpb24gc3RyaW5nLCBpbmNsdWRpbmcgZGF0YWJhc2UgbmFtZS5cIlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSTCBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgYW4gLmVudiBmaWxlIFx1MjAxNCBwb2ludGluZyB0byB5b3VyIGZ1bGwgY29ubmVjdGlvbiBzdHJpbmcsIGluY2x1ZGluZyBkYXRhYmFzZSBuYW1lLlwiXG4gICAgKTtcbiAgfVxufVxuXG4vLyBXZSByZXVzZSBhbnkgZXhpc3RpbmcgTW9uZ29vc2UgZGIgY29ubmVjdGlvbiB0byBhdm9pZCBjcmVhdGluZyBtdWx0aXBsZVxuLy8gY29ubmVjdGlvbnMgaW4gZGV2IG1vZGUgd2hlbiBSZW1peCBcInB1cmdlcyB0aGUgcmVxdWlyZSBjYWNoZVwiIHdoZW4gcmVsb2FkaW5nXG4vLyBvbiBmaWxlIGNoYW5nZXMuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjb25uZWN0RGIoKSB7XG4gIC8vIFJldXNlIHRoZSBleGlzdGluZyBNb25nb29zZSBjb25uZWN0aW9uIGlmIHdlIGhhdmUgb25lLi4uXG4gIC8vIGh0dHBzOi8vbW9uZ29vc2Vqcy5jb20vZG9jcy9hcGkvY29ubmVjdGlvbi5odG1sI2Nvbm5lY3Rpb25fQ29ubmVjdGlvbi1yZWFkeVN0YXRlXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPiAwKSB7XG4gICAgLy8gLi4uYnV0IG92ZXJ3cml0ZSBhbGwgbW9kZWxzIGluIGRldmVsb3BtZW50IHRvIGVuc3VyZSB3ZSBwaWNrIHVwIGFueSBjaGFuZ2VzIG1hZGUgaW4gc2NoZW1hc1xuICAgIGlmIChOT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLmRlbGV0ZU1vZGVsKG1vZGVsLm5hbWUpO1xuICAgICAgICBtb25nb29zZS5jb25uZWN0aW9uLm1vZGVsKG1vZGVsLm5hbWUsIG1vZGVsLnNjaGVtYSwgbW9kZWwuY29sbGVjdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gIH1cblxuICAvLyBJZiBubyBjb25uZWN0aW9uIGV4aXN0cyB5ZXQsIHNldCB1cCBldmVudCBsb2dnaW5nLi4uXG4gIG1vbmdvb3NlLmNvbm5lY3Rpb24ub24oXCJjb25uZWN0ZWRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29vc2UgY29ubmVjdGVkLCBOT0RFX0VOVj0lc1wiLCBOT0RFX0VOVik7XG4gIH0pO1xuXG4gIG1vbmdvb3NlLmNvbm5lY3Rpb24ub24oXCJkaXNjb25uZWN0ZWRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29vc2UgRElTQ09OTkVDVEVELCBOT0RFX0VOVj0lc1wiLCBOT0RFX0VOVik7XG4gIH0pO1xuXG4gIC8vIC4uLmFuZCBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbjpcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSTCwge1xuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIH0pO1xuXG4gIC8vIFwiTW9kZWxzIGFyZSBhbHdheXMgc2NvcGVkIHRvIGEgc2luZ2xlIGNvbm5lY3Rpb24uXCJcbiAgLy8gaHR0cHM6Ly9tb25nb29zZWpzLmNvbS9kb2NzL2Nvbm5lY3Rpb25zLmh0bWwjbXVsdGlwbGVfY29ubmVjdGlvbnNcbiAgLy8gU28gd2Ugc2V0IHRoZW0gdXAgaGVyZSB0byBhdm9pZCBvdmVyd3JpdGluZyBhbmQgZ2V0dGluZyBlcnJvcnMgaW4gZGV2IG1vZGUuXG4gIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgbW9uZ29vc2UuY29ubmVjdGlvbi5tb2RlbChtb2RlbC5uYW1lLCBtb2RlbC5zY2hlbWEsIG1vZGVsLmNvbGxlY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb247XG59XG4iLCAiaW1wb3J0IHsgbW9uZ29vc2UgfSBmcm9tIFwibW9uZ29vc2VcIlxuXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2VcblxuY29uc3Qgc25pcHBldFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB0aXRsZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5MZW5ndGg6IFs1LCBcIlRvbyBzaG9ydCwgbWluaW11bSA1IGNoYXJhY3RlcnNcIl0sXG4gIH0sXG4gIGxhbmd1YWdlVGFnOiBTdHJpbmcsXG4gIHNuaXBwZXQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIk1pc3Npbmcgc25pcHBldFwiXSxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIk1pc3NpbmcgZGVzY3JpcHRpb25cIl0sXG4gIH0sXG4gIGZhdm9yaXRlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgZGF0ZUFkZGVkOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgfSxcbiAgbGFzdE1vZGlmaWVkOiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgfSxcbn0pXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkdvdHRhIGhhdmUgYSB1c2VybmFtZVwiXSxcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkdvdHRhIGhhdmUgYSBwYXNzd29yZFwiXSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCBtb2RlbHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlNuaXBwZXRcIixcbiAgICBzY2hlbWE6IHNuaXBwZXRTY2hlbWEsXG4gICAgY29sbGVjdGlvbjogXCJzbmlwcGV0c1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJ1c2VyXCIsXG4gICAgc2NoZW1hOiB1c2VyU2NoZW1hLFxuICAgIGNvbGxlY3Rpb246IFwidXNlcnNcIixcbiAgfSxcbl1cbiIsICJpbXBvcnQgeyBPdXRsZXQsIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiXG5pbXBvcnQgU25pcHBldExpc3RJdGVtIGZyb20gXCJ+L2NvbXBvbmVudHMvU25pcHBldExpc3RJdGVtXCJcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIn4vZGIvY29ubmVjdERiLnNlcnZlci5qc1wiXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIn4vY29tcG9uZW50cy9JY29uc1wiXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG5cbiAgICBpZiAocGFyYW1zLnNuaXBwZXRUYWcgPT09IFwiYWxsXCIpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKVxuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHsgbGFuZ3VhZ2VUYWc6IHBhcmFtcy5zbmlwcGV0VGFnIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0LCBwYXJhbXMgfSkge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gU3RyaW5nKHBhcmFtcy5zbmlwcGV0VGFnKVxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgICBjb25zdCBfYWN0aW9uID0gZm9ybS5nZXQoXCJfYWN0aW9uXCIpXG4gICAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKVxuICAgIHN3aXRjaCAoX2FjdGlvbikge1xuICAgICAgICBjYXNlIFwic2VhcmNoXCI6XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGZvcm0uZ2V0KFwic2VhcmNoUXVlcnlcIilcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaFNuaXBwZXRzID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHsgJHJlZ2V4OiBuZXcgUmVnRXhwKHF1ZXJ5LCBcImlcIikgfSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hTbmlwcGV0c1xuXG4gICAgICAgIGNhc2UgXCJzb3J0XCI6XG4gICAgICAgICAgICBjb25zdCBzb3J0TWV0aG9kID0gZm9ybS5nZXQoXCJzb3J0TWV0aG9kXCIpXG4gICAgICAgICAgICBsZXQgc25pcHBldHMgPSBbXVxuXG4gICAgICAgICAgICBpZiAoc29ydE1ldGhvZCA9PT0gXCJ1cGRhdGVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShsYW5ndWFnZSA9PT0gXCJhbGxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlVGFnOiBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSkuc29ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKCkuc29ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0TWV0aG9kID09PSBcImFkZGVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShsYW5ndWFnZSA9PT0gXCJhbGxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlVGFnOiBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSkuc29ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlQWRkZWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKCkuc29ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlQWRkZWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0TWV0aG9kID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShsYW5ndWFnZSA9PT0gXCJhbGxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlVGFnOiBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSkuc29ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogMSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKS5zb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAxLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydE1ldGhvZCA9PT0gXCJmYXZvcml0ZXNcIikge1xuICAgICAgICAgICAgICAgIGlmICghKGxhbmd1YWdlID09PSBcImFsbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHsgZmF2b3JpdGU6IDEgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0c1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gICAgY29uc3Qgc25pcHBldHMgPSB1c2VMb2FkZXJEYXRhKClcbiAgICBjb25zdCBhY3Rpb25TbmlwcGV0cyA9IHVzZUFjdGlvbkRhdGEoKVxuICAgIGNvbnN0IGxhbmd1YWdlVGFnID0gdXNlUGFyYW1zKCkuc25pcHBldFRhZ1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtNDQgdy1mdWxsIHB4LTMgbWQ6dy0zMC12dyBsZzp3LTI1LXZ3IG1kOmgtZnVsbCBmaXhlZCBtZDpib3JkZXItciBib3JkZXItYi1zbGF0ZS00MDAgbWQ6ZGFyazpib3JkZXItZ3JheS03MDAgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDogYm9yZGVyLWIgbWQ6ZGFyazpib3JkZXItZ3JheS03MDAgbWItNCBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlVGFnfSBTbmlwcGV0c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggbXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBweC0xIGJvcmRlci1iLXNsYXRlLTQwMCBkYXJrOmJvcmRlci1ub25lIGRhcms6dGV4dC1ncmF5LTgwMCBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBzbmlwcGV0cy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2FjdGlvblwiIHZhbHVlPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNvcnRNZXRob2RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcms6dGV4dC1ncmF5LTgwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXBkYXRlZFwiPkxhc3QgdXBkYXRlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0aXRsZVwiPlRpdGxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZhdm9yaXRlc1wiPkZhdm9yaXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZGRlZFwiPkRhdGUgYWRkZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2FjdGlvblwiIHZhbHVlPVwic29ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBkYXJrOmJnLWdyYXktODAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgcHgtMyByb3VuZGVkLWxnIHB5LTEgYmctYmx1ZS04MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLTQ0IHctZnVsbCBtdC0yIG1kOm10LTIgbWQ6aC00LzUgb3ZlcmZsb3ctc2Nyb2xsIHNjcm9sbGJhci1oaWRlIG1kOnBiLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCIgbGlzdC1ub25lIGdhcC0xIGZsZXggZmxleC1zaHJpbmstMCBmbGV4LW5vd3JhcCAgbWQ6ZmxleC1jb2wgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uU25pcHBldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGlvblNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmlwcGV0TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzbmlwcGV0Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc25pcHBldD17c25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmlwcGV0TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzbmlwcGV0Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc25pcHBldD17c25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc9e2xhbmd1YWdlVGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHshYWN0aW9uU25pcHBldHMgJiYgc25pcHBldHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5ObyBzbmlwcGV0cyBmb3VuZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXQtNzIgbWQ6bWwtMyBtZDptdC0wIGZpeGVkIG92ZXJmbG93LXktc2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgIHtlcnJvci5uYW1lfToge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgIDwvaDE+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIn4vY29tcG9uZW50cy9JY29uc1wiXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU25pcHBldExpc3RJdGVtKHsgc25pcHBldCwgbGFuZ3VhZ2VUYWcgfSkge1xuICAgIGNvbnN0IGRhdGVBZGRlZCA9IG5ldyBEYXRlKHNuaXBwZXQuZGF0ZUFkZGVkKVxuICAgIGNvbnN0IGRpc3BsYXlEYXRlID0gYCR7ZGF0ZUFkZGVkLmdldERhdGUoKX0tJHtkYXRlQWRkZWQuZ2V0TW9udGgoKX0tJHtkYXRlQWRkZWQuZ2V0RnVsbFllYXIoKX1gXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIiBtaW4tdy0yMDAtcHggbWQ6dy1mdWxsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwICBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgcC0zIG1iLTEgXCI+XG4gICAgICAgICAgICA8TGluayB0bz17YC9zbmlwcGV0cy8ke2xhbmd1YWdlVGFnfS8ke3NuaXBwZXQuX2lkfWB9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge3NuaXBwZXQudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAzMCl9IC4uLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheURhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uIGZpbGw9e3NuaXBwZXQuZmF2b3JpdGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufVxuIiwgImltcG9ydCBjb25uZWN0RGIgZnJvbSBcIn4vZGIvY29ubmVjdERiLnNlcnZlclwiXG5pbXBvcnQgeyBGb3JtLCBqc29uLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyBwYXJhbXMgfSkge1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG4gIGNvbnN0IHNuaXBwZXQgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kQnlJZChwYXJhbXMuc25pcHBldElkKVxuICBpZiAoIXNuaXBwZXQpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoYENvdWxkbid0IGZpbmQgYm9vayB3aXRoIGlkICR7cGFyYW1zLnNuaXBwZXRJZH1gLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KVxuICB9XG4gIHJldHVybiBqc29uKHNuaXBwZXQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICBjb25zdCB0aXRsZSA9IGZvcm0uZ2V0KFwidGl0bGVcIilcbiAgY29uc3QgbGFuZ3VhZ2VUYWcgPSBmb3JtLmdldChcImxhbmd1YWdlVGFnXCIpXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICBjb25zdCBzbmlwcGV0ID0gZm9ybS5nZXQoXCJzbmlwcGV0XCIpXG4gIGNvbnN0IHNuaXBwZXRJZCA9IGZvcm0uZ2V0KFwic25pcHBldElkXCIpXG4gIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKClcblxuICB0cnkge1xuICAgIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICB7IF9pZDogc25pcHBldElkIH0sXG4gICAgICB7XG4gICAgICAgICRzZXQ6IHtcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlVGFnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICBzbmlwcGV0OiBzbmlwcGV0LFxuICAgICAgICB9LFxuICAgICAgICAkY3VycmVudERhdGU6IHsgbGFzdE1vZGlmaWVkOiB0cnVlIH0sXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIHJlZGlyZWN0KGAvc25pcHBldHMvc25pcHBldC8ke3NuaXBwZXRJZH1gKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBqc29uKFxuICAgICAgeyBlcnJvcnM6IGVycm9yLmVycm9ycywgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSkgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVTbmlwcGV0KCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpXG5cbiAgY29uc3Qgc25pcHBldFRvVXBkYXRlID0gdXNlTG9hZGVyRGF0YSgpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIG1kOnctNTAtdncgbGc6bWwtMjUtdncgbWQ6bWwtMzAtdncgbWQ6cHItMTAgaC05NiBtZDpoLWZ1bGwgb3ZlcmZsb3cteS1zY3JvbGwgcHgtNCBtZDpwLTAgZml4ZWQgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMiAgbXItMlwiPlVwZGF0ZSBzbmlwcGV0PC9oMT5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFRpdGxlXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMudGl0bGUgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPnthY3Rpb25EYXRhPy5lcnJvcnMudGl0bGUubWVzc2FnZX08L3A+XG4gICAgICAgICl9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLnRpdGxlfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjY2JVwiIH19XG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy50aXRsZVxuICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrIGRhcms6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgcHgtMiBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICAgZGFyazpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJsYW5ndWFnZVRhZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICA+XG4gICAgICAgICAgTGFuZ3VhZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLmxhbmd1YWdlVGFnfVxuICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVRhZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgICBkYXJrOmJnLWdyYXktNzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUeXBlU2NyaXB0XCI+VHlwZVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQSFBcIj5QSFA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NTXCI+Q1NTPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhUTUxcIj5IVE1MPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImphdmFcIj5KYXZhPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1YnlcIj5SdWJ5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhhc2tlbFwiPkhhc2tlbDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb2ZmZWVzY3JpcHRcIj5Db2ZmZWVTY3JpcHQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFza2VsbFwiPkhhc2tlbGw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia290bGluXCI+S290bGluPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcnRcIj5EYXJ0PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImx1YVwiPkx1YTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnb1wiPkdvPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNoZWxsXCI+U2hlbGw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3FsXCI+U1FMPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcmxcIj5QZXJsPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN3aWZ0XCI+U3dpZnQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3NcIj5DIzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjKytcIj5DKys8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHl0aG9uXCI+UHl0aG9uPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgPlxuICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwcHhcIiwgd2lkdGg6IFwiNjYlXCIgfX1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NuaXBwZXRUb1VwZGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICBcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAge2FjdGlvbkRhdGE/LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24ubWVzc2FnZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzbmlwcGV0XCIgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBTbmlwcGV0XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgbmFtZT1cInNuaXBwZXRcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLnNuaXBwZXR9XG4gICAgICAgICAgaWQ9XCJzbmlwcGV0XCJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiNjYlXCIgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIFwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICB7YWN0aW9uRGF0YT8uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNuaXBwZXRJZFwiIHZhbHVlPXtzbmlwcGV0VG9VcGRhdGUuX2lkfSAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpiZy1ncmF5LTcwMCBweC03IHB5LTIgcm91bmRlZC1sZyBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlICBcIlxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZSBzbmlwcGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgQ29weUljb24sIFN0YXJJY29uIH0gZnJvbSBcIn4vY29tcG9uZW50cy9JY29uc1wiXG5pbXBvcnQgY29ubmVjdERiIGZyb20gXCJ+L2RiL2Nvbm5lY3REYi5zZXJ2ZXIuanNcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gXCJyZWFjdC1oaWdobGlnaHRcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCB7IEZvcm0sIGpzb24sIHJlZGlyZWN0LCB1c2VDYXRjaCwgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcih7IHBhcmFtcyB9KSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKVxuICAgIGNvbnN0IHNuaXBwZXQgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kQnlJZChwYXJhbXMuc25pcHBldElkKVxuICAgIGlmICghc25pcHBldCkge1xuICAgICAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXG4gICAgICAgICAgICBgQ291bGRuJ3QgZmluZCBzbmlwcGV0cyB3aXRoIGlkICR7cGFyYW1zLnNuaXBwZXRJZH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiBqc29uKHNuaXBwZXQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG4gICAgY29uc3QgX2FjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKVxuICAgIGNvbnN0IHNuaXBwZXRJZCA9IGZvcm0uZ2V0KFwic25pcHBldElkXCIpXG4gICAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKVxuXG4gICAgc3dpdGNoIChfYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJmYXZvcml0ZVRvZ2dsZVwiOlxuICAgICAgICAgICAgY29uc3QgaXNGYXZvcnRpZSA9IGZvcm0uZ2V0KFwiaXNGYXZvcml0ZVwiKVxuICAgICAgICAgICAgaWYgKGlzRmF2b3J0aWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQudXBkYXRlT25lKFxuICAgICAgICAgICAgICAgICAgICB7IF9pZDogc25pcHBldElkIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzZXQ6IHsgZmF2b3JpdGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRmF2b3J0aWUgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LnVwZGF0ZU9uZShcbiAgICAgICAgICAgICAgICAgICAgeyBfaWQ6IHNuaXBwZXRJZCB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2V0OiB7IGZhdm9yaXRlOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5kZWxldGVPbmUoeyBfaWQ6IHNuaXBwZXRJZCB9KVxuICAgICAgICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL3NuaXBwZXRzL3NuaXBwZXRcIilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tQYWdlKCkge1xuICAgIGNvbnN0IHNuaXBwZXQgPSB1c2VMb2FkZXJEYXRhKClcbiAgICBjb25zdCBkYXRlQWRkZWQgPSBuZXcgRGF0ZShzbmlwcGV0LmRhdGVBZGRlZClcbiAgICBjb25zdCBkaXNwbGF5RGF0ZSA9IGAke2RhdGVBZGRlZC5nZXREYXRlKCl9LSR7ZGF0ZUFkZGVkLmdldE1vbnRoKCl9LSR7ZGF0ZUFkZGVkLmdldEZ1bGxZZWFyKCl9YFxuICAgIGNvbnN0IFtjb3B5U3RhdGUsIHNldENvcHlTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBsYW5ndWFnZVRhZyA9IHVzZVBhcmFtcygpLnNuaXBwZXRUYWdcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENvcHlTdGF0ZSh0cnVlKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy01MC12dyBsZzptbC0yNS12dyBtZDptbC0zMC12dyBtZDpwci0xMCAgZml4ZWQgb3ZlcmZsb3cteS1zY3JvbGwgaC00LzUgbWQ6aC1mdWxsIG1kOnBiLTEwIHNjcm9sbGJhci1oaWRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwICBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkICB3LWZ1bGxcIj57c25pcHBldC50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1iLTEgZmxleCBnYXAtNSBkYXJrOnRleHQtZ3JheS01MDAgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5EYXRlOiB7ZGlzcGxheURhdGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkxhbmd1YWdlOiB7c25pcHBldC5sYW5ndWFnZVRhZ308L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBoLWZpdCBiZy1ibHVlLTgwMCBob3ZlcjpiZy1ibHVlLTYwMCBkYXJrOmJnLWdyYXktODAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgcm91bmRlZC1sZyBweC0yIHB5LTFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic25pcHBldElkXCIgdmFsdWU9e3NuaXBwZXQuX2lkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmYXZvcml0ZVRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaXNGYXZvcml0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c25pcHBldC5mYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gZmlsbD17c25pcHBldC5mYXZvcml0ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBtbC00IHJvdW5kZWQtbGcgcHgtMiBweS0xXCJcbiAgICAgICAgICAgICAgICAgICAgdG89e2Avc25pcHBldHMvJHtsYW5ndWFnZVRhZ30vJHtzbmlwcGV0Ll9pZH0vdXBkYXRlYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBTbmlwcGV0XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNzAwIGhvdmVyOmJnLXJlZC01MDAgbWwtNCByb3VuZGVkLWxnIHB4LTIgcHktMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzbmlwcGV0SWRcIiB2YWx1ZT17c25pcHBldC5faWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cImRlbGV0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIHRleHQtd2hpdGVcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCIgbXQtMiB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5EZXNjcmlwdGlvbjwvaDI+XG4gICAgICAgICAgICA8cD57c25pcHBldC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiIHRleHQteGwgZm9udC1zZW1pYm9sZCBtdC00IG1iLTJcIj5TbmlwcGV0PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAge2NvcHlTdGF0ZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzbmlwcGV0LnNuaXBwZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGFic29sdXRlICByaWdodC0wIHAtMyBncm91cFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LXNtIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgaGlkZGVuIGdyb3VwLWhvdmVyOmJsb2NrIHRleHQtZ3JheS0zMDAgZ3JvdXAtYWN0aXZlOmhpZGRlbiBtci0xIGJnLWdyYXktNjAwIHJvdW5kZWQtbGcgcHgtMiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weSB0byBjbGlwYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvcHlJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c25pcHBldC5sYW5ndWFnZVRhZy50b0xvd2VyQ2FzZSgpfSsgcm91bmRlZC1sZyBwLTEwIGB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c25pcHBldC5zbmlwcGV0fVxuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gICAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAge2NhdWdodC5zdGF0dXN9XHUwMEEwe2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxoMj57Y2F1Z2h0LmRhdGF9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge2Vycm9yLm5hbWV9OiB7ZXJyb3IubWVzc2FnZX1cbiAgICAgICAgPC9oMT5cbiAgICApXG59XG4iLCAiaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyXCJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCJcbmltcG9ydCB7IEZvcm0sIGpzb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCJcblxuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuLi9zZXNzaW9ucy5zZXJ2ZXIuanNcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKVxuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIikudHJpbSgpXG4gIGNvbnN0IHBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goZm9ybS5nZXQoXCJwYXNzd29yZFwiKSwgMTApXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLm1vZGVscy51c2VyLmNyZWF0ZSh7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codXNlcilcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICAgIHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXIuaWQpXG5cbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvc25pcHBldHMvYWxsXCIsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgICAgfSxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIHJldHVybiBqc29uKFxuICAgICAgeyBlcnJvcnM6IGVycm9yLmVycm9ycywgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSkgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktc2Nyb2xsIGgtOTYgbWQ6aC1mdWxsIHctZnVsbCBweC00IG1kOnctNTAtdncgZml4ZWQgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMiBtci0yXCI+Q3JlYXRlIFVzZXI8L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIHJlbG9hZERvY3VtZW50PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdFRvXCIgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgbmFtZT1cImNyZWF0ZVVzZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6YmctZ3JheS03MDAgcHgtNyBweS0yIHJvdW5kZWQtbGcgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS04MDAgdGV4dC13aGl0ZSAgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgQ3JlYXRlIFVzZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5cbmltcG9ydCB7IGRlc3Ryb3lTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIi4uL3Nlc3Npb25zLnNlcnZlclwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgICAgICB9LFxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luXCIpXG59XG4iLCAiaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyXCJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCJcbmltcG9ydCB7IEZvcm0sIGpzb24sIHJlZGlyZWN0LCB1c2VBY3Rpb25EYXRhLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIlxuXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIi4uL3Nlc3Npb25zLnNlcnZlci5qc1wiXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyByZXF1ZXN0IH0pIHtcbi8vICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuLy8gICAgIHJldHVybiBqc29uKHtcbi8vICAgICAgICAgYXV0aFRva2VuOiBzZXNzaW9uLmdldChcImF1dGgtdG9rZW5cIiksXG4vLyAgICAgfSlcbi8vIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKClcbiAgICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG4gICAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpLnRyaW0oKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLm1vZGVscy51c2VyLmZpbmRPbmUoe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIikgLy8gZXhwZWN0ZWQgdG8gYmUgY2F1Z2h0IGJ5IHRoZSBjYXRjaCBiZWxvd1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBqc29uKFxuICAgICAgICAgICAgICAgIHsgZXJyb3JzOiB7IHVzZXJuYW1lOiBcIlVzZXIgbm90IGZvdW5kXCIgfSB9LFxuICAgICAgICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpLnRyaW0oKVxuICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4ganNvbihcbiAgICAgICAgICAgICAgICB7IGVycm9yczogeyBwYXNzd29yZDogXCJXcm9uZyBwYXNzd29yZFwiIH0gfSxcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJhdXRoLXRva2VuXCIpKVxuICAgICAgICBzZXNzaW9uLnNldChcImF1dGgtdG9rZW5cIiwgdXNlci5faWQpXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzZXNzaW9uOiBcIiwgc2Vzc2lvbi5nZXQoXCJhdXRoLXRva2VuXCIpKVxuICAgICAgICAvLyByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gcmVkaXJlY3QoXCIvc25pcHBldHMvYWxsXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgICBcIlNldC1Db29raWVcIjogYGF1dGgtdG9rZW49JHt1c2VyLl9pZH1gLFxuICAgICAgICAgICAgICAgIC8vIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBjb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuIGpzb24oXG4gICAgICAgICAgICB7IGVycm9yczogZXJyb3IuZXJyb3JzLCB2YWx1ZXM6IE9iamVjdC5mcm9tRW50cmllcyhmb3JtKSB9LFxuICAgICAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IGlucHV0RXJyb3JTdHlsZXMgPVxuICAgIFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgZGFyazp0ZXh0LXJvc2UtNDAwIFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktc2Nyb2xsIGgtOTYgbWQ6aC1mdWxsIHctZnVsbCBweC00IG1kOnctNTAtdncgZml4ZWQgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMiBtci0yXCI+TG9naW48L2gxPlxuICAgICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidXNlcm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy51c2VybmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnVzZXJuYW1lLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy52YWx1ZXM/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMudXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpbnB1dEVycm9yU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyb3VuZGVkLWxnICBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5wYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnZhbHVlcz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGlucHV0RXJyb3JTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiByb3VuZGVkLWxnICBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpiZy1ncmF5LTcwMCBweC03IHB5LTIgcm91bmRlZC1sZyBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlICBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJtdC01XCIgYWN0aW9uPVwiL3JlZ2lzdGVyXCIgcmVsb2FkRG9jdW1lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEb24ndCBoYXZlIGEgdXNlciB5ZXQ/XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6YmctZ3JheS03MDAgcHgtNyBweS0yIHJvdW5kZWQtbGcgdGV4dC14bCBmb250LXNlbWlib2xkIGJnLWJsdWUtODAwIHRleHQtd2hpdGUgIGhvdmVyOmJnLWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSB1c2VyIGhlcmVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgRm9ybSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIn4vZGIvY29ubmVjdERiLnNlcnZlci5qc1wiO1xuaW1wb3J0IHNlZWREYXRhIGZyb20gXCJ+L2RiL3NlZWQuanNvblwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpO1xuICBjb25zdCBjb3VudCA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmNvdW50RG9jdW1lbnRzKCk7XG4gIGlmIChjb3VudCA+IDApIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvc25pcHBldHMvYWxsXCIpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0RGIoKTtcblxuICBjb25zdCBfYWN0aW9uID0gZm9ybS5nZXQoXCJfYWN0aW9uXCIpO1xuICBpZiAoX2FjdGlvbiA9PT0gXCJzZWVkXCIpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuaW5zZXJ0TWFueShzZWVkRGF0YSk7XG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvc25pcHBldHMvYWxsXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC02NCBtaW4tdy0yMDAtcHggYmctYmx1ZS03MDAgZGFyazpiZy1ncmF5LTcwMCBmaXhlZCB0b3AtMS8yIGxlZnQtMS80IHJvdW5kZWQtbGcgcC05IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXdoaXRlIFwiPlxuICAgICAgICAgIEl0IHNlZW1zIHRoYXQgeW91ciBkYXRhYmFzZSBpcyBlbXB0eSwgd291bGQgeW91IGxpa2UgbWUgdG8gc2VlZCBzb21lXG4gICAgICAgICAgZGF0YSBmb3IgeW91P1xuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktY2VudGVyIG10LTE2IGdhcC04XCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvc25pcHBldHMvYWxsXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL2FsbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZSBiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC04MDAgcm91bmRlZC1sZyBweC00IHB5LTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBObyEhXHVEODNEXHVERTIxXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG5hbWU9XCJfYWN0aW9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJzZWVkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmVlbi04MDAgYmctZ3JlZW4tNjAwIHJvdW5kZWQtbGcgcHgtNCBweS0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgWWVzIHBsZWFzZSBib3NzXHVEODNEXHVERTA3XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZjUzY2ExOWEnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTc3SVBTQUhYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TTFBKTURMNS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtRFdQU1A0SzUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luJzp7J2lkJzoncm91dGVzL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luLUE0MlJMWFpDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1DUkdOT0xOSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1MNUlVM043LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1LRk9DWVpJTC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWdpc3Rlcic6eydpZCc6J3JvdXRlcy9yZWdpc3RlcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWdpc3RlcicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWdpc3Rlci1YQU5WUk9VVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ1JHTk9MTkouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NTDVJVTNONy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZWVkJzp7J2lkJzoncm91dGVzL3NlZWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2VlZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZWVkLUpVM1FHNVlKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1DNVhOVzZTNi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnJzp7J2lkJzoncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NuaXBwZXRzLzpzbmlwcGV0VGFnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLU03TkFXUFcyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03V1pLS09ZSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUM1WE5XNlM2LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkJzp7J2lkJzoncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZycsJ3BhdGgnOic6c25pcHBldElkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQtWjRVVERXRUguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlJzp7J2lkJzoncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlJywncGFyZW50SWQnOidyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcnLCdwYXRoJzonOnNuaXBwZXRJZC91cGRhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGUtM0FETkI1QkIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1MNUlVM043LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc25pcHBldHMvY3JlYXRlU25pcHBldCc6eydpZCc6J3JvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NuaXBwZXRzL2NyZWF0ZVNuaXBwZXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc25pcHBldHMvY3JlYXRlU25pcHBldC00V0JWTEhQQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTUw1SVUzTjcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUY1M0NBMTlBLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxD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
