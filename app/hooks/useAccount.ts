import { useEffect, useState } from "react"

export function useAccount(): boolean {
    const [loggedIn, setLoggedIn] = useState<boolean>()

    useEffect(() => {
        ;(async () => {
            const user = document.cookie.match("__loggedIn")
            const userValue = user.input
            if (userValue == null) {
                setLoggedIn(false)
            } else {
                if (userValue == "__loggedIn=") {
                    setLoggedIn(false)
                } else {
                    setLoggedIn(true)
                }
            }
        })()
    }, [loggedIn])

    return loggedIn
}
