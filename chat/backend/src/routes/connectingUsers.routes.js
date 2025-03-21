import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { acceptConnectionRequest, sendConnectionRequest } from "../controller/connectingUsers.controller.js";


const router = express.Router();

router.route("/sendRequest").post(protect, sendConnectionRequest);
router.route("/acceptRequest").post(protect, acceptConnectionRequest);

export default router;
