import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { getAllUsers } from "../../features/UsersSlice";
import useGetAllUsers from "../../customHooks/useGetAllUsers";
import { FindUsersType } from "../../types/Types";

const FindUsers = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const users = useGetAllUsers();

  // const handleFollow = ()=>{
    
  // }

  return (
    <div className="h-[calc(100dvh-72px)] bg-gray-900">
      <div className="w-full sm:w-[70%] md:w-[50%] mx-auto px-2">
        <h2 className="text-white text-center text-3xl mb-5">Find Users</h2>
        <div className="bg-gray-700 p-5 flex flex-col gap-5 max-h-[70dvh] md:max-h-[75dvh] lg:max-h-[80dvh] overflow-auto">
          {users?.map((item: FindUsersType) => (
            <div className="flex justify-between items-center" key={item?._id}>
              <div className="flex items-center gap-3">
                <div className="text-[16px] sm:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[40px] sm:w-[50px] flex items-center justify-center">
                  {item?.firstName?.slice(0, 1)}
                  {item?.lastName?.slice(0, 1)}
                </div>
                <div className="text-white text-[16px] sm:text-lg">
                  {item?.firstName} {item?.lastName}
                </div>
              </div>
              <button className="bg-orange-600 text-white px-2 py-1 rounded-md text-[14px] sm:text-[16px] cursor-pointer ">
                follows
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FindUsers;
