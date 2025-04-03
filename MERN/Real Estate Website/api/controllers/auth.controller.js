import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import ExpressError from "../utils/ExpressError.js";
import JWT from "jsonwebtoken";
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const signup = async (req, res) => {
  console.log("signup route");
  const { username, email, password, photoURL=""} = req.body;
  const hash = bcrypt.hashSync(password, 10);
  const user = new User({
    username,
    email,
    password: hash,
    photoURL
  });
  const response = await user.save();
  console.log("signup route, new saved user mongodb user ", response);
  res.status(201).json(response);
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ExpressError(401, "User of this email doesn't exists"));
  } else {
    const isAuthenitcatedUser = await bcrypt.compare(password, user.password);
    if (!isAuthenitcatedUser) {
      return next(new ExpressError(401, "Credentials aren't corrent"));
    } else {
      const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...restUser } = user._doc;
      res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
          sameSite: "strict",
        })
        .status(201)
        .json(restUser);
      console.log(restUser);
    }
  }
};

export const google = async (req, res) => {
  console.log("congratulation i am finally in google routes");
  const { displayName, email, photoURL } = req.body;
  const username = email.split("@")[0];
  const password = uuidv4();
  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await User.findOne({ email });

  if (!user) {
    let response = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password , photoURL}),
    });
    const result = response.json();
    if (response.ok) {
      let response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (response.ok) {
        res.json(result);
      } else {
        console.log("google route, signup done, login route error: ", result.message);
        return;
      }
    } else {
      console.log("Error Occured", result.message);
    }
  } else {
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...restUser } = user._doc;
      res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
          sameSite: "strict",
        })
        .status(201)
        .json(restUser);
      console.log(restUser);
  }
};


