const cacheName = "sw-cache-v4"

self.addEventListener("install", () => {
    console.log("SW Installed")
})

self.addEventListener("activate", () => {
    console.log("SW activated")
})

// async function handleFetch(event) {
//   if (event.request.method.toLowerCase() != "get") {
//     return
//   }

//   if (event.request.url.includes("extension")) {
//     console.log("noget")
//     return
//   }

//   const cache = await caches.open(cacheName)
//   try {
//     // Fetch requested data, normal behavior
//     const networkResponse = await fetch(event.request)
//     // Cache the network response data

//     await cache.put(event.request, networkResponse.clone())
//     // Return the network data as response
//     return networkResponse
//   } catch (error) {
//     // If the network is unavailable, get
//     console.log(error)
//     return cache.match(event.request.url)
//   }
// }

self.addEventListener("fetch", (event) => {
    // handleFetch(event)
})

async function handleFetch(event) {
    const cache = await caches.open(cacheName)
    if (event.request.url.includes("extension")) {
        return
    }

    try {
        const responseFromNetwork = await fetch(event.request)
        console.log(event.request)
        await cache.put(event.request, responseFromNetwork)
        return responseFromNetwork
    } catch (e) {
        return cache.match(event.request)
    }
}

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
