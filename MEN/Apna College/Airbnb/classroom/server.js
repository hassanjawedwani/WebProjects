const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser("wani"));

app.get("/getcookie", (req, res) => {
  res.cookie("greet", "Assalamu aliakum");
  res.cookie("religion", "Islam");
  res.cookie("name", "Hassan");
  res.send("feetting cookies")
})

app.get("/savesignedcookie", (req, res) => {
  res.cookie("made-in", "Pakistan", {signed: true});
  res.send("saved");
})


app.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("fetched");
})
app.get("/", (req, res) => {
  res.send("Hello i'm root");
})

app.get("/greet", (req, res) => {
  console.log(req.cookies);
  const { name = "annonymus" } = req.cookies;
  res.send(`Hi my name is  ${name}`);
})

app.listen(8080, (req, res) => {
  console.log("Server is listening at port : 8080")
})