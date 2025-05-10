import User from "../models/userModel.js";
import registerSchema from "../validators/userValidators.js";
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