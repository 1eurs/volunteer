import mongoose from "mongoose";

const userSchema = {
  name: String,
  email: String,
  password: String,
};

const userModel = mongoose.model("userModel", userSchema);

export default userModel;
