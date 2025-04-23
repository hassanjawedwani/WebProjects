import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyToken.js";
import wrapAsync from "../utils/wrapAsync.js";
import { signupForm, profile, profileInfo, deleteUser } from "../controllers/user.controllers.js";

router.route("/signup").get(signupForm);

router.route("/update/:id").post(verifyToken, wrapAsync(profile));

router.route("/update/info/:id").post(verifyToken, wrapAsync(profileInfo));

router.route("/delete/:id").delete(verifyToken, wrapAsync(deleteUser));


export default router;