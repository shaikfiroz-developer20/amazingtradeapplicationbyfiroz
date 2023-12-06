// controllers/otpVerificationController.js
import User from "../models/users.js";

const otpVerificationController = async (req, res) => {
  const { userId, otp } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the submitted OTP is correct
    const isOtpValid = otp === user.otp;

    if (!isOtpValid) {
      // Incorrect OTP, delete the user
      await User.findByIdAndDelete(userId);
      return res.status(400).json({ message: 'Incorrect OTP. User deleted.' });
    }

    // Correct OTP, mark the user as verified or update their status
    user.isVerified = true; // Update this based on your application's logic
    await user.save();

    res.status(200).json({ message: 'OTP verification successful. User verified.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default otpVerificationController;
