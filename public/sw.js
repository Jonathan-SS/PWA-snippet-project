const window = {}
const manifestVersion = new URL(location).searchParams.get("mv")
console.log(`Manifest version: ${manifestVersion}`)
self.importScripts(`/build/manifest-${manifestVersion.toUpperCase()}.js`)
const manifest = window.__remixManifest

const START_URL = "/"

let STATIC_CACHE = `static-${manifest.version}`
const DYNAMIC_CACHE = "dynamic-cache"

// INSTALL -----------------------------------------------------------
self.addEventListener("install", (event) => {
    console.log(`Installing ${manifestVersion}`)
    console.log(`SW installed, manifest version ${manifest.version}`)
    const manifestUrls = parseUrlsFromManifest(manifest)

    event.waitUntil(
        (async () => {
            const openCache = await caches.open(STATIC_CACHE)
            try {
                openCache.addAll([START_URL, ...manifestUrls])
                console.log(
                    `${manifestUrls.length} asset URLs from manifest version ${manifest.version} cached`
                )
            } catch (error) {
                console.log(
                    `FAILED to cache ${manifestUrls.length} asset URLs from manifest version ${manifest.version}:`,
                    error
                )
            }
        })()
    )
})

// ACTIVATE ----------------------------------------------------------
self.addEventListener("activate", (event) => {
    console.log(`SW activated, manifest version ${manifest.version}`)
    event.waitUntil(
        (async () => {
            const cacheNames = await caches.keys()
            const cachesToDelete = cacheNames.filter(
                (cacheName) =>
                    cacheName !== STATIC_CACHE &&
                    cacheName.startsWith("static-")
            )
            return Promise.all(
                cachesToDelete.map((cacheName) => caches.delete(cacheName))
            )
        })()
    )
})

// FETCH -------------------------------------------------------------
self.addEventListener("fetch", (event) => {
    // We only want to handle GET requests
    if (event.request.method !== "GET") return

    // HTML ------------------------------------------------------------
    if (isHtmlRequest(event.request)) {
        event.respondWith(
            (() => {
                const cachedResponse = networkFallbackToCache(event)
                if (cachedResponse) {
                    return cachedResponse
                }
                console.log(
                    `Cache miss for ${event.request.url}, redirecting to ${START_URL}`
                )
                return new Response(null, {
                    status: 302,
                    headers: {
                        Location: START_URL,
                    },
                })
            })()
        )
    }

    // Build assets ----------------------------------------------------
    if (
        isBuildRequest(event.request) &&
        event.request.destination === "script"
    ) {
        // Cached on install, should be in cache
        event.respondWith(cacheFallbackToNetwork(event))
    }

    if (
        isBuildRequest(event.request) &&
        event.request.destination === "style"
    ) {
        event.respondWith(cacheFallbackToNetworkThenCache(event, STATIC_CACHE))
    }

    // Loader requests -------------------------------------------------
    if (isLoaderRequest(event.request)) {
        event.respondWith(
            (async () => {
                const cachedResponse = await networkThenCacheFallbackToCache(
                    event,
                    DYNAMIC_CACHE
                )
                console.log(cachedResponse)
                if (cachedResponse) {
                    return cachedResponse
                }
                console.log(
                    `Cache miss for ${event.request.url}, throwing offline response`
                )
                return new Response("You appear to be offline", {
                    status: 503,
                    statusText: "Network unavailable",
                    headers: {
                        "X-Remix-Catch": "yes",
                    },
                })
            })()
        )
    }
})

// Request type identification ---------------------------------------
function isHtmlRequest(request) {
    return request.destination === "document"
}

function isBuildRequest(request) {
    return request.url.includes("/build/")
}

function isLoaderRequest(request) {
    const url = new URL(request.url)
    return url.searchParams.has("_data")
}

// Caching strategies ------------------------------------------------
async function cacheFallbackToNetwork(event) {
    const request = event.request
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
        console.log(`Cache hit for ${request.url}`)
        return cachedResponse
    }
    console.log(`Cache miss for ${request.url}, fetching from network`)
    return fetch(request)
}

async function networkThenCacheFallbackToCache(event, cacheName) {
    const request = event.request
    const url = request.url
    const networkResponse = await fetch(request)
    try {
        if (networkResponse.ok) {
            console.log(`Network hit for ${url}, caching in ${cacheName}`)
            const clonedResponse = networkResponse.clone()
            event.waitUntil(
                (async () => {
                    const openCache = await caches.open(cacheName)
                    console.log(cacheName)
                    openCache.put(request, clonedResponse)
                })()
            )
            return networkResponse
        }
    } catch (error) {
        console.log(`Network fail for ${url}:`, error)
        return caches.match(request)
    }
}

async function networkFallbackToCache(event) {
    const request = event.request
    const url = request.url
    return fetch(request).catch((error) => {
        console.log(`Network fail for ${url}:`, error)
        return caches.match(request)
    })
}

async function cacheFallbackToNetworkThenCache(event, cacheName) {
    const request = event.request
    const url = request.url
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
        console.log(`Cache hit for ${url}`)
        return cachedResponse
    }

    console.log(`Cache miss for ${url}`)
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
        console.log(`Caching ok response for ${url}`)
        const clonedResponse = networkResponse.clone()
        event.waitUntil(
            (async () => {
                const openedCache = await caches.open(cacheName)
                await openedCache.put(request, clonedResponse)
            })()
        )
    }
    return networkResponse
}

// Parse URLs from imported manifest ---------------------------------
function parseUrlsFromManifest(manifest) {
    const modules = new Set()
    const chunks = new Set()
    const moduleObjects = [manifest.entry, ...Object.values(manifest.routes)]
    moduleObjects.forEach((obj) => {
        modules.add(obj.module)
        obj.imports?.forEach((chunk) => {
            chunks.add(chunk)
        })
    })
    return [...modules, ...chunks, manifest.url]
}

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
