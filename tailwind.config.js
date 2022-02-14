const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#444",
        gray: {
          ...colors.gray,
          500: "#c4c4c4"
        }
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
