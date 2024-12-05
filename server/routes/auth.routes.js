const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  authController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  authController.loginUser
);

router.get("/profile", authMiddleware, authController.getUserProfile);
router.get("/logout", authMiddleware, authController.logoutUser);

module.exports = router;
