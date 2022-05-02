import { hydrate } from "react-dom"
import { RemixBrowser } from "remix"

hydrate(<RemixBrowser />, document)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        navigator.serviceWorker.register("/sw.js")
    })
}
