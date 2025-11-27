import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { expect, test } from "vitest";
import { ProductListPresentation } from "./ProductList";

const mockProducts = [
  {
    id: 1,
    title: "Mocked Product 1",
    price: 100,
  },
  {
    id: 2,
    title: "Mocked Product 2",
    price: 200,
  },
];

test("renders mocked products", () => {
  render(<ProductListPresentation products={mockProducts} />);

  expect(screen.getByText("100")).toBeInTheDocument();
});
