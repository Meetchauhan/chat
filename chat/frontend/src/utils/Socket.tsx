// import { io, Socket } from "socket.io-client";

// const BASE_URL = "http://localhost:1322"; // 🔹 Update this with your backend URL

// let socket: Socket | null = null; // 🔥 Singleton instance

// export const getSocket = (userId?: string): Socket => {
//   if (!socket && userId) {
//     console.log("🟢 Creating a new socket connection...");
//     socket = io(BASE_URL, { query: { userId } });

//     socket.on("connect", () => {
//       console.log("✅ Socket connected:", socket?.id);
//     });

//     socket.on("disconnect", () => {
//       console.log("❌ Socket disconnected.");
//       socket = null; // 🔹 Reset singleton on disconnect
//     });
//   }
//   return socket!;
// };

// export const disconnectSocket = () => {
//   if (socket) {
//     console.log("🔴 Disconnecting socket...");
//     socket.disconnect();
//     socket = null;
//   }
// };
