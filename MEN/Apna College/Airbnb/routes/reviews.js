const express = require("express");
const router =  express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/Listing");
const ExpressError = require("../ExpressError");
const Review = require("../models/Review");
const { listingSchema, reviewSchema } = require("../schema");
const { isLoggin, validateReview, isReviewOwner, setOriginalUrl } = require("../middleware");



router.post(
  "/",
  isLoggin,
  validateReview,
  wrapAsync(async (req, res) => {
    let review = new Review(req.body.review);
    review.owner = req.user;
    await review.save();
    const list = await Listing.findById(req.params.id);
    list.review.push(review);
    await list.save();
    req.flash("flashMessage", "Review created successfully");
    res.redirect(`/listings/${list._id}/show`);
  })
);


router.delete(
  "/:reviewId",
  isLoggin,
  isReviewOwner,
  wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { review: reviewId }  });
    await Review.findByIdAndDelete(reviewId);
    req.flash("flashMessage", "Review Deleted successfully");
    res.redirect(`/listings/${id}/show`);
  })
)


module.exports = router;