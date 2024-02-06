import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        main: ["var(--font-main)"],
      },
      dropShadow: {
        costum1: "8px 10px 6px #000",
        costum2: "2px 12px 6px #000",
      },
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
      textColor: {
        "legend-collor": "#C67322",
        "ultrarare-collor": "#A45CD0",
        "rare-color": "#6CABF1",
        "common-color": "#2FB435",
      },
      keyframes: {
        appearing: {
          "0%": { transform: "translateY(-60px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        dropdown: {
          "0%": { top: "10%", opacity: "0" },
          "100%": { top: "90%", opacity: "1" },
        },
      },
      animation: {
        "appearing-down": "appearing 300ms linear",
        dropdown: "dropdown 250ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
