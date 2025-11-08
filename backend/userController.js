import { userModel } from "./userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
    const { email, name, password } = req.body;

    console.log("Register API", email, name, password);

    const userExits = await userModel.findOne({ email });

    if (!userExits) {
      console.log("New user");

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
      });

      return res.status(200).json({
        message: "User Register Done",
        data: newUser,
      });
    }

    console.log("Already registered");
    res.status(201).json({ message: "User Already registered" });
 
};

const JWT_SECRET = "siuuu";

export const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPassword = await bcrypt.compare(password, user.password);

  if (!isPassword) {
    return res.status(401).json({ message: "Invalid Pass or Mail", data: "" });
  }

  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);

  res.status(200).json({
    message: "Login Success",
    token,
    data: { email: user.email, name: user.name, role: user.role },
  });
};

export const allUsers = async (req, res) => {
  const totalUser = await userModel.find();

  if (!totalUser) {
    return res.status(404).json({ message: "Users not foun" });
  }

  res.status(200).json({ message: "all users", data: totalUser });
};
