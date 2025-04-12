import express from "express";
import { authorize } from "../../middlewares/auth.middleware";
import { getAllUsers } from "../../controllers/user.controller";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
