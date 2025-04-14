import express, { 
  Express, 
  Request, 
  Response 
} from "express";
import routes from "./routes";
import { securityConfig } from "./configs/security.config";
import { errorMiddleware } from "./middlewares/error.middleware";

const app: Express = express();

// Config Security App
securityConfig(app);

app.get('/', (req, res) => {
  res.json({ message: 'hello' });
});
app.use(routes);
// To Configs errorMiddlware
app.use(errorMiddleware);
  
export default app;