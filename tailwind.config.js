/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      "2xsm": "10px",
      xsm: "12px",
      reg: "15px",
      lg: "18px",
      "2xl": "22px",
      "3xl": "25px",
      "4xl": "32px",
      "5xl": "40px",
      "6xl": "50px",
      "7xl": "70px",
    },
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'xl': '1280px',
    // }
  },

  plugins: [require('tailwind-scrollbar-hide')],
}
