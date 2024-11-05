/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EAC8CA',
        secondary: 'CCDAD1'
      },
      fontFamily: {
        robo: ['Roboto', 'sans-serif'],
        snow: ['Rubik Wet Paint']
      }
    },
  },
  plugins: [],
}

