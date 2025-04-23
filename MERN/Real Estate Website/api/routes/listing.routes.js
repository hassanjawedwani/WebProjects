import express from "express";
import { createListing } from "../controllers/listing.controllers.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig.js";


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'some-folder-name',
  },
});

const upload = multer({ storage: storage });



router.route("/new")
.post(verifyToken, upload.array("images", 2), createListing);

export default router;