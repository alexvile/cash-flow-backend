const express = require("express");
const router = express();
const { controllers } = require("../controllers/authControllers");

const { asyncWrapper } = require("../helpers");

router.post("/register", asyncWrapper(controllers.registerController));

module.exports = router;
