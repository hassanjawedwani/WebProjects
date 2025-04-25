import Listing from "../models/listing.model.js";
import User from "../models/user.model.js";

export const createListing = async (req, res) => {
  console.log("createLisitng controller");


  const { title, description, address, type, isParkingSpot, isFurnished, regularPrice, beds, baths } = req.body;

 
  
  const userId = req.user.id; 

  const imagesURL = [];
  
  if (req.files) {
    for (const file of req.files) {
      imagesURL.push(file?.path);
    }
  }

  console.log(userId, title, description, address, type, isParkingSpot, isFurnished, regularPrice, beds, baths, imagesURL);


  try { 
    const newList = await Listing.create({
      title, description, address, type, isParkingSpot, isFurnished, regularPrice, beds, baths, imagesURL,
      owner: userId
    });
    console.log("New created list: ", newList);

    const user = await User.findById(userId);
    user.posts.push(newList._id);
    await user.save();
    console.log(user);
    return res.status(201).json({ success: true, message: "new post created" });


  } catch (err) {
    console.log(err);
  }
};