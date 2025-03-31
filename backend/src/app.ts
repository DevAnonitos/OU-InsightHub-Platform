import express, { 
  Express, 
  Request, 
  Response 
} from "express";
import routes from "./routes";
import corsConfig from "./configs/cors.config";
import { securityConfig } from "./configs/security.config";
import { errorMiddleware } from "./middlewares/error.middleware";

const app: Express = express();

app.use(corsConfig);
app.use(express.json());

// Config Api Routes Endpoint
app.use(routes);

// To Configs errorMiddlware
app.use(errorMiddleware);
  
export default app;