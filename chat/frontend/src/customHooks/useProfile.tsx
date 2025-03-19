import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { connectSocker } from "../features/AuthSlice";

const useProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isUserLoggedIn = useSelector((item: RootState) => item?.profile?.data);
  console.log("loggedin user", isUserLoggedIn);
  useEffect(() => {
    dispatch(connectSocker({ userId: isUserLoggedIn?.data?._id }));
  }, [isUserLoggedIn, dispatch]); 

  return isUserLoggedIn;
};

export default useProfile;
