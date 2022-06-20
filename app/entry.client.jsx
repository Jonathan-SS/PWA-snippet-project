import { hydrate } from "react-dom"
import { RemixBrowser } from "remix"

hydrate(<RemixBrowser />, document)
// Documentation, service worker registration - https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        navigator.serviceWorker.register(
            `/sw.js?mv=${window.__remixManifest.version}`,
            {
                scope: "/",
                type: "classic", // module
                updateViaCache: "imports", // all || none
            }
        )
    })
}
