importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js");

// Initialize Firebase (Same config as in firebase.js)
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
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background notification received:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon || "/default-icon.png",
  });
});
