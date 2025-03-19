import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../../features/RegstrationSlice";
import { AppDispatch, RootState } from "../../store/store";
import { RegistrationSchema } from "../../validationSchema/RegistrationSchema";
import Input from "../../components/formComponents/Input";
import Button from "../../components/formComponents/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((item: RootState) => item?.registration?.loading);
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: RegistrationSchema,
    onSubmit: (value, action) => {
      console.log("register value", value);
      dispatch(userRegistration(value));
      action.resetForm();
    },
  });
  return (
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
          Already have an account? please <Link to={"/login"} className="text-orange-600 underline">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
