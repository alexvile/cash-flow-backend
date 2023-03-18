const { User } = require("../models/userModel");
const { customError } = require("../helpers");
const bcrypt = require("bcrypt");

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

const controllers = {
  registerController,
};

module.exports = { controllers };
