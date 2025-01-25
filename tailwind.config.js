/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
screens:{
  sm:	"640px"	,
  md:	"768px"	,
  lg:	"1024px"	,
  xl: "1280px",		
 
},
      colors:{
      bodyColor:"#212428",
      lightText:"#c4cfde",
      boxBg:"lineargradient(145deg, #1e2024,#23272b)",
      designColor:"#ff0145",
      },
      boxShadow:{
      shadowone:"10px 10px 19px #1c1e22,-10px,-10px 19px #262a2e"
      }
    },
 
    
    
  },
  plugins: [],
}
