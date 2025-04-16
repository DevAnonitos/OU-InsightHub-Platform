import express from "express";
import { signIn, signUp, signOut, google, refreshToken } from "../../controllers/auth.controller";

const router = express.Router();

router.post("/sign-in", signIn);
router.post("/sign-up", signUp);
router.post("/sign-out", signOut);
router.post("/google", google);
router.get("/refresh-token", refreshToken);

export default router;