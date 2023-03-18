const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../models/userModel");
const { customError } = require("../helpers");

const registerController = async (req, res) => {
  const { email, password } = req.body;
  if (await User.findOne({ email })) {
    throw customError(409, "This email is already in use");
  }
  const cryptedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: cryptedPassword });
  await user.save();
  res.status(201).json({ message: "User created successfull", data: { user } });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw customError(401, "User with this email not found");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw customError(401, "Wrong password");
  }

  const userToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "365d",
  });

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { token: userToken },
    { new: true }
  );

  return res.status(200).json(updatedUser);
};

const logoutController = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  return res.status(204).json();
};

const controllers = {
  registerController,
  loginController,
  logoutController,
};

module.exports = { controllers };
