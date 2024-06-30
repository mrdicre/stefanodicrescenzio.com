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
        inter: "'Inter', sans-serif;'",
      },
      dropShadow: {
        'text': '0 0px 2px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}
