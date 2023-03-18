const mongoose = require("mongoose");
const { handleMongooseError } = require("../helpers");

const userSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("User", userSchema);

// userSchema.post("save", handleMongooseError);

module.exports = {
  User,
};
