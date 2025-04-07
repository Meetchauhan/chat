import Sidebar from "../../components/sidebar/Sidebar";
import Chat from "../../components/chat/Chat";
import NoChatSelected from "../../components/chat/NoChatSelected";
import useSelectedUser from "../../customHooks/useSelectedUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect} from "react";
import { setOnlineUsers } from "../../features/AuthSlice";
import {
  requestNotificationPermission,
  // sendPushNotification,
} from "../../pushNotification";
import { getToken } from "../../features/SendNotificationSlice";

const Home = () => {
  // const [fcmToken, setFcmToken] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const selectedUser = useSelectedUser();
  const socket = useSelector((item: RootState) => item?.auth?.socket);

  useEffect(() => {
    if (socket) {
      socket.on("getOnlineUsers", (users: string[]) => {
        dispatch(setOnlineUsers(users));
      });

      return () => {
        socket.off("getOnlineUsers");
      };
    }
  }, [dispatch, socket]);

  useEffect(() => {
    const handleRequestPermission = async () => {
      const token = await requestNotificationPermission();
      console.log("token", token);

      if (token) {
        // setFcmToken(token);
        dispatch(getToken(token));
      }
    };
    handleRequestPermission();
  }, [dispatch]);

  // const handleSendNotification = () => {
  //   if (!fcmToken) {
  //     alert("Get notification permission first!");
  //     return;
  //   }
  //   sendPushNotification(
  //     fcmToken,
  //     "New Chat Message",
  //     "You have a new message!"
  //   );
  // };

  return (
    <>
      <div className="hidden md:flex h-[calc(100dvh-73px)]">
        <Sidebar />
        <div className="w-[75%] bg-gray-800 relative min-h-full h-[calc(100dvh-73px)] overflow-x-auto">
          {selectedUser ? <Chat /> : <NoChatSelected />}
        </div>
      </div>
      <div className="flex md:hidden h-[calc(100dvh-53px)]">
        <div className="w-full bg-gray-800 relative min-h-full h-[calc(100dvh-53px)] overflow-x-auto">
          {selectedUser ? <Chat /> : <Sidebar />}
        </div>
      </div>
      {/* <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>PWA Chat App 🚀</h2>
        <button
          onClick={handleRequestPermission}
          style={{ margin: "10px", padding: "10px" }}
        > 
          Enable Push Notifications
        </button>
        <button onClick={handleSendNotification} style={{ padding: "10px" }}>
          Send Test Notification
        </button>
        {fcmToken && <p>FCM Token: {fcmToken}</p>}
      </div> */}
    </>
  );
};
export default Home;
