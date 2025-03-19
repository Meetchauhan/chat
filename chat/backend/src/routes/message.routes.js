import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getMessage,
  getUserForSidebar,
  sendMessage,
} from "../controller/message.controller.js";

const router = express.Router();

router.route("/users").get(protect, getUserForSidebar);
router.route("/:id").get(protect, getMessage);
router.route("/send/:id").post(protect, sendMessage);

export default router;
