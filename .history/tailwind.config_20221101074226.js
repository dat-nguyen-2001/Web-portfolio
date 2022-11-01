/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'xxs': '370px'
      },
    },
  },
  plugins: [],
}
