import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import VerifyOtp from "../../components/verifyOtp/VerifyOtp";
import SendOtp from "../../components/sendOtp/SendOtp";
import ToastError from "../../components/toastError/ToastError";

const Login = () => {
  const isOtpSent = useSelector(
    (item: RootState) => item?.auth?.sendOtpState?.success
  );
  const isOtpVerify = useSelector(
    (item: RootState) => item?.auth?.verifyOtpState?.success
  );
  console.log("otp verify", isOtpVerify);
  

  const sendOtpErrorMessage = useSelector(
    (item: RootState) => item?.auth?.sendOtpState?.message
  );

  const verifyOtpErrorMessage = useSelector(
    (item: RootState) => item?.auth?.verifyOtpState?.message
  );

  const isToast = useSelector((item: RootState) => item?.toast?.value);
  console.log("is toast", isToast);

  return (
    <>
      {isToast && (
        <ToastError
          state={isOtpSent || isOtpVerify}
          errorMessage={
            isOtpSent === false
              ? sendOtpErrorMessage
              : isOtpVerify === false
              ? verifyOtpErrorMessage
              : ""
          }
        />
      )}
      <div className="">
        {isOtpSent &&
        (isOtpVerify !== null ||
          isOtpVerify !== undefined ||
          isOtpVerify === false) ? (
          <VerifyOtp />
        ) : (
          <SendOtp />
        )}
        
      </div>
    </>
  );
};
export default Login;
