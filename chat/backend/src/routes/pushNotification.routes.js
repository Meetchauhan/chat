import express from "express";
import { pushNotification } from "../controller/pushNotification.controller.js";

const router = express.Router();

router.route("/send-notification").post(pushNotification);

export default router;
