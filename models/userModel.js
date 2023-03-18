const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

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

// userSchema.pre("save", async function EncryptPasswordBeforeSaving() {
//   if (this.isNew) {
//     console.log("crypting");
//     this.password = await bcrypt.hash(this.password, 10);
//   }
// });

userSchema.post("save", handleMongooseError);

module.exports = {
  User,
};
