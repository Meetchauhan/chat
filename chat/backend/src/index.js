import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.config.js";
import registerRoute from "./routes/user.routes.js";
import messageRoute from "./routes/message.routes.js";
import connecUsersRoute from "./routes/connectingUsers.routes.js";
import adminRoute from "./routes/admin.routes.js"
import pushNotificationRouter from "./routes/pushNotification.routes.js";
import { app, server } from "./util/socket.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const app = express();
// const server = createServer(app);

dotenv.config();
const PORT = process.env.PORT || 1322;
app.use(
  cors({
    origin: ["http://localhost:5173", "https://chat-i7if.onrender.com"],
    // allowedHeaders: ["*"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", registerRoute);
app.use("/api/message", messageRoute);
app.use("/api", connecUsersRoute);
app.use("/api", pushNotificationRouter);
app.use("/api/admin", adminRoute);


app.use(express.static(path.join(__dirname, "../../frontend/dist"))); // Adjust path if needed

// Fallback route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html")); // Adjust path
  connectDB();
});
server.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT: ${PORT}`);
  connectDB();
});
