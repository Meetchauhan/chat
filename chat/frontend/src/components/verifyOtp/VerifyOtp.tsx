import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";
import {
  connectSocker,
  resetVerifyOtpState,
  sendOtp,
  verifyOtp,
} from "../../features/AuthSlice";
import { VerifyOtpSchema } from "../../validationSchema/SendOtpSchema";
import { closeToast, showToast } from "../../features/ToastSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../features/ProfileSlice";

const VerifyOtp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOtpVerify = useSelector(
    (item: RootState) => item?.auth?.verifyOtpState?.success
  );
  const resendOtpLoading = useSelector(
    (item: RootState) => item?.auth?.sendOtpLoading
  );
  const loading = useSelector((item: RootState) => item?.auth?.loading);
  const isToast = useSelector((item: RootState) => item?.toast?.value);
  const loginEmail = useSelector(
    (item: RootState) => item?.auth?.loginEmail?.meta?.arg
  );

  const navigate = useNavigate();

  const resendMail = localStorage.getItem("loginMain");

  const initialValue = {
    otp: "",
  };
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: VerifyOtpSchema,
    onSubmit: async (value, action) => {
      const response = await dispatch(verifyOtp(value)).then(() =>
        dispatch(getProfile())
      );

      action.resetForm();
      if (response?.payload?.success) {
        navigate("/", { replace: true });
        dispatch(connectSocker({ userId: response?.payload?.data?._id }));
      }
    },
  });

  useEffect(() => {
    if (isOtpVerify === false) {
      dispatch(showToast());
      setTimeout(() => {
        dispatch(resetVerifyOtpState());
      }, 5000);
    }
    setTimeout(() => {
      dispatch(closeToast());
    }, 5000);
  }, [isOtpVerify, dispatch]);

  const handleResendOtp = () => {
    if (resendMail) {
      dispatch(sendOtp(JSON.parse(resendMail)));
    } else if (loginEmail) {
      dispatch(sendOtp(loginEmail));
    } else {
      console.warn("No email found to resend OTP.");
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-[100dvh] sm:h-full p-5 sm:p-10">
      <div className="bg-gray-700 p-5 md:p-10 shadow-md border border-gray-200 w-full sm:w-lg">
        <h2 className="text-3xl text-center mb-4 text-orange-600">
          Verify OTP
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <Input
              type="number"
              placeholder="Verify OTP"
              label="OTP"
              name="otp"
              value={values?.otp}
              onChange={handleChange}
              error={touched?.otp && errors?.otp}
              
            />
          </div>
          <Button
            type="submit"
            title={loading ? "Verifying OTP..." : "Verify OTP"}
            disabled={loading || isToast}
          />
        </form>
        <div className="mt-2 text-amber-50 text-center">
          Didn't get OTP?{" "}
          <button
            className={`underline ${
              resendOtpLoading
                ? "text-gray-400 cursor-not-allowed"
                : "text-orange-600 cursor-pointer"
            }`}
            onClick={handleResendOtp}
            disabled={resendOtpLoading}
          >
            {resendOtpLoading ? "Sending OTP" : "Resend"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default VerifyOtp;
