import express from "express";

import { getAllComments } from "@/controllers/comment.controller";

const router = express.Router();

router.get("/", getAllComments);

export default router;