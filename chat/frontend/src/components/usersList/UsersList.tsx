import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import UsersItem from "../usersItem/UsersItem";
import { UsersListType } from "../../types/Types";
import { getUsers } from "../../features/ChatSlice";

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((item: RootState) => item?.chat?.users?.data);
  console.log("users", users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className="">
      <div className="py-5">
        {users?.map((item: UsersListType) => (
          <UsersItem
            key={item?._id}
            _id={item?._id}
            firstName={item?.firstName}
            lastName={item?.lastName}
          />
        ))}
      </div>
    </div>
  );
};
export default UsersList;
