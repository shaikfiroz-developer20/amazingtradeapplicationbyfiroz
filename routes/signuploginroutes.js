import express from "express";
import { corop } from "../middlewares/middleconfig.js";
import signupcontroller from "../controllers/signupcontroller.js";
import logincontroller from "../controllers/logincontroller.js";
const signuproute=express.Router();


signuproute.post("/signup",corop,signupcontroller)
signuproute.post("/login",corop,logincontroller)

export {signuproute};