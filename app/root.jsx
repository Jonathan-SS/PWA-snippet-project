import styles from "~/tailwind.css"
import highStyles from "highlight.js/styles/atom-one-dark.css"
import { getSession } from "./sessions.server"
import { useLoaderData, json } from "remix"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix"

import SideBar from "./components/SideBar"

export async function loader({ request }) {
  // const session = await getSession(request.headers.get("Cookie"))
  // return json({
  //   userId: session.get("userId"),
  // })
  return "r"
}

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "stylesheet",
    href: highStyles,
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
  {
    rel: "mask-icon",
    color: "#742914",
    href: "/safari-pinned-tab.svg",
  },
  {
    rel: "apple-mobile-web-app-title",
    content: "Snippie",
  },
  {
    rel: "application-name",
    content: "Snippie",
  },
  {
    rel: "msapplication-TileColor",
    content: "#742914",
  },
  {
    rel: "theme-color",
    content: "#ffffff",
  },
]

export function meta() {
  return {
    charset: "utf-8",
    title: "Remix snippets app",
    viewport: "width=device-width,initial-scale=1",
  }
}

export default function App() {
  const session = useLoaderData()
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-900 dark:text-white font-sans">
        <SideBar session={session} />
        <main className="md:ml-20-vw md:py-8">
          <Outlet />
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
