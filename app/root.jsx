import connectDb from "~/db/connectDb.server.js"
import styles from "~/tailwind.css"
import highStyles from "highlight.js/styles/atom-one-dark.css"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "remix"

import SideBar from "./components/SideBar"
import { getUserSession } from "./sessions.server.js"

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
        href: "/assets/apple-touch-icon.png",
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicon-32x32.png",
    },
    {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "assets/favicon-16x16.png",
    },
    {
        rel: "manifest",
        href: "/site.webmanifest",
    },
    {
        rel: "mask-icon",
        color: "#742914",
        href: "/assets/safari-pinned-tab.svg",
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

export async function loader({ request }) {
    const db = await connectDb()
    const session = await getUserSession(request.headers.get("Cookie"))
    const userId = session.get("userId")

    // Return all languages from snippets that the user, has access to (includes public and private)
    return await db.models.Snippet.find({
        $or: [{ visibility: true }, { userId }],
    }).distinct("languageTag")
}

export default function App() {
    const languages = useLoaderData() || []

    return (
        <html lang="en" className="dark">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="h-screen dark:bg-gray-900 dark:text-white font-sans lg:grid lg:grid-cols-5">
                <SideBar languages={languages} />
                <main className="p-4 overflow-hidden md:overflow-auto col-span-4">
                    <Outlet />
                </main>

                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
