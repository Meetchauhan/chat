import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { getAllUsers } from "../../features/UsersSlice";
import { getRequest, sentRequest } from "../../features/SendRequestSlice";
import PageTitle from "../../components/pageTitle/PageTitle";
import FindUserList from "../../components/findUserList/FindUserList";

const FindUsers = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRequest());
    dispatch(sentRequest());
  }, [dispatch]);

  return (
    <div className="h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] bg-gray-900">
      <div className="w-full sm:w-[70%] md:w-[50%] mx-auto px-2">
        <PageTitle title={"Find Users"} />
        <FindUserList />
      </div>
    </div>
  );
};
export default FindUsers;
