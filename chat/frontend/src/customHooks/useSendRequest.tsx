import { useSelector } from "react-redux";
import { SentRequestDataType } from "../types/Types";

export const useSendRequest = () => {
  const sentRequestData = useSelector(
    (item: SentRequestDataType) => item?.sendRequest?.sendRequest?.sentRequests
  );
  return sentRequestData;
};

export const useSendRequestLoading = () => {
  const sendRequestLoading = useSelector(
    (item: SentRequestDataType) => item?.sendRequest?.sendRequest?.loading
  );
  return sendRequestLoading;
};
// export default useSendRequest;
