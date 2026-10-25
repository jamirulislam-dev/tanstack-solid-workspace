import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "solid",
  outdir: "styled-system",
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            50: { value: '#eef2ff' },
            100: { value: '#e0e7ff' },
            500: { value: '#6366f1' },
            600: { value: '#4f46e5' },
            700: { value: '#4338ca' },
            900: { value: '#312e81' },
          },
        },
      },
    },
  },
});
