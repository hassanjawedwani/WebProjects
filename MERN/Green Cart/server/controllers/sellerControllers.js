import User from "../models/userModel.js";
import {registerSchema, loginSchema} from "../validators/userValidators.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    console.log("login route")
    const { email, password } = req.body;
    console.log(`Email: ${email}, Password: ${password}`);

    // user custom validation
    const { error } = loginSchema.validate({email, password});
    if (error) {
      const userValidationError = error.details[0].message;
      return res.json({ success: false, message: userValidationError });
    }

    if (email !== process.env.SELLER_EMAIL || password !== process.env.SELLER_PASSWORD) {
      return res.json({ success: false, message: "Email or Password are incorrect" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.cookie("sellerToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 60 * 60 * 1000
    });
    
    return res.json({ success: true, message: "Seller logined Successfully", user: {  email } });
    
  } catch (err) {
    const errorMessage = err.message;
    console.log("Register controller error message: ", errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}


export const logout = async (req, res) => {
  try {

    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    
    return res.json({ success: true, message: "Seller logout Successfully" });
    
  } catch (err) {
    const errorMessage = err.message;
    console.log(errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}



export const authme = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (err) {
    const errorMessage = err.message;
    console.log(errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}