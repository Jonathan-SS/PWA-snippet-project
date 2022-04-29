import { MoonIcon, SunIcon } from "~/components/Icons"
import React from "react"

export default function DarkmodeButton() {
    const [darkMode, setDarkMode] = React.useState<boolean>(true)

    function toggleMode() {
        document.documentElement.classList.toggle("dark")
        darkMode ? setDarkMode(false) : setDarkMode(true)
    }
    return (
        <button className="mr-3" onClick={toggleMode}>
            {!darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}
