import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getRequest } from "../../features/SendRequestSlice";
import { acceptRequest } from "../../features/AcceptRequestSlice";

const Request = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getRequests = useSelector(
    (item: RootState) => item?.sendRequest?.data?.requests || []
  );

  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);

  const handleAcceptRequest = (id: string) => {
    dispatch(acceptRequest(id)).then(() => dispatch(getRequest()));
  };

  console.log("getRequests", getRequests);

  return (
    <div className="h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] bg-gray-900">
      <div className="w-full sm:w-[70%] md:w-[50%] mx-auto px-2">
        <h2 className="text-white text-center text-xl md:text-2xl lg:md:text-3xl mb-5 pt-5">Requests</h2>
        <div className="bg-gray-700 p-5 flex flex-col gap-5 max-h-[70dvh] md:max-h-[75dvh] lg:max-h-[80dvh] overflow-auto">
          {getRequests?.length > 0 ? (
            getRequests?.map((item) => (
              <div
                className="flex justify-between items-center"
                key={item?.senderId?._id}
              >
                <div className="flex items-center gap-3">
                  <div className="text-[16px] sm:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[40px] sm:w-[50px] flex items-center justify-center">
                    {item?.senderId?.firstName?.slice(0, 1)}
                    {item?.senderId?.lastName?.slice(0, 1)}
                  </div>
                  <div className="text-white text-[16px] sm:text-lg">
                    {item?.senderId?.firstName} {item?.senderId?.lastName}
                  </div>
                </div>
                <button
                  onClick={() => handleAcceptRequest(item?.senderId?._id)}
                  className="bg-orange-600 text-white px-2 py-1 rounded-md text-[14px] sm:text-[16px] cursor-pointer "
                >
                  Accept
                </button>
              </div>
            ))
          ) : (
            <div className="text-orange-600 font-bold text-2xl text-center">
              No Request Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Request;
