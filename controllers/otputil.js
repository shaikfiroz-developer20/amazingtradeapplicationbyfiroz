// utils/otpUtils.js
import nodemailer from "nodemailer";

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
};

const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'firozshaik.ce.10@gmail.com', // Replace with your Gmail email
      pass: 'ldmx enxm pwld civg', // Replace with your Gmail password
    },
  });

  const mailOptions = {
    from: 'firozshaik.ce.10@gmail.com', // Replace with your Gmail email
    to: email,
    subject: `Hi! ${email} Greetings from TradeY `,
    text: `Your OTP for signup to TradeYis: ${otp}.
      Have a Good day ahead.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return true;
  } catch (error) {
    console.error(`Error sending email: ${error}`);
    return false;
  }
};

export { generateOTP, sendOTP };
