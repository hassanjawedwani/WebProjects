const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/Listing");
const ExpressError = require("../ExpressError");
const Review = require("../models/Review");
const { listingSchema, reviewSchema } = require("../schema");

const validateListing = (req, res, next) => {
  const result = listingSchema.validate(req.body);
  if (result.error) {
    next(new ExpressError(404, result.error));
  } else {
    next();
  }
};



router.get(
  "/",
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    res.render("index.ejs", { listings });
  })
);

router.get(
  "/:id/show",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id).populate("review");
    res.render("show.ejs", { list });
  })
);

router.get("/new", (req, res) => {
  res.render("new.ejs");
});

router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    
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

    await list.save();
    res.redirect("/listings");
  })
);

router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    res.render("edit.ejs", { list });
  })
);


router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res, next) => {
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

router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    await Review.deleteMany({ _id: { $in: list.review } });
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);


module.exports = router;