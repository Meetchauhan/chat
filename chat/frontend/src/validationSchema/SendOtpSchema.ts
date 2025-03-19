import * as Yup from "yup";

export const SendOtpSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
});

export const VerifyOtpSchema = Yup.object().shape({
  otp: Yup.number().required("OTP is required"),
});
