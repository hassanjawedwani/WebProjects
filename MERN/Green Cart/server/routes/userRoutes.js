import express from 'express';
import { authme, login, logout, register } from '../controllers/userControllers.js';
import { isAuth } from '../middlewares/isAuth.js';
const router = express.Router();

router
  .route("/register")
  .post(register);

router
  .route("/login")
  .post(login);

router
  .route("/logout")
  .post(logout);

router
  .route("/authme")
  .get(isAuth, authme);
 
export default router;