import { useDispatch } from "react-redux";
import UsersList from "../usersList/UsersList";
import { AppDispatch } from "../../store/store";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../../features/ChatSlice";
import {
  useChatUserLoading,
  useGetChatUsers,
} from "../../customHooks/useGetChatUsers";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useGetChatUsers();
  const userLoading = useChatUserLoading();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  if (userLoading) {
    return (
      <div className="bg-gray-900 w-full md:w-[35%] lg:w-[25%] min-h-full h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] overflow-x-auto">
        <div className="text-orange-600 h-full flex justify-center items-center flex-col">
          <SkeletonTheme baseColor="#39424e" highlightColor="#f54a00">
            <div className="my-2">
              <Skeleton height={60} duration={0.9} />
            </div>
            <div className="my-2">
              <Skeleton height={60} duration={0.9} />
            </div>
            <div className="my-2">
              <Skeleton height={60} duration={0.9} />
            </div>
            <div className="my-2">
              <Skeleton height={60} duration={0.9} />
            </div>
            <div className="my-2">
              <Skeleton height={60} duration={0.9} />
            </div>
          </SkeletonTheme>
        </div>
      </div>
    );
  }
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
