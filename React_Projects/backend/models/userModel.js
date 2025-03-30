const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    password: String,
    gender: String,
    dateOfBirth: Date,
    picture: String,
    address: String,
  },
  { timestamps: true }
);
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
