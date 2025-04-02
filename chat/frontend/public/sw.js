importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

console.log("📦 Service Worker loaded...");

// ✅ Firebase Configuration (Use the same as your frontend)
const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const ADMIN_DOMAIN = import.meta.env.VITE_ADMIN_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BICKET = import.meta.env.VITE_STORAGE_BICKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_APP_ID;
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: ADMIN_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BICKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ✅ Service Worker Installation (Caching)
self.addEventListener("install", (event) => {
  console.log("📦 Service Worker installing...");
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

// ✅ Service Worker Activation (Cache Cleanup)
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

// ✅ Handle Firebase Push Notifications in the Background
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background Push Notification received:", payload);

  const notificationTitle = payload.notification?.title ?? "New Notification";
  const notificationOptions = {
    body: payload.notification?.body ?? "You have a new message!",
    icon: payload.notification?.icon ?? "/default-icon.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// ✅ Handle Notification Click (Open the app when clicked)
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("/") // Opens your app when clicked
  );
});

console.log("✅ Service Worker with Firebase Messaging is ready!");
