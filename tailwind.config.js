/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "rgb(19,93,93)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Force the light theme
  },
};
