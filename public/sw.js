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
