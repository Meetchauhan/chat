import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_ADMIN_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};
const VAPID_KEY = import.meta.env.VITE_VAPID_KEY;
// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// ✅ Register Service Worker Correctly
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js") // Must be inside the `public` folder
    .then((registration) => {
      console.log("✅ Service Worker registered:", registration);
    })
    .catch((error) => {
      console.error("❌ Service Worker registration failed:", error);
    });
}

// ✅ Function to Request Notification Permission
export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.warn("❌ Notification permission denied.");
    return;
  }

  try {
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY.trim(), // Ensure no spaces
    });

    console.log("✅ FCM Token:", token);
    return token;
  } catch (error) {
    console.error("❌ Error getting FCM token:", error);
  }
};

export { messaging, getToken, onMessage };
