/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "dark-bg": "#202632",
      'gray-bg': '#343a49',
      'green-bg': '#53ffa9',
      'whitish-text': "#cde4e9"
    },
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {
      boxShadow:{
        'dice': '0 0 15px #53ffa9'
      }
    },
  },
  plugins: [],
}
