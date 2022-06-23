import connectDb from "~/db/connectDb.server.js"
import styles from "~/tailwind.css"
import highStyles from "highlight.js/styles/atom-one-dark.css"
import { NotFound } from "./components/Icons/NotFound.jsx"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useCatch,
    Link,
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
        "theme-color": "#742914",
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
        <Layout>
            <SideBar languages={languages} />
            <main className="p-4 overflow-hidden md:overflow-auto col-span-4">
                <Outlet />
            </main>
        </Layout>
    )
}

export function Layout({ children }) {
    return (
        <html lang="en" className="dark">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="h-screen dark:bg-gray-900 dark:text-white font-sans lg:grid lg:grid-cols-5">
                {children}
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export function CatchBoundary() {
    const caught = useCatch()
    return (
        <Layout>
            <main className=" flex justify-center items-center col-span-5 flex-col ">
                <NotFound className=" w-1/2" />
                <h1 className=" text-5xl font-bold">{caught.statusText}</h1>
                <Link
                    className="text-white flex items-center h-fit bg-blue-800 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg px-4 py-2 mt-2"
                    to="/"
                >
                    Go to the home page
                </Link>
            </main>
        </Layout>
    )
}

export function ErrorBoundary({ error }) {
    return (
        <Layout>
            <main className=" flex justify-center items-center col-span-5 flex-col ">
                <NotFound className=" w-1/2" />
                <h1 className="text-red-500 font-bold">
                    {error.name}: {error.message}
                </h1>
                <Link
                    className="text-white flex items-center h-fit bg-blue-800 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg px-4 py-2 mt-2"
                    to="/"
                >
                    Go to the home page
                </Link>
            </main>
        </Layout>
    )
}
