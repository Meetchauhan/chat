import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { getRequest } from "../../features/SendRequestSlice";
import PageTitle from "../../components/pageTitle/PageTitle";
import RequestList from "../../components/requestList/RequestList";

const Request = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);

  return (
    <div className="h-[calc(100dvh-53px)] md:h-[calc(100dvh-73px)] bg-gray-900">
      <div className="w-full sm:w-[70%] md:w-[50%] mx-auto px-2">
        <PageTitle title="Request" />
        <RequestList />
      </div>
    </div>
  );
};
export default Request;
