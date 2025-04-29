import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { setOnlineUsers } from "../features/AuthSlice";

const useOnlineUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const socket = useSelector((state: RootState) => state.auth.socket);
  const onlineUsers = useSelector((state: RootState) => state.auth.onlineUsers);

  useEffect(() => {
    if (socket && socket.connected) {
      socket.on("getOnlineUsers", (users: string[]) => {
        dispatch(setOnlineUsers(users));
      });

      return () => {
        socket.off("getOnlineUsers");
      };
    }
  }, [dispatch, socket]);

  return onlineUsers;
};

export default useOnlineUser;
