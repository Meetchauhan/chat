import admin from "firebase-admin";

const serviceAccount = process.env.SERVICE_ACCOUNT
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

export default messaging;
