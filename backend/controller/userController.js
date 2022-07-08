const asyncHandler = require("express-async-handler");

const admin = require("../config/firebase.config");
const User = require("../models/userSchema");

const createNewUser = asyncHandler(async (decodedIdToken, req, res) => {
  const newUser = new User({
    name: decodedIdToken.name,
    uid: decodedIdToken.user_id,
    email: decodedIdToken.email,
    photoURL: decodedIdToken.picture,
    emailVerified: decodedIdToken.email_verified,
    authTime: decodedIdToken.auth_time,
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).send({ user: savedUser });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
});

const updateNewUser = asyncHandler(async (decodedIdToken, req, res) => {
  const filterUsers = { uid: decodedIdToken.user_id };
  const options = {
    upsert: true,
    new: true,
  };

  try {
    const updatedUser = await User.findOneAndUpdate(filterUsers, { authTime: decodedIdToken.auth_time }, options);

    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
});

// @desc Create a current, registered Firebase user in MongoDb or update it
// @route GET /api/users/me
// @access Private
const getUser = asyncHandler(async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ message: "Invalid token" });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decodedIdToken = await admin.auth.verifyIdToken(token);

    if (!decodedIdToken) {
      return res.status(500).send({ success: false, message: "Unauthorized User" });
    }

    const userExists = await User.findOne({ uid: decodedIdToken.user_id });

    if (!userExists) {
      createNewUser(decodedIdToken, req, res);
    } else {
      updateNewUser(decodedIdToken, req, res);
    }
  } catch (err) {
    return res.status(500).send({ success: false, message: err.message });
  }
});

// @desc Update user name and photoUrl inside profile page
// @route POST /api/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = req.currentUser;

  try {
    const update = { name: req.body.name, photoURL: req.body.photoURL };
    const filter = { uid: user.uid };
    const updatedDocument = await User.findOneAndUpdate(filter, update, { new: true });

    return res.status(200).send(updatedDocument);
  } catch (err) {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  getUser,
  createNewUser,
  updateNewUser,
  updateUserProfile,
};
