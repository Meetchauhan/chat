import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";
import { resetSendOtpState, sendOtp } from "../../features/AuthSlice";
import { SendOtpSchema } from "../../validationSchema/SendOtpSchema";
import { closeToast, showToast } from "../../features/ToastSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SendOtp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOtpSent = useSelector(
    (item: RootState) => item?.auth?.sendOtpState?.success
  );
  const loading = useSelector((item: RootState) => item?.auth?.loading);
  const isToast = useSelector((item: RootState) => item?.toast?.value);

  const initialValue = {
    email: "",
  };

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: SendOtpSchema,
    onSubmit: async (value, action) => {
      console.log("login value", value);
      const response = await dispatch(sendOtp(value));
      console.log("response", response);
      
      localStorage.setItem("loginMain", JSON.stringify(value));
      if (response?.payload?.success) {
        action.resetForm();
      }
    },
  });
 
  useEffect(() => {
    if (isOtpSent === false) {
      dispatch(showToast());
      setTimeout(() => {
        dispatch(resetSendOtpState());
      }, 5000);
    }
    setTimeout(() => {
      dispatch(closeToast());
    }, 5000);
  }, [isOtpSent, dispatch]);
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-[100dvh] sm:h-full p-5 sm:p-10">
      <div className="bg-gray-700 p-5 md:p-10 shadow-md border border-gray-200 w-full sm:w-lg">
        <h2 className="text-3xl text-center mb-4 text-orange-600">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <Input
              type="email"
              placeholder="Email"
              label="Email"
              name="email"
              value={values?.email}
              onChange={handleChange}
              error={touched?.email && errors?.email}
            />
          </div>
          <Button
            type="submit"
            title={loading ? "Sending OTP..." : "Send OTP"}
            disabled={loading || isToast}
          />
        </form>
        <div className="mt-2 text-amber-50 text-center">
          Don't have an account? please{" "}
          <Link to={"/register"} className="text-orange-600 underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SendOtp;
