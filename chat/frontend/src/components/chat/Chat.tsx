import useSelectedUser from "../../customHooks/useSelectedUser";
import useGetMessages from "../../customHooks/useGetMessages";
import SendMessage from "../sendMessage/SendMessage";
import { ChatType } from "../../types/Types";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  getMessages,
  subscribeToMessages,
  unSubscribeToMessage,
  // unSubscribeToMessage,
} from "../../features/ChatSlice";
import { formateMessageTime } from "../../utils/Utils";
import { useProfile } from "../../customHooks/useProfile";
import useOnlineUser from "../../customHooks/useOnlineUser";
import Loading from "../loading/Loading";

const Chat = () => {
  const selectedUser = useSelectedUser();
  const getChat = useGetMessages();
  const profile = useProfile();
  const dispatch = useDispatch<AppDispatch>();
  console.log("chat", getChat);

  // const firstNameInitial = profile?.data?.firstName?.slice(0, 1);
  // const lastNameInitial = profile?.data?.lastName?.slice(0, 1);
  const isUserOnline = useOnlineUser();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  console.log("profile---", profile);
  console.log("selected user full name", selectedUser);

  const recieverFName = selectedUser?.firstName?.slice(0, 1);
  const recieverLName = selectedUser?.lastName?.slice(0, 1);
  const socket = useSelector((state: RootState) => state.auth.socket); // Get socket from Redux
  const state = useSelector((state: RootState) => state?.chat?.messages);

  console.log("messagesss---", state);

  useEffect(() => {
    if (selectedUser) {
      dispatch(getMessages(selectedUser._id)); // ✅ Fetch messages on user selection
    }
  }, [dispatch, selectedUser]);

  // ✅ Always listen for new messages (runs once on mount)
  const messageLoading = useSelector(
    (item: RootState) => item?.chat?.messageLoading
  );

  useEffect(() => {
    if (selectedUser && socket) {
      subscribeToMessages(
        dispatch,
        socket,
        selectedUser._id,
        profile?.data?._id,
        messageLoading
      );
    }

    return () => {
      if (socket) {
        unSubscribeToMessage(socket); // Cleanup previous subscriptions when component unmounts or user changes
      }
    };
  }, [selectedUser, socket, dispatch, profile?.data?._id, messageLoading]);

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
      {messageLoading ? (
        <Loading />
      ) : (
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
                      className="flex justify-end text-[17px]  w-fit ml-auto  rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none max-w-[45%]"
                    >
                      {item?.text && (
                        <div className="my-3 flex flex-row-reverse gap-3 w-full">
                          {/* <div className="text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[50px] flex items-center">
                        {firstNameInitial}
                        {lastNameInitial}
                      </div> */}
                          <div className="w-fit max-w-[100%]">
                            <div className="mb-[0.5] text-[10px] text-white text-right">
                              {formateMessageTime(item?.createdAt)}
                            </div>
                            <div className="py-1 px-3  text-white bg-[#f54a0045] rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none overflow-hidden break-words">
                              {item?.text}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      key={item?._id}
                      className="flex justify-normal text-[17px]  mr-auto  rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none max-w-[45%]"
                    >
                      {item?.text && (
                        <div className="my-3 flex flex-row gap-3 items-center w-full">
                          <div className="text-[18px] lg:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[45px] lg:w-[50px] flex items-center justify-center">
                            {recieverFName}
                            {recieverLName}
                          </div>
                          <div className="w-fit max-w-[100%]">
                            <div className="mb-[0.5] text-[10px] text-white text-left">
                              {formateMessageTime(item?.createdAt)}
                            </div>
                            <div className="py-1 px-3  text-white bg-black rounded-l-xl rounded-b-xl rounded-t-xl rounded-br-none overflow-hidden break-words min-w-[20px] max-w-full">
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
      )}
      <SendMessage />
    </div>
  );
};
export default Chat;
