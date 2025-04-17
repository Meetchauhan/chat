import { MessagePayload } from "firebase/messaging";
import { messaging, getToken, onMessage } from "./firebase";
import axios from "axios";
import { isIOS } from "./utils/isIos";

const VAPID_KEY = import.meta.env.VITE_VAPID_KEY?.trim();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!VAPID_KEY) {
  console.error("❌ VAPID_KEY is missing! Check your .env file.");
}

const isNotificationSupported = () =>
  typeof Notification !== "undefined" &&
  "serviceWorker" in navigator &&
  "PushManager" in window;

export const requestNotificationPermission = async () => {
  if (isIOS() || !isNotificationSupported()) {
    console.warn("❌ Notifications are not supported in this browser.");
    return;
  }
  

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.warn("❌ Notification permission denied.");
    return;
  }

  try {
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
    });

    console.log("✅ FCM Token:", token);
    return token;
  } catch (error) {
    console.error("❌ Error getting FCM token:", error);
  }
};

// Listen for incoming messages
if (isNotificationSupported()) {
  onMessage(messaging, (payload: MessagePayload) => {
    if (isIOS()) {
      console.warn("❌ Notifications are not supported on iOS browsers.");
      return;
    }

    console.log("🔥 Foreground message received!", payload);

    if (payload.notification) {
      const title = payload.notification.title ?? "New Notification";
      const body = payload.notification.body ?? "You have a new message!";
      const icon = payload.notification.icon ?? "/fav.svg";

      console.log("🔔 Showing notification:", { title, body, icon });

      new Notification(title, { body, icon });
    } else {
      console.warn("⚠️ No notification payload found in message.");
    }
  });

  console.log("Notification permission", Notification.permission);
} else {
  console.warn("❌ Notifications are not supported in this environment.");
}

export const sendPushNotification = async (
  token: string,
  title: string | undefined,
  body: string
) => {
  try {
    await axios.post(`${API_BASE_URL}/send-notification`, {
      token,
      title,
      body,
    });
    console.log("Notification sent!");
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
};
