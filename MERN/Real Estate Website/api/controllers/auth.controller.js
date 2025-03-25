import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const user = new User({
    username,
    email,
    password: hash,
  });
  await user.save();
  res.status(201).json(
    "User created successfully"
  )
};