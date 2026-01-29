import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "node",
          environment: "jsdom",
          include: ["**/*.node.test.tsx"],
          globals: true,
        },
      },
      {
        extends: true,
        test: {
          globals: true,
          name: "browser",
          environment: "jsdom",
          include: ["**/*.browser.test.tsx"],
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
