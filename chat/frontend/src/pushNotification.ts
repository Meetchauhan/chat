import { MessagePayload } from "firebase/messaging";
import { messaging, getToken, onMessage } from "./firebase";
import axios from "axios";
import { isIOS } from "./utils/isIos";

const VAPID_KEY = import.meta.env.VITE_VAPID_KEY?.trim();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!VAPID_KEY) {
  console.error("VAPID_KEY is missing! Check your .env file.");
}

const isNotificationSupported = () =>
  typeof Notification !== "undefined" &&
  "serviceWorker" in navigator &&
  "PushManager" in window;

export const requestNotificationPermission = async () => {
  if (isIOS() || !isNotificationSupported()) {
    console.warn("Notifications are not supported in this browser.");
    return false;
  }
  

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.warn("Notification permission denied.");
    return;
  }

  try {
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
    });

    return token;
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

// Listen for incoming messages
if (isNotificationSupported()) {
  onMessage(messaging, (payload: MessagePayload) => {
    if (isIOS()) {
      console.warn("Notifications are not supported on iOS browsers.");
      return;
    }


    if (payload.notification) {
      const title = payload.notification.title ?? "New Notification";
      const body = payload.notification.body ?? "You have a new message!";
      const icon = payload.notification.icon ?? "/fav.svg";


      new Notification(title, { body, icon });
    } else {
      console.warn("No notification payload found in message.");
    }
  });

} else {
  console.warn("Notifications are not supported in this environment.");
}

export const sendPushNotification = async (
  token: string | boolean | undefined,
  title: string | undefined,
  body: string
) => {
  try {
    await axios.post(`${API_BASE_URL}/send-notification`, {
      token,
      title,
      body,
    });
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
};
