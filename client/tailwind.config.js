/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // paths to scan
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // optional
  },
};
