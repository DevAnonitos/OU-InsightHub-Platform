// __mocks__/app.ts
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello" }); // mock response
});

app.get("/test", (req, res) => {
  res.status(404).json({ error: "Not found" }); // hoặc bạn muốn 400 thì sửa lại
});

app.post("/", (req, res) => {
  res.status(405).json({ error: "Method not allowed" });
});

export default app;
