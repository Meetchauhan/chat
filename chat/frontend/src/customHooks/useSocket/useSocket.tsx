// import io, { Socket } from "socket.io-client";
// import { useEffect, useState } from "react";

// const SERVER_URL = "http://localhost:1322";

// let socket: Socket;

// const useSocket = () => {
//   const [isConnected, setIsConnected] = useState(false);
//   const [message, setMessage] = useState<string>("");

//   useEffect(() => {
//     socket = io(SERVER_URL, {
//       transports: ["websocket", "polling"],
//       //   withCredentials: true,
//     });

//     socket.on("connect", () => {
//       console.log("✅ Connected to WebSocket server");
//       setIsConnected(true);
//     });

//     socket.on("disconnect", () => {
//       console.log("❌ Disconnected from WebSocket server");
//       setIsConnected(false);
//     });

//     socket.on("message", (msg: string) => {
//       console.log("📩 New message:", msg);
//       setMessage(msg);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = (msg: string) => {
//     socket.emit("message", msg);
//   };

//   return { isConnected, message, sendMessage };
// };

// export default useSocket;
