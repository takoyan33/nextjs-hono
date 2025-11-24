import { prettyDOM } from "@testing-library/dom";
import React from "react";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import HelloWorld from "./HelloWorld";

test("renders name", async () => {
	const { getByText } = await render(<HelloWorld name="Vitest" />);
	await expect.element(getByText("Hello Vitest!")).toBeInTheDocument();
});

test("スナップショット", async () => {
	const { baseElement } = await render(<HelloWorld name="Vitest" />);

	// ✅ DOM を整形して snapshot
	const html = prettyDOM(baseElement, undefined, {
		highlight: false,
	});

	expect(html).toMatchSnapshot();
	//expect(html).toBeInViewport();
});
