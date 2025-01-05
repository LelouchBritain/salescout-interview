// Create an API using Node.js and Express:
// 1. POST /user - adds a user.
// 2. GET /users - returns all users.

// Use Express library

import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

const users: { name: string }[] = [];

// Здесь какая то проблема с типами, поэтому указал вывод как any.
// Пробовал указать вывод как Response, не работает
// Точно не знаю в чем дело, возможно несовместимость версий модуля express
// с его типами @types/express или может я что-то не понимаю.

app.post("/user", (req: Request, res: Response): any => {
  const { name } = req.body;

  if (!name) {
    console.log("Name is missing");
    return res.status(400).json({ error: "Name is required" });
  }
  users.push({ name });
  res.status(201).json({ message: "User is added", user: { name } });
});

app.get("/users", (req: Request, res: Response) => {
  res.status(200).json(users);
});

if (process.env.NODE_ENV !== "test") {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
