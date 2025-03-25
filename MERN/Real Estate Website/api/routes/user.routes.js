import express from 'express';
const router = express.Router();
import loginForm from "../controllers/user.controllers.js";

router
  .route("/login")
  .get(loginForm);

export default router;