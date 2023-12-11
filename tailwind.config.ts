import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "costum-icon-padding": "2px 6px",
      },
      boxShadow: {
        "costum-box-shadow-1": "6px 7px 20px 1px rgba(0,0,0,1)",
      },
      keyframes: {
        appearing: {
          "0%": { transform: "translateY(-60px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        "appearing-down": "appearing 300ms linear",
      },
    },
  },
  plugins: [],
};
export default config;
