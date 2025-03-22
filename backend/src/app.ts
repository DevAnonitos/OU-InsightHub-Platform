import express, { Express, Request, Response } from "express";
import routes from "./routes";

const app: Express = express();

app.use(routes);

app.get("/", async (req: Request, res: Response) => {
    try {
      res.json({ message: 'Hello' });
    } catch (error) {
      console.error('Error with MongoDB connection:', error);
      res.status(500).json({ error: 'Error APpp' });
    }
  });
  

export default app;