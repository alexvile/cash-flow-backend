const express = require("express");
const router = express();
const { controllers } = require("../controllers/authControllers");

const { asyncWrapper } = require("../helpers");
// sign up
router.post("/register", asyncWrapper(controllers.registerController));
// sign in
router.post("/login", asyncWrapper(controllers.loginController));

module.exports = router;
