import express, { 
  Express, 
  Request, 
  Response 
} from "express";
import routes from "./routes";
import corsConfig from "./configs/cors.config";

const app: Express = express();

app.use(corsConfig);
app.use(express.json());

app.use(routes);

app.get("/", async (req: Request, res: Response) => {
    try {
      res.json({ message: 'Hello' });
    } catch (error) {
      res.status(500).json({ error: 'Error App' });
    }
});
  

export default app;