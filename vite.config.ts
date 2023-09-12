import { fileURLToPath, URL } from "node:url";

import { ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  return {
    base: mode === "development" ? "" : "/dice/",
    build: {
      outDir: "./docs",
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
};
