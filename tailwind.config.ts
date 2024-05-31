import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "appearing-down": "appearing 300ms linear",
        dropdown: "dropdown 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        colorSkeleton: "colorSkeleton 2s infinite linear",
      },
      backgroundColor: {
        "blue-team": "#0E1829",
        "red-team": "#340a0a",
      },
      backgroundImage: {
        "linear-skeleton":
          "linear-gradient(90deg, hsl(0, 0%, 20%) 0%, hsl(0, 0%, 48%) 50%, hsl(0, 0%, 20%) 100%)",
      },
      backgroundSize: { "skeleton-size": "300% 100%" },
      colors: {
        "match-card-green-dark": "#013900",
        "match-card-green-light": "#036F00",
        "match-card-red-dark": "#340000",
        "match-card-red-light": "#8D0101",
        "match-details-blue-dark": "#011e5a",
        "match-details-blue-light": "#113066",
        "match-details-red-dark": "#4A0505",
        "match-details-red-light": "#580D0D",
        "costum-blue-950": "#000814",
        "costum-blue-800": "#001d3d",
        "costum-blue-700": "#003566",
        "costum-yellow-500": "#ffc300",
        "costum-yellow-400": "#ffd60a",
        "costum-yellow-300": "#c6aa6f",
      },
      dropShadow: {
        costum1: "8px 10px 6px #000",
        costum2: "2px 12px 6px #000",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        main: ["var(--font-main)"],
      },
      gap: {
        "costum-gap-1": "1px",
        "costum-gap-2": "2px",
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
        colorSkeleton: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      maxWidth: {
        "costum-mw-1": "90px",
      },
      padding: {
        "costum-icon-padding": "2px 6px",
      },
      screens: {
        xs: "400",
      },
      textColor: {
        "legend-collor": "#C67322",
        "ultrarare-collor": "#A45CD0",
        "rare-color": "#6CABF1",
        "common-color": "#2FB435",
      },
    },
  },
  plugins: [],
};
export default config;
