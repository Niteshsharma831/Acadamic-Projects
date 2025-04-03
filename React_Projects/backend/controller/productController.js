const productModel = require("../models/productModel");
const createProduct = async function (req, res) {
  try {
    const { name, price, description, category, imageUrl } = req.body;

    const product = new productModel({
      name,
      price,
      description,
      category,
      imageUrl,
      createdAt: new Date(),
    });

    await product.save();

    return res.status(201).json({
      status: "success",
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    if (!res.headersSent) {
      return res.status(500).json({ message: error.message });
    }
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🗑️ Deleting product with ID:", id);

    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid Product ID" });
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ status: "error", message: "Product Not Found" });
    }

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
      deletedProduct: product,
    });
  } catch (error) {
    console.error("❌ Delete Error:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = { createProduct, getAllProducts, deleteProduct };
