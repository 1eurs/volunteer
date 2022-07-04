import userModel from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { firstname, lastname, email, password, confirmPassword } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exist" });
    if (password !== confirmPassword) return res.status(400).json({ message: "Password don't match" });
    const hasedPassword = await bcrypt.hash(password, 12);
    const userinfo = await userModel.create({
      email: email,
      password: hasedPassword,
      name: `${firstname} ${lastname}`,
    });
    const token = jwt.sign({ email: userinfo.email, id: userinfo._id }, "user", {
      expiresIn: "24h",
    });
    console.log(userinfo);
    res.status(200).json({ userinfo, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User dose not exist" });
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(400), json({ message: "wrong password" });
    const token = jwt.sign({ email: user.email, id: user._id }, "user", { expiresIn: "72h" });
    res.status(200).json({ userinfo: user, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
