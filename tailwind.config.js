// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
       tighter: '-.05em',
      tight: '-.025em',
       normal: '0',
      booped: '.05em',
       wide: '.1em',
       wider: '.2em',
      widest: '.3em',
     },
    extend: {fontFamily: {
      sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      display: ["Playfair Display", ...defaultTheme.fontFamily.serif],
    },},
  },
  variants: {},
  plugins: [],
}