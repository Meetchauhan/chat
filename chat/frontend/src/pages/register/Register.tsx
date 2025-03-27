import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import {
  resetRegisterState,
  userRegistration,
} from "../../features/RegstrationSlice";
import { AppDispatch, RootState } from "../../store/store";
import { RegistrationSchema } from "../../validationSchema/RegistrationSchema";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { closeToast, showToast } from "../../features/ToastSlice";
import ToastError from "../../components/toastError/ToastError";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((item: RootState) => item?.registration?.loading);
  const isToast = useSelector((item: RootState) => item?.toast?.value);
  const isRegistered = useSelector(
    (item: RootState) => item?.registration?.data
  );
  const navigate = useNavigate();
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: RegistrationSchema,
    onSubmit: async (value, action) => {
      console.log("register value", value);
      const response = await dispatch(userRegistration(value));

      if (response?.payload?.success) {
        navigate("/login", { replace: true });
        action.resetForm();
      }
    },
  });

  useEffect(() => {
    if (isRegistered?.success === false) {
      dispatch(showToast());
      setTimeout(() => {
        dispatch(resetRegisterState());
      }, 5000);
    }
    setTimeout(() => {
      dispatch(closeToast());
    }, 5000);
  }, [isRegistered, dispatch]);
  return (
    <>
      {isToast && (
        <ToastError
          state={isRegistered?.success}
          errorMessage={
            isRegistered?.success === false ? isRegistered?.message : ""
          }
        />
      )}
      <div className="bg-gray-900 flex items-center justify-center min-h-[100dvh] sm:h-full p-5 sm:p-10">
        <div className="bg-gray-700 p-5 md:p-10 shadow-md border border-gray-200 w-full sm:w-lg">
          <h2 className="text-3xl text-center mb-4 text-orange-600">
            Registration
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Input
                type="text"
                placeholder="First Name"
                label="First Name"
                name="firstName"
                value={values?.firstName}
                onChange={handleChange}
                error={touched?.firstName && errors?.firstName}
              />
              <Input
                type="text"
                placeholder="Last Name"
                label="Last Name"
                name="lastName"
                value={values?.lastName}
                onChange={handleChange}
                error={touched?.lastName && errors?.lastName}
              />
              <Input
                type="email"
                placeholder="Email"
                label="Email"
                name="email"
                value={values?.email}
                onChange={handleChange}
                error={touched?.email && errors?.email}
              />
              <Input
                type="phone"
                placeholder="Phone"
                label="Phone"
                name="phone"
                value={values?.phone}
                onChange={handleChange}
                error={touched?.phone && errors?.phone}
              />
            </div>
            <Button type="submit" title="Register" disabled={loading} />
          </form>
          <div className="mt-2 text-amber-50 text-center">
            Already have an account? please{" "}
            <Link to={"/login"} className="text-orange-600 underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
