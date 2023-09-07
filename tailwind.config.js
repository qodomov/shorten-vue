/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        'gray-violet': 'hsl(257, 7%, 63%)',
        'dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-blue': 'hsl(260, 8%, 14%)',
        cyan: 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)'
      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif']
      },
      backgroundImage:{
        "shorten-desktop":"url('./src/assets/images/bg-shorten-desktop.svg')",
        "shorten-mobile":"url('./src/assets/images/bg-shorten-mobile.svg')",
        "boost-desktop":"url('./src/assets/images/bg-boost-desktop.svg')",
        "boost-mobile":"url('./src/assets/images/bg-boost-mobile.svg')",

      }
    }
  },
  plugins: []
}
