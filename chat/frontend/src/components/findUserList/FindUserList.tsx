import {
  useGetAllUsers,
  useGetAllUsersLoading,
} from "../../customHooks/useGetAllUsers";
import { FindUsersItemType } from "../../types/Types";
import FindUsersItem from "../findUsersItem/FindUsersItem";
import {
//   getRequest,
  sendRequest,
  sentRequest,
} from "../../features/SendRequestSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
// import { getAllUsers } from "../../features/UsersSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const FindUserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useGetAllUsers();
  const handleUsers = (id: string) => {
    dispatch(sendRequest(id))
    //   .then(() => dispatch(getRequest()))
      .then(() => dispatch(sentRequest()))
    //   .then(() => dispatch(getAllUsers()));
  };
  const userLoading = useGetAllUsersLoading();
  return (
    <div className="bg-gray-700 p-2 md:p-5 flex flex-col gap-5 max-h-[70dvh] md:max-h-[75dvh] lg:max-h-[80dvh] overflow-auto">
      {users?.length > 0 ? (
        userLoading ? (
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
          users?.map((item: FindUsersItemType) => (
            <FindUsersItem
              _id={item?._id}
              firstName={item?.firstName}
              lastName={item?.lastName}
              handleUsers={handleUsers}
              key={item?._id}
            />
          ))
        )
      ) : (
        <div className="text-orange-600 font-bold text-2xl text-center">
          No User Found
        </div>
      )}
    </div>
  );
};
export default FindUserList;
