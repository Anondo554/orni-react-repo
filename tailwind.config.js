/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        menuColor: "#767676",
        menuHcolor: "#262626",
        categoryBg: "#F5F5F3",
        borderColor: "#F0F0F0",
       
      },
      backgroundImage:{
        bannerBg: "url('./src/assets/bannerBg.png')"
      }
    },
  },
  plugins: [],
}

