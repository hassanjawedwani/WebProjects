import jwt from "jsonwebtoken";

export const isSellerAuth = (req, res, next) => {
  try {
    console.log("im middleware");
    const { sellerToken } = req.cookies;
    if (!sellerToken) {
      return res.json({ success: false, message: "Please login before continue" });
    }
    const decodedToken = jwt.verify(sellerToken, process.env.JWT_SECRET);
    if (decodedToken.email) {
      req.user = decodedToken.email
      return next();
    }
  } catch (err) {
    const errorMessage = err.message;
    console.log(errorMessage);
    return res.json({success: false, message: errorMessage})
  }
}