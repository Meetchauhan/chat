import { useSelector } from "react-redux";
import { ToastErrorArg } from "../../types/Types";
import { RootState } from "../../store/store";

const ToastError = ({ errorMessage }: ToastErrorArg) => {
  const isToast = useSelector((item: RootState) => item?.toast?.value);

  return (
    <div
      className={`${
        isToast
          ? "absolute top-3 left-1/2 -translate-x-1/2 "
          : "absolute top-[-50px]"
      } bg-red-200 text-red-600 w-fit p-2 rounded-sm font-medium text-md`}
    >
      <div className="">{errorMessage}</div>
    </div>
  );
};
export default ToastError;
