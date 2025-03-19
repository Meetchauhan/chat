import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const protect = async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId);
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "No Authorized, Invalid token" });
    }
  } else {
    return res
      .status(401)
      .json({ success: false, message: "No Authorized, No token" });
  }
  next();
};
