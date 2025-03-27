import {
  useSendRequest,
  useSendRequestLoading,
} from "../../customHooks/useSendRequest";
import { FindUsersItemType } from "../../types/Types";

const FindUsersItem = ({
  _id,
  firstName,
  lastName,
  handleUsers,
}: FindUsersItemType) => {
  const sentRequestData = useSendRequest();
  const sendRequestLoading = useSendRequestLoading();
  return (
    <div className="flex justify-between items-center" key={_id}>
      <div className="flex items-center gap-3">
        <div className="text-[16px] sm:text-[20px] text-white bg-gray-600 rounded-full py-2 px-2.5 uppercase w-[40px] sm:w-[50px] flex items-center justify-center">
          {firstName?.slice(0, 1)}
          {lastName?.slice(0, 1)}
        </div>
        <div className="text-white text-[16px] sm:text-lg">
          {firstName} {lastName}
        </div>
      </div>

      <button
        onClick={() => handleUsers(_id)}
        className="bg-orange-600 capitalize text-white px-2 py-1 rounded-md text-[14px] sm:text-[16px] cursor-pointer "
      >
        {sendRequestLoading
          ? "Sending Request"
          : sentRequestData?.some((con) => con?.userId === _id)
          ? "Pending"
          : "Follow"}
      </button>
    </div>
  );
};
export default FindUsersItem;
