import { Link, useLoaderData } from "@remix-run/react"
import { useEffect, useState } from "react"

import DarkmodeButton from "./DarkmodeButton"
import LoginButton from "./LoginButton"

export default function SideBar() {
    const [isOnLine, setIsOnLine] = useState(false)
    // const [loggedIn, setLoggedIn] = useState()

    React.useEffect(() => {
        setIsOnLine(navigator.onLine)
    }, [])

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark")
        }

        // console.log(session)
        // if (session.length > 0) {
        //     setLoggedIn(true)
        // } else {
        //     setLoggedIn(false)
        // }
    }, [])

    return (
        <aside
            className=" h-20 md:my-8 md:fixed md:h-full md:w-20-vw border-r dark:border-gray-700 px-3 "
            aria-label="sidebar"
        >
            <div className=" overflow-y-hidden py-4 rounded mb-auto flex md:block">
                <div className="flex justify-between my-4">
                    <DarkmodeButton />
                    <LoginButton />
                </div>
                <ul className=" flex overflow-x-scroll scrollbar-hide gap-3 md:block md:space-y-2 ">
                    {isOnLine ? (
                        <li>
                            <Link
                                to="/snippets/createSnippet
              "
                                className=" min-w-150-px  flex items-center p-2 text-base font-normal  rounded-lg hover:bg-green-600 bg-green-800 dark:bg-green-800 text-white dark:hover:bg-green-700"
                            >
                                <span className="md:ml-3">Create snippet</span>
                            </Link>
                        </li>
                    ) : null}

                    <li>
                        <Link
                            to="/snippets/all
              "
                            className=" min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
                        >
                            <span className="md:ml-3">All snippets</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/snippets/JavaScript
              "
                            className="min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
                        >
                            <span className="md:ml-3">JavaScript snippets</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/snippets/PHP
              "
                            className="min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
                        >
                            <span className="md:ml-3">PHP snippets</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/snippets/CSS
              "
                            className="min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
                        >
                            <span className="md:ml-3">CSS snippets</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/snippets/HTML
              "
                            className="min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
                        >
                            <span className="md:ml-3">HTML snippets</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
