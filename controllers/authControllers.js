const { User } = require("../models/userModel");
const { customError } = require("../helpers");

const registerController = async (req, res) => {
  const { email } = req.body;
  if (await User.findOne({ email })) {
    throw customError(409, "This email is already in use");
  }
  const user = new User(req.body);
  await user.save();
  res.status(201).json({ message: "User created successfull", data: { user } });
};

const controllers = {
  registerController,
};

module.exports = { controllers };
