import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
} from "firebase/messaging";
import { isIOS } from "./utils/isIos";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_ADMIN_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
// const VAPID_KEY = import.meta.env.VITE_VAPID_KEY;
// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
export const setupFirebaseMessaging = async () => {
  if (!isIOS() && (await isSupported())) {
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
  } else {
    console.log("Push notifications skipped on iOS or unsupported browser.");
  }
};

export { messaging, getToken, onMessage };
