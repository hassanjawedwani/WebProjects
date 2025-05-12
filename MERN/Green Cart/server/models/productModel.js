import mongoose, { model, Schema } from "mongoose";  

const productSchema = new Schema({
  name: { type: String, required: [true, "Product Name is required"] },
  description: { type: String, required: [true, "Product Description is required"] },
  category: { type: String, required: [true, "Product Category is required"] },
  price: { type: Number, required: [true, "Product Price is required"] },
  offerPrice: { type: String, required: [true, "Offer price is required"] },
  image: { type: [String], required: true },
  inStock: { type: Boolean, default: true }
}, { timestamps: true });

const Product = model("Product", productSchema);

export default Product;
