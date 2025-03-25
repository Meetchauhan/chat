import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  acceptConnectionRequest,
  getSentRequests,
  getUserRequests,
  sendConnectionRequest,
} from "../controller/connectingUsers.controller.js";

const router = express.Router();

router.route("/sendRequest").post(protect, sendConnectionRequest);
router.route("/getRequest").get(protect, getUserRequests);
router.route("/sentRequest").get(protect, getSentRequests);
router.route("/acceptRequest").post(protect, acceptConnectionRequest);

export default router;
