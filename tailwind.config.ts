/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";

import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";


const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "primary": "#F4F4F5",
        "secondary": "#E8E8EA",
        "dark-primary": "#181A2A",
        "dark-secondary": "#242535"
      },
      colors: {
        "secondary": "#52535F",
        "blue": "#4B6BFB",
        "white-footer": "#F6F6F7",
        "black-footer": "#141624"
      },
      borderColor: {
        "secondary": "#E8E8EA",
        "dark-secondary": "#52525B",
        "dark-primary": "#242535"
      },
      textColor: {
        "primary": "#3B3C4A",
        "dark-primary": "#BABABF",
        "head-dark": "#181A2A",
        "head-primary": "#FFFFFF",
        "table-head": "#B5B7C0"
      }
    },
  },
  plugins: [
    addVariablesForColors
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
