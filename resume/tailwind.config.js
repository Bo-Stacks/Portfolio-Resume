/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#121212',
        primary: '#00FFC6',
        accent: '#7C4DFF',
        text: '#EAEAEA'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui','Poppins']
      },
      boxShadow: {
        soft: '0 4px 20px rgba(124, 77, 255, 0.15)'
      }
    },
  },
  plugins: [],
}

