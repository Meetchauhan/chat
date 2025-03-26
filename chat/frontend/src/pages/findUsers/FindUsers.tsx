import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getAllUsers } from "../../features/UsersSlice";
import useGetAllUsers from "../../customHooks/useGetAllUsers";
import { FindUsersType, SentRequestDataType } from "../../types/Types";
import {
  getRequest,
  sendRequest,
  sentRequest,
} from "../../features/SendRequestSlice";

const FindUsers = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useGetAllUsers();
  console.log("users", users);

  // const handleFollow = ()=>{

  // }

  const handleUsers = (id: string) => {
    dispatch(sendRequest(id))
      .then(() => dispatch(getRequest()))
      .then(() => dispatch(sentRequest()))
      .then(() => dispatch(getAllUsers()));

    console.log("userId", id);
  };

  useEffect(() => {
    dispatch(getRequest());
    dispatch(sentRequest());
  }, [dispatch]);

  const getRequestData = useSelector(
    (item: RootState) => item?.sendRequest?.data
  );
  console.log("getRequest", getRequestData);

  const sentRequestData = useSelector(
    (item: SentRequestDataType) => item?.sendRequest?.sendRequest?.sentRequests
  );
  console.log("sendRequest", sentRequestData);

  return (
    <div className="h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] bg-gray-900">
      <div className="w-full sm:w-[70%] md:w-[50%] mx-auto px-2">
        <h2 className="text-white text-center text-xl md:text-2xl lg:md:text-3xl mb-5 pt-5">Find Users</h2>
        <div className="bg-gray-700 p-2 md:p-5 flex flex-col gap-5 max-h-[70dvh] md:max-h-[75dvh] lg:max-h-[80dvh] overflow-auto">
          {users?.length > 0 ? (
            users?.map((item: FindUsersType) => (
              <div
                className="flex justify-between items-center"
                key={item?._id}
              >
                <div className="flex items-center gap-3">
                  <div className="text-[16px] sm:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[40px] sm:w-[50px] flex items-center justify-center">
                    {item?.firstName?.slice(0, 1)}
                    {item?.lastName?.slice(0, 1)}
                  </div>
                  <div className="text-white text-[16px] sm:text-lg">
                    {item?.firstName} {item?.lastName}
                  </div>
                </div>

                <button
                  onClick={() => handleUsers(item?._id)}
                  className="bg-orange-600 capitalize text-white px-2 py-1 rounded-md text-[14px] sm:text-[16px] cursor-pointer "
                >
                  {/* {item?.requests?.map((item) => item?.status)} */}
                  {/* {item?.connectedUsers?.length > 0
                  ? item?.connectedUsers?.map((item) => item?.status)
                  : "Follow"} */}

                  {sentRequestData?.some((con) => con?.userId === item?._id)
                    ? "Pending"
                    : "Follow"}
                </button>
              </div>
            ))
          ) : (
            <div className="text-orange-600 font-bold text-2xl text-center">No User Found</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default FindUsers;
