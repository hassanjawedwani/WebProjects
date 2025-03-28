import express from "express";
const router = express.Router();
import { google, login, signup } from "../controllers/auth.controller.js";
import wrapAsync from "../utils/wrapAsync.js";

router.route("/signup").post(wrapAsync(signup));

router.route("/login").post(wrapAsync(login));

router.route("/google").post(google);

export default router;
