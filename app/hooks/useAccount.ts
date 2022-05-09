import { useEffect, useState } from "react"

export function useAccount(): boolean {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        ;(async () => {
            const user = document.cookie.match("__loggedIn")

            if (user.input == null) {
                setLoggedIn(false)
            } else {
                if (user.input == "__loggedIn=") {
                    setLoggedIn(false)
                } else {
                    setLoggedIn(true)
                }
            }
        })()
    }, [loggedIn])

    return loggedIn
}
