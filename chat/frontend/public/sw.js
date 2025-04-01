self.addEventListener("install", (event) => {
    console.log("📦 Service Worker installing...");
    event.waitUntil(
      caches.open("chat-app-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/manifest.json",
          "/manifest.webmanifest",
          "/assets/fav.svg",
          "/assets/chatHome.svg",
          "/sw.js",
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
        return cachedResponse || fetch(event.request)
          .then((response) => {
            return response;
          })
          .catch(() => caches.match("/index.html"));
      })
    );
  });
  