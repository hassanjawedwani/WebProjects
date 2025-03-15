const express = require("express");
const User = require("../models/User");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      const { email, username, password } = req.body.user;
      const newUser = new User({
        email,
        username,
      });
      let registeredUser = await User.register(newUser, password);
      req.flash("flashMessage", "Welcome to Wanderlust");
      res.redirect("/listings");
    } catch (e) {
      req.flash("flashErrorMessage", e.message);
      res.redirect("/signup");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("flashMessage", "Welcome to Airbnb, login succesfull");
    res.redirect("/listings");
  }
);

module.exports = router;
