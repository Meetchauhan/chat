import { useDispatch } from "react-redux";
import { UsersItemType } from "../../types/Types";
import { AppDispatch } from "../../store/store";
import { getMessages, selectUser } from "../../features/ChatSlice";
import useOnlineUser from "../../customHooks/useOnlineUser";

const UsersItem = ({ firstName, lastName, _id }: UsersItemType) => {
  const dispatch = useDispatch<AppDispatch>();
  const firstNameInitial = firstName?.slice(0, 1);
  const lastNameInitial = lastName?.slice(0, 1);
  const onlineUser = useOnlineUser();

  const handleSelectUser = () => {
    dispatch(
      selectUser({
        _id,
        firstName,
        lastName,
      })
    );
    dispatch(getMessages(_id)); 
  };
  

  return (
    <div className="px-3" onClick={() => handleSelectUser()}>
      <button className="py-2 px-2 lg:px-5 my-1 flex items-center gap-5 w-full cursor-pointer hover:bg-gray-800 rounded-md border-b-[1px] border-orange-600">
        <div className="relative text-[16px]text-[16px] text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full w-14 h-14 uppercase font-bold flex items-center justify-center ">
          {firstNameInitial}
          {lastNameInitial}
          {onlineUser?.includes(_id) ? (
            <span className="absolute bottom-1 right-[-5px] bg-green-500 rounded-2xl border-2 border-black">
              <svg
                width="10"  
                height="10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
                stroke="#00c951"
              >
                <path d="M11.993 6.648a.75.75 0 0 0-1.493.102v6c0 .028.002.057.006.086v.016a.75.75 0 0 0 .28.486l2.762 2.763.077.067a.75.75 0 0 0 .984-1.127L12 12.5V6.75l-.007-.102Z"></path>
              </svg>
            </span>
          ) : (
            <span className="absolute bottom-1 right-[-5px] bg-[#ffba00] rounded-2xl border-2 border-black">
              <svg
                width="10"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
              >
                <path d="M11.993 6.648a.75.75 0 0 0-1.493.102v6c0 .028.002.057.006.086v.016a.75.75 0 0 0 .28.486l2.762 2.763.077.067a.75.75 0 0 0 .984-1.127L12 12.5V6.75l-.007-.102Z"></path>
              </svg>
            </span>
          )}
        </div>
        <div className="text-[17px] lg:text-[18px] text-white capitalize font-normal">
          {firstName} {lastName}
        </div>
      </button>
    </div>
  );
};
export default UsersItem;
