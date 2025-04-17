import express from "express";
import { 
    getAllNotifications, 
    markAsRead, 
    markAllAsRead, 
    getUnreadNotifications,
    deleteAllNotifications, 
    deleteNotificationById, 
} from "../../controllers/notification.controller";

const router = express.Router();

router.get("/", getAllNotifications);
router.delete("/", deleteAllNotifications);
router.delete("/:id", deleteNotificationById);

router.patch("/:id/read", markAsRead);
router.patch("/read-all", markAllAsRead);
router.get("/unread", getUnreadNotifications);

export default router;