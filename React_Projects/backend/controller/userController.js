const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      password,
      gender,
      dateOfBirth,
      picture,
      address,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !gender ||
      !dateOfBirth ||
      !picture ||
      !address
    ) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      firstName,
      middleName,
      lastName,
      email,
      password: hashedPassword,
      gender,
      dateOfBirth,
      picture,
      address,
      createdAt: new Date(),
    });

    const token = jwt.sign({ userId: newUser._id }, "secret");

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// const deleteUser = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     if (!userId) {
//       return res.status(400).json({ message: "User ID is required" });
//     }
//     const deletedUser = await UserModel.findByIdAndDelete(userId);
//     if (!deletedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find({}).select("-password");
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
module.exports = { createUser, getAllUser };
