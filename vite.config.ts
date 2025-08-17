/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "LumosUI",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@headlessui/react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@headlessui/react": "HeadlessUI",
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      outDir: "dist/types",
    }),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      reporter: ["text", "lcov"],
      all: true,
      include: ["src/components/**/*.tsx"],
      exclude: ["node_modules", "dist", "**/*.test.*", "**/*.stories.*"],
    },
  },
});
