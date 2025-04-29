import express from "express";
import {
  checkAuth,
  editUser,
  login,
  logout,
  profile,
  registration,
  verifyOTP,
} from "../controller/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(registration);
router.route("/login").post(login);
router.route("/verifyOTP").post(verifyOTP);
router.route("/logout").post(logout);
router.route("/checkAuth").get(protect, checkAuth);
router.route("/profile").get(protect, profile);
router.route("/edit").put(editUser);

export default router;
