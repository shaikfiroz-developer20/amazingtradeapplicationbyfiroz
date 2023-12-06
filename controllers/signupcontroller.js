// controllers/signupController.js
import { app } from "../middlewares/middleconfig.js";
import User from "../models/users.js";
import { generateOTP, sendOTP } from "../controllers/otputil.js";
import bcrypt from "bcrypt";

const signupcontroller = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'Signup successful.'});
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default signupcontroller;
