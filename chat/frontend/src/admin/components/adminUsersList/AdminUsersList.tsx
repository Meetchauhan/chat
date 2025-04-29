import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { adminAllUsers } from "../../../features/AdminUsersSlice";
import { useEffect } from "react";
import { UserType } from "../../../types/Types";
import AdminUsersItem from "../adminUserItem/AdminUsersItem";

const AdminUsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getAllUsers = useSelector((item: RootState) => item?.adminUsers?.users);
  useEffect(() => {
    dispatch(adminAllUsers());
  }, [dispatch]);
  return (
    <ul>
      {getAllUsers?.data?.map((item: UserType) => (
        <AdminUsersItem
          key={item?._id}
          _id={item?._id}
          firstName={item?.firstName}
          lastName={item?.lastName}
        />
      ))}
    </ul>
  );
};

export default AdminUsersList;
