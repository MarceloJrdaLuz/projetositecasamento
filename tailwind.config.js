const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        'casamento': {
          100: '#EAE4E9',
          200: '#FFF1E6',
          300: '#ecbbcd',
          400: '#FAD2E1',
          500: '#E2ECE9',
          600: '#BEE1E6',
          700: '#F0EFEB',
          800: '#DFE7FD',
          900: '#f6f6f0',
        },
        'dourado': {
          100: '#9b6c14'
        },
        'botao': {
          100: '#ecbbcd84'
        }
      },
      fontFamily:{
        'Beau Rivage': ['Beau Rivage'],
        'Ultra': ['Ultra']
      },
      screens: {
        'slim': '400px',
      },
    },
  },
  plugins: [],
}
