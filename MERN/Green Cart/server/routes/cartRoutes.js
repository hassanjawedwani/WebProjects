import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import { updateCart } from '../controllers/cartControllers.js';
const router = express.Router();

router
  .route("/update")
  .post(isAuth, updateCart);

export default router;