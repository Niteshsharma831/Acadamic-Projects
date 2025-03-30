const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/create", userController.createUser);
// router.get("/remove/:id", userController.deleteUser);

module.exports = router;
