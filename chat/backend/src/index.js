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

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["*"],
//     credentials: true,
//   },
//   transports: ["websocket", "polling"],
// });

app.use("/api/user", registerRoute);
app.use("/api/message", messageRoute);
app.use("/api", connecUsersRoute);

// app.get("/", (req, res) => {
//   res.send("Server is started");
// });


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
