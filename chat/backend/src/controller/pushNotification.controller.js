import messaging from "../firebase/firebaseAdmin.js";

export const pushNotification = async (req, res) => {
  const { token, title, body } = req.body;

  if (!token) {
    return res.status(400).json({ error: "FCM token is required" });
  }

  const message = {
    token: token,
    notification: {
      title: title,
      body: body,
    },
    android: { priority: "high" },
    webpush: {
      headers: { Urgency: "high" },
      notification: {
        // icon: "your-icon-url.png",
        click_action: "https://chat-i7if.onrender.com",
        body:body,
        title: title
      },
    },
  };

  try {
    await messaging.send(message);
    res.status(200).json({ success: true, message: "Notification sent!", message:message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
