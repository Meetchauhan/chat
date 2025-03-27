import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useRequest = () => {
  const getRequests = useSelector(
    (item: RootState) => item?.sendRequest?.data?.requests || []
  );
  return getRequests;
};

export const useRequestLoading = () => {
  const requestLoading = useSelector(
    (item: RootState) => item?.sendRequest?.getRequestLoading
  );
  return requestLoading;
};
