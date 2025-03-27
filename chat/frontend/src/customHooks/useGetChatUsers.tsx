import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useGetChatUsers = () => {
  const users = useSelector((item: RootState) => item?.chat?.users?.data || []);
  return users;
};

export const useChatUserLoading = () => {
  const chatUserLoading = useSelector(
    (item: RootState) => item?.chat?.userLoading
  );
  return chatUserLoading;
};
