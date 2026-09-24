import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { target: "esnext", outDir: "build" },
  server: { port: 3000, open: false },
});
