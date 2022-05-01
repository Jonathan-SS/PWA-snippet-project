const cacheName = "sw-cache-v1.1.4"

// https://blog.atulr.com/web-notifications/
// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
        .replaceAll("-", "+")
        .replaceAll("_", "/")
    const rawData = atob(base64)
    // const rawData = Buffer.from(base64, "base64")
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

const saveSubscription = async (subscription) => {
    const SERVER_URL = `${location.origin}/subscribtionService`
    return fetch(SERVER_URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(subscription),
    })
}

// self.addEventListener("install", () => {
//     console.log("SW Installed")
// })

self.addEventListener("activate", async () => {
    // This will be called only once when the service worker is activated.
    try {
        const VAPID_PUBLIC_KEY =
            "BEApaM42xO4ckE_i6WH0SPyfAXWPtZJncv4d_foykgnhTGMaLsbmXOWdldaj7YTy4NJIzPdq4jO6Jl2lME_fg_E"
        const applicationServerKey = urlB64ToUint8Array(VAPID_PUBLIC_KEY)
        const options = { applicationServerKey, userVisibleOnly: true }
        const subscribtion =
            await self.registration.pushManager.getSubscription()
        if (subscribtion === null) {
            const subscription = await self.registration.pushManager.subscribe(
                options
            )
            await saveSubscription(subscription)
        }
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
    const pushMessage = e.data.text()
    // const pushMessage = JSON.parse(e.data.text())
    // console.log("pushMessage: ", pushMessage)
    var options = {
        body: "Hello World tets test",
        icon: "snippie-logo.png",
        vibrate: [100, 50, 100],
        // data: {
        //     dateOfArrival: Date.now(),
        //     primaryKey: "2",
        // },
        // actions: [
        //     {
        //         action: "explore",
        //         title: "Explore the changes",
        //         icon: "images/checkmark.png",
        //     },
        //     { action: "close", title: "Close", icon: "images/xmark.png" },
        // ],
    }
    e.waitUntil(self.registration.showNotification(pushMessage, options))
})
