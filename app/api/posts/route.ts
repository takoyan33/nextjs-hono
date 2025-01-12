import { Hono } from "hono";
import { handle } from "hono/vercel";
// import json from "../../../public/json/posts_all.json";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const todoList = [
  { id: "1", title: "Learning Hono", completed: false },
  { id: "2", title: "Watch the movie", completed: true },
  { id: "3", title: "Buy milk", completed: false },
];

app.get("/posts", (c) => {
  return c.json(todoList);
});

export const GET = handle(app);
