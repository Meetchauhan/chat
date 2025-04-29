import { Link, useLocation } from "react-router-dom";
import usersIcon from "../../../images/users.svg";
import chatIcon from "../../../images/fav.svg";
import dashboardIcon from "../../../images/home.svg";

const AdminSidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-gray-900 h-screen">
      <div className=" flex flex-col justify-between h-screen">
        <ul className="py-5 px-2 flex flex-col gap-4">
          <li
            className={`text-white text-md font-bold  rounded-md flex justify-center  ${
              pathname === "/admin/dashboard" ? "bg-gray-700" : ""
            } ${pathname !== "/admin/dashboard" ? "hover:bg-gray-800" : ""} `}
          >
            <Link
              to={"/admin/dashboard"}
              className="flex justify-center w-full"
            >
              <img
                className="w-[40px] px-2 py-3"
                src={dashboardIcon}
                alt="dashboardIcon"
              />
            </Link>
          </li>
          <li
            className={`text-white text-md font-bold  rounded-md flex justify-center  ${
              pathname === "/admin/users" ? "bg-gray-700" : ""
            } ${pathname !== "/admin/users" ? "hover:bg-gray-800" : ""}`}
          >
            <Link to={"/admin/users"}>
              <img className="w-[50px] p-2" src={usersIcon} alt="usersIcon" />
            </Link>
          </li>
          <li
            className={`text-white text-md font-bold  rounded-md flex justify-center ${
              pathname === "/admin/all-chats" ? "bg-gray-700" : ""
            } ${pathname !== "/admin/all-chats" ? "hover:bg-gray-800" : ""}`}
          >
            <Link to={"/admin/all-chats"}>
              <img
                className="w-[38px] p-2 py-3 "
                src={chatIcon}
                alt="chatIcon"
              />
            </Link>
          </li>
        </ul>
        <div className="text-white text-md font-bold">Logout</div>
      </div>
    </div>
  );
};
export default AdminSidebar;
