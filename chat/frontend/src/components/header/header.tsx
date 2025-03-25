import { useDispatch, useSelector } from "react-redux";
import useProfile from "../../customHooks/useProfile";
import Logout from "../logout/Logout";
import { AppDispatch, RootState } from "../../store/store";
import { getUsers, removeSelectUser } from "../../features/ChatSlice";
import useSelectedUser from "../../customHooks/useSelectedUser";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getRequest } from "../../features/SendRequestSlice";
import { closeMenu, openMenu } from "../../features/mobileMenuSlice";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profile = useProfile();
  const userList = () => {
    dispatch(removeSelectUser());
    dispatch(getUsers());
  };
  const selectedUser = useSelectedUser();
  const getRequests = useSelector(
    (item: RootState) => item?.sendRequest?.data?.requests || []
  );

  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };

  const isMenuOpen = useSelector((item: RootState) => item?.menu?.value);

  return (
    <header className="bg-gray-900  p-3 md:p-5 relative">
      <nav className="flex justify-between items-center">
        {profile?.success && (
          <div className="flex flex-row-reverse">
            <div className="hidden md:block">
              <Logout />
            </div>
            {selectedUser !== null && (
              <button
                className="text-orange-600 rotate-270 lg:hidden"
                onClick={userList}
              >
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
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-5 ">
            <div className="text-orange-600">
              <Link to={"/"} className="">
                <img
                  src="/public/chatHome.svg"
                  alt="chat"
                  className="w-[25px] h-[25px]"
                />
              </Link>
            </div>
            <div className="text-orange-600">
              <Link to={"/find-users"} className="">
                <img
                  src="/public/searchUser.svg"
                  alt="searchUser"
                  className="w-[25px] h-[25px]"
                />
              </Link>
            </div>
            <div className="text-orange-600">
              <Link to={"/request"} className="relative">
                <span className="bg-white absolute top-[-7px] right-[-2px] w-[16px] h-[16px] text-[12px] rounded-full flex justify-center items-center font-bold">
                  {getRequests?.length > 0 ? getRequests?.length : 0}
                </span>
                <img
                  src="/public/request.svg"
                  alt="request"
                  className="w-[25px] h-[25px]"
                />
              </Link>
            </div>
          </div>
          <div className="text-orange-600 text-2xl hidden md:block">
            {profile?.data?.firstName} {profile?.data?.lastName}
          </div>
          <button
            onClick={handleOpenMenu}
            className="text-orange-600 text-2xl block md:hidden"
          >
            {profile?.data?.firstName} {profile?.data?.lastName}
          </button>
        </div>
      </nav>
      <div
        className={`block md:hidden bg-black absolute top-0 left-0 z-20 h-[100dvh] w-[400px] p-5 ${
          isMenuOpen ? "translate-x-0" : "translate-x-[-500px]"
        } ease-in-out duration-300`}
      >
        <button
          className="my-5 text-xl text-orange-600 cursor-pointer"
          onClick={() => dispatch(closeMenu())}
        >
          Close
        </button>
        <ul className="text-orange-600 text-xl">
          <li className="p-1 border-b-2 border-orange-600 mb-5">
            <Link
              to={"/"}
              onClick={() => dispatch(closeMenu())}
              className="flex gap-7 items-center px-1"
            >
              <img
                src="/public/chatHome.svg"
                alt="searchUser"
                className="w-[25px] h-[25px]"
              />
              <span className="text-[18px]">Chat</span>
            </Link>
          </li>
          <li className="p-1 border-b-2 border-orange-600 mb-5">
            <Link
              to={"/find-users"}
              onClick={() => dispatch(closeMenu())}
              className="flex gap-7 items-center px-1"
            >
              <img
                src="/public/searchUser.svg"
                alt="searchUser"
                className="w-[25px] h-[25px]"
              />
              <span className="text-[18px]">Find Users</span>
            </Link>
          </li>
          <li className="p-1 border-b-2 border-orange-600 mb-5 px-1">
            <Link
              to={"/request"}
              onClick={() => dispatch(closeMenu())}
              className="relative flex gap-7 items-center"
            >
              <div className="">
                <span className="bg-white absolute top-[-7px] left-[12px] w-[16px] h-[16px] text-[12px] rounded-full flex justify-center items-center font-bold">
                  {getRequests?.length > 0 ? getRequests?.length : 0}
                </span>
                <img
                  src="/public/request.svg"
                  alt="request"
                  className="w-[25px] h-[25px]"
                />
              </div>
              <span className="text-[18px]">Request</span>
            </Link>
          </li>
          <li className="p-1 border-b-2 border-orange-600 mb-5 px-1 text-[18px]">
            <Logout />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
