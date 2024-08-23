/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'overview': "url('https://luxurycasino.app/wp-content/uploads/2022/03/hero-bg.jpg')",
        'howToPlay':"url('https://www.myfortune11.com/assets/infobg.jpeg')",
        'future11':"url('https://img.freepik.com/free-vector/abstract-background-with-monochrome-low-poly-design_1048-14453.jpg')"
      },
      // colors:{
      //   overviewColor:"#000000d1",
      //   howToPlayColor:"#0000004a"
      // },
      fontSize: {
        'h1-heading': 'calc(1.375rem + 1.5vw)',
      },
  }
,
  },
  plugins: [],
};
