import express from "express";
import { deleteUser, getAllUsers } from "../controller/admin.controller.js";

const router = express.Router();

router.route("/getAllUsers").get(getAllUsers);
router.route("/deleteUser").delete(deleteUser);

export default router;
