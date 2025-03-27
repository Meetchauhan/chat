import { useDispatch } from "react-redux";
import { useRequest, useRequestLoading } from "../../customHooks/useGetRequest";
import RequestItem from "../requestItem.tsx/RequestItem";
import { AppDispatch } from "../../store/store";
import { acceptRequest } from "../../features/AcceptRequestSlice";
import { getRequest } from "../../features/SendRequestSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const RequestList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getRequests = useRequest();
  const handleAcceptRequest = (id: string) => {
    dispatch(acceptRequest(id)).then(() => dispatch(getRequest()));
  };
  const requestLoading = useRequestLoading();
  return (
    <div className="bg-gray-700 p-5 flex flex-col gap-5 max-h-[70dvh] md:max-h-[75dvh] lg:max-h-[80dvh] overflow-auto">
      {getRequests?.length > 0 ? (
        requestLoading ? (
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
          getRequests?.map((item) => (
            <RequestItem
              senderId={item?.senderId?._id}
              firstName={item?.senderId?.firstName}
              lastName={item?.senderId?.lastName}
              handleAcceptRequest={handleAcceptRequest}
            />
          ))
        )
      ) : (
        <div className="text-orange-600 font-bold text-2xl text-center">
          No Request Found
        </div>
      )}
    </div>
  );
};

export default RequestList;
