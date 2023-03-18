const express = require("express");
const router = express();
const { controllers } = require("../controllers/authControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

const { asyncWrapper } = require("../helpers");
// sign up
router.post("/register", asyncWrapper(controllers.registerController));
// sign in
router.post("/login", asyncWrapper(controllers.loginController));
// logout
router.get(
  "/logout",
  authMiddleware,
  asyncWrapper(controllers.logoutController)
);
module.exports = router;
