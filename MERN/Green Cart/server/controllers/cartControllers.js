import User from "../models/userModel.js";

export const updateCart = async (req, res) => {
  console.log("fuckkkkkkkkk", req.user);
  console.log(req.body)
  try {
    await User.findByIdAndUpdate(req.user.id, { $set: { cartItems: req.body } }, { new: true });
    res.json({success: true, message: "Cart updated"})
  } catch (err) {
    res.json({ success: false, message: err.message})
  }
}