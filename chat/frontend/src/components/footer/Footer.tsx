import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../features/SendRequestSlice";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);
  const getRequests = useSelector(
    (item: RootState) => item?.sendRequest?.data?.requests || []
  );
  return (
    <div className="bg-black">
      <div className="">
        <div className="flex items-center gap-5 justify-between px-6 py-3.5">
          <div className="text-orange-600">
            <Link to={"/"} className="">
              <img
                src="/public/chatHome.svg"
                alt="searchUser"
                className="w-[22px] h-[22px]"
              />
            </Link>
          </div>
          <div className="text-orange-600">
            <Link to={"/find-users"} className="">
              <img
                src="/public/searchUser.svg"
                alt="searchUser"
                className="w-[22px] h-[22px]"
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
                className="w-[22px] h-[22px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
