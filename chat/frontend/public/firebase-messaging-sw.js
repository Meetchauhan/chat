// Import Firebase scripts
importScripts(
  "https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js"
);

// ✅ Initialize Firebase in the Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyD9vmgYpua_RQN-gEuO1m3U9aZcwc49cyo",
  authDomain: "chat-app-845b3.firebaseapp.com",
  projectId: "chat-app-845b3",
  storageBucket: "chat-app-845b3.appspot.com", // ✅ FIXED: Corrected the storage bucket URL
  messagingSenderId: "335520506077",
  appId: "1:335520506077:web:c8ae9518e728bd932c7b34",
  measurementId: "G-S0ST66FLRF",
});

// ✅ Initialize Firebase Messaging
if (
  typeof firebase !== "undefined" &&
  firebase.messaging &&
  firebase.messaging.isSupported()
) {
  const messaging = firebase.messaging();

  // ✅ Handle Background Messages
  messaging.onBackgroundMessage((payload) => {

    self.registration.showNotification(payload.notification.title, {
      body: payload.notification.body,
      icon: payload.notification.icon || "/fav.svg",
    });
  });

  // ✅ Ensure the service worker stays active
  self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
  });
}
