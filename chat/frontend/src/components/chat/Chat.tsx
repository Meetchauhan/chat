import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  getMessages,
  subscribeToMessages,
  unSubscribeToMessage,
} from "../../features/ChatSlice";
import { getMessagesFromDB } from "../../db/db";
import useSelectedUser from "../../customHooks/useSelectedUser";
import useGetMessages from "../../customHooks/useGetMessages";
import { useProfile } from "../../customHooks/useProfile";
import useOnlineUser from "../../customHooks/useOnlineUser";
import SendMessage from "../sendMessage/SendMessage";
import { ChatType } from "../../types/Types";
import { formateMessageTime } from "../../utils/Utils";
import NotificationSound from "../notificationSound/NotificationSound";
import { useGetChatUsers } from "../../customHooks/useGetChatUsers";

interface senderNameType {
  _id: string;
  firstName: string;
  lastName: string;
}

const Chat = () => {
  const [messagesFetched, setMessagesFetched] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const selectedUser = useSelectedUser();
  const getChat = useGetMessages() as unknown as ChatType[];
  const profile = useProfile();
  const dispatch = useDispatch<AppDispatch>();
  const isUserOnline = useOnlineUser();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const socket = useSelector((state: RootState) => state.auth.socket);
  const chatUsers = useGetChatUsers();
  const messageLoading = useSelector(
    (state: RootState) => state?.chat?.messageLoading
  );

  // ✅ Track if messages have already been fetched
  const getToken = useSelector(
    (item: RootState) => item?.sendNotification?.token
  );
  console.log("token", getToken);

  const recieverId = getChat?.[getChat.length - 1]?.senderId;
  console.log("chat user", recieverId);

  const recieverName = chatUsers?.find((item: senderNameType) =>
    recieverId === item?._id ? item : null
  ) as senderNameType | undefined;
  console.log("reciever name", recieverName);
  const senderFirstName = `${
    recieverName?.firstName ? recieverName?.firstName : "Test"
  } ${recieverName?.lastName ? recieverName?.lastName : "User"}`;
  console.log("sender name", senderFirstName);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser || messagesFetched) return; // Prevent duplicate calls

      try {
        const offlineMessages = await getMessagesFromDB();

        const uniqueMessages = offlineMessages.filter(
          (msg, index, self) =>
            index === self.findIndex((m) => m._id === msg._id)
        );

        dispatch({ type: "chat/setMessages", payload: uniqueMessages });

        console.log("Offline messages loaded:", uniqueMessages);

        if (navigator.onLine) {
          await dispatch(getMessages(selectedUser._id));
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }

      setMessagesFetched(true);
    };

    fetchMessages();

    const handleOnline = () => {
      setMessagesFetched(false); // Reset flag when coming back online
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [dispatch, selectedUser, messagesFetched]);

  useEffect(() => {
    if (selectedUser && socket) {
      subscribeToMessages(
        dispatch,
        socket,
        selectedUser._id,
        profile?.data?._id,
        messageLoading,
        senderFirstName
      );
      setIsNotification(true);
    }

    return () => {
      if (socket) {
        unSubscribeToMessage(socket);
        setIsNotification(false);
      }
    };
  }, [
    selectedUser,
    socket,
    dispatch,
    profile?.data?._id,
    messageLoading,
    senderFirstName,
  ]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [getChat]);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="w-full">
        <div className="text-orange-600 text-xl lg:text-2xl text-left px-5 py-2 lg:py-3 bg-[#85300452] w-full rounded-sm capitalize">
          {selectedUser?.firstName} {selectedUser?.lastName}
          {isUserOnline?.includes(selectedUser?._id) ? (
            <span className="block text-yellow-50 text-sm">Online</span>
          ) : (
            <span className="block text-yellow-50 text-sm">Offline</span>
          )}
        </div>
      </div>

      <div className="h-full w-full flex flex-col items-center justify-between pb-10 pt-[77px] absolute">
        <div className="h-full w-full flex items-end pb-10">
          <div className="w-full h-full overflow-auto px-5">
            <div
              ref={chatContainerRef}
              className="w-full h-full overflow-auto px-3 lg:px-10"
            >
              {getChat?.map((item: ChatType) =>
                item?.senderId === profile?.data?._id ? (
                  <div
                    key={item?._id}
                    className="flex justify-end text-[17px] w-fit ml-auto rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none max-w-[45%]"
                  >
                    {item?.text && (
                      <div className="my-3 flex flex-row-reverse gap-3 w-full">
                        <div className="w-fit max-w-[100%]">
                          <div className="mb-[0.5] text-[10px] text-white text-right">
                            {formateMessageTime(item?.createdAt)}
                          </div>
                          <div className="py-1 px-3 text-white bg-[#f54a0045] rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none overflow-hidden break-words">
                            {item?.text}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    key={item?._id}
                    className="flex justify-normal text-[17px] mr-auto rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none max-w-[45%]"
                  >
                    {item?.text && (
                      <div className="my-3 flex flex-row gap-3 items-center w-full">
                        <div className="text-[18px] lg:text-[20px] text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full w-14 h-14 uppercase font-bold flex items-center justify-center">
                          {selectedUser?.firstName?.slice(0, 1)}
                          {selectedUser?.lastName?.slice(0, 1)}
                        </div>
                        <div className="w-fit max-w-[100%]">
                          <div className="mb-[0.5] text-[10px] text-white text-left">
                            {formateMessageTime(item?.createdAt)}
                          </div>
                          <div className="py-1 px-3 text-white bg-black rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none overflow-hidden break-words min-w-[20px] max-w-full">
                            {item?.text}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <SendMessage />
      {isNotification && <NotificationSound />}
    </div>
  );
};

export default Chat;
