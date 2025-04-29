import User from "../models/user.models.js";
import { generateToken } from "../util/generateToken.js";
import { otpMail } from "./mail.controller.js";

export const registration = async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;

  try {
    if (!firstName || !lastName || !email || !phone) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide all fields...!" });
    }

    const userEmailExist = await User.findOne({ email });
    const userPhoneExist = await User.findOne({ phone });

    if (userEmailExist || userPhoneExist) {
      return res
        .status(200)
        .json({ success: false, message: "User already exist...!" });
    }

    const register = new User({
      firstName,
      lastName,
      email,
      phone,
    });
    const createdUser = await register.save();
    res
      .status(201)
      .json({ success: true, message: "User created...!", data: createdUser });
  } catch (errro) {
    res.status(500).json({ success: false, message: "Server error...!" });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  try {
    if (email === user?.email) {
      const otp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
      console.log("otp", otp);
      user.otp = otp;
      await otpMail(res, otp, email);
      await user.save();
      // generateToken(res, user._id);
      res.status(200).json({
        success: true,
        message: "OTP sent successfully...!",
        // otp: otp,
      });
      setTimeout(() => {
        user.otp = null;
        user.save();
      }, 60000);
    } else {
      res.status(200).json({ success: false, message: "Invalid email...!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  const user = await User.findOne({ otp });

  try {
    if (otp === user?.otp) {
      user.otp = null;
      await user.save();
      generateToken(res, user._id);
      res
        .status(200)
        .json({ success: true, message: "OTP verified...!", _id: user._id });
    } else {
      res.status(200).json({ success: false, message: "Invalid OTP...!" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: false,
      secure: true,
      expire: new Date(0),
    });
    res
      .status(200)
      .json({ success: true, message: "User logout successfully...!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error...!" });
  }
};

export const checkAuth = async (req, res) => {
  try {
    res.status(200).json({ success: true, data: req.user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const profile = async (req, res) => {
  const user = req?.user;

  const profile = {
    _id: user?._id,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
  };
  res.status(200).json({ success: true, data: profile });
};

export const editUser = async (req, res) => {
  const { _id, firstName, lastName, email, phone } = req.body;
  const user = await User.findOne({ _id });

  try {
    user.firstName = firstName || user?.firstName;
    user.lastName = lastName || user?.lastName;
    user.email = email || user?.email;
    user.phone = phone || user?.phone;
    const updatedUser = await user.save();
    res
      .status(200)
      .json({ success: true, message: "User updated...!", data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


