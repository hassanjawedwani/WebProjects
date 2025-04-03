import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  photoURL: {
    type: String,
    default: "https://res.cloudinary.com/dg7yzgynb/image/upload/w_100,h_100/v1743196212/296fe121-5dfa-43f4-98b5-db50019738a7_liyvfl.jpg",
    set: (url) => {
      return url && url.trim() !== "" ? url : "https://res.cloudinary.com/dg7yzgynb/image/upload/w_100,h_100/v1743196212/296fe121-5dfa-43f4-98b5-db50019738a7_liyvfl.jpg"
    }
  }
}, { timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;