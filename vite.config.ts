import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: 3000 },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "EmprendeconmigoUI",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "@hookform/resolvers",
        "class-variance-authority",
        "react",
        "react-dom",
        "react-hook-form",
        "tailwind-merge",
        "yup",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@hookform/resolvers": "@hookform/resolvers",
          "class-variance-authority": "cva",
          react: "React",
          "react-dom": "ReactDOM",
          "react-hook-form": "ReactHookForm",
          "tailwind-merge": "twMerge",
          yup: "Yup",
        },
      },
    },
  },
});
