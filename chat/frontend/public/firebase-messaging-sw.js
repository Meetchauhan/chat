importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");

let firebaseConfig = null;

// ✅ Listen for message from main app
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "INIT_FIREBASE") {
    firebaseConfig = event.data.firebaseConfig;
    firebase.initializeApp(firebaseConfig);
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// ✅ Initialize Firebase Messaging
let messaging;
self.addEventListener("sync", () => {
  if (!messaging && firebaseConfig) {
    messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
      console.log("📩 Background notification received:", payload);
      self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: payload.notification.icon || "/default-icon.png",
      });
    });
  }
});
