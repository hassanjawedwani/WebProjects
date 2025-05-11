import User from "../models/userModel.js";
import {registerSchema, loginSchema} from "../validators/userValidators.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    // user custom validation
    const { error } = registerSchema.validate(req.body);
    if (error) {
      const userValidationError = error.details[0].message;
      return res.json({ success: false, message: userValidationError });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const alreadyUser = await User.findOne({ email });

    if(alreadyUser) {
      return res.json({ success: false, message: "User of this mail already exists" });
    }

    const newUser = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 60 * 60 * 1000
    });
    
    return res.json({ success: true, message: "User Registered Successfully", user: { name: newUser.name, email: newUser.email } });
    
  } catch (err) {
    const errorMessage = err.message;
    console.log("Register controller error message: ", errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Email: ${email}, Password: ${password}`);

    // user custom validation
    const { error } = loginSchema.validate({email, password});
    if (error) {
      const userValidationError = error.details[0].message;
      return res.json({ success: false, message: userValidationError });
    }

    const user = await User.findOne({ email });

    if(!user) {
      return res.json({ success: false, message: "Email or Password are incorrect" });
    }

    
    const isOwner = await bcrypt.compare(password, user.password);

    if (!isOwner) {
      return res.json({ success: false, message: "Email or Password are incorrect" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 60 * 60 * 1000
    });
    
    return res.json({ success: true, message: "User logined Successfully", user: { name: user.name, email: user.email } });``
    
  } catch (err) {
    const errorMessage = err.message;
    console.log("Register controller error message: ", errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}


export const authme = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password');
    return res.json({ success: true, message: "User is authorized", user });
  } catch (err) {
    const errorMessage = err.message;
    console.log(errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}


export const logout = async (req, res) => {
  try {

    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      
    });
    
    return res.json({ success: true, message: "User logout Successfully" });
    
  } catch (err) {
    const errorMessage = err.message;
    console.log(errorMessage);
    return res.json({ success: false, message: errorMessage });
  }
}