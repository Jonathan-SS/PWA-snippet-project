import {
  MoonIcon,
  SunIcon
} from "/build/_shared/chunk-VRJDOAXW.js";
import {
  Link2 as Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-GSW2W7OK.js";

// browser-route-module:/Users/jonathanskovmose/Documents/GitHub/PWA-snippet-project/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ALNATS3I.css";

// app/components/SideBar.jsx
init_react();
var import_react2 = __toESM(require_react());
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
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/snippets/createSnippet\n              ",
    className: " min-w-150-px  flex items-center p-2 text-base font-normal  rounded-lg hover:bg-green-600 bg-green-800 dark:bg-green-800 text-white dark:hover:bg-green-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "Create snippet"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/snippets/all\n              ",
    className: " min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "All snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/snippets/JavaScript\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "JavaScript snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/snippets/PHP\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "PHP snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/snippets/CSS\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "CSS snippets"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/snippets/HTML\n              ",
    className: "min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:ml-3"
  }, "HTML snippets"))))));
}

// node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark_default = "/build/_assets/atom-one-dark-CAZX52DK.css";

// app/root.jsx
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
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "dark:bg-gray-900 dark:text-white font-sans"
  }, /* @__PURE__ */ React.createElement(SideBar, null), /* @__PURE__ */ React.createElement("main", {
    className: "md:ml-20-vw md:py-8"
  }, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-PQAFM6XN.js.map
