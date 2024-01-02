import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        green: "0 0 10rem #29c26f",
      },
    },
    colors: {
      primary: {
        400: "#EEF5FF",
        500: "#86B6F6",
        600: "#EEF5FF",
      },
      grayscale: {
        50: "#EEF5FF",
        100: "#efefef",
        200: "#86B6F6",
        950: "#16161b",
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
