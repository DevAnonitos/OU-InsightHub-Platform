import express, { Router } from "express";

import authRoutes from "./auth.route";

const routes: Router = express.Router();

// using Routes
routes.use("/auth", authRoutes);

export default routes;
