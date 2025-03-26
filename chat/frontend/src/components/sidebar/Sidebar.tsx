import { useDispatch, useSelector } from "react-redux";
import UsersList from "../usersList/UsersList";
import { AppDispatch, RootState } from "../../store/store";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../../features/ChatSlice";

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((item: RootState) => item?.chat?.users?.data || []);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="bg-gray-900 w-full md:w-[35%] lg:w-[25%] min-h-full h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] overflow-x-auto">
      {users?.length > 0 ? (
        <div className="">
          <UsersList />
        </div>
      ) : (
        <div className="text-orange-600 h-full flex justify-center items-center flex-col">
          <p>No Users to chat </p>
          <p>To get Users to chat click here</p>
          <Link
            to="/find-users"
            className="bg-white px-3 py-1 rounded-sm text-[15px] mt-2"
          >
            Find Users
          </Link>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
