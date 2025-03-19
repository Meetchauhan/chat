import { useSelector } from "react-redux";
import { GetMessageType } from "../types/Types";

const useGetMessages = () => {
  const getMessages = useSelector(
    (item: GetMessageType) => item?.chat?.messages
    
  );
  console.log("message", getMessages);
  
  
  return getMessages;
};
export default useGetMessages;
