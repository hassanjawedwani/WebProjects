import jwt from "jsonwebtoken";
import ExpressError from "./ExpressError.js";

export const verifyToken = async (req, res, next) => {
  const { id } = req.params;
  const token = req.cookies.token;
  if (!token) {
    console.log("fuck you unknown")
  } else {
    console.log("good boy some token found let's check are you authorized? ...");
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        next(new ExpressError(403, "not authorized fucking user"));
      } else {
        console.log("yes, some login genous is trying ", user);
        req.user = user;
        next();
      }
    });
  }
}