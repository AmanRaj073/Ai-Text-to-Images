import express from "express";
import { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay } from "../controller/userController.js";
import userAuth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/payrazor", userAuth, paymentRazorpay);
userRouter.post("/verify-razor", userAuth, verifyRazorpay);

export default userRouter;
