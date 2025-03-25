import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useGetAllUsers = () => {
  const allUsers = useSelector((item: RootState) => item?.users?.data?.data || []);
  return allUsers;
};
export default useGetAllUsers;
