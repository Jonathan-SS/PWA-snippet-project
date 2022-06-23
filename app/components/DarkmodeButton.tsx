import { MoonIcon, SunIcon } from "~/components/Icons"
import React from "react"

export default function DarkmodeButton() {
    const [darkMode, setDarkMode] = React.useState<boolean>(true)

    function toggleMode() {
        document.documentElement.classList.toggle("dark")
        darkMode ? setDarkMode(false) : setDarkMode(true)
    }
    return (
        <button
            className="px-2 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-700"
            onClick={toggleMode}
            name="Toggle dark/light mode"
            title="Toggle dark/light mode"
        >
            {!darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}
