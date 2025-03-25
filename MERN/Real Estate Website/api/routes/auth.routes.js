import express from 'express';
const router = express.Router();
import { signup } from '../controllers/auth.controller.js';
import wrapAsync from '../utils/wrapAsync.js';


router
  .route("/signup")
  .post(wrapAsync(signup));

export default router;