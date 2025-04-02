import admin from "firebase-admin";
import serviceAccount from "../secrets/serviceAccount.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

export default messaging;
