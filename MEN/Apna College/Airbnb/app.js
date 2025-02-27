const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const Listing = require("./models/Listing");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.engine('ejs', ejsMate);

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

app.get("/", (req, res) => {
  res.send("Hi i'm root");
})

app.get("/listings", async (req, res) => {
  const listings = await Listing.find({});
  res.render("index.ejs", { listings });
});

app.get("/listings/:id/show", async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  res.render("show.ejs", { list });
});

app.get("/listings/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/listings", (req, res) => {

  const {
    title,
    description,
    imageFilename,
    imageUrl,
    price,
    location,
    country,
  } = req.body;

  const list = new Listing({
    title,
    description,
    image: {
      filename: imageFilename,
      url: imageUrl
    },
    price,
    location,
    country,
  });

  list.save().then(res => {
    console.log(res);
  });
  res.redirect("/listings");
});

app.get("/listings/:id/edit",async (req, res) => {
  const { id } = req.params;
  const list = await Listing.findById(id);
  res.render("edit.ejs", { list });
})

app.put("/listings/:id", (req, res) => {
  const { id } = req.params;

  const {
    title,
    description,
    imageFilename,
    imageUrl,
    price,
    location,
    country,
  } = req.body;


  Listing.findByIdAndUpdate(id, {
    title,
    description,
    image: {
      filename: imageFilename,
      url: imageUrl
    },
    price,
    location,
    country,
  }).then(res => {
    console.log(res);
  })
  
  res.redirect("/listings"); 
})

app.delete("/listings/:id", (req, res) => {
  const { id } = req.params;
  Listing.findByIdAndDelete(id).then(res => {
    console.log(res);
  })
  res.redirect("/listings");
})

app.listen(port, () => {
  console.log("Server connection established at port: ", port);
});