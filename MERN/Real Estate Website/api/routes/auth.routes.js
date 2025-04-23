import express from "express";
const router = express.Router();
import {
  google,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import wrapAsync from "../utils/wrapAsync.js";
import { verifyToken } from "../utils/verifyToken.js";

router.route("/signup").post(wrapAsync(signup));

router.route("/login").post(wrapAsync(login));

router.route("/google").post(wrapAsync(google));

router.route("/logout/:id").post(verifyToken, logout)

export default router;
