import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "costum-mw-1": "90px",
      },
      gap: {
        "costum-gap-1": "1px",
        "costum-gap-2": "2px",
      },
      colors: {
        "match-card-green-dark": "#013900",
        "match-card-green-light": "#036F00",
        "match-card-red-dark": "#340000",
        "match-card-red-light": "#8D0101",
        "match-details-blue-dark": "#011e5a",
        "match-details-blue-light": "#113066",
        "match-details-red-dark": "#4A0505",
        "match-details-red-light": "#580D0D",
      },
      backgroundColor: {
        "blue-team": "#0E1829",
        "red-team": "#340a0a",
      },
      padding: {
        "costum-icon-padding": "2px 6px",
      },
      boxShadow: {
        "costum-box-shadow-1": "6px 7px 20px 1px rgba(0,0,0,1)",
      },
      textColor: {
        "legend-collor": "#C67322",
        "ultrarare-collor": "#7E15BF",
        "rare-color": "#6CABF1",
        "common-color": "#2FB435",
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
