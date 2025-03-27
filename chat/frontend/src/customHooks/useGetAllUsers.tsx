import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useGetAllUsers = () => {
  const allUsers = useSelector(
    (item: RootState) => item?.users?.data?.data || []
  );
  return allUsers;
};

export const useGetAllUsersLoading = () => {
  const allUsersLoading = useSelector(
    (item: RootState) => item?.users?.loading
  );
  return allUsersLoading;
};
