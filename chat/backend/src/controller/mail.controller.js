import nodemailer from "nodemailer";
export const otpMail = async (res, otp, email) => {
  const createTransport = nodemailer.createTransport({
    service: "GMAIL",
    port: process.env.GMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAILPASSWORD,
    },
  });
  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: "OTP for Login",
    html: `<p>Use ${otp} for login.</p>
  <p>OTP is valid for 2 min.</p>
  `,
  };
  try {
    const info = await createTransport.sendMail(mailOption);
    // res.status(200).json({ success: true, message: "OTP sent", data: info });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
