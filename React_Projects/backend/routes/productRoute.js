const express = require("express");
const router = express.Router();
const ProductController = require("../controller/productController");

router.post("/create", ProductController.createProduct);
router.get("/getAll", ProductController.getAllProducts);
router.delete("/delete/:id", ProductController.deleteProduct);
module.exports = router;
