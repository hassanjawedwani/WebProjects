const mongoose = require("mongoose");
const Listing = require("../models/Listing");
const sampleListings = require("./data");



main().then(() => {
  console.log("Database Connected");
}).catch(err => {
  console.log("Error Database Connection : ", err);
})

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}

const initDB = () => {
  Listing.insertMany(sampleListings).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
}