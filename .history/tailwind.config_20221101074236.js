/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'xs': '375px'
      },
    },
  },
  plugins: [],
}
