import { useDispatch } from "react-redux";
import useProfile from "../../customHooks/useProfile";
import Logout from "../logout/Logout";
import { AppDispatch } from "../../store/store";
import { getUsers, removeSelectUser } from "../../features/ChatSlice";
import useSelectedUser from "../../customHooks/useSelectedUser";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useProfile();
  const userList = () => {
    dispatch(removeSelectUser());
    dispatch(getUsers());
  };
  const selectedUser = useSelectedUser();
  console.log("selected user", selectedUser);

  return (
    <header className="bg-gray-900  p-3 md:p-5 ">
      <nav className="flex justify-between items-center">
        {profile?.success && (
          <div className="flex flex-row-reverse">
            <Logout />
            {selectedUser !== null && (
              <button className="text-orange-600 rotate-270 lg:hidden" onClick={userList}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 6V18M12 6L7 11M12 6L17 11"
                    stroke="#f54a00"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="">
          <div className="">
            <Link to={"/find-users"}>Find Users</Link>
          </div>
          <div className="text-orange-600 text-2xl">
            {profile?.data?.firstName} {profile?.data?.lastName}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
