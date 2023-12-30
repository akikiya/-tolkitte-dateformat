import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "formatDate",
      fileName: "formatDate",
    },
  },
});
