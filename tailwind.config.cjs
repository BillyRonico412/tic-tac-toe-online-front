/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        "background-1": "#192A32",
        "background-2": "#394A52",
        "primary": "#31C4BE",
        "secondary": "#F2B237",
        "tertiary": "#A8BEC9"
      }
    },
  },
  plugins: [],
}
