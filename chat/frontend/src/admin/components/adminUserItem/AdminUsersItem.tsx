import { useDispatch } from "react-redux";
import { AdminUsersItemPropsType } from "../../../types/Types";
import { AppDispatch } from "../../../store/store";
import {
  adminAllUsers,
  adminDeleteUser,
} from "../../../features/AdminUsersSlice";
import useOnlineUser from "../../../customHooks/useOnlineUser";

const AdminUsersItem = ({
  _id,
  firstName,
  lastName,
}: AdminUsersItemPropsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteUser = (_id: string) => {
    dispatch(adminDeleteUser(_id)).then(() => dispatch(adminAllUsers()));
  };

  const userStatus = useOnlineUser();

  return (
    <li key={_id} className="border-b border-gray-600">
      <div className="flex items-center gap-2 py-2">
        <p className="w-[50%] text-lg text-white font-bold">
          {firstName} {lastName}
        </p>
        <p>{userStatus?.includes(_id) ? "online" : "offline"}</p>
        <p className="w-[25%] text-white">
          <span>Edit</span>
        </p>
        <p className="w-[25%] text-white">
          <span onClick={() => handleDeleteUser(_id)}> Delete</span>
        </p>
      </div>
    </li>
  );
};
export default AdminUsersItem;
