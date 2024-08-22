/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'overview': "url('https://luxurycasino.app/wp-content/uploads/2022/03/hero-bg.jpg')",
        'howToPlay':"url('https://www.myfortune11.com/assets/infobg.jpeg')",
      },
      colors:{
        overviewColor:"#000000d1",
        howToPlayColor:"#0000004a"
      }
  }
,
  },
  plugins: [],
};
