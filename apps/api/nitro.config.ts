import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  compatibilityDate: "2026-10-25",
  typescript: {
    strict: true,
    generateTsConfig: true,
  },
  noPublicDir: true,
  serveStatic: false,
});
