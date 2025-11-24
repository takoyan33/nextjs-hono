import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { server } from "./tests/mocks/server";

// server-only のモック
vi.mock("server-only", () => ({}));

// MSWサーバーの設定
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
