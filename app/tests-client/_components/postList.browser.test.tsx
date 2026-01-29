import { afterAll, beforeAll, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { worker } from "../../../tests/mocks/browser";
import { PostList } from "./postList";

// モック開始
beforeAll(async () => {
  await worker.start();
});

// モック停止
afterAll(() => {
  worker.stop();
});

test("renders mocked posts", async () => {
  const { getByText } = await render(<PostList />);

  // Wait for the posts to be rendered
  await expect.element(getByText("Mocked Post 1")).toBeInTheDocument();
  await expect
    .element(getByText("This is a mocked post body."))
    .toBeInTheDocument();
});
