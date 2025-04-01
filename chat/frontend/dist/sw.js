const CACHE_NAME = "chat-app-cache-v1";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/static/js/bundle.js",
  "/static/css/main.css",
];

// 📦 Install Event (Pre-cache Static Assets)
self.addEventListener("install", (event) => {
  console.log("📦 Service Worker Installing...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );

  self.skipWaiting(); // Force activate new SW immediately
});

// 🌍 Fetch Event (Handle Offline Support)
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/")) {
    // ✅ Don't cache API responses, always fetch fresh data
    return event.respondWith(
      fetch(event.request)
        .then((response) => response)
        .catch(() => {
          console.log("⚠️ Network failed: Cannot fetch API.");
          return new Response(
            JSON.stringify({ error: "Offline mode - No API access" }),
            { headers: { "Content-Type": "application/json" } }
          );
        })
    );
  } else {
    // ✅ Cache First for Static Files
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  }
});

// ✅ Activate Event (Clear Old Cache)
self.addEventListener("activate", (event) => {
  console.log("✅ Service Worker Activated!");

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log(`🗑 Clearing old cache: ${cache}`);
            return caches.delete(cache);
          }
        })
      )
    )
  );

  self.clients.claim(); // Take control of all open clients immediately
});

// 🛠 Background Sync - Handle the background task when the network is back
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    console.log("🕹 Syncing offline messages...");

    event.waitUntil(syncOfflineMessages());
  }
});

// Function to handle syncing of offline messages
async function syncOfflineMessages() {
  const unsentMessages = await getMessagesFromDB(); // Fetch offline messages

  if (unsentMessages.length > 0) {
    console.log(`📡 Syncing ${unsentMessages.length} offline messages...`);

    // Sync each unsent message
    for (const message of unsentMessages) {
      const payload = {
        selectedUserId: message.recieverId,
        loggedinUserId: message.senderId,
        text: message.text,
      };

      try {
        await fetch("/api/messages", { // Replace with your API endpoint
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Mark message as sent after sync
        await clearMessages(message._id);
        console.log(`✅ Message synced: ${message._id}`);
      } catch (error) {
        console.error(`❌ Error syncing message: ${message._id}`, error);
      }
    }
  } else {
    console.log("⚠️ No offline messages to sync.");
  }
}

// Function to queue a sync task when the network is back
function queueSyncMessages() {
  return new Promise((resolve, reject) => {
    self.registration.sync
      .register("sync-messages")
      .then(resolve)
      .catch(reject);
  });
}

// 📴 Listen for offline message submissions
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "offlineMessage") {
    console.log("📴 Offline message submitted, queuing for sync.");
    queueSyncMessages(); // Queue for sync when network is restored
  }
});

// Helper function to fetch the offline messages from IndexedDB
async function getMessagesFromDB() {
  // Replace with your IndexedDB logic to fetch unsent messages
  return [];
}

// Helper function to clear messages from IndexedDB after syncing
async function clearMessages(messageId) {
  // Replace with your IndexedDB logic to remove the sent message
  console.log(`Deleting message with ID: ${messageId}`);
}
