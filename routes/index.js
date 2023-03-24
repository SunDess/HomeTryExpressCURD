const express = require("express");
const router = express.Router();

const {
  storeProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  destroyProduct,
} = require("../controller/products.controller");

const {
  getAllUser,
  storeUser,
  getUserById,
  updateUser,
  destroyUser,
  login,
} = require("../controller/user.controller");

const { productValidator } = require("../validator/product.validator");
const { userValidator } = require("../validator/newUser.validator");
const { authenticationMiddleware } = require("../middleware/auth.middleware");
const { loginValidator } = require("../validator/login.validator");

router.post(
  "/products",
  authenticationMiddleware,
  productValidator,
  storeProduct
);
router.get("/products", authenticationMiddleware, getAllProducts);
router.get("/products/:id", authenticationMiddleware, getProductById);
router.put("/products/:id", authenticationMiddleware, updateProduct);
router.delete("/products/:id", authenticationMiddleware, destroyProduct);

router.post("/users/login", loginValidator, login);
router.post("/users", authenticationMiddleware, userValidator, storeUser);
router.get("/users", authenticationMiddleware, getAllUser);
router.get("/users/:id", authenticationMiddleware, getUserById);
router.put("/users/:id", authenticationMiddleware, updateUser);
router.delete("/users/:id", authenticationMiddleware, destroyUser);

module.exports = router;
