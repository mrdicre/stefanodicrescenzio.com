/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neon": "#CCFF00",
        "forest": "#163832",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif;'",
      },
    },
  },
  plugins: [],
}
