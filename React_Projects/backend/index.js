const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);
const productRoutes = require("./routes/productRoute");
const dbConnections = require("./config/dbConnection");
dbConnections();

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.use("/uploads", express.static("uploads"));
app.listen(port, function (req, res) {
  console.log(`Server is running on port http://localhost:${port}`);
});
