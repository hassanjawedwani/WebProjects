import User from "../models/user.model.js";
import ExpressError from "../utils/ExpressError.js";
import bcrypt from "bcryptjs";

export const signupForm = (req, res) => {
  res.json({
    message: "login get request",
  });
};

export const profile = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(
      new ExpressError(
        401,
        "unauthorzide fucker, you can only update your own account dp"
      )
    );
  } else {
    console.log("congrat you can edit your dp");
    // const { imageURL, userEmail } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        photoURL: req.body.imageURL,
      },
      { new: true }
    );
    console.log("updated user is ", user);
    const { password, ...rest } = user._doc;
    res.json(rest);
  }
};

export const profileInfo = async (req, res, next) => {
  console.log("profileInfo route, profileinfo controller, req.body: ", req.body)
  if (req.user.id !== req.params.id) {
    return next(
      new ExpressError(
        401,
        "unauthorzide fucker, you can only update your own account dp"
      )
    );
  } else {
    console.log("congrat you can edit your dp");
    if (req.body.password) {
      const hash = bcrypt.hashSync(req.body.password, 10);
      req.body.password = hash;
    }
    console.log("profileInfo route, profileinfo controller, req.body", req.body);
    const user = await User.findByIdAndUpdate(req.params.id, {
      ...req.body
    }, {new: true});
    console.log("updated user is ", user)
    const { password, ...rest } = user._doc;
    res.json(rest);
  }
};


export const deleteUser = async (req, res, next) => {
  console.log("delete user route");
  console.log(req.user.id, req.params.id)
  const { id } = req.params;
  if (id !== req.user.id) {
    return (next(new ExpressError(401, "You can only delete your own account")));
  }
  console.log("delete user route, user id: ", id);
  const deletedUser = await User.findByIdAndDelete(id);
  console.log("delete route, deltedUser is eithor null || object", deletedUser)
  if (!deletedUser) {
    console.log("location: delete user route,message: user not found in database");
    return next(new ExpressError(404, "User not found"));
  } else {
    console.log("location: delete user route,message: this user deleted in database", deletedUser);
    res.clearCookie()
    res.json("user deleted successfully");
  }
}