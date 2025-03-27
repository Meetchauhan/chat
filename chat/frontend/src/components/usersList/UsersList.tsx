import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import UsersItem from "../usersItem/UsersItem";
import { UsersListType } from "../../types/Types";
import { getUsers } from "../../features/ChatSlice";
import {
  useChatUserLoading,
  useGetChatUsers,
} from "../../customHooks/useGetChatUsers";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useGetChatUsers();
  const userLoading = useChatUserLoading();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="">
      <div className="py-5">
        {userLoading ? (
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
        ) : (
          users?.map((item: UsersListType) => (
            <UsersItem
              key={item?._id}
              _id={item?._id}
              firstName={item?.firstName}
              lastName={item?.lastName}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default UsersList;
