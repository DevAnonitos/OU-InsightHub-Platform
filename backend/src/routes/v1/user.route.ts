import express from "express";
import { authorize } from "../../middlewares/auth.middleware";
import { 
  getAllUsers, 
  getCurrentUser, 
  getUserById, 
  updateUserById, 
  deleteUserById, 
  uploadAvatar,
} from "../../controllers/user.controller";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/me", getCurrentUser);
router.post("/me/avatar", uploadAvatar);
router.get("/:id", getUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;
