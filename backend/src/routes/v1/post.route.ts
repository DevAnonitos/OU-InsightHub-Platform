import express from "express";
import { 
  getAllPosts, 
  getPostById,
  updatePostById, 
  deletePostById,
} from "@/controllers/post.controller";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.patch("/:id", updatePostById);
router.patch("/:id", deletePostById);

export default router;