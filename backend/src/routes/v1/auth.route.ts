import express from "express";
import { authorize } from "@/middlewares/auth.middleware";
import { 
    signIn, 
    signUp, 
    signOut, 
    google, 
    refreshToken, 
    resetPassword, 
    forgotPassword 
} from "@/controllers/auth.controller";

const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/sign-out", signOut);

router.post("/google", google);
router.get("/google/callback")

router.post("/refresh-token", refreshToken);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);


export default router;