import otpVerificationController from "../controllers/otpverfication.js";
import { app, corop } from "../middlewares/middleconfig.js";
import express from "express"
const otpverify=express.Router();



otpverify.post("/otpverify",corop,otpVerificationController);


export default otpverify