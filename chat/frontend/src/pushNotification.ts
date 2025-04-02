import { MessagePayload } from "firebase/messaging";
import { messaging, getToken, onMessage } from "./firebase";
import axios from "axios";

const VAPID_KEY = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.warn("Notification permission denied.");
    return;
  }

  try {
    const token = await getToken(messaging, { vapidKey: VAPID_KEY });
    console.log("FCM Token:", token);
    return token; // Send this token to your backend
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

// Listen for incoming messages
onMessage(messaging, (payload: MessagePayload) => {
  console.log("Foreground message received:", payload);

  if (payload.notification) {
    const title = payload.notification.title ?? "New Notification";
    const body = payload.notification.body ?? "You have a new message!";
    const icon = payload.notification.icon ?? "/default-icon.png";
    new Notification(title, {
      body,
      icon,
    });
  }
});

// Send push notification from frontend
export const sendPushNotification = async (
  token: string,
  title: string,
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
