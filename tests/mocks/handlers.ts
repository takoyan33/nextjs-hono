import { HttpResponse, http } from "msw";

export const handlers = [
	http.get("*/posts/", () => {
		console.log("Mocked posts/");
		return HttpResponse.json([
			{
				id: 1,
				title: "Mocked Post 1",
				body: "This is a mocked post body.",
				userId: 1,
			},
			{
				id: 2,
				title: "Mocked Post 2",
				body: "This is another mocked post body.",
				userId: 2,
			},
		]);
	}),

	http.get("*/products/", () => {
		console.log("Mocked products/");
		return HttpResponse.json([
			{
				id: 1,
				title: "Mocked Product 1",
				price: 100,
				userId: 1,
			},
			{
				id: 2,
				title: "Mocked Product 2",
				price: 200,
				userId: 2,
			},
		]);
	}),
];
