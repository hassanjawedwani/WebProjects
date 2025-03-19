const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/Listing");
const ExpressError = require("../ExpressError");
const Review = require("../models/Review");
const { listingSchema, reviewSchema } = require("../schema");
const {
  isLoggin,
  setOriginalUrl,
  isOwner,
  validateListing,
} = require("../middleware");

//all listings show route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const listings = await Listing.find({});
    if (!listings) {
      req.flash("flashMessage", "Listings doesn't exist");
      res.redirect("/listings");
    }
    res.render("index.ejs", { listings });
  })
);

// one listing show route
router.get(
  "/:id/show",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id)
      .populate({ path: "review", populate: { path: "owner", model: "User" } })
      .populate("owner");
    if (!list) {
      req.flash("flashMessage", "List doesn't exist");
      res.redirect("/listings");
    }
    res.render("show.ejs", { list });
  })
);

// create route
router.get("/new", isLoggin, (req, res) => {
  res.render("new.ejs");
});

// post route
router.post(
  "/",
  validateListing,
  isLoggin,
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
      owner: req.user,
    });

    await list.save();
    req.flash("flashMessage", "New Listing created successfully");
    res.redirect("/listings");
  })
);

// edit route
router.get(
  "/:id/edit",
  isLoggin,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    if (!list) {
      req.flash("flashMessage", "Listings doesn't exist");
      res.redirect("/listings");
    }
    res.render("edit.ejs", { list });
  })
);

// update route
router.put(
  "/:id",
  isLoggin,
  isOwner,
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
    req.flash("flashMessage", "List Updated successfully");
    res.redirect("/listings");
  })
);

// delete route
router.delete(
  "/:id",
  isLoggin,
  isOwner,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const list = await Listing.findById(id);
    await Review.deleteMany({ _id: { $in: list.review } });
    await Listing.findByIdAndDelete(id);
    req.flash("flashMessage", "Listing deleted successfully");
    res.redirect("/listings");
  })
);

module.exports = router;
