import express, { Router } from "express";

import authRoutes from "./auth.route";
import userRoutes from "./user.route";

const routes: Router = express.Router();

// using Routes
routes.use("/auths", authRoutes);
routes.use("/users", userRoutes);

export default routes;
