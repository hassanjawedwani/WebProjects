const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const Listing = require("./models/Listing");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./ExpressError");
const wrapAsync = require("./utils/wrapAsync");
const { listingSchema } = require("./schema");

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

// Express Start

const validateListing = (req, res, next) => {
  const result = listingSchema.validate(req.body);
  // console.log(result.error.details.map(el => el.message).join(", "))
  if (result.error) {
    next(new ExpressError(404, result.error));
  } else {
    next();
  }
}

app.get(
  "/",
  (req, res) => {
    res.send("Hi i'm root");
  }
);

app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("index.ejs", { listings });
  })
);

app.get(
  "/listings/:id/show",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    res.render("show.ejs", { list });
  })
);

app.get(
  "/listings/new",
  (req, res) => {
    res.render("new.ejs");
  }
);

app.post(
  "/listings",validateListing,
  wrapAsync(async (req, res, next) => {
   
      // if (!req.body.title) {
      //   next(new ExpressError(400, "Please enter a title"));
      // }
      // if (!req.body.description) {
      //   next(new ExpressError(400, "Please enter a description"));
      // }
      // if (!req.body.price) {
      //   next(new ExpressError(400, "Please enter a price"));
      // }
      // if (!req.body.location) {
      //   next(new ExpressError(400, "Please enter a location"));
      // }
      // if (!req.body.country) {
      //   next(new ExpressError(400, "Please enter a country"));
      // }

    
    console.log(result);
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
        url: imageUrl,
      },
      price,
      location,
      country,
    });

    await list.save()
    res.redirect("/listings");
  })
);

app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    res.render("edit.ejs", { list });
  })
);

app.put(
  "/listings/:id",validateListing,
  wrapAsync(async(req, res, next) => {
    const { id } = req.params;

    // console.log(req.body)
    // if (!req.body.title) {
    //   next(new ExpressError(400, "Please enter a title"));
    // }
    // if (!req.body.description) {
    //   next(new ExpressError(400, "Please enter a description"));
    // }

    // if (!req.body.imageUrl) {
    //   next(new ExpressError(400, "Please enter a image url"));
    // }

    // if (!req.body.price) {
    //   next(new ExpressError(400, "Please enter a price"));
    // }
    // if (!req.body.location) {
    //   next(new ExpressError(400, "Please enter a location"));
    // }
    // if (!req.body.country) {
    //   next(new ExpressError(400, "Please enter a country"));
    // }

   

    const {
      title,
      description,
      imageFilename,
      imageUrl,
      price,
      location,
      country,
    } = req.body;

    await Listing.findByIdAndUpdate(id, {
      title,
      description,
      image: {
        filename: imageFilename,
        url: imageUrl,
      },
      price,
      location,
      country,
    });

    res.redirect("/listings");
  })
);

app.delete(
  "/listings/:id",
  wrapAsync(async(req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);


// Error Handling Middlewares

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Some Error occured " } = err;
  res.status(status).render("error.ejs", { message });
});

app.listen(port, () => {
  console.log("Server connection established at port: ", port);
});
