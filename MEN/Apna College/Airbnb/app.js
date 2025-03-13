const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./ExpressError");
const listings = require("./routes/listings");
const reviews = require("./routes/reviews");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "./public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);

// Database Connection

main()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error Database Connection : ", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}


// express routes

app.get("/", (req, res) => {
  res.send("Hi i'm root");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);


app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});


// Error Handling Middlewares

app.use((err, req, res, next) => {
  const { status = 500, message = "Some Error occured " } = err;
  console.log(err);
  res.status(status).render("error.ejs", { message });
});


// express server startup

app.listen(port, () => {
  console.log("Server connection established at port: ", port);
});
