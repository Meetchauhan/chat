self.addEventListener("install", (event) => {
    console.log("📦 Service Worker installing...");
    event.waitUntil(
      caches.open("chat-app-cache").then((cache) => {
        return cache.addAll([
          "/", // Cache home page
          "/index.html", // Index page
          "/assets/*", // Cache assets like JS, CSS, images (use wildcards if needed)
          "/favicon.ico",
          "/sw.js"
          // Add any other files that need to be cached
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
          return cachedResponse; // Return cached response
        }
        return fetch(event.request).catch(() => {
          return caches.match("/index.html"); // Fallback to index.html for offline
        });
      })
    );
  });
  
  