import { model, Schema } from "mongoose";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['sell', 'rent'],
    required: true,
  },
  isParkingSpot: {
    type: Boolean,
    required: true,
  },
  isFurnished: {
    type: Boolean,
    required: true,
  },
  regularPrice: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  imagesURL: [
    {
      type: String,
    }
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true});

const Listing = model("Listing", listingSchema);

export default Listing;