const serviceWorkerVersion = "v1.0.2"
const staticCache = `static-cache-${serviceWorkerVersion}`
const imageCache = `image-cache-${serviceWorkerVersion}`

const manifest = self.__remixManifest
console.log(manifest)

self.addEventListener("install", (e) => {
    //    TODO: Cache pages on install, e.g error pages, etc.
    // TODO: cache static images on install
})

self.addEventListener("activate", async () => {
    // This will be called only once when the service worker is activate
    // TODO: Remove all OLD caches that are not named in CACHE_NAME
    // If cache is older then 30 days, remove i
})

// Network first look for cache
// Give images from cache if available
// Else fetch from network and cache

// self.addEventListener("fetch", async (fetchEvent) =>{
//     // Return all request that is not assets for rendering the snippet application.
//     //  eg. POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE
//     // Like creating new snippets, or updating existing snippets
//     if (fetchEvent.request.method !== "GET") return

//     // ignore chrome extension, e.g don't cache them
//     if (fetchEvent.request.url.includes("chrome-extension")) return

//     // fetchEvent.waitUntil(async () => {
//     const fetchResponse = await fetch(fetchEvent.request)

//     if (!fetchResponse.ok) return // Return error if not ok
//     // If not ok, and has status code between 500 and 599, return error
//     // If status code is between 400 and 499, return response from cache

//     const type = fetchResponse.headers.get("content-type") // Alternativ use fetchEvent.request.destination, content-type more reliable

//     // Use image in cache, after fetch and put to cache
//     if (type.includes("image")) {
//         await fetchEvent.respondWith(cacheFirst(fetchEvent)) // stop function after responseWith is resolved
//     }
//     fetchEvent.respondWith(networkFirst(fetchEvent))

//     // // Cache the rest that has same origin e.g css, js, html etc
//     // if (fetchEvent.request.host === location.host) {
//     //     console.log("fetchEvent.request: ", fetchEvent.request)
//     //     const cache = await caches.open(staticCache)
//     //     cache.put(fetchEvent.request, fetchResponse.clone())
//     // }

//     return response
// })
self.addEventListener("fetch", async function (event) {
    const ikkeFundetSide = `${location.origin}/dethereren404`
    if (event.request.url.includes("chrome-extension")) return // ignore chrome extension, e.g don't cache them
    if (event.request.method !== "GET") return

    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request).catch(() => {
                return caches.match(ikkeFundetSide)
            })
        })
    )
    const fetchResponse = await fetch(event.request)
    if (fetchResponse) {
        const cache = await caches.open(staticCache)
        cache.put(event.request, fetchResponse.clone())
        console.log("caching")
    }
})

async function networkFirstFallbackToCache(request) {}

// The notificationclick event - https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
self.addEventListener("notificationclick", (e) => {
    const notification = e.notification
    const href = notification.data.href
    const action = e.action

    switch (action) {
        case "explore":
            clients.openWindow(href)
            notification.close()
            break
        default:
            notification.close()
            break
    }
})

// Handling the push event in the service worker - https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
self.addEventListener("push", function (e) {
    const pushMessage = JSON.parse(e.data.text())

    var options = {
        body: pushMessage.body,
        icon: "snippie-logo.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            href: pushMessage.href,
        },
        actions: [
            {
                action: "explore",
                title: "Explore the changes",
                icon: "snippie-logo.png",
            },
            { action: "close", title: "Close", icon: "snippie-logo.png" },
        ],
    }
    e.waitUntil(self.registration.showNotification(pushMessage.title, options))
})
