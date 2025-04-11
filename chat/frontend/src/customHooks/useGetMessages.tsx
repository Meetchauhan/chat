import { useSelector } from "react-redux";
import { GetMessageType } from "../types/Types";

const useGetMessages = () => {
  const getMessages = useSelector(
    (item: GetMessageType) => item?.chat?.messages
    
  );
  console.log("getMessagge", getMessages);
  
  
  return getMessages;
};
export default useGetMessages;
