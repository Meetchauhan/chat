self.addEventListener("install", (event) => {
    console.log("📦 Service Worker installing...");
    event.waitUntil(
      caches.open("chat-app-cache").then((cache) => {
        return cache.addAll([
          "/", // Cache home page
          "/index.html",
          "/static/js/bundle.js",
          "/static/css/main.css",
          "/favicon.ico",
          // Add other static assets here
        ]);
      })
    );
  });
  
  self.addEventListener("activate", (event) => {
    console.log("✅ Service Worker activated.");
    event.waitUntil(
      caches.keys().then((cacheNames) =>
        Promise.all(
          cacheNames.map((cache) => {
            if (cache !== "chat-app-cache") {
              console.log("🗑 Clearing old cache...");
              return caches.delete(cache);
            }
          })
        )
      )
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          console.log("Returning cached response for:", event.request.url);
          return cachedResponse; // Return cached response if available
        }
  
        // If no cached response, make network request
        return fetch(event.request).catch((error) => {
          console.error("Network request failed", error);
          // Optional: Return a fallback response if network fails
          return caches.match("/offline.html"); // Example: an offline page
        });
      })
    );
  });
  