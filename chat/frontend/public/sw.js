self.addEventListener("install", (event) => {
    console.log("📦 Service Worker installing...");
    event.waitUntil(
      caches.open("chat-app-cache").then((cache) => {
        return cache.addAll([
          "/", // Cache home page
          "/index.html", // Index page
          "/assets/*", // Cache assets like JS, CSS, images (use wildcards if needed)
          "/favicon.ico",
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
    const url = new URL(event.request.url);
  
    // Check for static assets (to cache them) or API calls
    if (url.pathname.startsWith("/static/") || url.pathname === "/") {
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse; // Return cached response if available
          }
          return fetch(event.request).catch(() => {
            // Optionally handle the case where fetch fails
            return caches.match("/offline.html"); // Fallback page
          });
        })
      );
    } else {
      event.respondWith(fetch(event.request)); // Direct fetch for dynamic content like API calls
    }
  });
  
  