import { NavLink } from "@remix-run/react"
import { useEffect, useState } from "react"

import { useAccount } from "../hooks/useAccount"
import DarkmodeButton from "./DarkmodeButton"
import { SnippieLogo } from "./Icons"
import LoginButton from "./LoginButton"

const accentLinkStyles =
    "capitalize flex items-center p-2 text-base font-normal rounded-lg hover:bg-green-600 bg-green-800 dark:bg-green-800 text-white dark:hover:bg-green-700"
const linkStyles =
    "capitalize flex items-center p-2 text-base font-normal rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"

export default function SideBar({ languages }) {
    const [isOnLine, setIsOnLine] = useState(true)

    const loggedIn = useAccount()

    React.useEffect(() => {
        setIsOnLine(navigator.onLine)
    }, [])

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark")
        }
    }, [])

    return (
        <aside
            className="border-r dark:border-gray-700 px-3 "
            aria-label="sidebar"
        >
            <div className="py-4 rounded mb-auto flex flex-col items-center gap-2 md:block">
                <div className="w-full flex justify-between items-center">
                    <img
                        src="/assets/logo-transparent.png"
                        alt="Snippie lettermark"
                        width="100"
                        height="100"
                    />
                    <div className="flex justify-between my-4">
                        <DarkmodeButton />
                        <LoginButton />
                    </div>
                </div>
                <ul className="flex align-center overflow-x-scroll w-full scrollbar-hide gap-3 lg:block lg:space-y-2 ">
                    {isOnLine && loggedIn && (
                        <li>
                            <NavLink
                                to="/snippets/createSnippet"
                                className={accentLinkStyles}
                            >
                                Create snippet
                            </NavLink>
                        </li>
                    )}

                    {loggedIn && (
                        <li>
                            <NavLink
                                to="/snippets/mysnippets"
                                className={({ isActive }) =>
                                    accentLinkStyles +
                                    (isActive ? " dark:bg-gray-600 pr-4" : "")
                                }
                            >
                                My snippets
                            </NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink
                            to="/snippets/all"
                            className={({ isActive }) =>
                                linkStyles +
                                (isActive ? " dark:bg-gray-600 pr-4" : "")
                            }
                        >
                            All snippets
                        </NavLink>
                    </li>
                    {languages.map((language) => {
                        return (
                            <li key={language}>
                                <NavLink
                                    to={`/snippets/${language}`}
                                    className={({ isActive }) =>
                                        linkStyles +
                                        (isActive
                                            ? " dark:bg-gray-600 pr-4"
                                            : "")
                                    }
                                >
                                    {language}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}
