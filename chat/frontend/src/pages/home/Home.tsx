import Sidebar from "../../components/sidebar/Sidebar";
import Chat from "../../components/chat/Chat";
import NoChatSelected from "../../components/chat/NoChatSelected";
import useSelectedUser from "../../customHooks/useSelectedUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { setOnlineUsers } from "../../features/AuthSlice";

const Home = () => {
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
    </>
  );
};
export default Home;
