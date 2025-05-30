import express from 'express';
import { login, logout } from '../controllers/sellerControllers.js';
import { isSellerAuth } from '../middlewares/isSellerAuth.js';
import { authme } from '../controllers/sellerControllers.js';
const router = express.Router();

router
  .route("/login")
  .post(login);

router
  .route("/logout")
  .post(logout);

router
  .route("/authme")
  .get(isSellerAuth, authme);
 
export default router;