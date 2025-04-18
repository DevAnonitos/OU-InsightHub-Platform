import express from "express";
import { authorize } from "@/middlewares/auth.middleware";
import { getAllComments } from "@/controllers/comment.controller";

const router = express.Router();

router.get("/", getAllComments);

export default router;