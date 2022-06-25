import { useEffect, useState } from "react"
import { useOutletContext } from "remix"

export type OutletContext = { isServerLoggedIn: boolean }

export function useAccount(isServerLoggedIn?: boolean): boolean {
    const outlet = useOutletContext<OutletContext>()
    const [loggedIn, setLoggedIn] = useState<boolean>(
        outlet !== null ? outlet.isServerLoggedIn : false
    )

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

    return isServerLoggedIn ? isServerLoggedIn : loggedIn
}
