import express from "express";
import { authorize } from "@/middlewares/auth.middleware";
import { 
    signIn, 
    signUp, 
    signOut, 
    refreshToken, 
    resetPassword, 
    forgotPassword, 
    googleLogin,
    googleCallback,
} from "@/controllers/auth.controller";

const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/sign-out", signOut);

router.get("/google", googleLogin);
router.get("/google/callback", googleCallback);

router.post("/refresh-token", refreshToken);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);


export default router;