import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import styles from "~/tailwind.css";
import SideBar from "./components/SideBar";
import highStyles from "highlight.js/styles/atom-one-dark.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "stylesheet",
    href: highStyles,
  },
];

export function meta() {
  return {
    charset: "utf-8",
    title: "Remix snippets app",
    viewport: "width=device-width,initial-scale=1",
  };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-900 dark:text-white font-sans">
        <SideBar />
        <main className="md:ml-20-vw md:py-8">
          <Outlet />
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
