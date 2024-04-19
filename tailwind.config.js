/** @type {import('tailwindcss').Config} */
import themes from "daisyui/src/theming/themes";

export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          primary: "#BCCEFB",
          secondary: "#2C2C2C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
