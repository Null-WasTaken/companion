/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor : {
        'main' : "#FBFBFB"
      },

      height : {
        "100vh" : "100vh"
      },

      width : {
        "10%" : "2.5rem",
        "25%" : "4.5rem",
        "50%" : "7.5rem",
        "75%" : "10.5rem",
        "100%" : "12.5rem"
      },
    },
  },
  plugins: [],
}