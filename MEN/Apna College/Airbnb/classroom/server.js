const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const flash = require('connect-flash');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(
  session({
    secret: "mysecretcode",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
})

app.get("/", (req, res) => {
  res.send("Hi i'm root");
});

app.get("/register", (req, res) => {
  const { name = "anonymus" } = req.query;
  req.session.name = name;
  if (name !== "anonymus") {
    req.flash("success", "User is registered");
  } else {
    req.flash("error", "User isn't registered");
  }
  res.redirect("/welcomepage");
});

app.get("/welcomepage", (req, res) => {
  res.render("welcomepage.ejs", { name: req.session.name });
});

app.listen(8080, (req, res) => {
  console.log("Server is listening at port : 8080");
});