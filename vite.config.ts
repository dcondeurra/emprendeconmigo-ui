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
        "axios",
        "class-variance-authority",
        "clsx",
        "lucide-react",
        "react",
        "react-dom",
        "react-hook-form",
        "react-intl",
        "react-router-dom",
        "tailwind-merge",
        "tailwindcss-animate",
        "yup",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "@hookform/resolvers": "@hookform/resolvers",
          axios: "Axios",
          "class-variance-authority": "cva",
          clsx: "clsx",
          "lucide-react": "LucideReact",
          react: "React",
          "react-dom": "ReactDOM",
          "react-hook-form": "ReactHookForm",
          "react-intl": "react-intl",
          "react-router-dom": "ReactRouterDom",
          "tailwind-merge": "twMerge",
          "tailwindcss-animate": "tailwindcssAnimate",
          yup: "Yup",
        },
      },
    },
  },
});
