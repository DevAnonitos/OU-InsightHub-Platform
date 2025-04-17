import express, { Router } from "express";

import authRoutes from "./auth.route";
import userRoutes from "./user.route";
import commentRoutes from "./comment.route";
import notificationRoutes from "./notification.route";

const routes: Router = express.Router();

// using connected Api Routes
routes.use("/auths", authRoutes);
routes.use("/users", userRoutes);
routes.use("/comments", commentRoutes);
routes.use("/notifications", notificationRoutes);

export default routes;
