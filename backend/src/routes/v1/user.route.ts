import express from "express";
import { authorize } from "@/middlewares/auth.middleware";
import { 
  getAllUsers, 
  getCurrentUser, 
  getUserById, 
  updateUserById, 
  deleteUserById, 
  uploadAvatar,
  changePassword,
} from "@/controllers/user.controller";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/me", authorize, getCurrentUser);
router.post("/me/avatar", authorize, uploadAvatar);
router.post("/me/change-pasword", authorize, changePassword);

router.get("/:id", getUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
