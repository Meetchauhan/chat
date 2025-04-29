

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("chat-app-cache").then((cache) => {
      return cache.addAll([
        "/", // Cache home page
        "/index.html", // Index page
        "/favicon.ico",
        "/sw.js"
        // Add any other files that need to be cached
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== "chat-app-cache") {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// ✅ Fetch Event (Serving Cached Content)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Return cached response
      }
      return fetch(event.request).catch(() => {
        return caches.match("/index.html"); // Fallback to index.html for offline
      });
    })
  );
});



self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("/") // Opens your app when clicked
  );
});

