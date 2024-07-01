/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '80vw': {'raw': '(max-width: 80vw)'},
      },
    },
  },
  variants: {},
  plugins: [],
}