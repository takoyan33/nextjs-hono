import "@testing-library/jest-dom/vitest";
import { render,screen } from "@testing-library/react";
import React from "react";
import { vi } from "vitest"
import { afterEach, beforeEach, expect, test } from "vitest";
import { ProductList } from "./ProductList";

const mockProducts = [
  { id: 1, name: "Mocked Product 1", price: 100 },
  { id: 2, name: "Mocked Product 2", price: 200 },
]

beforeEach(() => {
  vi.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    json: async () => mockProducts,
  } as Response)
})

afterEach(() => {
  vi.restoreAllMocks()
})

test("renders mocked products", async () => {
	const ui = await ProductList()
  render(ui)

  expect(await screen.findByText("100")).toBeInTheDocument();
});
