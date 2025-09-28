/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Regular:['Regular'],
        Interbold: ['SemiBold'],
      },
      colors: {
        darkregular: "#424153",
        darkbold: "#161723",
        orange: "#EE6F4B",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
