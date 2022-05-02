var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var tailwind_default = "/build/_assets/tailwind-GHZZQTJZ.css";

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

// app/components/Icons/Snippie.tsx
init_react();
function SnippieLogo(_a) {
  var _b = _a, { bgFill = "#e2e2e2" } = _b, props = __objRest(_b, ["bgFill"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: "109.36",
    height: "101.965",
    viewBox: "0 0 109.36 101.965"
  }, props), /* @__PURE__ */ React.createElement("rect", {
    width: "64",
    height: "64",
    rx: "32",
    transform: "translate(25.142 16.344)",
    fill: bgFill
  }), /* @__PURE__ */ React.createElement("text", {
    transform: "translate(5.142 28.344) rotate(40)",
    fill: "#d38f2a",
    "font-size": "42",
    "font-family": "Bangers-Regular, Bangers"
  }, /* @__PURE__ */ React.createElement("tspan", {
    x: "0",
    y: "0"
  }, "Snippie")));
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
    className: "px-2 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-700",
    onClick: toggleMode
  }, !darkMode ? /* @__PURE__ */ import_react.default.createElement(MoonIcon, null) : /* @__PURE__ */ import_react.default.createElement(SunIcon, null));
}

// app/components/LoginButton.tsx
init_react();
var import_remix2 = __toESM(require_remix());
var LoginButtonStyle = "p-2 font-normal rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-gray-700";
function LoginButton() {
  const loggedIn = true;
  if (loggedIn) {
    return /* @__PURE__ */ React.createElement(import_remix2.Link, {
      to: "/logout",
      className: LoginButtonStyle
    }, "Logout");
  }
  return /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/login",
    className: LoginButtonStyle
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
    className: "md:my-8 border-r dark:border-gray-700 px-3 ",
    "aria-label": "sidebar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-4 rounded mb-auto flex flex-col items-center gap-2 md:block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement(SnippieLogo, {
    className: "w-20"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between my-4"
  }, /* @__PURE__ */ React.createElement(DarkmodeButton, null), /* @__PURE__ */ React.createElement(LoginButton, null))), /* @__PURE__ */ React.createElement("ul", {
    className: "flex overflow-x-scroll w-full scrollbar-hide gap-3 md:block md:space-y-2 "
  }, isOnLine ? /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/createSnippet",
    className: "flex items-center p-2 text-base font-normal  rounded-lg hover:bg-green-600 bg-green-800 dark:bg-green-800 text-white dark:hover:bg-green-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "Create snippet"))) : null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/all",
    className: "flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "All snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/JavaScript",
    className: "flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "JavaScript snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/PHP",
    className: "flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "PHP snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/CSS",
    className: "flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "CSS snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/snippets/HTML",
    className: "flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
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
    className: "h-screen dark:bg-gray-900 dark:text-white font-sans lg:grid lg:grid-cols-5"
  }, /* @__PURE__ */ React.createElement(SideBar, null), /* @__PURE__ */ React.createElement("main", {
    className: "p-4 overflow-hidden md:overflow-auto col-span-4"
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
var import_react4 = require("react");
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
function displayNotification() {
  if (Notification.permission == "granted") {
    console.log("Display message");
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification("Hello world!", {
        body: "Here is a notification body!",
        icon: "http://lasseaakjaer.com/food-reduction-app-information-architecture.jpg",
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {
            action: "explore",
            title: "Explore this new world",
            icon: "images/checkmark.png"
          },
          {
            action: "close",
            title: "Close notification",
            icon: "images/xmark.png"
          }
        ]
      });
    });
  }
}
function CreateSnippet() {
  const actionData = (0, import_remix6.useActionData)();
  (0, import_react4.useEffect)(() => {
    displayNotification();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "  overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw scrollbar-hide "
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
var import_react5 = require("@remix-run/react");

// app/components/SnippetListItem.jsx
init_react();
var import_remix7 = __toESM(require_remix());
function SnippetListItem({ snippet, languageTag }) {
  const dateAdded = new Date(snippet.dateAdded);
  const displayDate = `${dateAdded.getDate()}-${dateAdded.getMonth()}-${dateAdded.getFullYear()}`;
  return /* @__PURE__ */ React.createElement("li", {
    className: "rounded-lg hover:bg-blue-600  bg-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 p-3 mb-1 "
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
  const actionSnippets = (0, import_react5.useActionData)();
  const languageTag = (0, import_remix8.useParams)().snippetTag;
  function handleChange(event) {
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "border-b md:dark:border-gray-700 mb-4 pb-2"
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
    method: "post",
    onChange: handleChange
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
    className: "lg:flex gap-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "my-8 overflow-y-scroll scrollbar-hide min-w-[200px] lg:max-w-sm basis-1/5 flex-grow"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "list-none gap-1 flex flex-shrink-0 flex-nowrap  md:flex-col"
  }, actionSnippets ? actionSnippets.map((snippet) => /* @__PURE__ */ React.createElement(SnippetListItem, {
    key: snippet._id,
    snippet
  })) : snippets.map((snippet) => /* @__PURE__ */ React.createElement(SnippetListItem, {
    key: snippet._id,
    snippet,
    languageTag
  })), !actionSnippets && snippets.length === 0 ? /* @__PURE__ */ React.createElement("h2", null, "No snippets found") : null)), /* @__PURE__ */ React.createElement(import_react5.Outlet, null)));
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
  Notification.requestPermission(function(status) {
    console.log("Notification permission status:", status);
  });
  const snippetToUpdate = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-y-scroll px-4 md:p-0 scrollbar-hide"
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
var import_react6 = require("react");
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
  const displayDate = dateAdded.toLocaleDateString("da-DK", {
    dateStyle: "long"
  });
  const [copyState, setCopyState] = (0, import_react6.useState)(false);
  const languageTag = (0, import_remix10.useParams)().snippetTag;
  (0, import_react6.useEffect)(() => {
    setCopyState(true);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 overflow-y-scroll h-4/5 md:h-full md:pb-10 scrollbar-hide flex-shrink basis-4/5 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap  items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-bold w-full"
  }, snippet.title), /* @__PURE__ */ React.createElement("div", {
    className: "my-2 flex gap-5 dark:text-gray-400 w-full"
  }, /* @__PURE__ */ React.createElement("p", null, "Date: ", displayDate), /* @__PURE__ */ React.createElement("p", null, "Language: ", snippet.languageTag)), /* @__PURE__ */ React.createElement(import_remix10.Form, {
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
    className: "relative"
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
    className: `${snippet.languageTag.toLowerCase()}+ rounded-lg p-10 scrollbar-hide`
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
    className: "overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw scrollbar-hide"
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
    className: "overflow-y-scroll h-96 md:h-full w-full px-4 md:w-50-vw scrollbar-hide"
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
var import_react_router_dom2 = require("react-router-dom");
var import_remix14 = __toESM(require_remix());
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
    className: " h-64 min-w-200-px bg-blue-700 dark:bg-gray-700 top-1/2 left-1/4 rounded-lg p-9 justify-center"
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
var assets_manifest_default = { "version": "06c74a76", "entry": { "module": "/build/entry.client-VFZRMX5B.js", "imports": ["/build/_shared/chunk-SLPJMDL5.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Y7A2Y7H3.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-ZEKAYXZK.js", "imports": ["/build/_shared/chunk-CRGNOLNJ.js", "/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-KFOCYZIL.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register": { "id": "routes/register", "parentId": "root", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/register-77SMBFNF.js", "imports": ["/build/_shared/chunk-CRGNOLNJ.js", "/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/seed": { "id": "routes/seed", "parentId": "root", "path": "seed", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/seed-YQ2YZU5I.js", "imports": ["/build/_shared/chunk-C5XNW6S6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/snippets/$snippetTag": { "id": "routes/snippets/$snippetTag", "parentId": "root", "path": "snippets/:snippetTag", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag-PONZW5PM.js", "imports": ["/build/_shared/chunk-7WZKKOYJ.js", "/build/_shared/chunk-C5XNW6S6.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/snippets/$snippetTag/$snippetId": { "id": "routes/snippets/$snippetTag/$snippetId", "parentId": "routes/snippets/$snippetTag", "path": ":snippetId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag/$snippetId-I5MDR5HB.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/snippets/$snippetTag/$snippetId.update": { "id": "routes/snippets/$snippetTag/$snippetId.update", "parentId": "routes/snippets/$snippetTag", "path": ":snippetId/update", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/$snippetTag/$snippetId.update-X5W3J2AE.js", "imports": ["/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/snippets/createSnippet": { "id": "routes/snippets/createSnippet", "parentId": "root", "path": "snippets/createSnippet", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/snippets/createSnippet-GBDV37I2.js", "imports": ["/build/_shared/chunk-ML5IU3N7.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-06C74A76.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcbGFzc2VcXERlc2t0b3BcXFBXQS1zbmlwcGV0LXByb2plY3RcXGFwcFxccm9vdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2lkZUJhci5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRGFya21vZGVCdXR0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb25zL0NvcHlJY29uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9JY29ucy9Nb29uSWNvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbnMvU2VhcmNoSWNvbi50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSWNvbnMvU3Rhckljb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb25zL1N1bkljb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ljb25zL1NuaXBwaWUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xvZ2luQnV0dG9uLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMuc2VydmVyLmpzIiwgIi4uL2FwcC9jb29raWVzLnNlcnZlci5qcyIsICJyb3V0ZTpDOlxcVXNlcnNcXGxhc3NlXFxEZXNrdG9wXFxQV0Etc25pcHBldC1wcm9qZWN0XFxhcHBcXHJvdXRlc1xcc25pcHBldHNcXGNyZWF0ZVNuaXBwZXQuanN4IiwgIi4uL2FwcC9kYi9jb25uZWN0RGIuc2VydmVyLmpzIiwgIi4uL2FwcC9kYi9tb2RlbHMuanMiLCAicm91dGU6QzpcXFVzZXJzXFxsYXNzZVxcRGVza3RvcFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcYXBwXFxyb3V0ZXNcXHNuaXBwZXRzXFwkc25pcHBldFRhZy5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU25pcHBldExpc3RJdGVtLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGxhc3NlXFxEZXNrdG9wXFxQV0Etc25pcHBldC1wcm9qZWN0XFxhcHBcXHJvdXRlc1xcc25pcHBldHNcXCRzbmlwcGV0VGFnXFwkc25pcHBldElkLnVwZGF0ZS5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxsYXNzZVxcRGVza3RvcFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcYXBwXFxyb3V0ZXNcXHNuaXBwZXRzXFwkc25pcHBldFRhZ1xcJHNuaXBwZXRJZC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxsYXNzZVxcRGVza3RvcFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcYXBwXFxyb3V0ZXNcXHJlZ2lzdGVyLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGxhc3NlXFxEZXNrdG9wXFxQV0Etc25pcHBldC1wcm9qZWN0XFxhcHBcXHJvdXRlc1xcbG9nb3V0LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXGxhc3NlXFxEZXNrdG9wXFxQV0Etc25pcHBldC1wcm9qZWN0XFxhcHBcXHJvdXRlc1xcbG9naW4uanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcbGFzc2VcXERlc2t0b3BcXFBXQS1zbmlwcGV0LXByb2plY3RcXGFwcFxccm91dGVzXFxzZWVkLmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxcZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxsYXNzZVxcXFxEZXNrdG9wXFxcXFBXQS1zbmlwcGV0LXByb2plY3RcXFxcYXBwXFxcXHJvb3QuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxccm91dGVzXFxcXHNuaXBwZXRzXFxcXGNyZWF0ZVNuaXBwZXQuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxccm91dGVzXFxcXHNuaXBwZXRzXFxcXCRzbmlwcGV0VGFnLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxsYXNzZVxcXFxEZXNrdG9wXFxcXFBXQS1zbmlwcGV0LXByb2plY3RcXFxcYXBwXFxcXHJvdXRlc1xcXFxzbmlwcGV0c1xcXFwkc25pcHBldFRhZ1xcXFwkc25pcHBldElkLnVwZGF0ZS5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbGFzc2VcXFxcRGVza3RvcFxcXFxQV0Etc25pcHBldC1wcm9qZWN0XFxcXGFwcFxcXFxyb3V0ZXNcXFxcc25pcHBldHNcXFxcJHNuaXBwZXRUYWdcXFxcJHNuaXBwZXRJZC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbGFzc2VcXFxcRGVza3RvcFxcXFxQV0Etc25pcHBldC1wcm9qZWN0XFxcXGFwcFxcXFxyb3V0ZXNcXFxccmVnaXN0ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxccm91dGVzXFxcXGxvZ291dC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcbGFzc2VcXFxcRGVza3RvcFxcXFxQV0Etc25pcHBldC1wcm9qZWN0XFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9naW4uanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGxhc3NlXFxcXERlc2t0b3BcXFxcUFdBLXNuaXBwZXQtcHJvamVjdFxcXFxhcHBcXFxccm91dGVzXFxcXHNlZWQuanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNuaXBwZXRzL2NyZWF0ZVNuaXBwZXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzbmlwcGV0cy86c25pcHBldFRhZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQudXBkYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWdcIixcbiAgICAgIHBhdGg6IFwiOnNuaXBwZXRJZC91cGRhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZ1wiLFxuICAgICAgcGF0aDogXCI6c25pcHBldElkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9yZWdpc3RlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcmVnaXN0ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicmVnaXN0ZXJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9zZWVkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZWVkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNlZWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3RhaWx3aW5kLmNzc1wiXG5pbXBvcnQgaGlnaFN0eWxlcyBmcm9tIFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzc1wiXG5pbXBvcnQgeyBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7XG4gICAgTGlua3MsXG4gICAgTGl2ZVJlbG9hZCxcbiAgICBNZXRhLFxuICAgIE91dGxldCxcbiAgICBTY3JpcHRzLFxuICAgIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIlxuXG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi9jb21wb25lbnRzL1NpZGVCYXJcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuL3Nlc3Npb25zLnNlcnZlclwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyByZXF1ZXN0IH0pIHtcbiAgICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICAgIC8vIHJldHVybiBqc29uKHtcbiAgICAvLyAgIHVzZXJJZDogc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIiksXG4gICAgLy8gfSlcbiAgICByZXR1cm4gXCJyXCJcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xuICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogc3R5bGVzLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBoaWdoU3R5bGVzLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwiYXBwbGUtdG91Y2gtaWNvblwiLFxuICAgICAgICBzaXplczogXCI3Nng3NlwiLFxuICAgICAgICBocmVmOiBcIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICBzaXplczogXCIzMngzMlwiLFxuICAgICAgICBocmVmOiBcIi9mYXZpY29uLTMyeDMyLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICBzaXplczogXCIxNngxNlwiLFxuICAgICAgICBocmVmOiBcIi9mYXZpY29uLTE2eDE2LnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwibWFuaWZlc3RcIixcbiAgICAgICAgaHJlZjogXCIvc2l0ZS53ZWJtYW5pZmVzdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICByZWw6IFwibWFzay1pY29uXCIsXG4gICAgICAgIGNvbG9yOiBcIiM3NDI5MTRcIixcbiAgICAgICAgaHJlZjogXCIvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlbDogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiLFxuICAgICAgICBjb250ZW50OiBcIlNuaXBwaWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVsOiBcImFwcGxpY2F0aW9uLW5hbWVcIixcbiAgICAgICAgY29udGVudDogXCJTbmlwcGllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHJlbDogXCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiLFxuICAgICAgICBjb250ZW50OiBcIiM3NDI5MTRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcmVsOiBcInRoZW1lLWNvbG9yXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiI2ZmZmZmZlwiLFxuICAgIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgICAgICAgdGl0bGU6IFwiUmVtaXggc25pcHBldHMgYXBwXCIsXG4gICAgICAgIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICAvLyBjb25zdCBzZXNzaW9uID0gdXNlTG9hZGVyRGF0YSgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGh0bWwgbGFuZz1cImVuXCIgY2xhc3NOYW1lPVwiZGFya1wiPlxuICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgIDxib2R5IGNsYXNzTmFtZT1cImgtc2NyZWVuIGRhcms6YmctZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2FucyBsZzpncmlkIGxnOmdyaWQtY29scy01XCI+XG4gICAgICAgICAgICAgICAgPFNpZGVCYXIgLz5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJwLTQgb3ZlcmZsb3ctaGlkZGVuIG1kOm92ZXJmbG93LWF1dG8gY29sLXNwYW4tNFwiPlxuICAgICAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuXG4gICAgICAgICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IERhcmttb2RlQnV0dG9uIGZyb20gXCIuL0Rhcmttb2RlQnV0dG9uXCJcbmltcG9ydCB7IFNuaXBwaWVMb2dvIH0gZnJvbSBcIi4vSWNvbnNcIlxuaW1wb3J0IExvZ2luQnV0dG9uIGZyb20gXCIuL0xvZ2luQnV0dG9uXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpIHtcbiAgICBjb25zdCBbaXNPbkxpbmUsIHNldElzT25MaW5lXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIC8vIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoKVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SXNPbkxpbmUobmF2aWdhdG9yLm9uTGluZSlcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZXNzaW9uKVxuICAgICAgICAvLyBpZiAoc2Vzc2lvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vICAgICBzZXRMb2dnZWRJbih0cnVlKVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgc2V0TG9nZ2VkSW4oZmFsc2UpXG4gICAgICAgIC8vIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6bXktOCBib3JkZXItciBkYXJrOmJvcmRlci1ncmF5LTcwMCBweC0zIFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwic2lkZWJhclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCByb3VuZGVkIG1iLWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWQ6YmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNuaXBwaWVMb2dvIGNsYXNzTmFtZT1cInctMjBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXJrbW9kZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ2luQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtc2Nyb2xsIHctZnVsbCBzY3JvbGxiYXItaGlkZSBnYXAtMyBtZDpibG9jayBtZDpzcGFjZS15LTIgXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpc09uTGluZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ncmVlbi02MDAgYmctZ3JlZW4tODAwIGRhcms6YmctZ3JlZW4tODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmVlbi03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPkNyZWF0ZSBzbmlwcGV0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1iYXNlIGZvbnQtbm9ybWFsICByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIGRhcms6YmctZ3JheS04MDAgdGV4dC13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZDptbC0zXCI+QWxsIHNuaXBwZXRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL0phdmFTY3JpcHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5KYXZhU2NyaXB0IHNuaXBwZXRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL3NuaXBwZXRzL1BIUFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPlBIUCBzbmlwcGV0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIi9zbmlwcGV0cy9DU1NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS02MDAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kOm1sLTNcIj5DU1Mgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvSFRNTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtYmFzZSBmb250LW5vcm1hbCAgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBiZy1ibHVlLTgwMCBkYXJrOmJnLWdyYXktODAwIHRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWQ6bWwtM1wiPkhUTUwgc25pcHBldHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FzaWRlPlxuICAgIClcbn1cbiIsICJpbXBvcnQgeyBNb29uSWNvbiwgU3VuSWNvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvSWNvbnNcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmttb2RlQnV0dG9uKCkge1xuICAgIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1vZGUoKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKVxuICAgICAgICBkYXJrTW9kZSA/IHNldERhcmtNb2RlKGZhbHNlKSA6IHNldERhcmtNb2RlKHRydWUpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vZGV9XG4gICAgICAgID5cbiAgICAgICAgICAgIHshZGFya01vZGUgPyA8TW9vbkljb24gLz4gOiA8U3VuSWNvbiAvPn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBDb3B5SWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIiNmZmZcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgIGQ9XCJNOCA1SDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi0xTTggNWEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yTTggNWEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAybTAgMGgyYTIgMiAwIDAxMiAydjNtMiA0SDEwbTAgMGwzLTNtLTMgM2wzIDNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBNb29uSWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGhvdmVyOmFuaW1hdGUtcHVsc2UgXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgZD1cIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBTZWFyY2hJY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFN0YXJJY29uKHsgZmlsbCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBzdHJva2UteWVsbG93LTUwMCAgXCJcbiAgICAgICAgICAgIGZpbGw9e2ZpbGwgPyBcIiNlYWIzMDhcIiA6IFwibm9uZVwifVxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkPVwiTTExLjA0OSAyLjkyN2MuMy0uOTIxIDEuNjAzLS45MjEgMS45MDIgMGwxLjUxOSA0LjY3NGExIDEgMCAwMC45NS42OWg0LjkxNWMuOTY5IDAgMS4zNzEgMS4yNC41ODggMS44MWwtMy45NzYgMi44ODhhMSAxIDAgMDAtLjM2MyAxLjExOGwxLjUxOCA0LjY3NGMuMy45MjItLjc1NSAxLjY4OC0xLjUzOCAxLjExOGwtMy45NzYtMi44ODhhMSAxIDAgMDAtMS4xNzYgMGwtMy45NzYgMi44ODhjLS43ODMuNTctMS44MzgtLjE5Ny0xLjUzOC0xLjExOGwxLjUxOC00LjY3NGExIDEgMCAwMC0uMzYzLTEuMTE4bC0zLjk3Ni0yLjg4OGMtLjc4NC0uNTctLjM4LTEuODEuNTg4LTEuODFoNC45MTRhMSAxIDAgMDAuOTUxLS42OWwxLjUxOS00LjY3NHpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBTdW5JY29uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgaG92ZXI6YW5pbWF0ZS1wdWxzZVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgM3YxbTAgMTZ2MW05LTloLTFNNCAxMkgzbTE1LjM2NCA2LjM2NGwtLjcwNy0uNzA3TTYuMzQzIDYuMzQzbC0uNzA3LS43MDdtMTIuNzI4IDBsLS43MDcuNzA3TTYuMzQzIDE3LjY1N2wtLjcwNy43MDdNMTYgMTJhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG59XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIFNuaXBwaWVMb2dvKHsgYmdGaWxsID0gXCIjZTJlMmUyXCIsIC4uLnByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTA5LjM2XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMS45NjVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDkuMzYgMTAxLjk2NVwiXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2NFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjRcIlxuICAgICAgICAgICAgICAgIHJ4PVwiMzJcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNS4xNDIgMTYuMzQ0KVwiXG4gICAgICAgICAgICAgICAgZmlsbD17YmdGaWxsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUuMTQyIDI4LjM0NCkgcm90YXRlKDQwKVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiNkMzhmMmFcIlxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZT1cIjQyXCJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseT1cIkJhbmdlcnMtUmVndWxhciwgQmFuZ2Vyc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRzcGFuIHg9XCIwXCIgeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgU25pcHBpZVxuICAgICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCJcblxuY29uc3QgTG9naW5CdXR0b25TdHlsZSA9XG4gICAgXCJwLTIgZm9udC1ub3JtYWwgcm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCBob3Zlcjp0ZXh0LXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5CdXR0b24oKSB7XG4gICAgY29uc3QgbG9nZ2VkSW4gPSB0cnVlXG5cbiAgICBpZiAobG9nZ2VkSW4pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ291dFwiIGNsYXNzTmFtZT17TG9naW5CdXR0b25TdHlsZX0+XG4gICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiIGNsYXNzTmFtZT17TG9naW5CdXR0b25TdHlsZX0+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuIiwgIi8vIGFwcC9zZXNzaW9ucy5qc1xuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCJcblxuaW1wb3J0IHsgc2Vzc2lvbkNvb2tpZSB9IGZyb20gXCIuL2Nvb2tpZXMuc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IHsgZ2V0U2Vzc2lvbiwgY29tbWl0U2Vzc2lvbiwgZGVzdHJveVNlc3Npb24gfSA9XG4gICAgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UoeyBjb29raWU6IHNlc3Npb25Db29raWUgfSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VyU2Vzc2lvbihyZXF1ZXN0KSB7XG4gICAgLy8gZ2V0IHRoZSBzZXNzaW9uXG4gICAgY29uc3QgY29va2llID0gcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvb2tpZSlcblxuICAgIC8vIHZhbGlkYXRlIHRoZSBzZXNzaW9uLCBgdXNlcklkYCBpcyBqdXN0IGFuIGV4YW1wbGUsIHVzZSB3aGF0ZXZlciB2YWx1ZSB5b3VcbiAgICAvLyBwdXQgaW4gdGhlIHNlc3Npb24gd2hlbiB0aGUgdXNlciBhdXRoZW50aWNhdGVkXG4gICAgaWYgKCFzZXNzaW9uLmhhcyhcInVzZXJJZFwiKSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIHNlc3Npb24sIHJlZGlyZWN0IHRvIGxvZ2luXG4gICAgICAgIHRocm93IHJlZGlyZWN0KFwiL2xvZ2luXCIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHNlc3Npb25cbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb29raWUgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25Db29raWUgPSBjcmVhdGVDb29raWUoXCJfX3Nlc3Npb25cIiwge1xuICBodHRwT25seTogdHJ1ZSxcbiAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3LFxuICBzZWN1cmU6IHRydWUsXG4gIHNlY3JldHM6IFtwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVUXSxcbn0pO1xuIiwgImltcG9ydCBjb25uZWN0RGIgZnJvbSBcIn4vZGIvY29ubmVjdERiLnNlcnZlclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgRm9ybSwganNvbiwgcmVkaXJlY3QsIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwicmVtaXhcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5nZXQoXCJ0aXRsZVwiKVxuICAgIGNvbnN0IGxhbmd1YWdlVGFnID0gZm9ybS5nZXQoXCJsYW5ndWFnZVRhZ1wiKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICAgIGNvbnN0IHNuaXBwZXQgPSBmb3JtLmdldChcInNuaXBwZXRcIilcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdTbmlwcGV0ID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuY3JlYXRlKHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgbGFuZ3VhZ2VUYWcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHNuaXBwZXQsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWRpcmVjdChgL3NuaXBwZXRzL3NuaXBwZXQvJHtuZXdTbmlwcGV0Ll9pZH1gKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBqc29uKFxuICAgICAgICAgICAgeyBlcnJvcnM6IGVycm9yLmVycm9ycywgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSkgfSxcbiAgICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgICApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Tm90aWZpY2F0aW9uKCkge1xuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PSBcImdyYW50ZWRcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpc3BsYXkgbWVzc2FnZVwiKVxuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5nZXRSZWdpc3RyYXRpb24oKS50aGVuKGZ1bmN0aW9uIChyZWcpIHtcbiAgICAgICAgICAgIHJlZy5zaG93Tm90aWZpY2F0aW9uKFwiSGVsbG8gd29ybGQhXCIsIHtcbiAgICAgICAgICAgICAgICBib2R5OiBcIkhlcmUgaXMgYSBub3RpZmljYXRpb24gYm9keSFcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImh0dHA6Ly9sYXNzZWFha2phZXIuY29tL2Zvb2QtcmVkdWN0aW9uLWFwcC1pbmZvcm1hdGlvbi1hcmNoaXRlY3R1cmUuanBnXCIsXG4gICAgICAgICAgICAgICAgdmlicmF0ZTogWzEwMCwgNTAsIDEwMF0sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBkYXRlT2ZBcnJpdmFsOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5S2V5OiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiZXhwbG9yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXhwbG9yZSB0aGlzIG5ldyB3b3JsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJpbWFnZXMvY2hlY2ttYXJrLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNsb3NlIG5vdGlmaWNhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJpbWFnZXMveG1hcmsucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVTbmlwcGV0KCkge1xuICAgIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlOb3RpZmljYXRpb24oKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIG92ZXJmbG93LXktc2Nyb2xsIGgtOTYgbWQ6aC1mdWxsIHctZnVsbCBweC00IG1kOnctNTAtdncgc2Nyb2xsYmFyLWhpZGUgXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTIgIG1yLTJcIj5DcmVhdGUgc25pcHBldDwvaDE+XG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICBUaXRsZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmVycm9ycy50aXRsZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGRhcms6YmctZ3JheS03MDAgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICAgXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImxhbmd1YWdlVGFnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlVGFnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHlwZVNjcmlwdFwiPlR5cGVTY3JpcHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBIUFwiPlBIUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NTXCI+Q1NTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIVE1MXCI+SFRNTDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiamF2YVwiPkphdmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1YnlcIj5SdWJ5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoYXNrZWxcIj5IYXNrZWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvZmZlZXNjcmlwdFwiPkNvZmZlZVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFza2VsbFwiPkhhc2tlbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtvdGxpblwiPktvdGxpbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFydFwiPkRhcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImx1YVwiPkx1YTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ29cIj5Hbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hlbGxcIj5TaGVsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3FsXCI+U1FMPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZXJsXCI+UGVybDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3dpZnRcIj5Td2lmdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3NcIj5DIzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYysrXCI+QysrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJweXRob25cIj5QeXRob248L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDBweFwiLCB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGRhcms6YmctZ3JheS03MDAgcmVzaXplLW5vbmUgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic25pcHBldFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNuaXBwZXRcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuc25pcHBldCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycy5zbmlwcGV0Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic25pcHBldFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBpZD1cInNuaXBwZXRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiNjYlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ibGFjayBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIgcm91bmRlZC1sZyAgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgIFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6YmctZ3JheS03MDAgcHgtNyBweS0yIHJvdW5kZWQtbGcgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS04MDAgdGV4dC13aGl0ZSAgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBzbmlwcGV0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsICJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBtb2RlbHMgfSBmcm9tIFwiLi9tb2RlbHMuanNcIjtcblxuY29uc3QgeyBNT05HT0RCX1VSTCwgTk9ERV9FTlYgfSA9IHByb2Nlc3MuZW52O1xuXG5pZiAoIU1PTkdPREJfVVJMKSB7XG4gIGlmIChOT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJMIGVudmlyb25tZW50IHZhcmlhYmxlIFx1MjAxNCBwb2ludGluZyB0byB5b3VyIGZ1bGwgY29ubmVjdGlvbiBzdHJpbmcsIGluY2x1ZGluZyBkYXRhYmFzZSBuYW1lLlwiXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJMIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSBhbiAuZW52IGZpbGUgXHUyMDE0IHBvaW50aW5nIHRvIHlvdXIgZnVsbCBjb25uZWN0aW9uIHN0cmluZywgaW5jbHVkaW5nIGRhdGFiYXNlIG5hbWUuXCJcbiAgICApO1xuICB9XG59XG5cbi8vIFdlIHJldXNlIGFueSBleGlzdGluZyBNb25nb29zZSBkYiBjb25uZWN0aW9uIHRvIGF2b2lkIGNyZWF0aW5nIG11bHRpcGxlXG4vLyBjb25uZWN0aW9ucyBpbiBkZXYgbW9kZSB3aGVuIFJlbWl4IFwicHVyZ2VzIHRoZSByZXF1aXJlIGNhY2hlXCIgd2hlbiByZWxvYWRpbmdcbi8vIG9uIGZpbGUgY2hhbmdlcy5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REYigpIHtcbiAgLy8gUmV1c2UgdGhlIGV4aXN0aW5nIE1vbmdvb3NlIGNvbm5lY3Rpb24gaWYgd2UgaGF2ZSBvbmUuLi5cbiAgLy8gaHR0cHM6Ly9tb25nb29zZWpzLmNvbS9kb2NzL2FwaS9jb25uZWN0aW9uLmh0bWwjY29ubmVjdGlvbl9Db25uZWN0aW9uLXJlYWR5U3RhdGVcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA+IDApIHtcbiAgICAvLyAuLi5idXQgb3ZlcndyaXRlIGFsbCBtb2RlbHMgaW4gZGV2ZWxvcG1lbnQgdG8gZW5zdXJlIHdlIHBpY2sgdXAgYW55IGNoYW5nZXMgbWFkZSBpbiBzY2hlbWFzXG4gICAgaWYgKE5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24uZGVsZXRlTW9kZWwobW9kZWwubmFtZSk7XG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3Rpb24ubW9kZWwobW9kZWwubmFtZSwgbW9kZWwuc2NoZW1hLCBtb2RlbC5jb2xsZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbjtcbiAgfVxuXG4gIC8vIElmIG5vIGNvbm5lY3Rpb24gZXhpc3RzIHlldCwgc2V0IHVwIGV2ZW50IGxvZ2dpbmcuLi5cbiAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImNvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJNb25nb29zZSBjb25uZWN0ZWQsIE5PREVfRU5WPSVzXCIsIE5PREVfRU5WKTtcbiAgfSk7XG5cbiAgbW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImRpc2Nvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJNb25nb29zZSBESVNDT05ORUNURUQsIE5PREVfRU5WPSVzXCIsIE5PREVfRU5WKTtcbiAgfSk7XG5cbiAgLy8gLi4uYW5kIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uOlxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJMLCB7XG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgfSk7XG5cbiAgLy8gXCJNb2RlbHMgYXJlIGFsd2F5cyBzY29wZWQgdG8gYSBzaW5nbGUgY29ubmVjdGlvbi5cIlxuICAvLyBodHRwczovL21vbmdvb3NlanMuY29tL2RvY3MvY29ubmVjdGlvbnMuaHRtbCNtdWx0aXBsZV9jb25uZWN0aW9uc1xuICAvLyBTbyB3ZSBzZXQgdGhlbSB1cCBoZXJlIHRvIGF2b2lkIG92ZXJ3cml0aW5nIGFuZCBnZXR0aW5nIGVycm9ycyBpbiBkZXYgbW9kZS5cbiAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcbiAgICBtb25nb29zZS5jb25uZWN0aW9uLm1vZGVsKG1vZGVsLm5hbWUsIG1vZGVsLnNjaGVtYSwgbW9kZWwuY29sbGVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbjtcbn1cbiIsICJpbXBvcnQgeyBtb25nb29zZSB9IGZyb20gXCJtb25nb29zZVwiXG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZVxuXG5jb25zdCBzbmlwcGV0U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHRpdGxlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG1pbkxlbmd0aDogWzUsIFwiVG9vIHNob3J0LCBtaW5pbXVtIDUgY2hhcmFjdGVyc1wiXSxcbiAgfSxcbiAgbGFuZ3VhZ2VUYWc6IFN0cmluZyxcbiAgc25pcHBldDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiTWlzc2luZyBzbmlwcGV0XCJdLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiTWlzc2luZyBkZXNjcmlwdGlvblwiXSxcbiAgfSxcbiAgZmF2b3JpdGU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBkYXRlQWRkZWQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICB9LFxuICBsYXN0TW9kaWZpZWQ6IHtcbiAgICB0eXBlOiBEYXRlLFxuICB9LFxufSlcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiR290dGEgaGF2ZSBhIHVzZXJuYW1lXCJdLFxuICB9LFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiR290dGEgaGF2ZSBhIHBhc3N3b3JkXCJdLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IG1vZGVscyA9IFtcbiAge1xuICAgIG5hbWU6IFwiU25pcHBldFwiLFxuICAgIHNjaGVtYTogc25pcHBldFNjaGVtYSxcbiAgICBjb2xsZWN0aW9uOiBcInNuaXBwZXRzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInVzZXJcIixcbiAgICBzY2hlbWE6IHVzZXJTY2hlbWEsXG4gICAgY29sbGVjdGlvbjogXCJ1c2Vyc1wiLFxuICB9LFxuXVxuIiwgImltcG9ydCB7IE91dGxldCwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCJcbmltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwifi9jb21wb25lbnRzL0ljb25zXCJcbmltcG9ydCBTbmlwcGV0TGlzdEl0ZW0gZnJvbSBcIn4vY29tcG9uZW50cy9TbmlwcGV0TGlzdEl0ZW1cIlxuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyLmpzXCJcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKClcblxuICAgIGlmIChwYXJhbXMuc25pcHBldFRhZyA9PT0gXCJhbGxcIikge1xuICAgICAgICByZXR1cm4gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoeyBsYW5ndWFnZVRhZzogcGFyYW1zLnNuaXBwZXRUYWcgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QsIHBhcmFtcyB9KSB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBTdHJpbmcocGFyYW1zLnNuaXBwZXRUYWcpXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICAgIGNvbnN0IF9hY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIilcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG4gICAgc3dpdGNoIChfYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJzZWFyY2hcIjpcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gZm9ybS5nZXQoXCJzZWFyY2hRdWVyeVwiKVxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoU25pcHBldHMgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5maW5kKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogeyAkcmVnZXg6IG5ldyBSZWdFeHAocXVlcnksIFwiaVwiKSB9LFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFNuaXBwZXRzXG5cbiAgICAgICAgY2FzZSBcInNvcnRcIjpcbiAgICAgICAgICAgIGNvbnN0IHNvcnRNZXRob2QgPSBmb3JtLmdldChcInNvcnRNZXRob2RcIilcbiAgICAgICAgICAgIGxldCBzbmlwcGV0cyA9IFtdXG5cbiAgICAgICAgICAgIGlmIChzb3J0TWV0aG9kID09PSBcInVwZGF0ZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghKGxhbmd1YWdlID09PSBcImFsbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgICB9KS5zb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogMSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKS5zb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogMSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRNZXRob2QgPT09IFwiYWRkZWRcIikge1xuICAgICAgICAgICAgICAgIGlmICghKGxhbmd1YWdlID09PSBcImFsbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgICB9KS5zb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVBZGRlZDogMSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoKS5zb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVBZGRlZDogMSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRNZXRob2QgPT09IFwidGl0bGVcIikge1xuICAgICAgICAgICAgICAgIGlmICghKGxhbmd1YWdlID09PSBcImFsbFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc6IGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgICAgICB9KS5zb3J0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAxLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNuaXBwZXRzID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCgpLnNvcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0TWV0aG9kID09PSBcImZhdm9yaXRlc1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEobGFuZ3VhZ2UgPT09IFwiYWxsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNuaXBwZXRzID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZVRhZzogbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0cyA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmQoeyBmYXZvcml0ZTogMSB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgICBjb25zdCBzbmlwcGV0cyA9IHVzZUxvYWRlckRhdGEoKVxuICAgIGNvbnN0IGFjdGlvblNuaXBwZXRzID0gdXNlQWN0aW9uRGF0YSgpXG4gICAgY29uc3QgbGFuZ3VhZ2VUYWcgPSB1c2VQYXJhbXMoKS5zbmlwcGV0VGFnXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHt9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBtZDpkYXJrOmJvcmRlci1ncmF5LTcwMCBtYi00IHBiLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VUYWd9IFNuaXBwZXRzXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBweC0xIGJvcmRlci1iLXNsYXRlLTQwMCBkYXJrOmJvcmRlci1ub25lIGRhcms6dGV4dC1ncmF5LTgwMCBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hRdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBzbmlwcGV0cy4uLlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNvcnRNZXRob2RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LWdyYXktODAwIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXBkYXRlZFwiPkxhc3QgdXBkYXRlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYXZvcml0ZXNcIj5GYXZvcml0ZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhZGRlZFwiPkRhdGUgYWRkZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9hY3Rpb25cIiB2YWx1ZT1cInNvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBweC0zIHJvdW5kZWQtbGcgcHktMSBiZy1ibHVlLTgwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU29ydFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleCBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktOCBvdmVyZmxvdy15LXNjcm9sbCBzY3JvbGxiYXItaGlkZSBtaW4tdy1bMjAwcHhdIGxnOm1heC13LXNtIGJhc2lzLTEvNSBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBnYXAtMSBmbGV4IGZsZXgtc2hyaW5rLTAgZmxleC1ub3dyYXAgIG1kOmZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uU25pcHBldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFjdGlvblNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmlwcGV0TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzbmlwcGV0Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc25pcHBldD17c25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNuaXBwZXRzLm1hcCgoc25pcHBldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmlwcGV0TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzbmlwcGV0Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc25pcHBldD17c25pcHBldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VUYWc9e2xhbmd1YWdlVGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHshYWN0aW9uU25pcHBldHMgJiYgc25pcHBldHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5ObyBzbmlwcGV0cyBmb3VuZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge2Vycm9yLm5hbWV9OiB7ZXJyb3IubWVzc2FnZX1cbiAgICAgICAgPC9oMT5cbiAgICApXG59XG4iLCAiaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tIFwifi9jb21wb25lbnRzL0ljb25zXCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbmlwcGV0TGlzdEl0ZW0oeyBzbmlwcGV0LCBsYW5ndWFnZVRhZyB9KSB7XG4gICAgY29uc3QgZGF0ZUFkZGVkID0gbmV3IERhdGUoc25pcHBldC5kYXRlQWRkZWQpXG4gICAgY29uc3QgZGlzcGxheURhdGUgPSBgJHtkYXRlQWRkZWQuZ2V0RGF0ZSgpfS0ke2RhdGVBZGRlZC5nZXRNb250aCgpfS0ke2RhdGVBZGRlZC5nZXRGdWxsWWVhcigpfWBcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBob3ZlcjpiZy1ibHVlLTYwMCAgYmctYmx1ZS04MDAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIHAtMyBtYi0xIFwiPlxuICAgICAgICAgICAgPExpbmsgdG89e2Avc25pcHBldHMvJHtsYW5ndWFnZVRhZ30vJHtzbmlwcGV0Ll9pZH1gfT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7c25pcHBldC5kZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgMzApfSAuLi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlEYXRlfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBmaWxsPXtzbmlwcGV0LmZhdm9yaXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgIClcbn1cbiIsICJpbXBvcnQgY29ubmVjdERiIGZyb20gXCJ+L2RiL2Nvbm5lY3REYi5zZXJ2ZXJcIlxuaW1wb3J0IHsgRm9ybSwganNvbiwgcmVkaXJlY3QsIHVzZUFjdGlvbkRhdGEsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcGFyYW1zIH0pIHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG4gICAgY29uc3Qgc25pcHBldCA9IGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmRCeUlkKHBhcmFtcy5zbmlwcGV0SWQpXG4gICAgaWYgKCFzbmlwcGV0KSB7XG4gICAgICAgIHRocm93IG5ldyBSZXNwb25zZShgQ291bGRuJ3QgZmluZCBib29rIHdpdGggaWQgJHtwYXJhbXMuc25pcHBldElkfWAsIHtcbiAgICAgICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4ganNvbihzbmlwcGV0KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5nZXQoXCJ0aXRsZVwiKVxuICAgIGNvbnN0IGxhbmd1YWdlVGFnID0gZm9ybS5nZXQoXCJsYW5ndWFnZVRhZ1wiKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICAgIGNvbnN0IHNuaXBwZXQgPSBmb3JtLmdldChcInNuaXBwZXRcIilcbiAgICBjb25zdCBzbmlwcGV0SWQgPSBmb3JtLmdldChcInNuaXBwZXRJZFwiKVxuICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKClcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgICB7IF9pZDogc25pcHBldElkIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJHNldDoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlVGFnOiBsYW5ndWFnZVRhZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzbmlwcGV0OiBzbmlwcGV0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJGN1cnJlbnREYXRlOiB7IGxhc3RNb2RpZmllZDogdHJ1ZSB9LFxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgcmV0dXJuIHJlZGlyZWN0KGAvc25pcHBldHMvc25pcHBldC8ke3NuaXBwZXRJZH1gKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBqc29uKFxuICAgICAgICAgICAgeyBlcnJvcnM6IGVycm9yLmVycm9ycywgdmFsdWVzOiBPYmplY3QuZnJvbUVudHJpZXMoZm9ybSkgfSxcbiAgICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVTbmlwcGV0KCkge1xuICAgIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKClcblxuICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHBlcm1pc3Npb24gc3RhdHVzOlwiLCBzdGF0dXMpXG4gICAgfSlcblxuICAgIGNvbnN0IHNuaXBwZXRUb1VwZGF0ZSA9IHVzZUxvYWRlckRhdGEoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1zY3JvbGwgcHgtNCBtZDpwLTAgc2Nyb2xsYmFyLWhpZGVcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItMiAgbXItMlwiPlVwZGF0ZSBzbmlwcGV0PC9oMT5cbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIFRpdGxlXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnRpdGxlLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgZGFyazpiZy1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiByb3VuZGVkLWxnIHB4LTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSAgIGRhcms6YmctZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibGFuZ3VhZ2VUYWdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMYW5ndWFnZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NuaXBwZXRUb1VwZGF0ZS5sYW5ndWFnZVRhZ31cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhbmd1YWdlVGFnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgICBkYXJrOmJnLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXZhU2NyaXB0XCI+SmF2YVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHlwZVNjcmlwdFwiPlR5cGVTY3JpcHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBIUFwiPlBIUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NTXCI+Q1NTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIVE1MXCI+SFRNTDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiamF2YVwiPkphdmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1YnlcIj5SdWJ5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoYXNrZWxcIj5IYXNrZWw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvZmZlZXNjcmlwdFwiPkNvZmZlZVNjcmlwdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGFza2VsbFwiPkhhc2tlbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtvdGxpblwiPktvdGxpbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFydFwiPkRhcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImx1YVwiPkx1YTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ29cIj5Hbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hlbGxcIj5TaGVsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3FsXCI+U1FMPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZXJsXCI+UGVybDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3dpZnRcIj5Td2lmdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3NcIj5DIzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYysrXCI+QysrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJweXRob25cIj5QeXRob248L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXQtMyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDBweFwiLCB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3NuaXBwZXRUb1VwZGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcm91bmRlZC1sZyBweC0yIGRhcms6YmctZ3JheS03MDAgcmVzaXplLW5vbmUgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBkYXJrOnRleHQtYmxhY2sgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCByZXNpemUtbm9uZSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInNuaXBwZXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTbmlwcGV0XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic25pcHBldFwiXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c25pcHBldFRvVXBkYXRlLnNuaXBwZXR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwic25pcHBldFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCI2NiVcIiB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIHJlc2l6ZS1ub25lIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZGFyazp0ZXh0LWJsYWNrIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiByb3VuZGVkLWxnICBweC0yIGRhcms6YmctZ3JheS03MDAgcmVzaXplLW5vbmUgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMuZGVzY3JpcHRpb24ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic25pcHBldElkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NuaXBwZXRUb1VwZGF0ZS5faWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmJnLWdyYXktNzAwIHB4LTcgcHktMiByb3VuZGVkLWxnIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIHRleHQtd2hpdGUgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTYXZlIHNuaXBwZXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IENvcHlJY29uLCBTdGFySWNvbiB9IGZyb20gXCJ+L2NvbXBvbmVudHMvSWNvbnNcIlxuaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyLmpzXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tIFwicmVhY3QtaGlnaGxpZ2h0XCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXG5pbXBvcnQgeyBGb3JtLCBqc29uLCByZWRpcmVjdCwgdXNlQ2F0Y2gsIHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKClcbiAgICBjb25zdCBzbmlwcGV0ID0gYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZmluZEJ5SWQocGFyYW1zLnNuaXBwZXRJZClcbiAgICBpZiAoIXNuaXBwZXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKFxuICAgICAgICAgICAgYENvdWxkbid0IGZpbmQgc25pcHBldHMgd2l0aCBpZCAke3BhcmFtcy5zbmlwcGV0SWR9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQwNCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4ganNvbihzbmlwcGV0KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICAgIGNvbnN0IF9hY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIilcbiAgICBjb25zdCBzbmlwcGV0SWQgPSBmb3JtLmdldChcInNuaXBwZXRJZFwiKVxuICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKClcblxuICAgIHN3aXRjaCAoX2FjdGlvbikge1xuICAgICAgICBjYXNlIFwiZmF2b3JpdGVUb2dnbGVcIjpcbiAgICAgICAgICAgIGNvbnN0IGlzRmF2b3J0aWUgPSBmb3JtLmdldChcImlzRmF2b3JpdGVcIilcbiAgICAgICAgICAgIGlmIChpc0Zhdm9ydGllID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRiLm1vZGVscy5TbmlwcGV0LnVwZGF0ZU9uZShcbiAgICAgICAgICAgICAgICAgICAgeyBfaWQ6IHNuaXBwZXRJZCB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2V0OiB7IGZhdm9yaXRlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0Zhdm9ydGllID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC51cGRhdGVPbmUoXG4gICAgICAgICAgICAgICAgICAgIHsgX2lkOiBzbmlwcGV0SWQgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHNldDogeyBmYXZvcml0ZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgICAgYXdhaXQgZGIubW9kZWxzLlNuaXBwZXQuZGVsZXRlT25lKHsgX2lkOiBzbmlwcGV0SWQgfSlcbiAgICAgICAgICAgIHJldHVybiByZWRpcmVjdChcIi9zbmlwcGV0cy9zbmlwcGV0XCIpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rUGFnZSgpIHtcbiAgICBjb25zdCBzbmlwcGV0ID0gdXNlTG9hZGVyRGF0YSgpXG4gICAgY29uc3QgZGF0ZUFkZGVkID0gbmV3IERhdGUoc25pcHBldC5kYXRlQWRkZWQpXG4gICAgY29uc3QgZGlzcGxheURhdGUgPSBkYXRlQWRkZWQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZGEtREtcIiwge1xuICAgICAgICBkYXRlU3R5bGU6IFwibG9uZ1wiLFxuICAgIH0pXG4gICAgY29uc3QgW2NvcHlTdGF0ZSwgc2V0Q29weVN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGxhbmd1YWdlVGFnID0gdXNlUGFyYW1zKCkuc25pcHBldFRhZ1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q29weVN0YXRlKHRydWUpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgb3ZlcmZsb3cteS1zY3JvbGwgaC00LzUgbWQ6aC1mdWxsIG1kOnBiLTEwIHNjcm9sbGJhci1oaWRlIGZsZXgtc2hyaW5rIGJhc2lzLTQvNSBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdy1mdWxsXCI+e3NuaXBwZXQudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgZmxleCBnYXAtNSBkYXJrOnRleHQtZ3JheS00MDAgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRhdGU6IHtkaXNwbGF5RGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxhbmd1YWdlOiB7c25pcHBldC5sYW5ndWFnZVRhZ308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIGgtZml0IGJnLWJsdWUtODAwIGhvdmVyOmJnLWJsdWUtNjAwIGRhcms6YmctZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCByb3VuZGVkLWxnIHB4LTIgcHktMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzbmlwcGV0SWRcIiB2YWx1ZT17c25pcHBldC5faWR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZhdm9yaXRlVG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpc0Zhdm9yaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzbmlwcGV0LmZhdm9yaXRlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiBmaWxsPXtzbmlwcGV0LmZhdm9yaXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGhvdmVyOmJnLWJsdWUtNjAwIGJnLWJsdWUtODAwIHRleHQtd2hpdGUgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIG1sLTQgcm91bmRlZC1sZyBweC0yIHB5LTFcIlxuICAgICAgICAgICAgICAgICAgICB0bz17YC9zbmlwcGV0cy8ke2xhbmd1YWdlVGFnfS8ke3NuaXBwZXQuX2lkfS91cGRhdGVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlIFNuaXBwZXRcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC03MDAgaG92ZXI6YmctcmVkLTUwMCBtbC00IHJvdW5kZWQtbGcgcHgtMiBweS0xXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNuaXBwZXRJZFwiIHZhbHVlPXtzbmlwcGV0Ll9pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX2FjdGlvblwiIHZhbHVlPVwiZGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIiBtdC0yIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPkRlc2NyaXB0aW9uPC9oMj5cbiAgICAgICAgICAgIDxwPntzbmlwcGV0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCIgdGV4dC14bCBmb250LXNlbWlib2xkIG10LTQgbWItMlwiPlNuaXBwZXQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIHtjb3B5U3RhdGUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc25pcHBldC5zbmlwcGV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSAgcmlnaHQtMCBwLTMgZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1zbSBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGhpZGRlbiBncm91cC1ob3ZlcjpibG9jayB0ZXh0LWdyYXktMzAwIGdyb3VwLWFjdGl2ZTpoaWRkZW4gbXItMSBiZy1ncmF5LTYwMCByb3VuZGVkLWxnIHB4LTIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHkgdG8gY2xpcGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5SWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgPEhpZ2hsaWdodFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NuaXBwZXQubGFuZ3VhZ2VUYWcudG9Mb3dlckNhc2UoKX0rIHJvdW5kZWQtbGcgcC0xMCBzY3JvbGxiYXItaGlkZWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c25pcHBldC5zbmlwcGV0fVxuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gICAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAge2NhdWdodC5zdGF0dXN9XHUwMEEwe2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxoMj57Y2F1Z2h0LmRhdGF9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge2Vycm9yLm5hbWV9OiB7ZXJyb3IubWVzc2FnZX1cbiAgICAgICAgPC9oMT5cbiAgICApXG59XG4iLCAiaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyXCJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCJcbmltcG9ydCB7IEZvcm0sIGpzb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCJcblxuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuLi9zZXNzaW9ucy5zZXJ2ZXIuanNcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICAgIGNvbnN0IGRiID0gYXdhaXQgY29ubmVjdERiKClcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIikudHJpbSgpXG4gICAgY29uc3QgcGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChmb3JtLmdldChcInBhc3N3b3JkXCIpLCAxMClcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIubW9kZWxzLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpXG4gICAgICAgIHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXIuaWQpXG5cbiAgICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL3NuaXBwZXRzL2FsbFwiLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICByZXR1cm4ganNvbihcbiAgICAgICAgICAgIHsgZXJyb3JzOiBlcnJvci5lcnJvcnMsIHZhbHVlczogT2JqZWN0LmZyb21FbnRyaWVzKGZvcm0pIH0sXG4gICAgICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LXNjcm9sbCBoLTk2IG1kOmgtZnVsbCB3LWZ1bGwgcHgtNCBtZDp3LTUwLXZ3IHNjcm9sbGJhci1oaWRlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTIgbXItMlwiPkNyZWF0ZSBVc2VyPC9oMT5cbiAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiByZWxvYWREb2N1bWVudD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdFRvXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VybmFtZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQteGwgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgcHgtMiBkYXJrOmJnLWdyYXktNzAwIGJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjcmVhdGVVc2VyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpiZy1ncmF5LTcwMCBweC03IHB5LTIgcm91bmRlZC1sZyBtdC0zIHRleHQteGwgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTgwMCB0ZXh0LXdoaXRlICBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgVXNlclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCAiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIlxuXG5pbXBvcnQgeyBkZXN0cm95U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuLi9zZXNzaW9ucy5zZXJ2ZXJcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgcmVxdWVzdCB9KSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcblxuICAgIHJldHVybiByZWRpcmVjdChcIi9sb2dpblwiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBkZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICAgICAgfSxcbiAgICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICAgIHJldHVybiByZWRpcmVjdChcIi9sb2dpblwiKVxufVxuIiwgImltcG9ydCBjb25uZWN0RGIgZnJvbSBcIn4vZGIvY29ubmVjdERiLnNlcnZlclwiXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiXG5pbXBvcnQgeyBGb3JtLCBqc29uLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCJcblxuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiwgZ2V0U2Vzc2lvbiB9IGZyb20gXCIuLi9zZXNzaW9ucy5zZXJ2ZXIuanNcIlxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKHsgcmVxdWVzdCB9KSB7XG4vLyAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcbi8vICAgICByZXR1cm4ganNvbih7XG4vLyAgICAgICAgIGF1dGhUb2tlbjogc2Vzc2lvbi5nZXQoXCJhdXRoLXRva2VuXCIpLFxuLy8gICAgIH0pXG4vLyB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3Rpb24oeyByZXF1ZXN0IH0pIHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG4gICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICAgIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoXCJ1c2VybmFtZVwiKS50cmltKClcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5tb2RlbHMudXNlci5maW5kT25lKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kXCIpIC8vIGV4cGVjdGVkIHRvIGJlIGNhdWdodCBieSB0aGUgY2F0Y2ggYmVsb3dcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4ganNvbihcbiAgICAgICAgICAgICAgICB7IGVycm9yczogeyB1c2VybmFtZTogXCJVc2VyIG5vdCBmb3VuZFwiIH0gfSxcbiAgICAgICAgICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKS50cmltKClcbiAgICAgICAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZClcbiAgICAgICAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGpzb24oXG4gICAgICAgICAgICAgICAgeyBlcnJvcnM6IHsgcGFzc3dvcmQ6IFwiV3JvbmcgcGFzc3dvcmRcIiB9IH0sXG4gICAgICAgICAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiYXV0aC10b2tlblwiKSlcbiAgICAgICAgc2Vzc2lvbi5zZXQoXCJhdXRoLXRva2VuXCIsIHVzZXIuX2lkKVxuXG4gICAgICAgIC8vIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiByZWRpcmVjdChcIi9zbmlwcGV0cy9hbGxcIiwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBgYXV0aC10b2tlbj0ke3VzZXIuX2lkfWAsXG4gICAgICAgICAgICAgICAgLy8gXCJTZXQtQ29va2llXCI6IGF3YWl0IGNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICByZXR1cm4ganNvbihcbiAgICAgICAgICAgIHsgZXJyb3JzOiBlcnJvci5lcnJvcnMsIHZhbHVlczogT2JqZWN0LmZyb21FbnRyaWVzKGZvcm0pIH0sXG4gICAgICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgaW5wdXRFcnJvclN0eWxlcyA9XG4gICAgXCJib3JkZXItMiBib3JkZXItcmVkLTUwMCByb3VuZGVkLWxnIHB4LTIgZGFyazpiZy1ncmF5LTcwMCBiZy1ibHVlLTYwMCBkYXJrOnRleHQtcm9zZS00MDAgXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAgIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1zY3JvbGwgaC05NiBtZDpoLWZ1bGwgdy1mdWxsIHB4LTQgbWQ6dy01MC12dyBzY3JvbGxiYXItaGlkZVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi0yIG1yLTJcIj5Mb2dpbjwvaDE+XG4gICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVkaXJlY3RUb1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwicmVkaXJlY3RUb1wiKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VybmFtZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnVzZXJuYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMudXNlcm5hbWUubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LnZhbHVlcz8udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmVycm9ycy51c2VybmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGlucHV0RXJyb3JTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzLnBhc3N3b3JkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnMucGFzc3dvcmQubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8udmFsdWVzPy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaW5wdXRFcnJvclN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiIHJvdW5kZWQtbGcgIHB4LTIgZGFyazpiZy1ncmF5LTcwMCBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9naW5cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmJnLWdyYXktNzAwIHB4LTcgcHktMiByb3VuZGVkLWxnIG10LTMgdGV4dC14bCBmb250LXNlbWlib2xkIGJnLWJsdWUtODAwIHRleHQtd2hpdGUgIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm10LTVcIiBhY3Rpb249XCIvcmVnaXN0ZXJcIiByZWxvYWREb2N1bWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14bCBmb250LXNlbWlib2xkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYSB1c2VyIHlldD9cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGRhcms6aG92ZXI6YmctZ3JheS02MDAgZGFyazpiZy1ncmF5LTcwMCBweC03IHB5LTIgcm91bmRlZC1sZyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS04MDAgdGV4dC13aGl0ZSAgaG92ZXI6YmctYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIHVzZXIgaGVyZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCAiaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwifi9kYi9jb25uZWN0RGIuc2VydmVyLmpzXCJcbmltcG9ydCBzZWVkRGF0YSBmcm9tIFwifi9kYi9zZWVkLmpzb25cIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCB7IEZvcm0sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRlcigpIHtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG4gICAgY29uc3QgY291bnQgPSBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5jb3VudERvY3VtZW50cygpXG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICByZXR1cm4gcmVkaXJlY3QoXCIvc25pcHBldHMvYWxsXCIpXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGlvbih7IHJlcXVlc3QgfSkge1xuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3REYigpXG5cbiAgICBjb25zdCBfYWN0aW9uID0gZm9ybS5nZXQoXCJfYWN0aW9uXCIpXG4gICAgaWYgKF9hY3Rpb24gPT09IFwic2VlZFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBkYi5tb2RlbHMuU25pcHBldC5pbnNlcnRNYW55KHNlZWREYXRhKVxuICAgICAgICAgICAgcmV0dXJuIHJlZGlyZWN0KFwiL3NuaXBwZXRzL2FsbFwiKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC02NCBtaW4tdy0yMDAtcHggYmctYmx1ZS03MDAgZGFyazpiZy1ncmF5LTcwMCB0b3AtMS8yIGxlZnQtMS80IHJvdW5kZWQtbGcgcC05IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgXCI+XG4gICAgICAgICAgICAgICAgICAgIEl0IHNlZW1zIHRoYXQgeW91ciBkYXRhYmFzZSBpcyBlbXB0eSwgd291bGQgeW91IGxpa2UgbWUgdG9cbiAgICAgICAgICAgICAgICAgICAgc2VlZCBzb21lIGRhdGEgZm9yIHlvdT9cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTYgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc25pcHBldHMvYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCIvc25pcHBldHMvYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtd2hpdGUgYmctcmVkLTYwMCBob3ZlcjpiZy1yZWQtODAwIHJvdW5kZWQtbGcgcHgtNCBweS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyEhXHVEODNEXHVERTIxXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JlZW4tODAwIGJnLWdyZWVuLTYwMCByb3VuZGVkLWxnIHB4LTQgcHktMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWWVzIHBsZWFzZSBib3NzXHVEODNEXHVERTA3XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicwNmM3NGE3NicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtVkZaUk1YNUIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNMUEpNREw1LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1ZN0EyWTdIMy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tWkVLQVlYWksuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUNSR05PTE5KLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTUw1SVUzTjcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9nb3V0LUtGT0NZWklMLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JlZ2lzdGVyJzp7J2lkJzoncm91dGVzL3JlZ2lzdGVyJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlZ2lzdGVyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JlZ2lzdGVyLTc3U01CRk5GLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1DUkdOT0xOSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1MNUlVM043LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NlZWQnOnsnaWQnOidyb3V0ZXMvc2VlZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZWVkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NlZWQtWVEyWVpVNUkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUM1WE5XNlM2LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcnOnsnaWQnOidyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc25pcHBldHMvOnNuaXBwZXRUYWcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWctUE9OWlc1UE0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdXWktLT1lKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstQzVYTlc2UzYuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnLyRzbmlwcGV0SWQnOnsnaWQnOidyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZCcsJ3BhcmVudElkJzoncm91dGVzL3NuaXBwZXRzLyRzbmlwcGV0VGFnJywncGF0aCc6JzpzbmlwcGV0SWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC1JNU1EUjVIQi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGUnOnsnaWQnOidyb3V0ZXMvc25pcHBldHMvJHNuaXBwZXRUYWcvJHNuaXBwZXRJZC51cGRhdGUnLCdwYXJlbnRJZCc6J3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZycsJ3BhdGgnOic6c25pcHBldElkL3VwZGF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zbmlwcGV0cy8kc25pcHBldFRhZy8kc25pcHBldElkLnVwZGF0ZS1YNVczSjJBRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTUw1SVUzTjcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0Jzp7J2lkJzoncm91dGVzL3NuaXBwZXRzL2NyZWF0ZVNuaXBwZXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc25pcHBldHMvY3JlYXRlU25pcHBldCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zbmlwcGV0cy9jcmVhdGVTbmlwcGV0LUdCRFYzN0kyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NTDVJVTNONy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMDZDNzRBNzYuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZ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
