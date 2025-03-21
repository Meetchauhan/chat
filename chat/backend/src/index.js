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

// const app = express();
// const server = createServer(app);

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
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

app.get("/", (req, res) => {
  res.send("Server is started");
});

// io.on("connection", (socket) => {
//   console.log("✅ User connected:", socket.id);

//   socket.on("message", (msg) => {
//     console.log("📩 Message received:", msg);
//     io.emit("message", msg);
//   });

//   socket.on("disconnect", () => {
//     console.log("❌ User disconnected:", socket.id);
//   });
// });

// ✅ Fix: Listen on `server`, NOT `app`
const PORT = 1322;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT: ${PORT}`);
  connectDB();
});
