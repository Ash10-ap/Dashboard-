/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.js",
  "./src/**/*.jsx",
  "./src/**/*.ts",
  "./src/**/*.tsx",
];
export const theme = {
  extend: {
    colors: {
      white: "white",
      none: "none",
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },
    borderWidth: {
      1: "1px",
    },
    gridTemplateRows: {
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
    },
  },
};
export const plugins = [];

