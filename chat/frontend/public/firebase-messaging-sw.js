// importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");


// const firebaseConfig = {
//   apiKey: "AIzaSyD9vmgYpua_RQN-gEuO1m3U9aZcwc49cyo",
//   authDomain: "chat-app-845b3.firebaseapp.com",
//   projectId: "chat-app-845b3",
//   storageBucket: "chat-app-845b3.firebasestorage.app",
//   messagingSenderId: "335520506077",
//   appId: "1:335520506077:web:c8ae9518e728bd932c7b34",
//   measurementId:"G-S0ST66FLRF"
// };

// // ✅ Listen for message from main app
// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "INIT_FIREBASE") {
//     firebaseConfig = event.data.firebaseConfig;
//     firebase.initializeApp(firebaseConfig);
//   }
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(self.clients.claim());
// });

// // ✅ Initialize Firebase Messaging
// let messaging;
// self.addEventListener("sync", () => {
//   if (!messaging && firebaseConfig) {
//     messaging = firebase.messaging();

//     messaging.onBackgroundMessage((payload) => {
//       console.log("📩 Background notification received:", payload);
//       self.registration.showNotification(payload.notification.title, {
//         body: payload.notification.body,
//         icon: payload.notification.icon || "/default-icon.png",
//       });
//     });
//   }
// });


importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyD9vmgYpua_RQN-gEuO1m3U9aZcwc49cyo",
  authDomain: "chat-app-845b3.firebaseapp.com",
  projectId: "chat-app-845b3",
  storageBucket: "chat-app-845b3.firebasestorage.app",
  messagingSenderId: "335520506077",
  appId: "1:335520506077:web:c8ae9518e728bd932c7b34",
  measurementId:"G-S0ST66FLRF"
};


const messaging = firebase.messaging();

// ✅ Handle Background Notifications
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background notification received:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon || "/fav.svg",
  });
});
