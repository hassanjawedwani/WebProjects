import express from 'express';
const router = express.Router();
import signupForm from '../controllers/user.controllers.js';

router
  .route("/signup")
  .get(signupForm);

export default router;