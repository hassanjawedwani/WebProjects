import express from 'express';
import { isSellerAuth } from '../middlewares/isSellerAuth.js';
import { addProduct, ChangeStock, listProduct, showProduct } from '../controllers/productControllers.js';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';
const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "GreenCart"
  }
})

const upload = multer({ storage: storage });

router
  .route("/list")
  .get(listProduct);

router
  .route("/add")
  .post(isSellerAuth, upload.array('image', 4), addProduct);
  
router
  .route("/:id") 
  .get(showProduct)
  
router
  .route("/:id/stock") 
  .post(ChangeStock)

export default router;