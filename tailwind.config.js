/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Red: "#560b18",
        Linen: "#F8F1ED",
        Bronze: "#AF7845",
        Gold: "#E8D29B",
        Beige: "#f2e5c6",
        Wine: "#3b010b",
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'dm-serif-display': ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}