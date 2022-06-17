const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    uid: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    photoURL: { type: String, require: true },
    emailVerified: { type: Boolean, require: true },
    authTime: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
