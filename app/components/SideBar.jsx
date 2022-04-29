import { Link, useLoaderData } from "@remix-run/react"
import { MoonIcon, SunIcon } from "~/svg/all"
import { useEffect, useState } from "react"

export default function SideBar({ session }) {
  const [darkMode, setDarkMode] = useState()
  const [isOnLine, setIsOnLine] = useState(false)
  const [loggedIn, setLoggedIn] = useState()

  function toggleMode() {
    document.documentElement.classList.toggle("dark")
    darkMode === true ? setDarkMode(false) : setDarkMode(true)
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark")
    }
    if (navigator.onLine) {
      setIsOnLine(true)
    } else {
      setIsOnLine(false)
    }
    console.log(session)
    if (session.length > 0) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])

  return (
    <aside
      className=" h-20 md:my-8 md:fixed md:h-full md:w-20-vw border-r dark:border-gray-700 px-3 "
      aria-label="sidebar"
    >
      <div className=" overflow-y-hidden py-4 rounded mb-auto flex md:block">
        <button className="mr-3" onClick={toggleMode}>
          {!darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
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

          <li>
            {" "}
            {!loggedIn ? (
              <Link
                to="/login
              "
                className="min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
              >
                <span className="md:ml-3">Login</span>
              </Link>
            ) : (
              <Link
                to="/logout
              "
                className="min-w-150-px flex items-center p-2 text-base font-normal  rounded-lg hover:bg-blue-600 bg-blue-800 dark:bg-gray-800 text-white dark:hover:bg-gray-700"
              >
                <span className="md:ml-3">Logout</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </aside>
  )
}
