import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  try {
    console.log("im middleware");
    const { token } = req.cookies;
    if (!token) {
      return res.json({ success: false, message: "Please login before continue" });
    }
    console.log(token)
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id) {
      req.user = decodedToken
      return next();
    }
  } catch (err) {
    const errorMessage = err.message;
    console.log(errorMessage);
    return res.json({success: false, message: errorMessage})
  }
}