import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import VerifyOtp from "../../components/verifyOtp/VerifyOtp";
import SendOtp from "../../components/sendOtp/SendOtp";
import ToastError from "../../components/toastError/ToastError";
import { useProfileLoading } from "../../customHooks/useProfile";
import Loading from "../../components/loading/Loading";
import InstallAppButton from "../../components/installAppButton/InstallAppButton";

const Login = () => {
  const isOtpSent = useSelector(
    (item: RootState) => item?.auth?.sendOtpState?.success
  );
  const isOtpVerify = useSelector(
    (item: RootState) => item?.auth?.verifyOtpState?.success
  );

  const sendOtpErrorMessage = useSelector(
    (item: RootState) => item?.auth?.sendOtpState?.message
  );

  const verifyOtpErrorMessage = useSelector(
    (item: RootState) => item?.auth?.verifyOtpState?.message
  );
  const isToast = useSelector((item: RootState) => item?.toast?.value);

  const profileLoading = useProfileLoading();

  return profileLoading ? (
    <Loading />
  ) : (
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
    <InstallAppButton />
    </>
  );
};
export default Login;
