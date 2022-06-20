import { useEffect, useState } from "react"

export function useNotification(): boolean {
    const [notiDenied, setNotiDenied] = useState<boolean>(false)

    useEffect(() => {
        ;(async () => {
            if (Notification.permission !== "denied") {
                setNotiDenied(true)
            } else {
                setNotiDenied(false)
            }
        })()
    }, [notiDenied])

    return notiDenied
}
