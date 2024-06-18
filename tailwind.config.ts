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
        "custom-blue-950": "#000814",
        "custom-blue-800": "#001d3d",
        "custom-blue-700": "#003566",
        "custom-yellow-500": "#ffc300",
        "custom-yellow-400": "#ffd60a",
        "custom-yellow-300": "#c6aa6f",
        "custom-pallete-cyan-700": "#00ADB5",
        "custom-pallete-cyan-600": "#71C9CE",
        "custom-pallete-cyan-500": "#A6E3E9",
        "custom-pallete-cyan-400": "#CBF1F5",
        "custom-pallete-cyan-300": "#E3FDFD",
        "custom-pallete-grey": "#393E46",
        "custom-pallete-dark-blue": "#222831",
        "custom-pallete-white-300": "#EEEEEE",
      },
      dropShadow: {
        custom1: "8px 10px 6px #000",
        custom2: "2px 12px 6px #000",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        main: ["var(--font-main)"],
      },
      fontSize: {
        "2xs": "10px",
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
        "custom-mw-1": "90px",
      },
      padding: {
        "custom-icon-padding": "2px 6px",
      },
      screens: {
        xs: "400px",
      },
      textColor: {
        "legend-collor": "#C67322",
        "ultrarare-collor": "#A45CD0",
        "rare-color": "#6CABF1",
        "common-color": "#2FB435",
      },
      textShadow: {
        "custom-shadow": "4px 4px 6px rgba(0,0,0)",
        "custom-shadow-small": "3px 2px 4px rgba(0,0,0)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
export default config;
