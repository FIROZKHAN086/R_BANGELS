/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Atkinson: ["Atkinson Hyperlegible Mono", "serif"],
        kanti:['Kanit','Poppins' ,"serif"],
        inter: ["Inter", "sans-serif" ],
        rail:["Raleway", "serif"]

      },
    },
  },
  plugins: [],
}