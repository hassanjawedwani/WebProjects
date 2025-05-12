import Product from "../models/productModel.js";

export const listProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find();
    console.log("Products ", products);
    res.json({ success: true, products });
  } catch (err) {
    const errorMessage = err.message;
    console.log("Register controller error message: ", errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}

export const addProduct = async (req, res) => {
  try {
    console.log(req.files);
    console.log(req.body);

    const image = req.files.map(image => image.path);
    console.log(image)
    const newProduct = await Product.create({
      image: image,
      ...req.body,
    });
    console.log("new product ", newProduct);
    res.json({ success: true, message: "Product Created Successfully" });
  } catch (err) {
    const errorMessage = err.message;
    console.log("Register controller error message: ", errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}
  

export const showProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log("Product ", product);
    res.json({ success: true, product });
  } catch (err) {
    const errorMessage = err.message;
    console.log("Register controller error message: ", errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}
  

export const ChangeStock = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id,
      [
        { $set: { inStock: { $not: "$inStock" } } }
      ], { new: true });
    console.log("Product ", product);
    res.json({ success: true, message: "Stock update" });
  } catch (err) {
    const errorMessage = err.message;
    console.log("Register controller error message: ", errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}
  