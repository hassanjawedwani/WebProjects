const { default: mongoose, Schema, model } = require("mongoose");


const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model("Review", reviewSchema);