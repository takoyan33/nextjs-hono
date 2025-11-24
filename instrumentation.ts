export async function register() {
	if (process.env.NEXT_RUNTIME === "nodejs") {
		if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
			const { server } = await import("./tests/mocks/server");
			server.listen({
				onUnhandledRequest: "bypass",
			});
		}
	}
}
