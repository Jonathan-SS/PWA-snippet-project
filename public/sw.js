const cacheName = "sw-cache-v1.1.4"

// self.addEventListener("install", () => {
//     console.log("SW Installed")
// })

// self.addEventListener("activate", () => {
//     console.log("SW activated")
// })

self.addEventListener("fetch", (fetchEvent) => {
    console.log("fetchEvent: ", fetchEvent)
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
// self.addEventListener('push', function(e) {
//   var options = {
//     body: 'This notification was generated from a push!',
//     icon: 'images/example.png',
//     vibrate: [100, 50, 100],
//     data: {
//       dateOfArrival: Date.now(),
//       primaryKey: '2'
//     },
//     actions: [
//       {action: 'explore', title: 'Explore this new world',
//         icon: 'images/checkmark.png'},
//       {action: 'close', title: 'Close',
//         icon: 'images/xmark.png'},
//     ]
//   };
//   e.waitUntil(
//     self.registration.showNotification('Hello world!', options)
//   );
// });
