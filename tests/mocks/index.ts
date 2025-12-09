export async function initMocks() {
  if (typeof window === "undefined") {
  } else {
    const { worker } = await import("./browser");
    await worker.start({
      onUnhandledRequest: "bypass",
    });
  }
}
