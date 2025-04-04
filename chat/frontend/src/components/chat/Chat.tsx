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

const Chat = () => {
  const selectedUser = useSelectedUser();
  const getChat = useGetMessages();
  const profile = useProfile();
  const dispatch = useDispatch<AppDispatch>();
  const isUserOnline = useOnlineUser();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const socket = useSelector((state: RootState) => state.auth.socket);
  // const state = useSelector((state: RootState) => state?.chat?.messages);
  const messageLoading = useSelector(
    (state: RootState) => state?.chat?.messageLoading
  );

  // ✅ Track if messages have already been fetched
  const [messagesFetched, setMessagesFetched] = useState(false);
  const getToken = useSelector(
    (item: RootState) => item?.sendNotification?.token
  );
  const senderFirstName = profile?.data?.firstName || undefined
console.log("get token", getToken);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser || messagesFetched) return; // Prevent duplicate calls

      try {
        // ✅ 1. Fetch messages from IndexedDB first (for offline support)
        const offlineMessages = await getMessagesFromDB();

        // ✅ 2. Ensure unique messages before setting state
        const uniqueMessages = offlineMessages.filter(
          (msg, index, self) =>
            index === self.findIndex((m) => m._id === msg._id)
        );

        dispatch({ type: "chat/setMessages", payload: uniqueMessages });

        console.log("Offline messages loaded:", uniqueMessages);

        // ✅ 3. If online, sync with the server
        if (navigator.onLine) {
          await dispatch(getMessages(selectedUser._id));
          
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }

      // ✅ Ensure `getMessages` doesn't run again unnecessarily
      setMessagesFetched(true);
    };

    fetchMessages();

    // ✅ Listen for online status change
    const handleOnline = () => {
      setMessagesFetched(false); // Reset flag when coming back online
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [dispatch, selectedUser, messagesFetched]);

  // ✅ Subscribe to socket messages
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
    }

    return () => {
      if (socket) {
        unSubscribeToMessage(socket);
      }
    };
  }, [selectedUser, socket, dispatch, profile?.data?._id, messageLoading, senderFirstName]);

  // ✅ Scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [getChat]);

  // const syncMessages = useCallback(async () => {
  //   setSyncing(true); // ✅ Show loader before syncing
  //   console.log("🌍 Syncing messages...");

  //   try {
  //     const unsentMessages = await getMessagesFromDB();
  //     const messagesToSync = unsentMessages.filter(msg => !msg.success);

  //     if (messagesToSync.length === 0) {
  //       setSyncing(false);
  //       return;
  //     }

  //     for (const msg of messagesToSync) {
  //       const payload: SendMessagePayload = {
  //         selectedUserId: msg.recieverId,
  //         loggedinUserId: msg.senderId!,
  //         text: msg.text,
  //       };
  //       const response = await store.dispatch(sendMessage(payload)).unwrap();

  //       if (response.success) {
  //         msg.success = true;
  //         await saveMessage(msg);
  //       }
  //     }
  //     console.log("✅ Messages synced.");
  //   } catch (error) {
  //     console.error("❌ Syncing failed:", error);
  //   } finally {
  //     setSyncing(false); // ✅ Hide loader after sync
  //   }
  // }, []);

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
                        <div className="text-[18px] lg:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[45px] lg:w-[50px] flex items-center justify-center">
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
    </div>
  );
};

export default Chat;
