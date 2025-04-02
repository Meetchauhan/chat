import admin from "firebase-admin";
import serviceAccount from "./chat-app-845b3-cb897b792016.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

export default messaging;
