import { useSelector } from "react-redux";
import { GetMessageType } from "../types/Types";

const useGetMessages = () => {
  const getMessages = useSelector(
    (item: GetMessageType) => item?.chat?.messages
    
  );
  
  
  return getMessages;
};
export default useGetMessages;
