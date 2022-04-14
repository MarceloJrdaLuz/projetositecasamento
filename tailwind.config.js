module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
          900: '#CDDAFD',
        }
      },
      fontFamily:{
        'Beau Rivage': ['Beau Rivage']
      }
    },
  },
  plugins: [],
}
