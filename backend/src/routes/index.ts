import express, { Router } from "express";

import v1Routes from "./v1";
import v2Routes from "./v2";
import v3Routes from "./v3";
import v4Routes from "./v4";

const routes: Router = express.Router();

// Using connected Api version Routes
routes.use("/api/v1", v1Routes);
routes.use("/api/v2", v2Routes);
routes.use("/api/v3", v3Routes);
routes.use("/api/v4", v4Routes);

export default routes;
