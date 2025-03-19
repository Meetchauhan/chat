import jwt from "jsonwebtoken";

export const generateToken = (res, userId) => {
  let token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  console.log("token", token);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true, // Secure only in production
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });
};
