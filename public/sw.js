const cacheName = "sw-cache-v1.1.4"

// https://blog.atulr.com/web-notifications/
// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
        .replaceAll("-", "+")
        .replaceAll("_", "/")
    console.log("base64: ", base64)
    const rawData = Buffer.from(base64, "base64")
    console.log("rawData: ", rawData)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

// self.addEventListener("install", () => {
//     console.log("SW Installed")
// })

self.addEventListener("activate", async () => {
    // This will be called only once when the service worker is activated.
    const publicKey =
        "BEApaM42xO4ckE_i6WH0SPyfAXWPtZJncv4d_foykgnhTGMaLsbmXOWdldaj7YTy4NJIzPdq4jO6Jl2lME_fg_E"
    try {
        const applicationServerKey = urlB64ToUint8Array(publicKey)
        const options = { applicationServerKey, userVisibleOnly: true }
        const subscription = await self.registration.pushManager.subscribe(
            options
        )
        console.log(JSON.stringify(subscription))
    } catch (err) {
        console.log("Error", err)
    }
})

self.addEventListener("fetch", (fetchEvent) => {
    // Look for an image, check cache othervise fetch and put to cache
    if (fetchEvent.request.destination === "image") {
        fetchEvent.respondWith(
            (async function () {
                // Checks cache for requst data
                const cachedResponse = await caches.match(fetchEvent.request)

                // If requst data exists return the data as response
                if (cachedResponse) return cachedResponse

                // Fetch requested data, normal behavior
                const networkResponse = await fetch(fetchEvent.request)

                // Cache the network respose data
                const cache = await caches.open(cacheName)
                cache.put(fetchEvent.request, networkResponse.clone())

                // Return the network data as response
                return networkResponse
            })()
        )
        return
    }

    if (fetchEvent.request.method === "POST") {
        return
    }

    // If offline, use cache
    fetchEvent.respondWith(
        fetch(fetchEvent.request).catch(() => caches.match(fetchEvent.request))
    )
})

// The notificationclick event - https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
// self.addEventListener('notificationclick', function(e) {
//   var notification = e.notification;
//   var primaryKey = notification.data.primaryKey;
//   var action = e.action;

//   if (action === 'close') {
//     notification.close();
//   } else {
//     clients.openWindow('http://www.example.com');
//     notification.close();
//   }
// });

// Handling the push event in the service worker - https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications
self.addEventListener("push", function (e) {
    console.log("Push event: ", e)
    var options = {
        body: "This notification was generated from a push!",
        icon: "images/example.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "2",
        },
        actions: [
            {
                action: "explore",
                title: "Explore this new world",
                icon: "images/checkmark.png",
            },
            { action: "close", title: "Close", icon: "images/xmark.png" },
        ],
    }
    e.waitUntil(self.registration.showNotification("Hello world!", options))
})
