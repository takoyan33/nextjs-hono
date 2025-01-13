import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/posts/new", (c) => {
  if (post) {
    return c.json(post);
  } else {
    return c.json({ message: "Post not found" }, 404); // Return a 404 if not found
  }
});

export const GET = handle(app);
