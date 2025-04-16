import express from "express";
import { getAllNotifications,deleteNotificationById } from "../../controllers/notification.controller";

const router = express.Router();

router.get("/", getAllNotifications);
router.delete("/:id", deleteNotificationById);

export default router;