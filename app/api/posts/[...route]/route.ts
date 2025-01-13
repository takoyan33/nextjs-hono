import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const todoList = [
  { id: "1", title: "Learning Hono", completed: false },
  { id: "2", title: "Watch the movie", completed: true },
  { id: "3", title: "Buy milk", completed: false },
];

app.get("/posts/:id", (c) => {
  const postId = c.req.param("id");
  // console.log(postId);
  // return c.json({
  //   message: `Hello, ${postId}!`,
  // });
  // console.log(c);
  // const id = c.req.param("id");
  // console.log(id);
  const post = todoList.find((todo) => todo.id == postId);
  // console.log(post);
  if (post) {
    return c.json(post);
  } else {
    return c.json({ message: "Post not found" }, 404); // Return a 404 if not found
  }
});

export const GET = handle(app);
